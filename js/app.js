import { subject1Data } from './data/subject1.js?v=4012';
import { subject2Data } from './data/subject2.js?v=4012';
import { subject3Data } from './data/subject3.js?v=4012';
import { subject4Data } from './data/subject4.js?v=4012';
import { circuitSVGs } from './circuitSVGs.js?v=4012';
import { detailedFormulas, subjectSummaries } from './summaryData.js?v=4012';

const CURRENT_DATASET_VERSION = 'v4012';

// Global Datasets with LocalStorage Custom Override & Version Safety
function loadSubjectData() {
  const savedVer = localStorage.getItem('exam_dataset_version');
  if (savedVer !== CURRENT_DATASET_VERSION) {
    localStorage.removeItem('custom_exam_dataset');
    localStorage.setItem('exam_dataset_version', CURRENT_DATASET_VERSION);
  }

  const customData = localStorage.getItem('custom_exam_dataset');
  if (customData) {
    try {
      return JSON.parse(customData);
    } catch (e) {
      console.error("Failed to parse custom dataset, using default.", e);
    }
  }
  return {
    1: { name: '1과목: 전기자기학', data: subject1Data },
    2: { name: '2과목: 디지털응용회로', data: subject2Data },
    3: { name: '3과목: 전자회로설계', data: subject3Data },
    4: { name: '4과목: 전자회로검증', data: subject4Data }
  };
}

let allSubjects = loadSubjectData();

function updateDynamicCounts() {
  let totalCount = 0;
  for (let sId = 1; sId <= 4; sId++) {
    if (allSubjects[sId] && allSubjects[sId].data) {
      const count = allSubjects[sId].data.length;
      totalCount += count;
      const el = document.getElementById(`sub-count-${sId}`);
      if (el) {
        el.textContent = `${count.toLocaleString()}문제`;
      }
    }
  }
  const badgeEl = document.getElementById('total-question-badge');
  if (badgeEl) {
    badgeEl.textContent = totalCount.toLocaleString();
  }
}

// App State
let currentSubjectId = 1;
let currentMode = 'practice'; // 'practice' | 'mini10' | 'exam' | 'wrong' | 'bookmark'
let currentQuestionIndex = 0;
let userAnswers = {};
let searchQuery = '';
let miniQuizQuestions = [];

// Real Exam State
let realExamQuestions = []; // 80 questions (20 per subject)
let examSubmitted = false;
let timerInterval = null;
let timeLeftSeconds = 80 * 60; // 80 minutes

let wrongQuestions = JSON.parse(localStorage.getItem('wrong_questions') || '[]');
let bookmarkedQuestions = JSON.parse(localStorage.getItem('bookmarked_questions') || '[]');

// DOM Elements
const searchInput = document.getElementById('search-input');
const modeTabs = document.querySelectorAll('#mode-tabs .tab-btn');
const subjectCards = document.querySelectorAll('.subject-card');
const subjectTag = document.getElementById('subject-tag');
const questionText = document.getElementById('question-text');
const diagramContainer = document.getElementById('diagram-container');
const optionsList = document.getElementById('options-list');
const explanationBox = document.getElementById('explanation-box');
const explanationContent = document.getElementById('explanation-content');
const currentQuestionNum = document.getElementById('current-question-num');
const progressFill = document.getElementById('progress-fill');
const scoreInfo = document.getElementById('score-info');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const bookmarkBtn = document.getElementById('bookmark-btn');

const practiceBar = document.getElementById('practice-bar');
const shuffleQuestionsBtn = document.getElementById('shuffle-questions-btn');

const examBar = document.getElementById('exam-bar');
const examTimer = document.getElementById('exam-timer');
const submitExamBtn = document.getElementById('submit-exam-btn');

const miniQuizBar = document.getElementById('mini-quiz-bar');
const newMiniQuizBtn = document.getElementById('new-mini-quiz-btn');
const headerMiniQuizBtn = document.getElementById('header-mini-quiz-btn');

const wrongResetBar = document.getElementById('wrong-reset-bar');
const resetWrongBtn = document.getElementById('reset-wrong-btn');

// Modals
const omrBtn = document.getElementById('omr-btn');
const omrModal = document.getElementById('omr-modal');
const closeOmr = document.getElementById('close-omr');
const omrGridContainer = document.getElementById('omr-grid-container');

const examResultModal = document.getElementById('exam-result-modal');
const closeExamResult = document.getElementById('close-exam-result');
const examReportCard = document.getElementById('exam-report-card');
const reviewExamBtn = document.getElementById('review-exam-btn');

