// Circuit and Diagram SVG Generators for Electronics Exam
export const circuitSVGs = {
  // 1. OP-Amp Non-Inverting Amplifier
  opampNonInverting: `
    <svg viewBox="0 0 400 220" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a; border-radius:12px; padding:10px;">
      <!-- OP-Amp Triangle -->
      <polygon points="140,50 140,170 260,110" fill="none" stroke="#818cf8" stroke-width="3"/>
      <!-- Inputs -->
      <text x="148" y="80" fill="#ef4444" font-size="20" font-weight="bold">-</text>
      <text x="148" y="150" fill="#10b981" font-size="20" font-weight="bold">+</text>
      <!-- Non-inverting Input Vin -->
      <line x1="40" y1="145" x2="140" y2="145" stroke="#38bdf8" stroke-width="3"/>
      <circle cx="40" cy="145" r="4" fill="#38bdf8"/>
      <text x="15" y="150" fill="#f8fafc" font-size="14" font-weight="bold">Vin</text>
      <!-- Feedback Resistor Rf -->
      <line x1="100" y1="75" x2="140" y2="75" stroke="#38bdf8" stroke-width="3"/>
      <line x1="100" y1="75" x2="100" y2="25" stroke="#38bdf8" stroke-width="3"/>
      <line x1="100" y1="25" x2="280" y2="25" stroke="#38bdf8" stroke-width="3"/>
      <line x1="280" y1="25" x2="280" y2="110" stroke="#38bdf8" stroke-width="3"/>
      <rect x="160" y="15" width="60" height="20" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
      <text x="180" y="30" fill="#f59e0b" font-size="12" font-weight="bold">Rf</text>
      <!-- R1 Resistor to Ground -->
      <line x1="100" y1="75" x2="60" y2="75" stroke="#38bdf8" stroke-width="3"/>
      <rect x="50" y="85" width="20" height="50" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
      <text x="20" y="115" fill="#f59e0b" font-size="12" font-weight="bold">R1</text>
      <line x1="60" y1="75" x2="60" y2="85" stroke="#38bdf8" stroke-width="3"/>
      <line x1="60" y1="135" x2="60" y2="160" stroke="#38bdf8" stroke-width="3"/>
      <!-- Ground -->
      <line x1="45" y1="160" x2="75" y2="160" stroke="#94a3b8" stroke-width="3"/>
      <line x1="52" y1="166" x2="68" y2="166" stroke="#94a3b8" stroke-width="2"/>
      <line x1="57" y1="172" x2="63" y2="172" stroke="#94a3b8" stroke-width="2"/>
      <!-- Output Vout -->
      <line x1="260" y1="110" x2="350" y2="110" stroke="#38bdf8" stroke-width="3"/>
      <circle cx="350" cy="110" r="4" fill="#38bdf8"/>
      <text x="360" y="115" fill="#f8fafc" font-size="14" font-weight="bold">Vout</text>
    </svg>
  `,

  // 2. Logic Gate Diagram (XOR Gate)
  xorGate: `
    <svg viewBox="0 0 350 160" width="100%" height="150" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a; border-radius:12px; padding:10px;">
      <!-- Input Lines -->
      <line x1="30" y1="50" x2="110" y2="50" stroke="#38bdf8" stroke-width="3"/>
      <line x1="30" y1="110" x2="110" y2="110" stroke="#38bdf8" stroke-width="3"/>
      <text x="10" y="55" fill="#f8fafc" font-size="16" font-weight="bold">A</text>
      <text x="10" y="115" fill="#f8fafc" font-size="16" font-weight="bold">B</text>
      <!-- XOR Extra Curved Line -->
      <path d="M 95 30 Q 125 80 95 130" fill="none" stroke="#c084fc" stroke-width="3"/>
      <!-- XOR Main Gate Path -->
      <path d="M 110 30 Q 140 80 110 130 Q 190 130 230 80 Q 190 30 110 30 Z" fill="#1e293b" stroke="#c084fc" stroke-width="3"/>
      <!-- Output Line -->
      <line x1="230" y1="80" x2="310" y2="80" stroke="#38bdf8" stroke-width="3"/>
      <circle cx="310" cy="80" r="4" fill="#38bdf8"/>
      <text x="320" y="85" fill="#f8fafc" font-size="16" font-weight="bold">Y</text>
      <text x="145" y="85" fill="#c084fc" font-size="14" font-weight="bold">XOR</text>
    </svg>
  `,

  // 3. Karnaugh Map (4x4)
  karnaughMap: `
    <svg viewBox="0 0 340 220" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a; border-radius:12px; padding:10px;">
      <text x="20" y="30" fill="#818cf8" font-size="14" font-weight="bold">AB \\ CD</text>
      <!-- Grid Headers -->
      <text x="90" y="30" fill="#94a3b8" font-size="12">00</text>
      <text x="145" y="30" fill="#94a3b8" font-size="12">01</text>
      <text x="200" y="30" fill="#94a3b8" font-size="12">11</text>
      <text x="255" y="30" fill="#94a3b8" font-size="12">10</text>
      <!-- Row Labels -->
      <text x="35" y="70" fill="#94a3b8" font-size="12">00</text>
      <text x="35" y="110" fill="#94a3b8" font-size="12">01</text>
      <text x="35" y="150" fill="#94a3b8" font-size="12">11</text>
      <text x="35" y="190" fill="#94a3b8" font-size="12">10</text>
      <!-- Grid Borders -->
      <rect x="70" y="45" width="220" height="160" fill="none" stroke="#475569" stroke-width="2"/>
      <line x1="125" y1="45" x2="125" y2="205" stroke="#334155" stroke-width="1.5"/>
      <line x1="180" y1="45" x2="180" y2="205" stroke="#334155" stroke-width="1.5"/>
      <line x1="235" y1="45" x2="235" y2="205" stroke="#334155" stroke-width="1.5"/>
      <line x1="70" y1="85" x2="290" y2="85" stroke="#334155" stroke-width="1.5"/>
      <line x1="70" y1="125" x2="290" y2="125" stroke="#334155" stroke-width="1.5"/>
      <line x1="70" y1="165" x2="290" y2="165" stroke="#334155" stroke-width="1.5"/>
      <!-- Group Highlight Circle -->
      <rect x="128" y="88" width="104" height="74" rx="8" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" stroke-width="2"/>
      <!-- Sample Values -->
      <text x="95" y="70" fill="#f8fafc" font-size="14">0</text>
      <text x="150" y="70" fill="#f8fafc" font-size="14">0</text>
      <text x="205" y="70" fill="#f8fafc" font-size="14">1</text>
      <text x="260" y="70" fill="#f8fafc" font-size="14">0</text>
      
      <text x="95" y="110" fill="#f8fafc" font-size="14">0</text>
      <text x="150" y="110" fill="#f59e0b" font-weight="bold" font-size="15">1</text>
      <text x="205" y="110" fill="#f59e0b" font-weight="bold" font-size="15">1</text>
      <text x="260" y="110" fill="#f8fafc" font-size="14">0</text>
      
      <text x="95" y="150" fill="#f8fafc" font-size="14">0</text>
      <text x="150" y="150" fill="#f59e0b" font-weight="bold" font-size="15">1</text>
      <text x="205" y="150" fill="#f59e0b" font-weight="bold" font-size="15">1</text>
      <text x="260" y="150" fill="#f8fafc" font-size="14">0</text>
    </svg>
  `,

  // 4. Oscilloscope Lissajous Circle (90 Deg Phase)
  lissajousCircle: `
    <svg viewBox="0 0 300 200" width="100%" height="170" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a; border-radius:12px; padding:10px;">
      <!-- Grid lines -->
      <line x1="150" y1="20" x2="150" y2="180" stroke="#334155" stroke-dasharray="4" stroke-width="2"/>
      <line x1="30" y1="100" x2="270" y2="100" stroke="#334155" stroke-dasharray="4" stroke-width="2"/>
      <!-- Circle Lissajous -->
      <circle cx="150" cy="100" r="65" fill="none" stroke="#10b981" stroke-width="3"/>
      <text x="40" y="35" fill="#10b981" font-size="13" font-weight="bold">리사주 도형 (위상차 = 90°)</text>
      <text x="160" y="25" fill="#94a3b8" font-size="11">Y축 신호</text>
      <text x="230" y="118" fill="#94a3b8" font-size="11">X축 신호</text>
    </svg>
  `,

  // 5. Bridge Rectifier Diagram
  bridgeRectifier: `
    <svg viewBox="0 0 380 200" width="100%" height="170" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a; border-radius:12px; padding:10px;">
      <!-- AC Input Source -->
      <circle cx="40" cy="100" r="22" fill="none" stroke="#38bdf8" stroke-width="2"/>
      <path d="M 28 100 Q 34 88 40 100 T 52 100" fill="none" stroke="#38bdf8" stroke-width="2"/>
      <text x="25" y="140" fill="#38bdf8" font-size="12" font-weight="bold">AC Vin</text>
      <!-- Bridge Diamond -->
      <polygon points="180,40 240,100 180,160 120,100" fill="none" stroke="#818cf8" stroke-width="3"/>
      <!-- Diode Symbols (4 Diodes) -->
      <polygon points="140,60 160,80 140,80" fill="#818cf8"/>
      <line x1="160" y1="60" x2="160" y2="80" stroke="#818cf8" stroke-width="3"/>
      <!-- Connections -->
      <line x1="62" y1="100" x2="120" y2="100" stroke="#38bdf8" stroke-width="2"/>
      <line x1="240" y1="100" x2="310" y2="100" stroke="#38bdf8" stroke-width="2"/>
      <!-- Load Resistor RL -->
      <rect x="310" y="75" width="20" height="50" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
      <text x="340" y="105" fill="#f59e0b" font-size="14" font-weight="bold">RL (Vdc)</text>
    </svg>
  `,

  // 6. BJT Common Emitter Circuit
  bjtCommonEmitter: `
    <svg viewBox="0 0 360 220" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a; border-radius:12px; padding:10px;">
      <!-- BJT Transistor Circle -->
      <circle cx="180" cy="110" r="35" fill="none" stroke="#818cf8" stroke-width="2"/>
      <!-- Base, Collector, Emitter Lines -->
      <line x1="165" y1="90" x2="165" y2="130" stroke="#818cf8" stroke-width="4"/>
      <line x1="110" y1="110" x2="165" y2="110" stroke="#38bdf8" stroke-width="3"/>
      <line x1="165" y1="95" x2="195" y2="70" stroke="#818cf8" stroke-width="3"/>
      <line x1="165" y1="125" x2="195" y2="150" stroke="#818cf8" stroke-width="3"/>
      <!-- Emitter Arrow (NPN) -->
      <polygon points="195,150 182,142 188,136" fill="#818cf8"/>
      <!-- Resistors -->
      <rect x="185" y="25" width="20" height="40" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
      <text x="212" y="50" fill="#f59e0b" font-size="12" font-weight="bold">Rc</text>
      <line x1="195" y1="10" x2="195" y2="25" stroke="#38bdf8" stroke-width="2"/>
      <text x="180" y="10" fill="#ef4444" font-size="12" font-weight="bold">+Vcc</text>
      <!-- Base Resistor Rb -->
      <rect x="55" y="100" width="40" height="20" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
      <text x="65" y="92" fill="#f59e0b" font-size="12" font-weight="bold">Rb</text>
      <text x="15" y="115" fill="#38bdf8" font-size="13" font-weight="bold">Vin</text>
    </svg>
  `
};
