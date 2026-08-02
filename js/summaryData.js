// Ultra-Detailed & High-Frequency Exam Formulas & Summary Notes for Electronics Engineer
export const detailedFormulas = {
  subject1: {
    title: "⚡ 1과목: 전기자기학 핵심 공식 정리",
    formulas: [
      {
        topic: "1. 쿨롱의 법칙 및 전계의 세기",
        eq: "F = \\frac{1}{4\\pi\\epsilon_0} \\cdot \\frac{q_1 q_2}{r^2} = 9 \\times 10^9 \\cdot \\frac{q_1 q_2}{r^2} \\quad [N]",
        desc: "• q1, q2 : 전하량 [C], r : 전하 간 거리 [m]\n• 전계의 세기 E = F / q = q / (4πϵ₀ r²) [V/m]\n• 전위 V = q / (4πϵ₀ r) [V]  ➔  E = -∇V = -dV/dr"
      },
      {
        topic: "2. 가우스 정리 및 도체 표면 전계",
        eq: "\\oint E \\cdot dA = \\frac{Q_{enclosed}}{\\epsilon_0} \\quad \\Longleftrightarrow \\quad \\nabla \\cdot D = \\rho",
        desc: "• D = ϵ E : 전속밀도 [C/m²],  ρ : 체적전하밀도 [C/m³]\n• 무한 평판 전하 표면 전계: E = σ / ϵ₀  [V/m] (σ: 면전하밀도)\n• 무한 평판 유전체 중간 전계: E = σ / (2ϵ₀)  [V/m]"
      },
      {
        topic: "3. 정전용량(C) 및 콘덴서 축적 에너지",
        eq: "C = \\epsilon \\cdot \\frac{S}{d} \\quad [F], \\quad W = \\frac{1}{2} C V^2 = \\frac{1}{2} Q V = \\frac{Q^2}{2C} \\quad [J]",
        desc: "• S : 평판 면적 [m²], d : 극판 간격 [m], ϵ = ϵ₀ ϵ_r (유전율)\n• 단위 체적당 정전 에너지 밀도: w = 1/2 ϵ E² = 1/2 D E [J/m³]\n• C의 직렬합: 1/C_total = 1/C1 + 1/C2,  병렬합: C_total = C1 + C2"
      },
      {
        topic: "4. 전류에 의한 자계 (비오-사바르 & 앙페르 법칙)",
        eq: "H = \\frac{I}{2\\pi r} \\quad \\text{(직선)}, \\quad H = \\frac{N I}{2 r} \\quad \\text{(원형코일)}, \\quad H = n I \\quad \\text{(솔레노이드)}",
        desc: "• H : 자계의 세기 [A/m], I : 전류 [A], r : 거리 [m], n : 단위길이당 권선수\n• 코일 자기에너지: W = 1/2 L I² = 1/2 N Φ I [J]\n• 로렌츠 힘: F = q(E + v × B) [N]"
      },
      {
        topic: "5. 맥스웰 4방정식 (Maxwell's Equations)",
        eq: "\\nabla \\cdot D = \\rho, \\quad \\nabla \\cdot B = 0, \\quad \\nabla \\times E = -\\frac{\\partial B}{\\partial t}, \\quad \\nabla \\times H = J + \\frac{\\partial D}{\\partial t}",
        desc: "1. 가우스 전계: 전하가 전속을 형성\n2. 가우스 자계: 자하는 단독 존재 불가 (원형 자속선)\n3. 패러데이 법칙: 자속 변화가 전계 회전 형성\n4. 앙페르-맥스웰 법칙: 전류 및 변위전류(∂D/∂t)가 자계 회전 형성"
      }
    ]
  },
  subject2: {
    title: "💻 2과목: 디지털응용회로 핵심 공식 정리",
    formulas: [
      {
        topic: "1. 불 대수 주요 정리 & 드모르간 법칙",
        eq: "(A + B)' = A' \\cdot B', \\quad (A \\cdot B)' = A' + B'",
        desc: "• 흡수 법칙: A + A·B = A,  A · (A + B) = A\n• 결합/분배: A + (B·C) = (A+B)·(A+C)\n• XOR (Exclusive-OR): Y = A'B + AB' = A ⊕ B\n• XNOR (Exclusive-NOR): Y = AB + A'B' = (A ⊕ B)'"
      },
      {
        topic: "2. 플립플롭 특성 방정식 (Flip-Flop Equations)",
        eq: "Q_{n+1} = J Q_n' + K' Q_n \\quad \\text{(JK FF)}, \\quad Q_{n+1} = D \\quad \\text{(D FF)}",
        desc: "• RS FF: Q_{n+1} = S + R'Q_n (R=1, S=1 금지 상태)\n• JK FF: J=1, K=1 일 때 이전 상태 반전 (Toggle)\n• T FF: Q_{n+1} = T ⊕ Q_n (T=1 이면 토글, T=0 이면 유지)"
      },
      {
        topic: "3. 카운터 모듈러스 & 논리 회로 계산",
        eq: "\\text{Modulus} = 2^N \\quad \\text{(N비트 카운터 상태 수)}",
        desc: "• M진 카운터 구성 플립플롭 수: 2^(N-1) < M ≤ 2ᴺ\n• 디코더 (Decoder): N 비트 입력 ➔ 2ᴺ 비트 출력\n• 인코더 (Encoder): 2ᴺ 비트 입력 ➔ N 비트 출력\n• MUX (멀티플렉서): 2ᴺ개 입력 중 선택선 S(N비트)로 1개 선택 출력"
      }
    ]
  },
  subject3: {
    title: "🔌 3과목: 전자회로설계 핵심 공식 정리",
    formulas: [
      {
        topic: "1. BJT / FET 증폭기 이득 및 특성",
        eq: "\\beta = \\frac{I_c}{I_b}, \\quad \\alpha = \\frac{I_c}{I_e} = \\frac{\\beta}{1 + \\beta}, \\quad A_v = -g_m R_c \\quad \\text{(CE 증폭기)}",
        desc: "• 공통 에미터(CE): 전압/전류이득 높음, 입출력 위상차 180° 반전\n• 공통 콜렉터(CC, 에미터팔로워): 전압이득 A_v ≒ 1, 임피던스 변환(버퍼)용\n• FET 상호컨덕턴스: g_m = 2 √(I_DSS · I_D) / |V_p|"
      },
      {
        topic: "2. 연산증폭기 (OP-Amp) 전압 이득 공식",
        eq: "A_v = 1 + \\frac{R_f}{R_1} \\quad \\text{(비반전)}, \\quad A_v = -\\frac{R_f}{R_1} \\quad \\text{(반전)}",
        desc: "• 이상적 OP-Amp: A_v = ∞, Z_in = ∞, Z_out = 0, 대역폭 BW = ∞\n• 차동 증폭기: V_out = (R_f / R_1) · (V_2 - V_1)\n• 적분기: V_out = - (1 / RC) ∫ V_in dt"
      },
      {
        topic: "3. 정류 회로 & 전원장치 공식",
        eq: "V_{dc} \\approx 0.9 V_{rms} \\quad \\text{(전파/브리지 정류)}, \\quad V_{dc} \\approx 0.45 V_{rms} \\quad \\text{(단파 정류)}",
        desc: "• 브리지 정류 피크역전압: PIV = V_m\n• 리플률 (Ripple Factor): r = V_ac_rms / V_dc (단파: 1.21, 전파: 0.48)\n• SMPS: 고주파 스위칭 방식으로 고효율 및 소형 경량화 가능"
      },
      {
        topic: "4. 발진 회로 & 바르크하우젠 조건",
        eq: "|A \\beta| = 1, \\quad \\angle A \\beta = 0^\\circ \\quad \\text{(바르크하우젠 발진 조건)}",
        desc: "• RC 위상변위 발진 주파수: f₀ = 1 / (2π R C √6)\n• LC 발진 주파수: f₀ = 1 / (2π √(L C))\n• 귀환 증폭 이득: A_f = A / (1 + A β)"
      }
    ]
  },
  subject4: {
    title: "🛠️ 4과목: 전자회로검증 핵심 공식 정리",
    formulas: [
      {
        topic: "1. 오실로스코프 & 프로브 측정이론",
        eq: "V_{real} = V_{read} \\times 10 \\quad \\text{(10:1 프로브 감쇄)}, \\quad f = \\frac{1}{T}",
        desc: "• 10:1 프로브: 입력 임피던스가 10MΩ으로 10배 증가하여 회로 부하효과 최소화\n• 주기 T = (격자 수 div) × (Time/div 설정값)"
      },
      {
        topic: "2. 리사주 도형 (Lissajous) 위상차 계산",
        eq: "\\theta = \\sin^{-1}\\left(\\frac{y_1}{y_2}\\right)",
        desc: "• θ = 0° / 180° : 경사 직선 파형\n• θ = 90° / 270° : 진폭이 같으면 정원 (Circle), 다르면 타원\n• 주파수 비: f_x / f_y = (수직 접점 수) / (수평 접점 수)"
      },
      {
        topic: "3. SPICE 해석 & 샘플링 정칙",
        eq: "f_s \\ge 2 f_{max} \\quad \\text{(나이퀴스트 샘플링 정리)}",
        desc: "• .OP : 직류 동작점 (DC Operating Point) 해석\n• .TRAN : 시간에 따른 과도 응답 (Transient Analysis)\n• .AC : 주파수 응답 (Bode Plot) 분석\n• JTAG (IEEE 1149.1 Boundary Scan): IC 핀 단선/단락 디지털 진단"
      }
    ]
  }
};