const formulaBtn = document.getElementById('formula-btn');
const formulaModal = document.getElementById('formula-modal');
const closeFormula = document.getElementById('close-formula');
const formulaListContainer = document.getElementById('formula-list-container');

const summaryBtn = document.getElementById('summary-btn');
const summaryModal = document.getElementById('summary-modal');
const closeSummary = document.getElementById('close-summary');
const summaryListContainer = document.getElementById('summary-list-container');

const manageBtn = document.getElementById('manage-btn');
const manageModal = document.getElementById('manage-modal');
const closeManage = document.getElementById('close-manage');
const exportJsonBtn = document.getElementById('export-json-btn');
const importJsonFile = document.getElementById('import-json-file');
const resetDataBtn = document.getElementById('reset-data-btn');

const qrBtn = document.getElementById('qr-btn');
const qrModal = document.getElementById('qr-modal');
const closeQr = document.getElementById('close-qr');
const themeToggle = document.getElementById('theme-toggle');

// Restore Saved User Position
function restoreUserPosition() {
  const savedPos = localStorage.getItem('last_user_position');
  if (savedPos) {
    try {
      const pos = JSON.parse(savedPos);
      if (pos.mode) currentMode = pos.mode;
      if (pos.subjectId) currentSubjectId = pos.subjectId;
      if (pos.questionIndex !== undefined) currentQuestionIndex = pos.questionIndex;

      modeTabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.mode === currentMode);
      });

      subjectCards.forEach(card => {
        card.classList.toggle('active', parseInt(card.dataset.subject, 10) === currentSubjectId);
      });

      updateBarVisibilities();
    } catch (e) {
      console.error("Failed to restore position", e);
    }
  }
}

// Save Current Position
function saveUserPosition() {
  const pos = {
    mode: currentMode,
    subjectId: currentSubjectId,
    questionIndex: currentQuestionIndex
  };
  localStorage.setItem('last_user_position', JSON.stringify(pos));
}

// Generate Real Exam (80 Questions: 20 per subject)
function generateRealExam() {
  realExamQuestions = [];
  examSubmitted = false;
  timeLeftSeconds = 80 * 60;

  for (let sId = 1; sId <= 4; sId++) {
    const subData = [...allSubjects[sId].data];
    // shuffle
    for (let i = subData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [subData[i], subData[j]] = [subData[j], subData[i]];
    }
    // Pick 20 questions
    realExamQuestions.push(...subData.slice(0, 20));
  }

  currentQuestionIndex = 0;
  startExamTimer();
}

// Exam Timer Counter
function startExamTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (timeLeftSeconds <= 0) {
      clearInterval(timerInterval);
      alert("⏱️ 시험 시간이 종료되었습니다! 자동으로 채점을 진행합니다.");
      submitRealExam();
      return;
    }
    timeLeftSeconds--;
    const mins = Math.floor(timeLeftSeconds / 60);
    const secs = timeLeftSeconds % 60;
    examTimer.textContent = `남은 시간 ${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }, 1000);
}

// Submit Real Exam & Generate Scorecard
function submitRealExam() {
  examSubmitted = true;
  if (timerInterval) clearInterval(timerInterval);

  let subScores = { 1: 0, 2: 0, 3: 0, 4: 0 };
  let subCounts = { 1: 0, 2: 0, 3: 0, 4: 0 };

  realExamQuestions.forEach(q => {
    let subId = 1;
    for (const [id, sub] of Object.entries(allSubjects)) {
      if (sub.data.some(item => item.id === q.id)) {
        subId = parseInt(id, 10);
        break;
      }
    }
    subCounts[subId]++;
    if (userAnswers[q.id] === q.answer) {
      subScores[subId]++;
    }
  });

  // Calculate scores per subject (out of 100)
  const score1 = Math.round((subScores[1] / 20) * 100);
  const score2 = Math.round((subScores[2] / 20) * 100);
  const score3 = Math.round((subScores[3] / 20) * 100);
  const score4 = Math.round((subScores[4] / 20) * 100);

  const avgScore = Math.round((score1 + score2 + score3 + score4) / 4);
  const isFailedByCutoff = (score1 < 40 || score2 < 40 || score3 < 40 || score4 < 40);
  const isPassed = (avgScore >= 60 && !isFailedByCutoff);

  let resultHtml = `
    <div style="font-size: 1.6rem; font-weight: 800; color: ${isPassed ? '#10b981' : '#ef4444'}; margin-bottom:12px;">
      ${isPassed ? '🎉 최종 합격 (PASS)' : '❌ 불합격 (FAIL)'}
    </div>
    <div style="font-size:1.1rem; font-weight:700; margin-bottom:16px;">
      평균 점수: <span style="color:var(--primary); font-size:1.3rem;">${avgScore}점</span> (기준: 60점 이상)
    </div>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; text-align:left; background:rgba(0,0,0,0.2); padding:14px; border-radius:10px;">
      <div>1과목 (전기자기학): <strong>${score1}점</strong> ${score1 < 40 ? '<span style="color:#ef4444;">(과락)</span>' : ''}</div>
      <div>2과목 (디지털응용): <strong>${score2}점</strong> ${score2 < 40 ? '<span style="color:#ef4444;">(과락)</span>' : ''}</div>
      <div>3과목 (전자회로설계): <strong>${score3}점</strong> ${score3 < 40 ? '<span style="color:#ef4444;">(과락)</span>' : ''}</div>
      <div>4과목 (전자회로검증): <strong>${score4}점</strong> ${score4 < 40 ? '<span style="color:#ef4444;">(과락)</span>' : ''}</div>
    </div>
    <p style="font-size:0.85rem; color:var(--text-muted); margin-top:10px;">
      ※ 각 과목 40점 미만 시 과락으로 불합격 처리됩니다.
    </p>
  `;

  examReportCard.innerHTML = resultHtml;
  examResultModal.style.display = 'flex';

  renderQuestion();
}

// Generate 10 Random Mini Quiz Questions from all 6000 questions
function generateMiniQuiz() {
  const pool = [];
  Object.values(allSubjects).forEach(sub => {
    sub.data.forEach(q => pool.push(q));
  });

  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  miniQuizQuestions = pool.slice(0, 10);
  currentQuestionIndex = 0;
}

// Helper to filter active question list
function getActiveQuestions() {
  let list = [];
  if (currentMode === 'exam') {
    if (realExamQuestions.length === 0) generateRealExam();
    list = realExamQuestions;
  } else if (currentMode === 'mini10') {
    if (miniQuizQuestions.length === 0) generateMiniQuiz();
    list = miniQuizQuestions;
  } else if (currentMode === 'wrong') {
    Object.values(allSubjects).forEach(sub => {
      sub.data.forEach(q => {
        if (wrongQuestions.includes(q.id)) list.push(q);
      });
    });
  } else if (currentMode === 'bookmark') {
    Object.values(allSubjects).forEach(sub => {
      sub.data.forEach(q => {
        if (bookmarkedQuestions.includes(q.id)) list.push(q);
      });
    });
  } else {
    list = allSubjects[currentSubjectId].data;
  }

  if (searchQuery.trim() !== '') {
    const qTerm = searchQuery.toLowerCase();
    list = list.filter(q => 
      q.question.toLowerCase().includes(qTerm) || 
      q.explanation.toLowerCase().includes(qTerm) ||
      q.options.some(opt => opt.toLowerCase().includes(qTerm))
    );
  }

  return list;
}

// Update Action Bars Visibility
function updateBarVisibilities() {
  const subSelector = document.getElementById('subject-selector');
  if (currentMode === 'wrong' || currentMode === 'bookmark' || currentMode === 'mini10' || currentMode === 'exam') {
    subSelector.style.display = 'none';
  } else {
    subSelector.style.display = 'grid';
  }

  practiceBar.style.display = (currentMode === 'practice') ? 'block' : 'none';
  examBar.style.display = (currentMode === 'exam') ? 'block' : 'none';
  miniQuizBar.style.display = (currentMode === 'mini10') ? 'block' : 'none';
  wrongResetBar.style.display = (currentMode === 'wrong') ? 'block' : 'none';
}

// Render Question Card
function renderQuestion() {
  saveUserPosition();

  const questions = getActiveQuestions();

  if (!questions || questions.length === 0) {
    questionText.innerHTML = `<div style="text-align: center; padding: 40px 0;">
      <p style="font-size: 1.15rem; font-weight: 600; color: var(--text-muted);">조건에 해당하는 문제가 없습니다.</p>
      <p style="font-size: 0.88rem; margin-top: 8px;">검색어를 변경하거나 다른 과목/모드를 선택해 보세요.</p>
    </div>`;
    diagramContainer.style.display = 'none';
    optionsList.innerHTML = '';
    explanationBox.style.display = 'none';
    currentQuestionNum.textContent = '문제 0 / 0';
    progressFill.style.width = '0%';
    return;
  }

  if (currentQuestionIndex < 0) currentQuestionIndex = 0;
  if (currentQuestionIndex >= questions.length) currentQuestionIndex = questions.length - 1;

  const q = questions[currentQuestionIndex];
  
  let subName = allSubjects[currentSubjectId].name;
  for (const [id, sub] of Object.entries(allSubjects)) {
    if (sub.data.some(item => item.id === q.id)) {
      subName = sub.name;
      break;
    }
  }

  if (currentMode === 'exam') {
    subjectTag.textContent = `⏱️ 실전 모의고사 80제 세트 - ${subName}`;
  } else if (currentMode === 'mini10') {
    subjectTag.textContent = `🎲 미니퀴즈 세트 (랜덤 10제) - ${subName}`;
  } else {
    subjectTag.textContent = subName;
  }

  questionText.textContent = q.question;

  if (q.diagramType && circuitSVGs[q.diagramType]) {
    diagramContainer.innerHTML = circuitSVGs[q.diagramType];
    diagramContainer.style.display = 'block';
  } else {
    diagramContainer.style.display = 'none';
  }

  const isBookmarked = bookmarkedQuestions.includes(q.id);
  bookmarkBtn.classList.toggle('active', isBookmarked);

  optionsList.innerHTML = '';
  const selectedAns = userAnswers[q.id];
  const isAnswered = selectedAns !== undefined;

  q.options.forEach((optText, idx) => {
    const optEl = document.createElement('div');
    optEl.className = 'option-item';

    if (isAnswered) {
      if (currentMode === 'exam' && !examSubmitted) {
        // In exam mode before submission, only highlight selected option, no correct/wrong colors
        if (idx === selectedAns) {
          optEl.classList.add('correct');
        }
      } else {
        optEl.classList.add('disabled');
        if (idx === q.answer) {
          optEl.classList.add('correct');
        } else if (idx === selectedAns) {
          optEl.classList.add('wrong');
        }
      }
    }

    optEl.innerHTML = `
      <div class="option-num">${idx + 1}</div>
      <div class="option-label">${optText}</div>
    `;

    if (!isAnswered || (currentMode === 'exam' && !examSubmitted)) {
      optEl.addEventListener('click', () => handleOptionSelect(q, idx));
    }

    optionsList.appendChild(optEl);
  });

  // Show explanation only in practice, mini10, or submitted exam mode
  if (isAnswered && (currentMode !== 'exam' || examSubmitted)) {
    explanationContent.innerHTML = `
      <strong>[정답: ${q.answer + 1}번]</strong><br/><br/>
      ${q.explanation}
    `;
    explanationBox.style.display = 'block';
  } else {
    explanationBox.style.display = 'none';
  }

  // Dynamic progress gauge text (Exact 1500 / 80 / 10)
  currentQuestionNum.textContent = `문제 ${currentQuestionIndex + 1} / ${questions.length}`;
  const pct = Math.round(((currentQuestionIndex + 1) / questions.length) * 100);
  progressFill.style.width = `${pct}%`;

  updateScoreStats();

  if (window.lucide) window.lucide.createIcons();
}

// Option Selection Handler
function handleOptionSelect(q, selectedIdx) {
  userAnswers[q.id] = selectedIdx;

  const isCorrect = selectedIdx === q.answer;

  if (!isCorrect && currentMode !== 'exam') {
    if (!wrongQuestions.includes(q.id)) {
      wrongQuestions.push(q.id);
      localStorage.setItem('wrong_questions', JSON.stringify(wrongQuestions));
    }
  } else if (isCorrect && currentMode !== 'exam') {
    if (window.confetti) {
      window.confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
    }
  }

  renderQuestion();
}

// Score Calculator
function updateScoreStats() {
  const questions = getActiveQuestions();
  let answeredCount = 0;
  let correctCount = 0;

  questions.forEach(q => {
    if (userAnswers[q.id] !== undefined) {
      answeredCount++;
      if (userAnswers[q.id] === q.answer) correctCount++;
    }
  });

  if (answeredCount > 0) {
    const rate = Math.round((correctCount / answeredCount) * 100);
    scoreInfo.textContent = `정답률: ${rate}% (${correctCount}/${answeredCount}문제)`;
  } else {
    scoreInfo.textContent = `풀이 시작 전`;
  }
}

// OMR Grid Renderer
function renderOMRGrid() {
  const questions = getActiveQuestions();
  omrGridContainer.innerHTML = '';

  questions.forEach((q, idx) => {
    const item = document.createElement('div');
    item.className = 'omr-item';
    if (userAnswers[q.id] !== undefined) item.classList.add('answered');
    if (idx === currentQuestionIndex) item.classList.add('current');

    item.textContent = idx + 1;
    item.addEventListener('click', () => {
      currentQuestionIndex = idx;
      renderQuestion();
      omrModal.style.display = 'none';
    });

    omrGridContainer.appendChild(item);
  });
}

// Detailed Formula Renderer (Handwritten Notebook Style)
function renderDetailedFormulas() {
  formulaListContainer.innerHTML = '';
  Object.values(detailedFormulas).forEach(subFormulas => {
    const card = document.createElement('div');
    card.className = 'formula-card';
    
    let html = `<h3 style="color:#f59e0b; font-size:1.2rem; margin-bottom:14px; border-bottom:2px solid #f59e0b; padding-bottom:6px;">${subFormulas.title}</h3>`;
    subFormulas.formulas.forEach(f => {
      html += `
        <div class="notebook-formula-box">
          <h4 style="color:#0f172a; font-size:1.05rem; font-weight:800; margin-bottom:6px;">📌 ${f.topic}</h4>
          <div class="handwrite-eq">
            ${f.eq}
          </div>
          <p class="handwrite-desc" style="white-space:pre-line;">${f.desc}</p>
        </div>
      `;
    });
    card.innerHTML = html;
    formulaListContainer.appendChild(card);
  });
}

// Summary Notes Renderer
function renderSubjectSummaries() {
  summaryListContainer.innerHTML = '';
  Object.values(subjectSummaries).forEach(subSum => {
    const card = document.createElement('div');
    card.className = 'formula-card';
    
    let html = `<h3 style="color:var(--primary); font-size:1.2rem; border-bottom:2px solid var(--primary); padding-bottom:8px; margin-bottom:16px;">${subSum.title}</h3>`;
    subSum.sections.forEach(sec => {
      html += `
        <div style="margin-top:16px; background:rgba(255,255,255,0.02); border:1px solid var(--card-border); border-radius:10px; padding:16px;">
          <h4 style="color:#38bdf8; font-size:1.05rem; margin-bottom:8px;">${sec.heading}</h4>
          <p style="white-space:pre-line; margin-top:6px; font-size:0.94rem; line-height:1.75; color:var(--text-main); border-top:1px dashed var(--card-border); padding-top:8px;">${sec.detail}</p>
        </div>
      `;
    });
    card.innerHTML = html;
    summaryListContainer.appendChild(card);
  });
}

// Search Filter Event
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  currentQuestionIndex = 0;
  renderQuestion();
});

// Event Listeners: Nav
prevBtn.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
});

nextBtn.addEventListener('click', () => {
  const questions = getActiveQuestions();
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  }
});

// Event Listeners: Mode Tabs
modeTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    modeTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentMode = tab.dataset.mode;
    currentQuestionIndex = 0;

    updateBarVisibilities();

    if (currentMode === 'mini10') {
      generateMiniQuiz();
    } else if (currentMode === 'exam') {
      generateRealExam();
    }

    renderQuestion();
  });
});

// Shuffle current subject questions
function shuffleCurrentSubject() {
  const currentData = allSubjects[currentSubjectId].data;
  for (let i = currentData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [currentData[i], currentData[j]] = [currentData[j], currentData[i]];
  }
  currentQuestionIndex = 0;
}

if (shuffleQuestionsBtn) {
  shuffleQuestionsBtn.addEventListener('click', () => {
    shuffleCurrentSubject();
    const count = allSubjects[currentSubjectId].data.length;
    alert(`현재 과목의 ${count.toLocaleString()}문제 순서가 무작위로 새로 섞였습니다!`);
    renderQuestion();
  });
}

submitExamBtn.addEventListener('click', () => {
  if (confirm("실전 모의고사를 제출하고 채점하시겠습니까?")) {
    submitRealExam();
  }
});

closeExamResult.addEventListener('click', () => {
  examResultModal.style.display = 'none';
});

reviewExamBtn.addEventListener('click', () => {
  examResultModal.style.display = 'none';
  renderQuestion();
});

newMiniQuizBtn.addEventListener('click', () => {
  generateMiniQuiz();
  renderQuestion();
});

if (headerMiniQuizBtn) {
  headerMiniQuizBtn.addEventListener('click', () => {
    currentMode = 'mini10';
    modeTabs.forEach(t => {
      t.classList.toggle('active', t.dataset.mode === 'mini10');
    });
    updateBarVisibilities();
    generateMiniQuiz();
    renderQuestion();
  });
}

// Reset Wrong Questions Action
resetWrongBtn.addEventListener('click', () => {
  if (confirm("오답노트에 저장된 모든 틀린 문제 기록을 초기화하시겠습니까?")) {
    wrongQuestions = [];
    localStorage.removeItem('wrong_questions');
    alert("오답노트가 모두 초기화되었습니다.");
    renderQuestion();
  }
});

// Event Listeners: Subject Selection
subjectCards.forEach(card => {
  card.addEventListener('click', () => {
    subjectCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    currentSubjectId = parseInt(card.dataset.subject, 10);
    currentQuestionIndex = 0;
    renderQuestion();
  });
});

// Event Listeners: Bookmark
bookmarkBtn.addEventListener('click', () => {
  const questions = getActiveQuestions();
  if (!questions || questions.length === 0) return;
  const q = questions[currentQuestionIndex];

  if (bookmarkedQuestions.includes(q.id)) {
    bookmarkedQuestions = bookmarkedQuestions.filter(id => id !== q.id);
  } else {
    bookmarkedQuestions.push(q.id);
  }
  localStorage.setItem('bookmarked_questions', JSON.stringify(bookmarkedQuestions));
  renderQuestion();
});

// Modal Toggles
omrBtn.addEventListener('click', () => {
  renderOMRGrid();
  omrModal.style.display = 'flex';
});
closeOmr.addEventListener('click', () => omrModal.style.display = 'none');

formulaBtn.addEventListener('click', () => {
  renderDetailedFormulas();
  formulaModal.style.display = 'flex';
});
closeFormula.addEventListener('click', () => formulaModal.style.display = 'none');

summaryBtn.addEventListener('click', () => {
  renderSubjectSummaries();
  summaryModal.style.display = 'flex';
});
closeSummary.addEventListener('click', () => summaryModal.style.display = 'none');

manageBtn.addEventListener('click', () => manageModal.style.display = 'flex');
closeManage.addEventListener('click', () => manageModal.style.display = 'none');

// JSON Export & Import Logic
exportJsonBtn.addEventListener('click', () => {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(allSubjects, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "electronics_exam_dataset.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
});

importJsonFile.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const parsed = JSON.parse(event.target.result);
      if (parsed[1] && parsed[2] && parsed[3] && parsed[4]) {
        allSubjects = parsed;
        localStorage.setItem('custom_exam_dataset', JSON.stringify(parsed));
        updateDynamicCounts();
        alert("새로운 문제집 JSON 데이터가 성공적으로 적용되었습니다!");
        manageModal.style.display = 'none';
        renderQuestion();
      } else {
        alert("올바르지 않은 문제집 JSON 데이터 형식입니다.");
      }
    } catch (err) {
      alert("JSON 파일 파싱 실패: " + err.message);
    }
  };
  reader.readAsText(file);
});

resetDataBtn.addEventListener('click', () => {
  if (confirm("기본 문제 데이터셋으로 초기화하시겠습니까?")) {
    localStorage.removeItem('custom_exam_dataset');
    allSubjects = loadSubjectData();
    updateDynamicCounts();
    alert("데이터가 기본 문제 데이터셋으로 초기화되었습니다.");
    manageModal.style.display = 'none';
    renderQuestion();
  }
});

// QR Code & IP Display
qrBtn.addEventListener('click', () => {
  qrModal.style.display = 'flex';
  const host = window.location.host || 'localhost:8080';
  const url = window.location.protocol + '//' + host;
  document.getElementById('ip-address-display').textContent = url;

  const qrContainer = document.getElementById('qrcode');
  qrContainer.innerHTML = '';
  if (window.QRCode) {
    new window.QRCode(qrContainer, { text: url, width: 160, height: 160 });
  }
});
closeQr.addEventListener('click', () => qrModal.style.display = 'none');

// Theme Toggle
themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', nextTheme);
});

// PWA Service Worker Registration with strict update control
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js?v=4012', { updateViaCache: 'none' })
      .then(reg => {
        reg.update();
      })
      .catch(err => console.log('SW reg failed: ', err));
  });
}

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
  restoreUserPosition();
  updateDynamicCounts();
  renderQuestion();
  if (window.lucide) window.lucide.createIcons();
});