export const subjectSummaries = {
  subject1: {
    title: "⚡ 1과목: 전기자기학 전범위 기출 빈출 요약노트",
    sections: [
      {
        heading: "1. 쿨롱의 법칙 및 정전계 특성 [자주 출제]",
        detail: "• 정전력 F = k(q1·q2)/r² [N] ➔ 전자기력은 두 전하 거리의 제곱에 반비례합니다.\n• 전계의 세기 E = F/q [V/m] 이며, 전하 Q에 의해 생성되는 전위 V = Q / (4πϵ₀r) [V] 입니다.\n• E = -∇V 관계에 따라 전계의 방향은 전위가 가장 급격히 감소하는 방향(등전위면에 수직)입니다.\n• 대전된 도체 내부의 전계 E = 0 이며 전하 및 전위는 표면에만 균일하게 분포합니다."
      },
      {
        heading: "2. 가우스 정리 및 유전체 경계 조건 [필수 암기]",
        detail: "• 가우스 정리: ∮ E·dA = Q/ϵ₀ ➔ 미분형 div D = ρ (전속밀도 D = ϵE).\n• 도체 표면 직외 전계 E = σ/ϵ₀, 무한 평판 유전체 중앙 전계 E = σ/(2ϵ₀) 입니다.\n• 유전체 경계 조건:\n  1. 전속밀도 D의 법선(수직) 성분 연속: D1n = D2n  (ϵ₁ E1n = ϵ₂ E2n)\n  2. 전계 E의 접선(수평) 성분 연속: E1t = E2t  (D1t/ϵ₁ = D2t/ϵ₂)\n  3. 굴절 법칙: tan θ₁ / tan θ₂ = ϵ₁ / ϵ₂"
      },
      {
        heading: "3. 콘덴서 정전용량 및 정전 에너지",
        detail: "• 정전용량 C = ϵ S / d [F]. 극판 면적 S에 비례, 간격 d에 반비례.\n• 축적 에너지 W = 1/2 C V² = 1/2 Q V = Q² / (2C) [J].\n• 단위 체적당 에너지 밀도 w = 1/2 ϵ E² = 1/2 D E [J/m³].\n• 유전율 ϵ_r 인 유전체를 채우면 정전용량 C는 ϵ_r 배만큼 증가합니다."
      },
      {
        heading: "4. 자계의 법칙 및 로렌츠 힘",
        detail: "• 비오-사바르 법칙: 전류 요소에 의해 유도되는 자계 dB = (I dl sinθ)/(4π r²).\n• 자계 H: 무한직선 I/(2πr), 원형코일 중심 NI/(2r), 무한솔레노이드 nI [A/m].\n• 로렌츠 힘: F = q(E + v × B) [N]. 전하가 자계 B 내에서 v의 속도로 이동 시 받는 힘은 F = q v B sinθ 입니다."
      },
      {
        heading: "5. 패러데이 법칙 및 맥스웰 방정식 [핵심]",
        detail: "• 패러데이-렌츠 유도 법칙: e = -N (dΦ/dt) ➔ 유도 기전력은 자속 변화를 방해하는 방향(- 부호).\n• 코일 자기 인덕턴스 자기에너지 W = 1/2 L I² [J].\n• 맥스웰 4방정식:\n  1. ∇·D = ρ  (전하가 전속을 생성)\n  2. ∇·B = 0  (고립된 고유 자하/점자극 미존재)\n  3. ∇×E = -∂B/∂t  (자속 변화 ➔ 전계 회전 유도)\n  4. ∇×H = J + ∂D/∂t  (전도전류 J 및 변위전류 ∂D/∂t ➔ 자계 회전 유도)"
      }
    ]
  },
  subject2: {
    title: "💻 2과목: 디지털응용회로 전범위 기출 빈출 요약노트",
    sections: [
      {
        heading: "1. 수 체계 변환 및 불 대수 [필수]",
        detail: "• 2진수 ➔ 10진수 변환: 2의 거듭제곱 가중치 곱셈 합산. (예: 1011₂ = 8+0+2+1 = 11).\n• 드모르간 정리: (A + B)' = A' · B',  (A · B)' = A' + B'.\n• 흡수 법칙: A + A·B = A,  A·(A + B) = A.\n• XOR (Exclusive-OR): Y = A'B + AB' (입력이 서로 다를 때 출력 1).\n• XNOR (Exclusive-NOR): Y = AB + A'B' (입력이 서로 같을 때 출력 1)."
      },
      {
        heading: "2. 카르노 맵 (Karnaugh Map) 최소화 법칙",
        detail: "• 카르노 맵은 논리식을 최단 형태로 간소화하는 지형도 도구입니다.\n• 2ⁿ개 셀(1, 2, 4, 8, 16개) 단위로 크게 묶을수록 변수가 많이 소거됩니다.\n• 2개 셀 묶음 ➔ 변수 1개 소거 / 4개 셀 묶음 ➔ 변수 2개 소거 / 8개 셀 묶음 ➔ 변수 3개 소거."
      },
      {
        heading: "3. 조합논리회로 (기억소자 없음)",
        detail: "• 가산기(Adder):\n  - 반가산기(HA): 2비트 가산. 합 S = A ⊕ B, 올림수 C = A · B.\n  - 전가산기(FA): 하위 올림수 포함 3비트 가산. (HA 2개 + OR 게이트 1개로 구성).\n• 디코더(Decoder): N 비트 부호화 입력을 해독하여 2ᴺ 개 출력 중 1개 선택 활성화.\n• 인코더(Encoder): 2ᴺ 개 신호를 N 비트 부호 코드로 변환.\n• MUX(멀티플렉서): 2ᴺ 개 입력 중 N비트 선택선으로 1개 선택 출력."
      },
      {
        heading: "4. 순서논리회로 (기억소자 플립플롭 포함)",
        detail: "• RS 플립플롭: R=1, S=1 동시 입력 시 출력을 예측할 수 없는 금지/부정 상태 발생.\n• JK 플립플롭: RS의 금지 상태를 개선. J=1, K=1 입력 시 이전 출력이 반전(Toggle)됨.\n• D 플립플롭: 입력 D의 1비트 데이터를 클록에 맞춰 지연/저장.\n• T 플립플롭: T=1 이면 토글, T=0 이면 이전 값 유지."
      },
      {
        heading: "5. 카운터 및 메모리 장치",
        detail: "• N 비트 카운터 표현 가능 총 상태 수(Modulus) = 2ᴺ 개 (0 ~ 2ᴺ-1 표현).\n• 리플 카운터(비동기식): 첫 FF 클록만 외부 인가, 앞 FF 출력이 뒤 FF 클록으로 파급 ➔ 지연 발생.\n• EPROM: 자외선(UV)을 쬐어 데이터를 소거 후 재기록할 수 있는 ROM 메모리.\n• EEPROM: 전기적 신호로 데이터를 소거 및 재기록하는 ROM."
      }
    ]
  },
  subject3: {
    title: "🔌 3과목: 전자회로설계 전범위 기출 빈출 요약노트",
    sections: [
      {
        heading: "1. 트랜지스터 (BJT / FET) 바이어스 및 증폭기 [빈출]",
        detail: "• BJT 접지 방식별 비교:\n  - 공통 에미터(CE): 전압/전류 이득 높음(전력이득 최대). 입출력 위상차 180° 반전. 범용 증폭기.\n  - 공통 콜렉터(CC, 에미터팔로워): 전압이득 A_v ≒ 1. 입력임피던스 높고 출력임피던스 낮음 ➔ 완충(버퍼) 회로.\n  - 공통 베이스(CB): 전압이득 높음, 전류이득 1 이하. 고주파 특성 양호.\n• 에미터 바이패스 콘덴서: 교류 신호 접지 경로를 제공하여 부귀환에 의한 증폭도 저하 방지."
      },
      {
        heading: "2. 연산증폭기 (OP-Amp) 응용 회로",
        detail: "• 이상적 OP-Amp 조건: 전압이득 A_v = ∞, 입력임피던스 Z_in = ∞, 대역폭 BW = ∞, 출력임피던스 Z_out = 0.\n• 비반전 증폭기: A_v = 1 + (Rf/R1) (동위상).\n• 반전 증폭기: A_v = - (Rf/R1) (180° 위상 반전).\n• 슈미트 트리거: 히스테리시스 특성(상한/하한 임계전압)을 이용하여 아날로그 신호를 정교한 방형파로 정형."
      },
      {
        heading: "3. 전원회로 및 정류기 (SMPS / 브리지 정류)",
        detail: "• 브리지 전파 정류회로: 직류 출력 전압 V_dc ≒ 0.9 V_rms. 단파 정류(0.45 V_rms) 대비 2배 효율.\n• PIV (피크 역전압): 브리지 정류는 V_m 으로 다이오드 역전압 부담이 적음.\n• 리플률 r = V_ac_rms / V_dc. (단파: 1.21, 전파: 0.48).\n• SMPS (스위칭 전원): 고주파 스위칭 방식으로 고효율(80~90% 이상) 및 소형·경량화 실현."
      },
      {
        heading: "4. 귀환 증폭기 및 발진 조건",
        detail: "• 부귀환(Negative Feedback) 효과: 증폭도는 감소(A_f = A/(1+Aβ))하나, 증폭도 안정도 향상, 대역폭 증가, 왜곡 및 잡음 감소.\n• 바르크하우젠 발진 조건: 귀환 루프 이득 크기 |Aβ| = 1, 귀환 위상 이동량 0° (또는 360°).\n• 수정 발진기: 압전기 특성을 이용해 매우 안정된 고정밀 발진 주파수 획득."
      }
    ]
  },
  subject4: {
    title: "🛠️ 4과목: 전자회로검증 전범위 기출 빈출 요약노트",
    sections: [
      {
        heading: "1. 오실로스코프 및 프로브 계측 기법 [핵심]",
        detail: "• 10:1 감쇄 프로브 사용 시 오실로스코프 화면 측정 읽기값에 10배를 곱해야 실제 전압입니다.\n• 입력 임피던스가 10MΩ으로 10배 커져 측정 대상 회로에 주는 부하 효과(Loading Effect)를 최소화합니다.\n• DMM 저항 측정 시 가장 중요한 주의사항: 측정 회로의 전원을 반드시 완전히 차단(OFF)해야 장비 파손 방지."
      },
      {
        heading: "2. 리사주 도형 (Lissajous) 파형 검증",
        detail: "• 수평/수직 입력 신호의 진폭이 같고 위상차가 90° (또는 270°) 일 때 리사주 도형은 정원(Circle) 모양입니다.\n• 위상차가 0° 또는 180° 일 때는 직선 형태로 나타납니다.\n• 주파수 비: f_x / f_y = (수직 접점 수) / (수평 접점 수)."
      },
      {
        heading: "3. SPICE 시뮬레이션 해석 디렉티브",
        detail: "• .OP : 직류 동작점 (DC Operating Point) 해석 (모든 노드 DC 전압/전류 계산).\n• .TRAN : 시간에 따른 회로 파형 과도 응답 (Transient Analysis) 해석.\n• .AC : 주파수 변화에 따른 소신호 이득/위상 응답 (Bode Plot) 해석."
      },
      {
        heading: "4. EMC 전자기 적합성 및 JTAG 디버깅",
        detail: "• EMI (전자기 간섭): 기기 외부로 방출되는 전자기 노이즈 방해.\n• EMS (전자기 내성): 외부 노이즈에 견디며 정상 동작하는 내성 특성.\n• EMC (전자기 적합성): EMI 규제치 만족 + EMS 내성 확보 종합 검증 규격.\n• JTAG (IEEE 1149.1 Boundary Scan): 고밀도 PCB 핀 물리 프로브 없이 IC 핀 단선/단락 및 내장 고장 디지털 검증."
      }
    ]
  }
};
