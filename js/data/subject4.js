export const subject4Data = [
  {
    "id": "s4_1",
    "question": "[1번] 오실로스코프의 아날로그 대역폭이 BW = 350 MHz 일 때, 이 오실로스코프 자체의 10%~90% 상승 시간(Rise Time, tr_scope)은 약 얼마인가?",
    "options": [
      "1.0 ns",
      "3.5 ns",
      "0.35 ns",
      "10.0 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] 대역폭과 상승시간의 관계식: BW * tr = 0.35 (또는 tr = 0.35 / BW)\n[2단계] 수치 대입: tr_scope = 0.35 / (350 * 10^6 Hz) = 1.0 * 10^-9 s = 1.0 ns\n[3단계] 오답 함정: 350 MHz를 Hz로 대입할 때 10^6 곱셈 누락 또는 0.35 대신 3.5를 곱하는 계산 실수를 주의합니다.",
    "diagramType": null
  },
  {
    "id": "s4_2",
    "question": "[2번] 실제 상승시간이 tr_signal = 3.0 ns 인 신호를 오실로스코프 자체 상승시간 tr_scope = 4.0 ns 인 장비로 측정했을 때, 화면에 표시되는 측정 상승시간 tr_measured는?",
    "options": [
      "5.0 ns",
      "7.0 ns",
      "3.5 ns",
      "2.6 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] 오실로스코프 측정 상승시간 공식: tr_measured = √(tr_signal^2 + tr_scope^2)\n[2단계] 수치 대입: tr_measured = √(3.0^2 + 4.0^2) = √(9 + 16) = √25 = 5.0 ns\n[3단계] 오답 함정: 단순히 두 상승시간을 단순 더하기(3.0 + 4.0 = 7.0 ns)하면 오답이 유도됩니다.",
    "diagramType": null
  },
  {
    "id": "s4_3",
    "question": "[3번] 입력 임피던스가 1 MΩ // 20 pF 인 오실로스코프에 10:1 감쇠 프로브(Passive Probe)를 연결하여 조정(Compensate)하려고 한다. 10:1 프로브 내부의 등가 팁 저항 R_p와 분할 커패시터 C_p의 올바른 값은?",
    "options": [
      "R_p = 9 MΩ, C_p = 2.22 pF",
      "R_p = 10 MΩ, C_p = 20 pF",
      "R_p = 1 MΩ, C_p = 200 pF",
      "R_p = 9 MΩ, C_p = 180 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] 10:1 감쇠 조건: 전체 저항 = 10 * R_scope = 10 MΩ, 따라서 프로브 팁 저항 R_p = 10M - 1M = 9 MΩ\n[2단계] RC 시간상수 평형 조건: R_p * C_p = R_scope * C_scope\n[3단계] 수치 계산: 9 MΩ * C_p = 1 MΩ * 20 pF  =>  C_p = 20 pF / 9 = 2.22 pF",
    "diagramType": null
  },
  {
    "id": "s4_4",
    "question": "[4번] 출력 임피던스 RS = 50 Ω 인 신호원에서 입력 저항 R_in = 1 MΩ, 입력 용량 C_in = 15 pF 인 오실로스코프 프로브로 f = 100 MHz 신호를 측정할 때, 프로브의 로딩 효과에 의해 보이는 실효 입력 임피던스 |Z_in|은 약 얼마인가?",
    "options": [
      "Z_in ≈ 106 Ω",
      "Z_in = 1 MΩ",
      "Z_in = 50 Ω",
      "Z_in = 15 Ω"
    ],
    "answer": 0,
    "explanation": "[1단계] 고주파(100 MHz)에서 용량성 리액턴스 계산: XC = 1 / (2 * π * f * C_in) = 1 / (2 * 3.1416 * 100e6 * 15e-12) = 106.1 Ω\n[2단계] 실효 임피던스: 1 MΩ 과 106.1 Ω 의 병렬 결합이므로 고주파에서는 C_in의 리액턴스인 약 106 Ω 이 지배합니다.",
    "diagramType": null
  },
  {
    "id": "s4_5",
    "question": "[5번] 대역폭 BW = 350 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 1.00 ns",
      "tr = 3.50 ns",
      "tr = 0.50 ns",
      "tr = 10.00 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (350 * 10^6 Hz) = 1.00 ns",
    "diagramType": null
  },
  {
    "id": "s4_6",
    "question": "[6번] 대역폭 BW = 400 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 0.87 ns",
      "tr = 3.06 ns",
      "tr = 0.44 ns",
      "tr = 8.75 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (400 * 10^6 Hz) = 0.87 ns",
    "diagramType": null
  },
  {
    "id": "s4_7",
    "question": "[7번] 대역폭 BW = 450 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 0.78 ns",
      "tr = 2.72 ns",
      "tr = 0.39 ns",
      "tr = 7.78 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (450 * 10^6 Hz) = 0.78 ns",
    "diagramType": null
  },
  {
    "id": "s4_8",
    "question": "[8번] 대역폭 BW = 500 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 0.70 ns",
      "tr = 2.45 ns",
      "tr = 0.35 ns",
      "tr = 7.00 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (500 * 10^6 Hz) = 0.70 ns",
    "diagramType": null
  },
  {
    "id": "s4_9",
    "question": "[9번] 대역폭 BW = 550 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 0.64 ns",
      "tr = 2.23 ns",
      "tr = 0.32 ns",
      "tr = 6.36 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (550 * 10^6 Hz) = 0.64 ns",
    "diagramType": null
  },
  {
    "id": "s4_10",
    "question": "[10번] 대역폭 BW = 600 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 0.58 ns",
      "tr = 2.04 ns",
      "tr = 0.29 ns",
      "tr = 5.83 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (600 * 10^6 Hz) = 0.58 ns",
    "diagramType": null
  },
  {
    "id": "s4_11",
    "question": "[11번] 대역폭 BW = 650 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 0.54 ns",
      "tr = 1.88 ns",
      "tr = 0.27 ns",
      "tr = 5.38 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (650 * 10^6 Hz) = 0.54 ns",
    "diagramType": null
  },
  {
    "id": "s4_12",
    "question": "[12번] 대역폭 BW = 700 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 0.50 ns",
      "tr = 1.75 ns",
      "tr = 0.25 ns",
      "tr = 5.00 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (700 * 10^6 Hz) = 0.50 ns",
    "diagramType": null
  },
  {
    "id": "s4_13",
    "question": "[13번] 대역폭 BW = 750 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 0.47 ns",
      "tr = 1.63 ns",
      "tr = 0.23 ns",
      "tr = 4.67 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (750 * 10^6 Hz) = 0.47 ns",
    "diagramType": null
  },
  {
    "id": "s4_14",
    "question": "[14번] 대역폭 BW = 800 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 0.44 ns",
      "tr = 1.53 ns",
      "tr = 0.22 ns",
      "tr = 4.37 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (800 * 10^6 Hz) = 0.44 ns",
    "diagramType": null
  },
  {
    "id": "s4_15",
    "question": "[15번] 대역폭 BW = 850 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 0.41 ns",
      "tr = 1.44 ns",
      "tr = 0.21 ns",
      "tr = 4.12 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (850 * 10^6 Hz) = 0.41 ns",
    "diagramType": null
  },
  {
    "id": "s4_16",
    "question": "[16번] 대역폭 BW = 900 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 0.39 ns",
      "tr = 1.36 ns",
      "tr = 0.19 ns",
      "tr = 3.89 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (900 * 10^6 Hz) = 0.39 ns",
    "diagramType": null
  },
  {
    "id": "s4_17",
    "question": "[17번] 대역폭 BW = 950 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 0.37 ns",
      "tr = 1.29 ns",
      "tr = 0.18 ns",
      "tr = 3.68 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (950 * 10^6 Hz) = 0.37 ns",
    "diagramType": null
  },
  {
    "id": "s4_18",
    "question": "[18번] 대역폭 BW = 1000 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 0.35 ns",
      "tr = 1.22 ns",
      "tr = 0.17 ns",
      "tr = 3.50 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (1000 * 10^6 Hz) = 0.35 ns",
    "diagramType": null
  },
  {
    "id": "s4_19",
    "question": "[19번] 대역폭 BW = 1050 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 0.33 ns",
      "tr = 1.17 ns",
      "tr = 0.17 ns",
      "tr = 3.33 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (1050 * 10^6 Hz) = 0.33 ns",
    "diagramType": null
  },
  {
    "id": "s4_20",
    "question": "[20번] 대역폭 BW = 100 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 3.50 ns",
      "tr = 12.25 ns",
      "tr = 1.75 ns",
      "tr = 35.00 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (100 * 10^6 Hz) = 3.50 ns",
    "diagramType": null
  },
  {
    "id": "s4_21",
    "question": "[21번] 대역폭 BW = 150 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 2.33 ns",
      "tr = 8.17 ns",
      "tr = 1.17 ns",
      "tr = 23.33 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (150 * 10^6 Hz) = 2.33 ns",
    "diagramType": null
  },
  {
    "id": "s4_22",
    "question": "[22번] 대역폭 BW = 200 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 1.75 ns",
      "tr = 6.12 ns",
      "tr = 0.87 ns",
      "tr = 17.50 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (200 * 10^6 Hz) = 1.75 ns",
    "diagramType": null
  },
  {
    "id": "s4_23",
    "question": "[23번] 대역폭 BW = 250 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 1.40 ns",
      "tr = 4.90 ns",
      "tr = 0.70 ns",
      "tr = 14.00 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (250 * 10^6 Hz) = 1.40 ns",
    "diagramType": null
  },
  {
    "id": "s4_24",
    "question": "[24번] 대역폭 BW = 300 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 1.17 ns",
      "tr = 4.08 ns",
      "tr = 0.58 ns",
      "tr = 11.67 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (300 * 10^6 Hz) = 1.17 ns",
    "diagramType": null
  },
  {
    "id": "s4_25",
    "question": "[25번] 대역폭 BW = 350 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 1.00 ns",
      "tr = 3.50 ns",
      "tr = 0.50 ns",
      "tr = 10.00 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (350 * 10^6 Hz) = 1.00 ns",
    "diagramType": null
  },
  {
    "id": "s4_26",
    "question": "[26번] 대역폭 BW = 400 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 0.87 ns",
      "tr = 3.06 ns",
      "tr = 0.44 ns",
      "tr = 8.75 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (400 * 10^6 Hz) = 0.87 ns",
    "diagramType": null
  },
  {
    "id": "s4_27",
    "question": "[27번] 대역폭 BW = 450 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 0.78 ns",
      "tr = 2.72 ns",
      "tr = 0.39 ns",
      "tr = 7.78 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (450 * 10^6 Hz) = 0.78 ns",
    "diagramType": null
  },
  {
    "id": "s4_28",
    "question": "[28번] 대역폭 BW = 500 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 0.70 ns",
      "tr = 2.45 ns",
      "tr = 0.35 ns",
      "tr = 7.00 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (500 * 10^6 Hz) = 0.70 ns",
    "diagramType": null
  },
  {
    "id": "s4_29",
    "question": "[29번] 대역폭 BW = 550 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 0.64 ns",
      "tr = 2.23 ns",
      "tr = 0.32 ns",
      "tr = 6.36 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (550 * 10^6 Hz) = 0.64 ns",
    "diagramType": null
  },
  {
    "id": "s4_30",
    "question": "[30번] 대역폭 BW = 600 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 0.58 ns",
      "tr = 2.04 ns",
      "tr = 0.29 ns",
      "tr = 5.83 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (600 * 10^6 Hz) = 0.58 ns",
    "diagramType": null
  },
  {
    "id": "s4_31",
    "question": "[31번] 대역폭 BW = 650 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 0.54 ns",
      "tr = 1.88 ns",
      "tr = 0.27 ns",
      "tr = 5.38 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (650 * 10^6 Hz) = 0.54 ns",
    "diagramType": null
  },
  {
    "id": "s4_32",
    "question": "[32번] 대역폭 BW = 700 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 0.50 ns",
      "tr = 1.75 ns",
      "tr = 0.25 ns",
      "tr = 5.00 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (700 * 10^6 Hz) = 0.50 ns",
    "diagramType": null
  },
  {
    "id": "s4_33",
    "question": "[33번] 대역폭 BW = 750 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 0.47 ns",
      "tr = 1.63 ns",
      "tr = 0.23 ns",
      "tr = 4.67 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (750 * 10^6 Hz) = 0.47 ns",
    "diagramType": null
  },
  {
    "id": "s4_34",
    "question": "[34번] 대역폭 BW = 800 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 0.44 ns",
      "tr = 1.53 ns",
      "tr = 0.22 ns",
      "tr = 4.37 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (800 * 10^6 Hz) = 0.44 ns",
    "diagramType": null
  },
  {
    "id": "s4_35",
    "question": "[35번] 대역폭 BW = 850 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 0.41 ns",
      "tr = 1.44 ns",
      "tr = 0.21 ns",
      "tr = 4.12 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (850 * 10^6 Hz) = 0.41 ns",
    "diagramType": null
  },
  {
    "id": "s4_36",
    "question": "[36번] 대역폭 BW = 900 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 0.39 ns",
      "tr = 1.36 ns",
      "tr = 0.19 ns",
      "tr = 3.89 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (900 * 10^6 Hz) = 0.39 ns",
    "diagramType": null
  },
  {
    "id": "s4_37",
    "question": "[37번] 대역폭 BW = 950 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 0.37 ns",
      "tr = 1.29 ns",
      "tr = 0.18 ns",
      "tr = 3.68 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (950 * 10^6 Hz) = 0.37 ns",
    "diagramType": null
  },
  {
    "id": "s4_38",
    "question": "[38번] 대역폭 BW = 1000 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 0.35 ns",
      "tr = 1.22 ns",
      "tr = 0.17 ns",
      "tr = 3.50 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (1000 * 10^6 Hz) = 0.35 ns",
    "diagramType": null
  },
  {
    "id": "s4_39",
    "question": "[39번] 대역폭 BW = 1050 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 0.33 ns",
      "tr = 1.17 ns",
      "tr = 0.17 ns",
      "tr = 3.33 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (1050 * 10^6 Hz) = 0.33 ns",
    "diagramType": null
  },
  {
    "id": "s4_40",
    "question": "[40번] 대역폭 BW = 100 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 3.50 ns",
      "tr = 12.25 ns",
      "tr = 1.75 ns",
      "tr = 35.00 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (100 * 10^6 Hz) = 3.50 ns",
    "diagramType": null
  },
  {
    "id": "s4_41",
    "question": "[41번] 대역폭 BW = 150 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 2.33 ns",
      "tr = 8.17 ns",
      "tr = 1.17 ns",
      "tr = 23.33 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (150 * 10^6 Hz) = 2.33 ns",
    "diagramType": null
  },
  {
    "id": "s4_42",
    "question": "[42번] 대역폭 BW = 200 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 1.75 ns",
      "tr = 6.12 ns",
      "tr = 0.87 ns",
      "tr = 17.50 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (200 * 10^6 Hz) = 1.75 ns",
    "diagramType": null
  },
  {
    "id": "s4_43",
    "question": "[43번] 대역폭 BW = 250 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 1.40 ns",
      "tr = 4.90 ns",
      "tr = 0.70 ns",
      "tr = 14.00 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (250 * 10^6 Hz) = 1.40 ns",
    "diagramType": null
  },
  {
    "id": "s4_44",
    "question": "[44번] 대역폭 BW = 300 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 1.17 ns",
      "tr = 4.08 ns",
      "tr = 0.58 ns",
      "tr = 11.67 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (300 * 10^6 Hz) = 1.17 ns",
    "diagramType": null
  },
  {
    "id": "s4_45",
    "question": "[45번] 대역폭 BW = 350 MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
    "options": [
      "tr = 1.00 ns",
      "tr = 3.50 ns",
      "tr = 0.50 ns",
      "tr = 10.00 ns"
    ],
    "answer": 0,
    "explanation": "[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / (350 * 10^6 Hz) = 1.00 ns",
    "diagramType": null
  },
  {
    "id": "s4_46",
    "question": "[46번] SPICE 시뮬레이션에서 .TRAN 1n 100n 명령어 구문의 정확한 의미는?",
    "options": [
      "최대 출력 단계 1 ns 간격으로 총 100 ns 동안 과도 응답(Transient) 해석을 수행한다.",
      "DC 전압을 1 nV에서 100 nV까지 스위프(DC Sweep)한다.",
      "주파수를 1 Hz에서 100 Hz까지 AC 해석을 수행한다.",
      "온도를 1 ℃에서 100 ℃까지 온도 스위프 해석을 수행한다."
    ],
    "answer": 0,
    "explanation": "[1단계] .TRAN 명령어 정의: .TRAN <Print Step> <Final Time> 구문으로 시간 영역 과도 응답(Transient Analysis)을 나타냅니다.\n[2단계] 1n은 프린트 타임 스텝, 100n은 전체 해석 최종 시간입니다.",
    "diagramType": null
  },
  {
    "id": "s4_47",
    "question": "[47번] SPICE의 Monte Carlo 해석(몬테카를로 해석)을 수행하는 주요 목적 및 특징으로 가장 알맞은 것은?",
    "options": [
      "부품 값의 통계적 공차(Tolerance) 분포에 따른 회로 수율(Yield) 및 특성 변동을 예측한다.",
      "회로의 최악 조건(Worst-Case) 단 한 가지 경우만 확정적으로 계산한다.",
      "직류 바이어스 동작점(Q-point)만을 정밀하게 출력한다.",
      "주파수 응답의 보드선도(Bode Plot)를 고속으로 작도한다."
    ],
    "answer": 0,
    "explanation": "[1단계] Monte Carlo 해석: 부품 공차(예: R=10kΩ ±5%)를 가우스 분포나 균일 분포로 무작위 변경하며 다수 시뮬레이션을 수행하여 양산 수율 및 통계적 변동을 평가합니다.",
    "diagramType": null
  },
  {
    "id": "s4_48",
    "question": "[48번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±20%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 8.00 kΩ, R_max = 12.00 kΩ",
      "R_min = -10.00 kΩ, R_max = 30.00 kΩ",
      "R_min = 7.20 kΩ, R_max = 13.20 kΩ",
      "R_min = 10.00 kΩ, R_max = 18.00 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.2) = 8.00 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.2) = 12.00 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_49",
    "question": "[49번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±25%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 7.50 kΩ, R_max = 12.50 kΩ",
      "R_min = -15.00 kΩ, R_max = 35.00 kΩ",
      "R_min = 6.75 kΩ, R_max = 13.75 kΩ",
      "R_min = 10.00 kΩ, R_max = 18.75 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.25) = 7.50 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.25) = 12.50 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_50",
    "question": "[50번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±5%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 9.50 kΩ, R_max = 10.50 kΩ",
      "R_min = 5.00 kΩ, R_max = 15.00 kΩ",
      "R_min = 8.55 kΩ, R_max = 11.55 kΩ",
      "R_min = 10.00 kΩ, R_max = 15.75 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.05) = 9.50 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.05) = 10.50 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_51",
    "question": "[51번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±10%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 9.00 kΩ, R_max = 11.00 kΩ",
      "R_min = 0.00 kΩ, R_max = 20.00 kΩ",
      "R_min = 8.10 kΩ, R_max = 12.10 kΩ",
      "R_min = 10.00 kΩ, R_max = 16.50 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.1) = 9.00 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.1) = 11.00 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_52",
    "question": "[52번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±15%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 8.50 kΩ, R_max = 11.50 kΩ",
      "R_min = -5.00 kΩ, R_max = 25.00 kΩ",
      "R_min = 7.65 kΩ, R_max = 12.65 kΩ",
      "R_min = 10.00 kΩ, R_max = 17.25 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.15) = 8.50 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.15) = 11.50 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_53",
    "question": "[53번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±20%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 8.00 kΩ, R_max = 12.00 kΩ",
      "R_min = -10.00 kΩ, R_max = 30.00 kΩ",
      "R_min = 7.20 kΩ, R_max = 13.20 kΩ",
      "R_min = 10.00 kΩ, R_max = 18.00 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.2) = 8.00 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.2) = 12.00 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_54",
    "question": "[54번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±25%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 7.50 kΩ, R_max = 12.50 kΩ",
      "R_min = -15.00 kΩ, R_max = 35.00 kΩ",
      "R_min = 6.75 kΩ, R_max = 13.75 kΩ",
      "R_min = 10.00 kΩ, R_max = 18.75 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.25) = 7.50 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.25) = 12.50 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_55",
    "question": "[55번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±5%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 9.50 kΩ, R_max = 10.50 kΩ",
      "R_min = 5.00 kΩ, R_max = 15.00 kΩ",
      "R_min = 8.55 kΩ, R_max = 11.55 kΩ",
      "R_min = 10.00 kΩ, R_max = 15.75 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.05) = 9.50 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.05) = 10.50 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_56",
    "question": "[56번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±10%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 9.00 kΩ, R_max = 11.00 kΩ",
      "R_min = 0.00 kΩ, R_max = 20.00 kΩ",
      "R_min = 8.10 kΩ, R_max = 12.10 kΩ",
      "R_min = 10.00 kΩ, R_max = 16.50 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.1) = 9.00 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.1) = 11.00 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_57",
    "question": "[57번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±15%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 8.50 kΩ, R_max = 11.50 kΩ",
      "R_min = -5.00 kΩ, R_max = 25.00 kΩ",
      "R_min = 7.65 kΩ, R_max = 12.65 kΩ",
      "R_min = 10.00 kΩ, R_max = 17.25 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.15) = 8.50 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.15) = 11.50 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_58",
    "question": "[58번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±20%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 8.00 kΩ, R_max = 12.00 kΩ",
      "R_min = -10.00 kΩ, R_max = 30.00 kΩ",
      "R_min = 7.20 kΩ, R_max = 13.20 kΩ",
      "R_min = 10.00 kΩ, R_max = 18.00 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.2) = 8.00 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.2) = 12.00 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_59",
    "question": "[59번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±25%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 7.50 kΩ, R_max = 12.50 kΩ",
      "R_min = -15.00 kΩ, R_max = 35.00 kΩ",
      "R_min = 6.75 kΩ, R_max = 13.75 kΩ",
      "R_min = 10.00 kΩ, R_max = 18.75 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.25) = 7.50 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.25) = 12.50 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_60",
    "question": "[60번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±5%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 9.50 kΩ, R_max = 10.50 kΩ",
      "R_min = 5.00 kΩ, R_max = 15.00 kΩ",
      "R_min = 8.55 kΩ, R_max = 11.55 kΩ",
      "R_min = 10.00 kΩ, R_max = 15.75 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.05) = 9.50 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.05) = 10.50 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_61",
    "question": "[61번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±10%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 9.00 kΩ, R_max = 11.00 kΩ",
      "R_min = 0.00 kΩ, R_max = 20.00 kΩ",
      "R_min = 8.10 kΩ, R_max = 12.10 kΩ",
      "R_min = 10.00 kΩ, R_max = 16.50 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.1) = 9.00 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.1) = 11.00 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_62",
    "question": "[62번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±15%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 8.50 kΩ, R_max = 11.50 kΩ",
      "R_min = -5.00 kΩ, R_max = 25.00 kΩ",
      "R_min = 7.65 kΩ, R_max = 12.65 kΩ",
      "R_min = 10.00 kΩ, R_max = 17.25 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.15) = 8.50 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.15) = 11.50 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_63",
    "question": "[63번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±20%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 8.00 kΩ, R_max = 12.00 kΩ",
      "R_min = -10.00 kΩ, R_max = 30.00 kΩ",
      "R_min = 7.20 kΩ, R_max = 13.20 kΩ",
      "R_min = 10.00 kΩ, R_max = 18.00 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.2) = 8.00 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.2) = 12.00 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_64",
    "question": "[64번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±25%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 7.50 kΩ, R_max = 12.50 kΩ",
      "R_min = -15.00 kΩ, R_max = 35.00 kΩ",
      "R_min = 6.75 kΩ, R_max = 13.75 kΩ",
      "R_min = 10.00 kΩ, R_max = 18.75 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.25) = 7.50 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.25) = 12.50 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_65",
    "question": "[65번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±5%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 9.50 kΩ, R_max = 10.50 kΩ",
      "R_min = 5.00 kΩ, R_max = 15.00 kΩ",
      "R_min = 8.55 kΩ, R_max = 11.55 kΩ",
      "R_min = 10.00 kΩ, R_max = 15.75 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.05) = 9.50 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.05) = 10.50 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_66",
    "question": "[66번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±10%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 9.00 kΩ, R_max = 11.00 kΩ",
      "R_min = 0.00 kΩ, R_max = 20.00 kΩ",
      "R_min = 8.10 kΩ, R_max = 12.10 kΩ",
      "R_min = 10.00 kΩ, R_max = 16.50 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.1) = 9.00 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.1) = 11.00 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_67",
    "question": "[67번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±15%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 8.50 kΩ, R_max = 11.50 kΩ",
      "R_min = -5.00 kΩ, R_max = 25.00 kΩ",
      "R_min = 7.65 kΩ, R_max = 12.65 kΩ",
      "R_min = 10.00 kΩ, R_max = 17.25 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.15) = 8.50 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.15) = 11.50 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_68",
    "question": "[68번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±20%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 8.00 kΩ, R_max = 12.00 kΩ",
      "R_min = -10.00 kΩ, R_max = 30.00 kΩ",
      "R_min = 7.20 kΩ, R_max = 13.20 kΩ",
      "R_min = 10.00 kΩ, R_max = 18.00 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.2) = 8.00 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.2) = 12.00 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_69",
    "question": "[69번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±25%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 7.50 kΩ, R_max = 12.50 kΩ",
      "R_min = -15.00 kΩ, R_max = 35.00 kΩ",
      "R_min = 6.75 kΩ, R_max = 13.75 kΩ",
      "R_min = 10.00 kΩ, R_max = 18.75 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.25) = 7.50 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.25) = 12.50 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_70",
    "question": "[70번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±5%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 9.50 kΩ, R_max = 10.50 kΩ",
      "R_min = 5.00 kΩ, R_max = 15.00 kΩ",
      "R_min = 8.55 kΩ, R_max = 11.55 kΩ",
      "R_min = 10.00 kΩ, R_max = 15.75 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.05) = 9.50 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.05) = 10.50 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_71",
    "question": "[71번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±10%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 9.00 kΩ, R_max = 11.00 kΩ",
      "R_min = 0.00 kΩ, R_max = 20.00 kΩ",
      "R_min = 8.10 kΩ, R_max = 12.10 kΩ",
      "R_min = 10.00 kΩ, R_max = 16.50 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.1) = 9.00 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.1) = 11.00 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_72",
    "question": "[72번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±15%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 8.50 kΩ, R_max = 11.50 kΩ",
      "R_min = -5.00 kΩ, R_max = 25.00 kΩ",
      "R_min = 7.65 kΩ, R_max = 12.65 kΩ",
      "R_min = 10.00 kΩ, R_max = 17.25 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.15) = 8.50 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.15) = 11.50 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_73",
    "question": "[73번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±20%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 8.00 kΩ, R_max = 12.00 kΩ",
      "R_min = -10.00 kΩ, R_max = 30.00 kΩ",
      "R_min = 7.20 kΩ, R_max = 13.20 kΩ",
      "R_min = 10.00 kΩ, R_max = 18.00 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.2) = 8.00 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.2) = 12.00 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_74",
    "question": "[74번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±25%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 7.50 kΩ, R_max = 12.50 kΩ",
      "R_min = -15.00 kΩ, R_max = 35.00 kΩ",
      "R_min = 6.75 kΩ, R_max = 13.75 kΩ",
      "R_min = 10.00 kΩ, R_max = 18.75 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.25) = 7.50 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.25) = 12.50 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_75",
    "question": "[75번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±5%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 9.50 kΩ, R_max = 10.50 kΩ",
      "R_min = 5.00 kΩ, R_max = 15.00 kΩ",
      "R_min = 8.55 kΩ, R_max = 11.55 kΩ",
      "R_min = 10.00 kΩ, R_max = 15.75 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.05) = 9.50 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.05) = 10.50 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_76",
    "question": "[76번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±10%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 9.00 kΩ, R_max = 11.00 kΩ",
      "R_min = 0.00 kΩ, R_max = 20.00 kΩ",
      "R_min = 8.10 kΩ, R_max = 12.10 kΩ",
      "R_min = 10.00 kΩ, R_max = 16.50 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.1) = 9.00 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.1) = 11.00 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_77",
    "question": "[77번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±15%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 8.50 kΩ, R_max = 11.50 kΩ",
      "R_min = -5.00 kΩ, R_max = 25.00 kΩ",
      "R_min = 7.65 kΩ, R_max = 12.65 kΩ",
      "R_min = 10.00 kΩ, R_max = 17.25 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.15) = 8.50 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.15) = 11.50 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_78",
    "question": "[78번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±20%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 8.00 kΩ, R_max = 12.00 kΩ",
      "R_min = -10.00 kΩ, R_max = 30.00 kΩ",
      "R_min = 7.20 kΩ, R_max = 13.20 kΩ",
      "R_min = 10.00 kΩ, R_max = 18.00 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.2) = 8.00 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.2) = 12.00 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_79",
    "question": "[79번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±25%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 7.50 kΩ, R_max = 12.50 kΩ",
      "R_min = -15.00 kΩ, R_max = 35.00 kΩ",
      "R_min = 6.75 kΩ, R_max = 13.75 kΩ",
      "R_min = 10.00 kΩ, R_max = 18.75 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.25) = 7.50 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.25) = 12.50 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_80",
    "question": "[80번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±5%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 9.50 kΩ, R_max = 10.50 kΩ",
      "R_min = 5.00 kΩ, R_max = 15.00 kΩ",
      "R_min = 8.55 kΩ, R_max = 11.55 kΩ",
      "R_min = 10.00 kΩ, R_max = 15.75 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.05) = 9.50 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.05) = 10.50 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_81",
    "question": "[81번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±10%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 9.00 kΩ, R_max = 11.00 kΩ",
      "R_min = 0.00 kΩ, R_max = 20.00 kΩ",
      "R_min = 8.10 kΩ, R_max = 12.10 kΩ",
      "R_min = 10.00 kΩ, R_max = 16.50 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.1) = 9.00 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.1) = 11.00 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_82",
    "question": "[82번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±15%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 8.50 kΩ, R_max = 11.50 kΩ",
      "R_min = -5.00 kΩ, R_max = 25.00 kΩ",
      "R_min = 7.65 kΩ, R_max = 12.65 kΩ",
      "R_min = 10.00 kΩ, R_max = 17.25 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.15) = 8.50 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.15) = 11.50 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_83",
    "question": "[83번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±20%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 8.00 kΩ, R_max = 12.00 kΩ",
      "R_min = -10.00 kΩ, R_max = 30.00 kΩ",
      "R_min = 7.20 kΩ, R_max = 13.20 kΩ",
      "R_min = 10.00 kΩ, R_max = 18.00 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.2) = 8.00 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.2) = 12.00 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_84",
    "question": "[84번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±25%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 7.50 kΩ, R_max = 12.50 kΩ",
      "R_min = -15.00 kΩ, R_max = 35.00 kΩ",
      "R_min = 6.75 kΩ, R_max = 13.75 kΩ",
      "R_min = 10.00 kΩ, R_max = 18.75 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.25) = 7.50 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.25) = 12.50 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_85",
    "question": "[85번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±5%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 9.50 kΩ, R_max = 10.50 kΩ",
      "R_min = 5.00 kΩ, R_max = 15.00 kΩ",
      "R_min = 8.55 kΩ, R_max = 11.55 kΩ",
      "R_min = 10.00 kΩ, R_max = 15.75 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.05) = 9.50 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.05) = 10.50 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_86",
    "question": "[86번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±10%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 9.00 kΩ, R_max = 11.00 kΩ",
      "R_min = 0.00 kΩ, R_max = 20.00 kΩ",
      "R_min = 8.10 kΩ, R_max = 12.10 kΩ",
      "R_min = 10.00 kΩ, R_max = 16.50 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.1) = 9.00 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.1) = 11.00 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_87",
    "question": "[87번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±15%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 8.50 kΩ, R_max = 11.50 kΩ",
      "R_min = -5.00 kΩ, R_max = 25.00 kΩ",
      "R_min = 7.65 kΩ, R_max = 12.65 kΩ",
      "R_min = 10.00 kΩ, R_max = 17.25 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.15) = 8.50 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.15) = 11.50 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_88",
    "question": "[88번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±20%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 8.00 kΩ, R_max = 12.00 kΩ",
      "R_min = -10.00 kΩ, R_max = 30.00 kΩ",
      "R_min = 7.20 kΩ, R_max = 13.20 kΩ",
      "R_min = 10.00 kΩ, R_max = 18.00 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.2) = 8.00 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.2) = 12.00 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_89",
    "question": "[89번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±25%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 7.50 kΩ, R_max = 12.50 kΩ",
      "R_min = -15.00 kΩ, R_max = 35.00 kΩ",
      "R_min = 6.75 kΩ, R_max = 13.75 kΩ",
      "R_min = 10.00 kΩ, R_max = 18.75 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.25) = 7.50 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.25) = 12.50 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_90",
    "question": "[90번] Worst-Case(최악 조건) 해석에서 기준 저항 R = 10 kΩ (공차 ±5%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
    "options": [
      "R_min = 9.50 kΩ, R_max = 10.50 kΩ",
      "R_min = 5.00 kΩ, R_max = 15.00 kΩ",
      "R_min = 8.55 kΩ, R_max = 11.55 kΩ",
      "R_min = 10.00 kΩ, R_max = 15.75 kΩ"
    ],
    "answer": 0,
    "explanation": "[1단계] R_min = R * (1 - 공차) = 10 * (1 - 0.05) = 9.50 kΩ\n[2단계] R_max = R * (1 + 공차) = 10 * (1 + 0.05) = 10.50 kΩ",
    "diagramType": null
  },
  {
    "id": "s4_91",
    "question": "[91번] PCB 전송선로의 특성 임피던스가 Z0 = 50 Ω 이고, 부하 종단 저항이 ZL = 150 Ω 일 때, 신호 반사 계수(Reflection Coefficient, Γ) 및 전압 정화비(VSWR)는?",
    "options": [
      "Γ = +0.5, VSWR = 3.0",
      "Γ = -0.5, VSWR = 2.0",
      "Γ = +0.33, VSWR = 1.5",
      "Γ = +1.0, VSWR = ∞"
    ],
    "answer": 0,
    "explanation": "[1단계] 반사 계수 공식: Γ = (ZL - Z0) / (ZL + Z0)\n[2단계] 수치 대입: Γ = (150 - 50) / (150 + 50) = 100 / 200 = +0.5\n[3단계] VSWR 공식: VSWR = (1 + |Γ|) / (1 - |Γ|) = (1 + 0.5) / (1 - 0.5) = 1.5 / 0.5 = 3.0",
    "diagramType": null
  },
  {
    "id": "s4_92",
    "question": "[92번] 전원 무결성(PI) 설계를 위해 전원선과 그라운드 사이에 디커플링 커패시터를 배치하려고 한다. 공선 주파수 f_target = 100 MHz에서 리액턴스를 0.1 Ω 이하로 내리기 위한 최소 커패시턴스 C_dec는?",
    "options": [
      "C_dec ≈ 15.9 nF",
      "C_dec = 1.59 nF",
      "C_dec = 159 pF",
      "C_dec = 1.59 μF"
    ],
    "answer": 0,
    "explanation": "[1단계] 용량성 리액턴스 공식: XC = 1 / (2 * π * f * C)\n[2단계] C에 대해 정리: C = 1 / (2 * π * f * XC)\n[3단계] 대입: C_dec = 1 / (2 * 3.1416 * 100e6 * 0.1) = 1 / 62.83e6 = 1.59e-8 F = 15.9 nF",
    "diagramType": null
  },
  {
    "id": "s4_93",
    "question": "[93번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 125 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.429, VSWR = 2.50",
      "Γ = -0.429, VSWR = 3.75",
      "Γ = +0.857, VSWR = 2.50",
      "Γ = +0.429, VSWR = 1.50"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (125 - 50) / (125 + 50) = +0.429\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 2.50",
    "diagramType": null
  },
  {
    "id": "s4_94",
    "question": "[94번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 150 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.500, VSWR = 3.00",
      "Γ = -0.500, VSWR = 4.50",
      "Γ = +1.000, VSWR = 3.00",
      "Γ = +0.500, VSWR = 2.00"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (150 - 50) / (150 + 50) = +0.500\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 3.00",
    "diagramType": null
  },
  {
    "id": "s4_95",
    "question": "[95번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 175 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.556, VSWR = 3.50",
      "Γ = -0.556, VSWR = 5.25",
      "Γ = +1.111, VSWR = 3.50",
      "Γ = +0.556, VSWR = 2.50"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (175 - 50) / (175 + 50) = +0.556\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 3.50",
    "diagramType": null
  },
  {
    "id": "s4_96",
    "question": "[96번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 200 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.600, VSWR = 4.00",
      "Γ = -0.600, VSWR = 6.00",
      "Γ = +1.200, VSWR = 4.00",
      "Γ = +0.600, VSWR = 3.00"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (200 - 50) / (200 + 50) = +0.600\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 4.00",
    "diagramType": null
  },
  {
    "id": "s4_97",
    "question": "[97번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 225 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.636, VSWR = 4.50",
      "Γ = -0.636, VSWR = 6.75",
      "Γ = +1.273, VSWR = 4.50",
      "Γ = +0.636, VSWR = 3.50"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (225 - 50) / (225 + 50) = +0.636\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 4.50",
    "diagramType": null
  },
  {
    "id": "s4_98",
    "question": "[98번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 250 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.667, VSWR = 5.00",
      "Γ = -0.667, VSWR = 7.50",
      "Γ = +1.333, VSWR = 5.00",
      "Γ = +0.667, VSWR = 4.00"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (250 - 50) / (250 + 50) = +0.667\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 5.00",
    "diagramType": null
  },
  {
    "id": "s4_99",
    "question": "[99번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 275 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.692, VSWR = 5.50",
      "Γ = -0.692, VSWR = 8.25",
      "Γ = +1.385, VSWR = 5.50",
      "Γ = +0.692, VSWR = 4.50"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (275 - 50) / (275 + 50) = +0.692\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 5.50",
    "diagramType": null
  },
  {
    "id": "s4_100",
    "question": "[100번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 100 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.333, VSWR = 2.00",
      "Γ = -0.333, VSWR = 3.00",
      "Γ = +0.667, VSWR = 2.00",
      "Γ = +0.333, VSWR = 1.00"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (100 - 50) / (100 + 50) = +0.333\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 2.00",
    "diagramType": null
  },
  {
    "id": "s4_101",
    "question": "[101번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 75 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.200, VSWR = 1.50",
      "Γ = -0.200, VSWR = 2.25",
      "Γ = +0.400, VSWR = 1.50",
      "Γ = +0.200, VSWR = 0.50"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (75 - 50) / (75 + 50) = +0.200\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 1.50",
    "diagramType": null
  },
  {
    "id": "s4_102",
    "question": "[102번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 100 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.333, VSWR = 2.00",
      "Γ = -0.333, VSWR = 3.00",
      "Γ = +0.667, VSWR = 2.00",
      "Γ = +0.333, VSWR = 1.00"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (100 - 50) / (100 + 50) = +0.333\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 2.00",
    "diagramType": null
  },
  {
    "id": "s4_103",
    "question": "[103번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 125 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.429, VSWR = 2.50",
      "Γ = -0.429, VSWR = 3.75",
      "Γ = +0.857, VSWR = 2.50",
      "Γ = +0.429, VSWR = 1.50"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (125 - 50) / (125 + 50) = +0.429\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 2.50",
    "diagramType": null
  },
  {
    "id": "s4_104",
    "question": "[104번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 150 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.500, VSWR = 3.00",
      "Γ = -0.500, VSWR = 4.50",
      "Γ = +1.000, VSWR = 3.00",
      "Γ = +0.500, VSWR = 2.00"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (150 - 50) / (150 + 50) = +0.500\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 3.00",
    "diagramType": null
  },
  {
    "id": "s4_105",
    "question": "[105번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 175 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.556, VSWR = 3.50",
      "Γ = -0.556, VSWR = 5.25",
      "Γ = +1.111, VSWR = 3.50",
      "Γ = +0.556, VSWR = 2.50"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (175 - 50) / (175 + 50) = +0.556\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 3.50",
    "diagramType": null
  },
  {
    "id": "s4_106",
    "question": "[106번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 200 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.600, VSWR = 4.00",
      "Γ = -0.600, VSWR = 6.00",
      "Γ = +1.200, VSWR = 4.00",
      "Γ = +0.600, VSWR = 3.00"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (200 - 50) / (200 + 50) = +0.600\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 4.00",
    "diagramType": null
  },
  {
    "id": "s4_107",
    "question": "[107번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 225 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.636, VSWR = 4.50",
      "Γ = -0.636, VSWR = 6.75",
      "Γ = +1.273, VSWR = 4.50",
      "Γ = +0.636, VSWR = 3.50"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (225 - 50) / (225 + 50) = +0.636\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 4.50",
    "diagramType": null
  },
  {
    "id": "s4_108",
    "question": "[108번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 250 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.667, VSWR = 5.00",
      "Γ = -0.667, VSWR = 7.50",
      "Γ = +1.333, VSWR = 5.00",
      "Γ = +0.667, VSWR = 4.00"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (250 - 50) / (250 + 50) = +0.667\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 5.00",
    "diagramType": null
  },
  {
    "id": "s4_109",
    "question": "[109번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 275 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.692, VSWR = 5.50",
      "Γ = -0.692, VSWR = 8.25",
      "Γ = +1.385, VSWR = 5.50",
      "Γ = +0.692, VSWR = 4.50"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (275 - 50) / (275 + 50) = +0.692\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 5.50",
    "diagramType": null
  },
  {
    "id": "s4_110",
    "question": "[110번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 100 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.333, VSWR = 2.00",
      "Γ = -0.333, VSWR = 3.00",
      "Γ = +0.667, VSWR = 2.00",
      "Γ = +0.333, VSWR = 1.00"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (100 - 50) / (100 + 50) = +0.333\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 2.00",
    "diagramType": null
  },
  {
    "id": "s4_111",
    "question": "[111번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 75 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.200, VSWR = 1.50",
      "Γ = -0.200, VSWR = 2.25",
      "Γ = +0.400, VSWR = 1.50",
      "Γ = +0.200, VSWR = 0.50"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (75 - 50) / (75 + 50) = +0.200\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 1.50",
    "diagramType": null
  },
  {
    "id": "s4_112",
    "question": "[112번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 100 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.333, VSWR = 2.00",
      "Γ = -0.333, VSWR = 3.00",
      "Γ = +0.667, VSWR = 2.00",
      "Γ = +0.333, VSWR = 1.00"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (100 - 50) / (100 + 50) = +0.333\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 2.00",
    "diagramType": null
  },
  {
    "id": "s4_113",
    "question": "[113번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 125 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.429, VSWR = 2.50",
      "Γ = -0.429, VSWR = 3.75",
      "Γ = +0.857, VSWR = 2.50",
      "Γ = +0.429, VSWR = 1.50"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (125 - 50) / (125 + 50) = +0.429\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 2.50",
    "diagramType": null
  },
  {
    "id": "s4_114",
    "question": "[114번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 150 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.500, VSWR = 3.00",
      "Γ = -0.500, VSWR = 4.50",
      "Γ = +1.000, VSWR = 3.00",
      "Γ = +0.500, VSWR = 2.00"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (150 - 50) / (150 + 50) = +0.500\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 3.00",
    "diagramType": null
  },
  {
    "id": "s4_115",
    "question": "[115번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 175 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.556, VSWR = 3.50",
      "Γ = -0.556, VSWR = 5.25",
      "Γ = +1.111, VSWR = 3.50",
      "Γ = +0.556, VSWR = 2.50"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (175 - 50) / (175 + 50) = +0.556\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 3.50",
    "diagramType": null
  },
  {
    "id": "s4_116",
    "question": "[116번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 200 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.600, VSWR = 4.00",
      "Γ = -0.600, VSWR = 6.00",
      "Γ = +1.200, VSWR = 4.00",
      "Γ = +0.600, VSWR = 3.00"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (200 - 50) / (200 + 50) = +0.600\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 4.00",
    "diagramType": null
  },
  {
    "id": "s4_117",
    "question": "[117번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 225 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.636, VSWR = 4.50",
      "Γ = -0.636, VSWR = 6.75",
      "Γ = +1.273, VSWR = 4.50",
      "Γ = +0.636, VSWR = 3.50"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (225 - 50) / (225 + 50) = +0.636\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 4.50",
    "diagramType": null
  },
  {
    "id": "s4_118",
    "question": "[118번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 250 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.667, VSWR = 5.00",
      "Γ = -0.667, VSWR = 7.50",
      "Γ = +1.333, VSWR = 5.00",
      "Γ = +0.667, VSWR = 4.00"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (250 - 50) / (250 + 50) = +0.667\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 5.00",
    "diagramType": null
  },
  {
    "id": "s4_119",
    "question": "[119번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 275 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.692, VSWR = 5.50",
      "Γ = -0.692, VSWR = 8.25",
      "Γ = +1.385, VSWR = 5.50",
      "Γ = +0.692, VSWR = 4.50"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (275 - 50) / (275 + 50) = +0.692\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 5.50",
    "diagramType": null
  },
  {
    "id": "s4_120",
    "question": "[120번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 100 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.333, VSWR = 2.00",
      "Γ = -0.333, VSWR = 3.00",
      "Γ = +0.667, VSWR = 2.00",
      "Γ = +0.333, VSWR = 1.00"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (100 - 50) / (100 + 50) = +0.333\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 2.00",
    "diagramType": null
  },
  {
    "id": "s4_121",
    "question": "[121번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 75 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.200, VSWR = 1.50",
      "Γ = -0.200, VSWR = 2.25",
      "Γ = +0.400, VSWR = 1.50",
      "Γ = +0.200, VSWR = 0.50"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (75 - 50) / (75 + 50) = +0.200\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 1.50",
    "diagramType": null
  },
  {
    "id": "s4_122",
    "question": "[122번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 100 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.333, VSWR = 2.00",
      "Γ = -0.333, VSWR = 3.00",
      "Γ = +0.667, VSWR = 2.00",
      "Γ = +0.333, VSWR = 1.00"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (100 - 50) / (100 + 50) = +0.333\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 2.00",
    "diagramType": null
  },
  {
    "id": "s4_123",
    "question": "[123번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 125 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.429, VSWR = 2.50",
      "Γ = -0.429, VSWR = 3.75",
      "Γ = +0.857, VSWR = 2.50",
      "Γ = +0.429, VSWR = 1.50"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (125 - 50) / (125 + 50) = +0.429\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 2.50",
    "diagramType": null
  },
  {
    "id": "s4_124",
    "question": "[124번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 150 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.500, VSWR = 3.00",
      "Γ = -0.500, VSWR = 4.50",
      "Γ = +1.000, VSWR = 3.00",
      "Γ = +0.500, VSWR = 2.00"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (150 - 50) / (150 + 50) = +0.500\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 3.00",
    "diagramType": null
  },
  {
    "id": "s4_125",
    "question": "[125번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 175 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.556, VSWR = 3.50",
      "Γ = -0.556, VSWR = 5.25",
      "Γ = +1.111, VSWR = 3.50",
      "Γ = +0.556, VSWR = 2.50"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (175 - 50) / (175 + 50) = +0.556\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 3.50",
    "diagramType": null
  },
  {
    "id": "s4_126",
    "question": "[126번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 200 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.600, VSWR = 4.00",
      "Γ = -0.600, VSWR = 6.00",
      "Γ = +1.200, VSWR = 4.00",
      "Γ = +0.600, VSWR = 3.00"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (200 - 50) / (200 + 50) = +0.600\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 4.00",
    "diagramType": null
  },
  {
    "id": "s4_127",
    "question": "[127번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 225 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.636, VSWR = 4.50",
      "Γ = -0.636, VSWR = 6.75",
      "Γ = +1.273, VSWR = 4.50",
      "Γ = +0.636, VSWR = 3.50"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (225 - 50) / (225 + 50) = +0.636\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 4.50",
    "diagramType": null
  },
  {
    "id": "s4_128",
    "question": "[128번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 250 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.667, VSWR = 5.00",
      "Γ = -0.667, VSWR = 7.50",
      "Γ = +1.333, VSWR = 5.00",
      "Γ = +0.667, VSWR = 4.00"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (250 - 50) / (250 + 50) = +0.667\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 5.00",
    "diagramType": null
  },
  {
    "id": "s4_129",
    "question": "[129번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 275 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.692, VSWR = 5.50",
      "Γ = -0.692, VSWR = 8.25",
      "Γ = +1.385, VSWR = 5.50",
      "Γ = +0.692, VSWR = 4.50"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (275 - 50) / (275 + 50) = +0.692\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 5.50",
    "diagramType": null
  },
  {
    "id": "s4_130",
    "question": "[130번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 100 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.333, VSWR = 2.00",
      "Γ = -0.333, VSWR = 3.00",
      "Γ = +0.667, VSWR = 2.00",
      "Γ = +0.333, VSWR = 1.00"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (100 - 50) / (100 + 50) = +0.333\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 2.00",
    "diagramType": null
  },
  {
    "id": "s4_131",
    "question": "[131번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 75 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.200, VSWR = 1.50",
      "Γ = -0.200, VSWR = 2.25",
      "Γ = +0.400, VSWR = 1.50",
      "Γ = +0.200, VSWR = 0.50"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (75 - 50) / (75 + 50) = +0.200\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 1.50",
    "diagramType": null
  },
  {
    "id": "s4_132",
    "question": "[132번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 100 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.333, VSWR = 2.00",
      "Γ = -0.333, VSWR = 3.00",
      "Γ = +0.667, VSWR = 2.00",
      "Γ = +0.333, VSWR = 1.00"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (100 - 50) / (100 + 50) = +0.333\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 2.00",
    "diagramType": null
  },
  {
    "id": "s4_133",
    "question": "[133번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 125 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.429, VSWR = 2.50",
      "Γ = -0.429, VSWR = 3.75",
      "Γ = +0.857, VSWR = 2.50",
      "Γ = +0.429, VSWR = 1.50"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (125 - 50) / (125 + 50) = +0.429\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 2.50",
    "diagramType": null
  },
  {
    "id": "s4_134",
    "question": "[134번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 150 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.500, VSWR = 3.00",
      "Γ = -0.500, VSWR = 4.50",
      "Γ = +1.000, VSWR = 3.00",
      "Γ = +0.500, VSWR = 2.00"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (150 - 50) / (150 + 50) = +0.500\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 3.00",
    "diagramType": null
  },
  {
    "id": "s4_135",
    "question": "[135번] 특성 임피던스 Z0 = 50 Ω 인 전송선로에 ZL = 175 Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
    "options": [
      "Γ = +0.556, VSWR = 3.50",
      "Γ = -0.556, VSWR = 5.25",
      "Γ = +1.111, VSWR = 3.50",
      "Γ = +0.556, VSWR = 2.50"
    ],
    "answer": 0,
    "explanation": "[1단계] Γ = (ZL - Z0) / (ZL + Z0) = (175 - 50) / (175 + 50) = +0.556\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = 3.50",
    "diagramType": null
  },
  {
    "id": "s4_136",
    "question": "[136번] 반도체 집적회로(IC)의 발열 소모 전력이 Pd = 5 W 이다. 접합부-케이스 열저항 Rth_jc = 2 ℃/W, 케이스-방열판 열저항 Rth_cs = 1 ℃/W, 방열판-대기 열저항 Rth_sa = 5 ℃/W 일 때, 대기 온도 Ta = 25 ℃에서 접합부 최고 온도 Tj는?",
    "options": [
      "Tj = 65 ℃",
      "Tj = 40 ℃",
      "Tj = 75 ℃",
      "Tj = 90 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] 총 열저항 계산: Rth_total = Rth_jc + Rth_cs + Rth_sa = 2 + 1 + 5 = 8 ℃/W\n[2단계] 온도 상승 계산: ΔT = Pd * Rth_total = 5 W * 8 ℃/W = 40 ℃\n[3단계] 접합부 최고 온도: Tj = Ta + ΔT = 25 ℃ + 40 ℃ = 65 ℃",
    "diagramType": null
  },
  {
    "id": "s4_137",
    "question": "[137번] PCB 외층(Outer Layer) 1 oz (35 μm 두께) 동박 패턴에서 1 A의 전류를 흘릴 때 허용 온도 상승 ΔT = 10 ℃를 만족하기 위한 IPC-2221 기준 표준 패턴 폭(Trace Width)은 약 얼마인가?",
    "options": [
      "약 0.3 mm (12 mil)",
      "약 3.0 mm (120 mil)",
      "약 0.03 mm (1.2 mil)",
      "약 1.0 cm (400 mil)"
    ],
    "answer": 0,
    "explanation": "[1단계] IPC-2221 PCB 패턴 전류 용량 공식에 의해, 1 oz 동박에서 1 A 연속 전류 시 대략 10~15 mil(0.25~0.38 mm) 패턴 폭이 요구됩니다.\n[2단계] 따라서 약 0.3 mm (12 mil)가 정답입니다.",
    "diagramType": null
  },
  {
    "id": "s4_138",
    "question": "[138번] 소모 전력 Pd = 2 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 5.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 39.0 ℃",
      "Tj = 35.0 ℃",
      "Tj = 46.8 ℃",
      "Tj = 29.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 5.0 = 7.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 2 * 7.0 = 39.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_139",
    "question": "[139번] 소모 전력 Pd = 3 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 6.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 49.0 ℃",
      "Tj = 43.0 ℃",
      "Tj = 58.8 ℃",
      "Tj = 39.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 6.0 = 8.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 3 * 8.0 = 49.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_140",
    "question": "[140번] 소모 전력 Pd = 4 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 3.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 45.0 ℃",
      "Tj = 37.0 ℃",
      "Tj = 54.0 ℃",
      "Tj = 35.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 3.0 = 5.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 4 * 5.0 = 45.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_141",
    "question": "[141번] 소모 전력 Pd = 5 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 4.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 55.0 ℃",
      "Tj = 45.0 ℃",
      "Tj = 66.0 ℃",
      "Tj = 45.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 4.0 = 6.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 5 * 6.0 = 55.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_142",
    "question": "[142번] 소모 전력 Pd = 6 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 5.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 67.0 ℃",
      "Tj = 55.0 ℃",
      "Tj = 80.4 ℃",
      "Tj = 57.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 5.0 = 7.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 6 * 7.0 = 67.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_143",
    "question": "[143번] 소모 전력 Pd = 7 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 6.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 81.0 ℃",
      "Tj = 67.0 ℃",
      "Tj = 97.2 ℃",
      "Tj = 71.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 6.0 = 8.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 7 * 8.0 = 81.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_144",
    "question": "[144번] 소모 전력 Pd = 2 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 3.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 35.0 ℃",
      "Tj = 31.0 ℃",
      "Tj = 42.0 ℃",
      "Tj = 25.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 3.0 = 5.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 2 * 5.0 = 35.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_145",
    "question": "[145번] 소모 전력 Pd = 3 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 4.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 43.0 ℃",
      "Tj = 37.0 ℃",
      "Tj = 51.6 ℃",
      "Tj = 33.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 4.0 = 6.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 3 * 6.0 = 43.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_146",
    "question": "[146번] 소모 전력 Pd = 4 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 5.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 53.0 ℃",
      "Tj = 45.0 ℃",
      "Tj = 63.6 ℃",
      "Tj = 43.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 5.0 = 7.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 4 * 7.0 = 53.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_147",
    "question": "[147번] 소모 전력 Pd = 5 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 6.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 65.0 ℃",
      "Tj = 55.0 ℃",
      "Tj = 78.0 ℃",
      "Tj = 55.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 6.0 = 8.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 5 * 8.0 = 65.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_148",
    "question": "[148번] 소모 전력 Pd = 6 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 3.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 55.0 ℃",
      "Tj = 43.0 ℃",
      "Tj = 66.0 ℃",
      "Tj = 45.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 3.0 = 5.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 6 * 5.0 = 55.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_149",
    "question": "[149번] 소모 전력 Pd = 7 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 4.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 67.0 ℃",
      "Tj = 53.0 ℃",
      "Tj = 80.4 ℃",
      "Tj = 57.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 4.0 = 6.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 7 * 6.0 = 67.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_150",
    "question": "[150번] 소모 전력 Pd = 2 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 5.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 39.0 ℃",
      "Tj = 35.0 ℃",
      "Tj = 46.8 ℃",
      "Tj = 29.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 5.0 = 7.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 2 * 7.0 = 39.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_151",
    "question": "[151번] 소모 전력 Pd = 3 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 6.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 49.0 ℃",
      "Tj = 43.0 ℃",
      "Tj = 58.8 ℃",
      "Tj = 39.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 6.0 = 8.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 3 * 8.0 = 49.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_152",
    "question": "[152번] 소모 전력 Pd = 4 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 3.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 45.0 ℃",
      "Tj = 37.0 ℃",
      "Tj = 54.0 ℃",
      "Tj = 35.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 3.0 = 5.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 4 * 5.0 = 45.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_153",
    "question": "[153번] 소모 전력 Pd = 5 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 4.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 55.0 ℃",
      "Tj = 45.0 ℃",
      "Tj = 66.0 ℃",
      "Tj = 45.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 4.0 = 6.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 5 * 6.0 = 55.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_154",
    "question": "[154번] 소모 전력 Pd = 6 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 5.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 67.0 ℃",
      "Tj = 55.0 ℃",
      "Tj = 80.4 ℃",
      "Tj = 57.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 5.0 = 7.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 6 * 7.0 = 67.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_155",
    "question": "[155번] 소모 전력 Pd = 7 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 6.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 81.0 ℃",
      "Tj = 67.0 ℃",
      "Tj = 97.2 ℃",
      "Tj = 71.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 6.0 = 8.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 7 * 8.0 = 81.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_156",
    "question": "[156번] 소모 전력 Pd = 2 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 3.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 35.0 ℃",
      "Tj = 31.0 ℃",
      "Tj = 42.0 ℃",
      "Tj = 25.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 3.0 = 5.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 2 * 5.0 = 35.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_157",
    "question": "[157번] 소모 전력 Pd = 3 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 4.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 43.0 ℃",
      "Tj = 37.0 ℃",
      "Tj = 51.6 ℃",
      "Tj = 33.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 4.0 = 6.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 3 * 6.0 = 43.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_158",
    "question": "[158번] 소모 전력 Pd = 4 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 5.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 53.0 ℃",
      "Tj = 45.0 ℃",
      "Tj = 63.6 ℃",
      "Tj = 43.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 5.0 = 7.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 4 * 7.0 = 53.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_159",
    "question": "[159번] 소모 전력 Pd = 5 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 6.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 65.0 ℃",
      "Tj = 55.0 ℃",
      "Tj = 78.0 ℃",
      "Tj = 55.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 6.0 = 8.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 5 * 8.0 = 65.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_160",
    "question": "[160번] 소모 전력 Pd = 6 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 3.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 55.0 ℃",
      "Tj = 43.0 ℃",
      "Tj = 66.0 ℃",
      "Tj = 45.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 3.0 = 5.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 6 * 5.0 = 55.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_161",
    "question": "[161번] 소모 전력 Pd = 7 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 4.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 67.0 ℃",
      "Tj = 53.0 ℃",
      "Tj = 80.4 ℃",
      "Tj = 57.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 4.0 = 6.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 7 * 6.0 = 67.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_162",
    "question": "[162번] 소모 전력 Pd = 2 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 5.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 39.0 ℃",
      "Tj = 35.0 ℃",
      "Tj = 46.8 ℃",
      "Tj = 29.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 5.0 = 7.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 2 * 7.0 = 39.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_163",
    "question": "[163번] 소모 전력 Pd = 3 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 6.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 49.0 ℃",
      "Tj = 43.0 ℃",
      "Tj = 58.8 ℃",
      "Tj = 39.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 6.0 = 8.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 3 * 8.0 = 49.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_164",
    "question": "[164번] 소모 전력 Pd = 4 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 3.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 45.0 ℃",
      "Tj = 37.0 ℃",
      "Tj = 54.0 ℃",
      "Tj = 35.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 3.0 = 5.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 4 * 5.0 = 45.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_165",
    "question": "[165번] 소모 전력 Pd = 5 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 4.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 55.0 ℃",
      "Tj = 45.0 ℃",
      "Tj = 66.0 ℃",
      "Tj = 45.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 4.0 = 6.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 5 * 6.0 = 55.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_166",
    "question": "[166번] 소모 전력 Pd = 6 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 5.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 67.0 ℃",
      "Tj = 55.0 ℃",
      "Tj = 80.4 ℃",
      "Tj = 57.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 5.0 = 7.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 6 * 7.0 = 67.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_167",
    "question": "[167번] 소모 전력 Pd = 7 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 6.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 81.0 ℃",
      "Tj = 67.0 ℃",
      "Tj = 97.2 ℃",
      "Tj = 71.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 6.0 = 8.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 7 * 8.0 = 81.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_168",
    "question": "[168번] 소모 전력 Pd = 2 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 3.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 35.0 ℃",
      "Tj = 31.0 ℃",
      "Tj = 42.0 ℃",
      "Tj = 25.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 3.0 = 5.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 2 * 5.0 = 35.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_169",
    "question": "[169번] 소모 전력 Pd = 3 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 4.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 43.0 ℃",
      "Tj = 37.0 ℃",
      "Tj = 51.6 ℃",
      "Tj = 33.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 4.0 = 6.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 3 * 6.0 = 43.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_170",
    "question": "[170번] 소모 전력 Pd = 4 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 5.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 53.0 ℃",
      "Tj = 45.0 ℃",
      "Tj = 63.6 ℃",
      "Tj = 43.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 5.0 = 7.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 4 * 7.0 = 53.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_171",
    "question": "[171번] 소모 전력 Pd = 5 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 6.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 65.0 ℃",
      "Tj = 55.0 ℃",
      "Tj = 78.0 ℃",
      "Tj = 55.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 6.0 = 8.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 5 * 8.0 = 65.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_172",
    "question": "[172번] 소모 전력 Pd = 6 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 3.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 55.0 ℃",
      "Tj = 43.0 ℃",
      "Tj = 66.0 ℃",
      "Tj = 45.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 3.0 = 5.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 6 * 5.0 = 55.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_173",
    "question": "[173번] 소모 전력 Pd = 7 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 4.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 67.0 ℃",
      "Tj = 53.0 ℃",
      "Tj = 80.4 ℃",
      "Tj = 57.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 4.0 = 6.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 7 * 6.0 = 67.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_174",
    "question": "[174번] 소모 전력 Pd = 2 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 5.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 39.0 ℃",
      "Tj = 35.0 ℃",
      "Tj = 46.8 ℃",
      "Tj = 29.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 5.0 = 7.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 2 * 7.0 = 39.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_175",
    "question": "[175번] 소모 전력 Pd = 3 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 6.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 49.0 ℃",
      "Tj = 43.0 ℃",
      "Tj = 58.8 ℃",
      "Tj = 39.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 6.0 = 8.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 3 * 8.0 = 49.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_176",
    "question": "[176번] 소모 전력 Pd = 4 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 3.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 45.0 ℃",
      "Tj = 37.0 ℃",
      "Tj = 54.0 ℃",
      "Tj = 35.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 3.0 = 5.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 4 * 5.0 = 45.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_177",
    "question": "[177번] 소모 전력 Pd = 5 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 4.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 55.0 ℃",
      "Tj = 45.0 ℃",
      "Tj = 66.0 ℃",
      "Tj = 45.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 4.0 = 6.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 5 * 6.0 = 55.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_178",
    "question": "[178번] 소모 전력 Pd = 6 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 5.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 67.0 ℃",
      "Tj = 55.0 ℃",
      "Tj = 80.4 ℃",
      "Tj = 57.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 5.0 = 7.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 6 * 7.0 = 67.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_179",
    "question": "[179번] 소모 전력 Pd = 7 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 6.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 81.0 ℃",
      "Tj = 67.0 ℃",
      "Tj = 97.2 ℃",
      "Tj = 71.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 6.0 = 8.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 7 * 8.0 = 81.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_180",
    "question": "[180번] 소모 전력 Pd = 2 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 3.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 35.0 ℃",
      "Tj = 31.0 ℃",
      "Tj = 42.0 ℃",
      "Tj = 25.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 3.0 = 5.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 2 * 5.0 = 35.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_181",
    "question": "[181번] 소모 전력 Pd = 3 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 4.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 43.0 ℃",
      "Tj = 37.0 ℃",
      "Tj = 51.6 ℃",
      "Tj = 33.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 4.0 = 6.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 3 * 6.0 = 43.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_182",
    "question": "[182번] 소모 전력 Pd = 4 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 5.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 53.0 ℃",
      "Tj = 45.0 ℃",
      "Tj = 63.6 ℃",
      "Tj = 43.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 5.0 = 7.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 4 * 7.0 = 53.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_183",
    "question": "[183번] 소모 전력 Pd = 5 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 6.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 65.0 ℃",
      "Tj = 55.0 ℃",
      "Tj = 78.0 ℃",
      "Tj = 55.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 6.0 = 8.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 5 * 8.0 = 65.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_184",
    "question": "[184번] 소모 전력 Pd = 6 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 3.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 55.0 ℃",
      "Tj = 43.0 ℃",
      "Tj = 66.0 ℃",
      "Tj = 45.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 3.0 = 5.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 6 * 5.0 = 55.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_185",
    "question": "[185번] 소모 전력 Pd = 7 W, Rth_jc = 1.5 ℃/W, Rth_cs = 0.5 ℃/W, Rth_sa = 4.0 ℃/W 일 때, 대기온도 25 ℃에서의 접합부 온도 Tj는?",
    "options": [
      "Tj = 67.0 ℃",
      "Tj = 53.0 ℃",
      "Tj = 80.4 ℃",
      "Tj = 57.0 ℃"
    ],
    "answer": 0,
    "explanation": "[1단계] Rth_total = 1.5 + 0.5 + 4.0 = 6.0 ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = 25 + 7 * 6.0 = 67.0 ℃",
    "diagramType": null
  },
  {
    "id": "s4_186",
    "question": "[186번] 금속 차폐함(Shielding Enclosure)의 차폐 효과(Shielding Effectiveness, SE)가 SE = 60 dB 일 때, 입사 전계 강도 E_in 과 내부 과도 전계 강도 E_out 의 비율 (E_in / E_out)은?",
    "options": [
      "1000 배",
      "60 배",
      "100 배",
      "10000 배"
    ],
    "answer": 0,
    "explanation": "[1단계] 전계 차폐 효과 dB 공식: SE(dB) = 20 * log10(E_in / E_out)\n[2단계] 수치 계산: 60 dB = 20 * log10(Ratio)  =>  log10(Ratio) = 3\n[3단계] 비율 계산: Ratio = 10^3 = 1000 배\n[4단계] 오답 함정: 전력 dB(10 log) 공식과 착각하여 10^6 배로 계산하지 않도록 유의합니다.",
    "diagramType": null
  },
  {
    "id": "s4_187",
    "question": "[187번] 차폐 효과가 SE = 60 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "1000 배",
      "60 배",
      "10000 배",
      "500 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 60 / 20 = 3.0  =>  10^3.0 = 1000 배",
    "diagramType": null
  },
  {
    "id": "s4_188",
    "question": "[188번] 차폐 효과가 SE = 80 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "10000 배",
      "80 배",
      "100000 배",
      "5000 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 80 / 20 = 4.0  =>  10^4.0 = 10000 배",
    "diagramType": null
  },
  {
    "id": "s4_189",
    "question": "[189번] 차폐 효과가 SE = 100 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "100000 배",
      "100 배",
      "1000000 배",
      "50000 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 100 / 20 = 5.0  =>  10^5.0 = 100000 배",
    "diagramType": null
  },
  {
    "id": "s4_190",
    "question": "[190번] 차폐 효과가 SE = 20 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "10 배",
      "20 배",
      "100 배",
      "5 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 20 / 20 = 1.0  =>  10^1.0 = 10 배",
    "diagramType": null
  },
  {
    "id": "s4_191",
    "question": "[191번] 차폐 효과가 SE = 40 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "100 배",
      "40 배",
      "1000 배",
      "50 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 40 / 20 = 2.0  =>  10^2.0 = 100 배",
    "diagramType": null
  },
  {
    "id": "s4_192",
    "question": "[192번] 차폐 효과가 SE = 60 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "1000 배",
      "60 배",
      "10000 배",
      "500 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 60 / 20 = 3.0  =>  10^3.0 = 1000 배",
    "diagramType": null
  },
  {
    "id": "s4_193",
    "question": "[193번] 차폐 효과가 SE = 80 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "10000 배",
      "80 배",
      "100000 배",
      "5000 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 80 / 20 = 4.0  =>  10^4.0 = 10000 배",
    "diagramType": null
  },
  {
    "id": "s4_194",
    "question": "[194번] 차폐 효과가 SE = 100 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "100000 배",
      "100 배",
      "1000000 배",
      "50000 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 100 / 20 = 5.0  =>  10^5.0 = 100000 배",
    "diagramType": null
  },
  {
    "id": "s4_195",
    "question": "[195번] 차폐 효과가 SE = 20 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "10 배",
      "20 배",
      "100 배",
      "5 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 20 / 20 = 1.0  =>  10^1.0 = 10 배",
    "diagramType": null
  },
  {
    "id": "s4_196",
    "question": "[196번] 차폐 효과가 SE = 40 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "100 배",
      "40 배",
      "1000 배",
      "50 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 40 / 20 = 2.0  =>  10^2.0 = 100 배",
    "diagramType": null
  },
  {
    "id": "s4_197",
    "question": "[197번] 차폐 효과가 SE = 60 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "1000 배",
      "60 배",
      "10000 배",
      "500 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 60 / 20 = 3.0  =>  10^3.0 = 1000 배",
    "diagramType": null
  },
  {
    "id": "s4_198",
    "question": "[198번] 차폐 효과가 SE = 80 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "10000 배",
      "80 배",
      "100000 배",
      "5000 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 80 / 20 = 4.0  =>  10^4.0 = 10000 배",
    "diagramType": null
  },
  {
    "id": "s4_199",
    "question": "[199번] 차폐 효과가 SE = 100 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "100000 배",
      "100 배",
      "1000000 배",
      "50000 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 100 / 20 = 5.0  =>  10^5.0 = 100000 배",
    "diagramType": null
  },
  {
    "id": "s4_200",
    "question": "[200번] 차폐 효과가 SE = 20 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "10 배",
      "20 배",
      "100 배",
      "5 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 20 / 20 = 1.0  =>  10^1.0 = 10 배",
    "diagramType": null
  },
  {
    "id": "s4_201",
    "question": "[201번] 차폐 효과가 SE = 40 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "100 배",
      "40 배",
      "1000 배",
      "50 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 40 / 20 = 2.0  =>  10^2.0 = 100 배",
    "diagramType": null
  },
  {
    "id": "s4_202",
    "question": "[202번] 차폐 효과가 SE = 60 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "1000 배",
      "60 배",
      "10000 배",
      "500 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 60 / 20 = 3.0  =>  10^3.0 = 1000 배",
    "diagramType": null
  },
  {
    "id": "s4_203",
    "question": "[203번] 차폐 효과가 SE = 80 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "10000 배",
      "80 배",
      "100000 배",
      "5000 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 80 / 20 = 4.0  =>  10^4.0 = 10000 배",
    "diagramType": null
  },
  {
    "id": "s4_204",
    "question": "[204번] 차폐 효과가 SE = 100 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "100000 배",
      "100 배",
      "1000000 배",
      "50000 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 100 / 20 = 5.0  =>  10^5.0 = 100000 배",
    "diagramType": null
  },
  {
    "id": "s4_205",
    "question": "[205번] 차폐 효과가 SE = 20 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "10 배",
      "20 배",
      "100 배",
      "5 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 20 / 20 = 1.0  =>  10^1.0 = 10 배",
    "diagramType": null
  },
  {
    "id": "s4_206",
    "question": "[206번] 차폐 효과가 SE = 40 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "100 배",
      "40 배",
      "1000 배",
      "50 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 40 / 20 = 2.0  =>  10^2.0 = 100 배",
    "diagramType": null
  },
  {
    "id": "s4_207",
    "question": "[207번] 차폐 효과가 SE = 60 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "1000 배",
      "60 배",
      "10000 배",
      "500 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 60 / 20 = 3.0  =>  10^3.0 = 1000 배",
    "diagramType": null
  },
  {
    "id": "s4_208",
    "question": "[208번] 차폐 효과가 SE = 80 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "10000 배",
      "80 배",
      "100000 배",
      "5000 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 80 / 20 = 4.0  =>  10^4.0 = 10000 배",
    "diagramType": null
  },
  {
    "id": "s4_209",
    "question": "[209번] 차폐 효과가 SE = 100 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "100000 배",
      "100 배",
      "1000000 배",
      "50000 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 100 / 20 = 5.0  =>  10^5.0 = 100000 배",
    "diagramType": null
  },
  {
    "id": "s4_210",
    "question": "[210번] 차폐 효과가 SE = 20 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "10 배",
      "20 배",
      "100 배",
      "5 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 20 / 20 = 1.0  =>  10^1.0 = 10 배",
    "diagramType": null
  },
  {
    "id": "s4_211",
    "question": "[211번] 차폐 효과가 SE = 40 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "100 배",
      "40 배",
      "1000 배",
      "50 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 40 / 20 = 2.0  =>  10^2.0 = 100 배",
    "diagramType": null
  },
  {
    "id": "s4_212",
    "question": "[212번] 차폐 효과가 SE = 60 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "1000 배",
      "60 배",
      "10000 배",
      "500 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 60 / 20 = 3.0  =>  10^3.0 = 1000 배",
    "diagramType": null
  },
  {
    "id": "s4_213",
    "question": "[213번] 차폐 효과가 SE = 80 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "10000 배",
      "80 배",
      "100000 배",
      "5000 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 80 / 20 = 4.0  =>  10^4.0 = 10000 배",
    "diagramType": null
  },
  {
    "id": "s4_214",
    "question": "[214번] 차폐 효과가 SE = 100 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "100000 배",
      "100 배",
      "1000000 배",
      "50000 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 100 / 20 = 5.0  =>  10^5.0 = 100000 배",
    "diagramType": null
  },
  {
    "id": "s4_215",
    "question": "[215번] 차폐 효과가 SE = 20 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "10 배",
      "20 배",
      "100 배",
      "5 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 20 / 20 = 1.0  =>  10^1.0 = 10 배",
    "diagramType": null
  },
  {
    "id": "s4_216",
    "question": "[216번] 차폐 효과가 SE = 40 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "100 배",
      "40 배",
      "1000 배",
      "50 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 40 / 20 = 2.0  =>  10^2.0 = 100 배",
    "diagramType": null
  },
  {
    "id": "s4_217",
    "question": "[217번] 차폐 효과가 SE = 60 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "1000 배",
      "60 배",
      "10000 배",
      "500 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 60 / 20 = 3.0  =>  10^3.0 = 1000 배",
    "diagramType": null
  },
  {
    "id": "s4_218",
    "question": "[218번] 차폐 효과가 SE = 80 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "10000 배",
      "80 배",
      "100000 배",
      "5000 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 80 / 20 = 4.0  =>  10^4.0 = 10000 배",
    "diagramType": null
  },
  {
    "id": "s4_219",
    "question": "[219번] 차폐 효과가 SE = 100 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "100000 배",
      "100 배",
      "1000000 배",
      "50000 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 100 / 20 = 5.0  =>  10^5.0 = 100000 배",
    "diagramType": null
  },
  {
    "id": "s4_220",
    "question": "[220번] 차폐 효과가 SE = 20 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "10 배",
      "20 배",
      "100 배",
      "5 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 20 / 20 = 1.0  =>  10^1.0 = 10 배",
    "diagramType": null
  },
  {
    "id": "s4_221",
    "question": "[221번] 차폐 효과가 SE = 40 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "100 배",
      "40 배",
      "1000 배",
      "50 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 40 / 20 = 2.0  =>  10^2.0 = 100 배",
    "diagramType": null
  },
  {
    "id": "s4_222",
    "question": "[222번] 차폐 효과가 SE = 60 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "1000 배",
      "60 배",
      "10000 배",
      "500 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 60 / 20 = 3.0  =>  10^3.0 = 1000 배",
    "diagramType": null
  },
  {
    "id": "s4_223",
    "question": "[223번] 차폐 효과가 SE = 80 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "10000 배",
      "80 배",
      "100000 배",
      "5000 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 80 / 20 = 4.0  =>  10^4.0 = 10000 배",
    "diagramType": null
  },
  {
    "id": "s4_224",
    "question": "[224번] 차폐 효과가 SE = 100 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "100000 배",
      "100 배",
      "1000000 배",
      "50000 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 100 / 20 = 5.0  =>  10^5.0 = 100000 배",
    "diagramType": null
  },
  {
    "id": "s4_225",
    "question": "[225번] 차폐 효과가 SE = 20 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "10 배",
      "20 배",
      "100 배",
      "5 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 20 / 20 = 1.0  =>  10^1.0 = 10 배",
    "diagramType": null
  },
  {
    "id": "s4_226",
    "question": "[226번] 차폐 효과가 SE = 40 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "100 배",
      "40 배",
      "1000 배",
      "50 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 40 / 20 = 2.0  =>  10^2.0 = 100 배",
    "diagramType": null
  },
  {
    "id": "s4_227",
    "question": "[227번] 차폐 효과가 SE = 60 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "1000 배",
      "60 배",
      "10000 배",
      "500 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 60 / 20 = 3.0  =>  10^3.0 = 1000 배",
    "diagramType": null
  },
  {
    "id": "s4_228",
    "question": "[228번] 차폐 효과가 SE = 80 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "10000 배",
      "80 배",
      "100000 배",
      "5000 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 80 / 20 = 4.0  =>  10^4.0 = 10000 배",
    "diagramType": null
  },
  {
    "id": "s4_229",
    "question": "[229번] 차폐 효과가 SE = 100 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "100000 배",
      "100 배",
      "1000000 배",
      "50000 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 100 / 20 = 5.0  =>  10^5.0 = 100000 배",
    "diagramType": null
  },
  {
    "id": "s4_230",
    "question": "[230번] 차폐 효과가 SE = 20 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "10 배",
      "20 배",
      "100 배",
      "5 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 20 / 20 = 1.0  =>  10^1.0 = 10 배",
    "diagramType": null
  },
  {
    "id": "s4_231",
    "question": "[231번] 차폐 효과가 SE = 40 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "100 배",
      "40 배",
      "1000 배",
      "50 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 40 / 20 = 2.0  =>  10^2.0 = 100 배",
    "diagramType": null
  },
  {
    "id": "s4_232",
    "question": "[232번] 차폐 효과가 SE = 60 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "1000 배",
      "60 배",
      "10000 배",
      "500 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 60 / 20 = 3.0  =>  10^3.0 = 1000 배",
    "diagramType": null
  },
  {
    "id": "s4_233",
    "question": "[233번] 차폐 효과가 SE = 80 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "10000 배",
      "80 배",
      "100000 배",
      "5000 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 80 / 20 = 4.0  =>  10^4.0 = 10000 배",
    "diagramType": null
  },
  {
    "id": "s4_234",
    "question": "[234번] 차폐 효과가 SE = 100 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "100000 배",
      "100 배",
      "1000000 배",
      "50000 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 100 / 20 = 5.0  =>  10^5.0 = 100000 배",
    "diagramType": null
  },
  {
    "id": "s4_235",
    "question": "[235번] 차폐 효과가 SE = 20 dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
    "options": [
      "10 배",
      "20 배",
      "100 배",
      "5 배"
    ],
    "answer": 0,
    "explanation": "[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] 20 / 20 = 1.0  =>  10^1.0 = 10 배",
    "diagramType": null
  },
  {
    "id": "s4_236",
    "question": "[236번] 전자 장비 내 부품의 고장률이 λ = 2.5 * 10^-6 [failures/hour] 로 일정(지수 분포)할 때, 이 장비의 평균 무고장 시간(MTBF, Mean Time Between Failures)은?",
    "options": [
      "400,000 시간 (약 45.6년)",
      "250,000 시간",
      "1,000,000 시간",
      "40,000 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF와 고장률의 관계: MTBF = 1 / λ\n[2단계] 수치 대입: MTBF = 1 / (2.5 * 10^-6) = 10^6 / 2.5 = 400,000 시간\n[3단계] 설명: 고장률이 일정할 때 MTBF는 고장률의 역수 관계입니다.",
    "diagramType": null
  },
  {
    "id": "s4_237",
    "question": "[237번] 직렬 구조로 연결된 3개의 전자 부품 A, B, C의 고장률이 각각 λA = 1e-5, λB = 2e-5, λC = 2e-5 [1/h] 일 때, 시스템 전체의 고장률 λ_total 과 MTBF는?",
    "options": [
      "λ_total = 5e-5 /h, MTBF = 20,000 시간",
      "λ_total = 2e-5 /h, MTBF = 50,000 시간",
      "λ_total = 1e-5 /h, MTBF = 100,000 시간",
      "λ_total = 4e-5 /h, MTBF = 25,000 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] 직렬 시스템 고장률 공식: λ_total = λA + λB + λC\n[2단계] 고장률 합산: λ_total = 1e-5 + 2e-5 + 2e-5 = 5e-5 [1/h]\n[3단계] MTBF 계산: MTBF = 1 / λ_total = 1 / (5e-5) = 20,000 시간",
    "diagramType": null
  },
  {
    "id": "s4_238",
    "question": "[238번] 부품의 고장률 λ = 3.0 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 333,333 시간",
      "MTBF = 666,667 시간",
      "MTBF = 166,667 시간",
      "MTBF = 266,667 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (3.0 * 10^-6) = 333,333 시간",
    "diagramType": null
  },
  {
    "id": "s4_239",
    "question": "[239번] 부품의 고장률 λ = 3.5 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 285,714 시간",
      "MTBF = 571,429 시간",
      "MTBF = 142,857 시간",
      "MTBF = 228,571 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (3.5 * 10^-6) = 285,714 시간",
    "diagramType": null
  },
  {
    "id": "s4_240",
    "question": "[240번] 부품의 고장률 λ = 4.0 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 250,000 시간",
      "MTBF = 500,000 시간",
      "MTBF = 125,000 시간",
      "MTBF = 200,000 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (4.0 * 10^-6) = 250,000 시간",
    "diagramType": null
  },
  {
    "id": "s4_241",
    "question": "[241번] 부품의 고장률 λ = 4.5 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 222,222 시간",
      "MTBF = 444,444 시간",
      "MTBF = 111,111 시간",
      "MTBF = 177,778 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (4.5 * 10^-6) = 222,222 시간",
    "diagramType": null
  },
  {
    "id": "s4_242",
    "question": "[242번] 부품의 고장률 λ = 5.0 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 200,000 시간",
      "MTBF = 400,000 시간",
      "MTBF = 100,000 시간",
      "MTBF = 160,000 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (5.0 * 10^-6) = 200,000 시간",
    "diagramType": null
  },
  {
    "id": "s4_243",
    "question": "[243번] 부품의 고장률 λ = 1.0 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 1,000,000 시간",
      "MTBF = 2,000,000 시간",
      "MTBF = 500,000 시간",
      "MTBF = 800,000 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (1.0 * 10^-6) = 1,000,000 시간",
    "diagramType": null
  },
  {
    "id": "s4_244",
    "question": "[244번] 부품의 고장률 λ = 1.5 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 666,667 시간",
      "MTBF = 1,333,333 시간",
      "MTBF = 333,333 시간",
      "MTBF = 533,333 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (1.5 * 10^-6) = 666,667 시간",
    "diagramType": null
  },
  {
    "id": "s4_245",
    "question": "[245번] 부품의 고장률 λ = 2.0 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 500,000 시간",
      "MTBF = 1,000,000 시간",
      "MTBF = 250,000 시간",
      "MTBF = 400,000 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (2.0 * 10^-6) = 500,000 시간",
    "diagramType": null
  },
  {
    "id": "s4_246",
    "question": "[246번] 부품의 고장률 λ = 2.5 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 400,000 시간",
      "MTBF = 800,000 시간",
      "MTBF = 200,000 시간",
      "MTBF = 320,000 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (2.5 * 10^-6) = 400,000 시간",
    "diagramType": null
  },
  {
    "id": "s4_247",
    "question": "[247번] 부품의 고장률 λ = 3.0 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 333,333 시간",
      "MTBF = 666,667 시간",
      "MTBF = 166,667 시간",
      "MTBF = 266,667 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (3.0 * 10^-6) = 333,333 시간",
    "diagramType": null
  },
  {
    "id": "s4_248",
    "question": "[248번] 부품의 고장률 λ = 3.5 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 285,714 시간",
      "MTBF = 571,429 시간",
      "MTBF = 142,857 시간",
      "MTBF = 228,571 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (3.5 * 10^-6) = 285,714 시간",
    "diagramType": null
  },
  {
    "id": "s4_249",
    "question": "[249번] 부품의 고장률 λ = 4.0 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 250,000 시간",
      "MTBF = 500,000 시간",
      "MTBF = 125,000 시간",
      "MTBF = 200,000 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (4.0 * 10^-6) = 250,000 시간",
    "diagramType": null
  },
  {
    "id": "s4_250",
    "question": "[250번] 부품의 고장률 λ = 4.5 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 222,222 시간",
      "MTBF = 444,444 시간",
      "MTBF = 111,111 시간",
      "MTBF = 177,778 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (4.5 * 10^-6) = 222,222 시간",
    "diagramType": null
  },
  {
    "id": "s4_251",
    "question": "[251번] 부품의 고장률 λ = 5.0 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 200,000 시간",
      "MTBF = 400,000 시간",
      "MTBF = 100,000 시간",
      "MTBF = 160,000 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (5.0 * 10^-6) = 200,000 시간",
    "diagramType": null
  },
  {
    "id": "s4_252",
    "question": "[252번] 부품의 고장률 λ = 1.0 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 1,000,000 시간",
      "MTBF = 2,000,000 시간",
      "MTBF = 500,000 시간",
      "MTBF = 800,000 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (1.0 * 10^-6) = 1,000,000 시간",
    "diagramType": null
  },
  {
    "id": "s4_253",
    "question": "[253번] 부품의 고장률 λ = 1.5 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 666,667 시간",
      "MTBF = 1,333,333 시간",
      "MTBF = 333,333 시간",
      "MTBF = 533,333 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (1.5 * 10^-6) = 666,667 시간",
    "diagramType": null
  },
  {
    "id": "s4_254",
    "question": "[254번] 부품의 고장률 λ = 2.0 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 500,000 시간",
      "MTBF = 1,000,000 시간",
      "MTBF = 250,000 시간",
      "MTBF = 400,000 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (2.0 * 10^-6) = 500,000 시간",
    "diagramType": null
  },
  {
    "id": "s4_255",
    "question": "[255번] 부품의 고장률 λ = 2.5 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 400,000 시간",
      "MTBF = 800,000 시간",
      "MTBF = 200,000 시간",
      "MTBF = 320,000 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (2.5 * 10^-6) = 400,000 시간",
    "diagramType": null
  },
  {
    "id": "s4_256",
    "question": "[256번] 부품의 고장률 λ = 3.0 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 333,333 시간",
      "MTBF = 666,667 시간",
      "MTBF = 166,667 시간",
      "MTBF = 266,667 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (3.0 * 10^-6) = 333,333 시간",
    "diagramType": null
  },
  {
    "id": "s4_257",
    "question": "[257번] 부품의 고장률 λ = 3.5 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 285,714 시간",
      "MTBF = 571,429 시간",
      "MTBF = 142,857 시간",
      "MTBF = 228,571 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (3.5 * 10^-6) = 285,714 시간",
    "diagramType": null
  },
  {
    "id": "s4_258",
    "question": "[258번] 부품의 고장률 λ = 4.0 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 250,000 시간",
      "MTBF = 500,000 시간",
      "MTBF = 125,000 시간",
      "MTBF = 200,000 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (4.0 * 10^-6) = 250,000 시간",
    "diagramType": null
  },
  {
    "id": "s4_259",
    "question": "[259번] 부품의 고장률 λ = 4.5 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 222,222 시간",
      "MTBF = 444,444 시간",
      "MTBF = 111,111 시간",
      "MTBF = 177,778 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (4.5 * 10^-6) = 222,222 시간",
    "diagramType": null
  },
  {
    "id": "s4_260",
    "question": "[260번] 부품의 고장률 λ = 5.0 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 200,000 시간",
      "MTBF = 400,000 시간",
      "MTBF = 100,000 시간",
      "MTBF = 160,000 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (5.0 * 10^-6) = 200,000 시간",
    "diagramType": null
  },
  {
    "id": "s4_261",
    "question": "[261번] 부품의 고장률 λ = 1.0 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 1,000,000 시간",
      "MTBF = 2,000,000 시간",
      "MTBF = 500,000 시간",
      "MTBF = 800,000 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (1.0 * 10^-6) = 1,000,000 시간",
    "diagramType": null
  },
  {
    "id": "s4_262",
    "question": "[262번] 부품의 고장률 λ = 1.5 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 666,667 시간",
      "MTBF = 1,333,333 시간",
      "MTBF = 333,333 시간",
      "MTBF = 533,333 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (1.5 * 10^-6) = 666,667 시간",
    "diagramType": null
  },
  {
    "id": "s4_263",
    "question": "[263번] 부품의 고장률 λ = 2.0 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 500,000 시간",
      "MTBF = 1,000,000 시간",
      "MTBF = 250,000 시간",
      "MTBF = 400,000 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (2.0 * 10^-6) = 500,000 시간",
    "diagramType": null
  },
  {
    "id": "s4_264",
    "question": "[264번] 부품의 고장률 λ = 2.5 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 400,000 시간",
      "MTBF = 800,000 시간",
      "MTBF = 200,000 시간",
      "MTBF = 320,000 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (2.5 * 10^-6) = 400,000 시간",
    "diagramType": null
  },
  {
    "id": "s4_265",
    "question": "[265번] 부품의 고장률 λ = 3.0 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 333,333 시간",
      "MTBF = 666,667 시간",
      "MTBF = 166,667 시간",
      "MTBF = 266,667 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (3.0 * 10^-6) = 333,333 시간",
    "diagramType": null
  },
  {
    "id": "s4_266",
    "question": "[266번] 부품의 고장률 λ = 3.5 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 285,714 시간",
      "MTBF = 571,429 시간",
      "MTBF = 142,857 시간",
      "MTBF = 228,571 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (3.5 * 10^-6) = 285,714 시간",
    "diagramType": null
  },
  {
    "id": "s4_267",
    "question": "[267번] 부품의 고장률 λ = 4.0 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 250,000 시간",
      "MTBF = 500,000 시간",
      "MTBF = 125,000 시간",
      "MTBF = 200,000 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (4.0 * 10^-6) = 250,000 시간",
    "diagramType": null
  },
  {
    "id": "s4_268",
    "question": "[268번] 부품의 고장률 λ = 4.5 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 222,222 시간",
      "MTBF = 444,444 시간",
      "MTBF = 111,111 시간",
      "MTBF = 177,778 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (4.5 * 10^-6) = 222,222 시간",
    "diagramType": null
  },
  {
    "id": "s4_269",
    "question": "[269번] 부품의 고장률 λ = 5.0 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 200,000 시간",
      "MTBF = 400,000 시간",
      "MTBF = 100,000 시간",
      "MTBF = 160,000 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (5.0 * 10^-6) = 200,000 시간",
    "diagramType": null
  },
  {
    "id": "s4_270",
    "question": "[270번] 부품의 고장률 λ = 1.0 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 1,000,000 시간",
      "MTBF = 2,000,000 시간",
      "MTBF = 500,000 시간",
      "MTBF = 800,000 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (1.0 * 10^-6) = 1,000,000 시간",
    "diagramType": null
  },
  {
    "id": "s4_271",
    "question": "[271번] 부품의 고장률 λ = 1.5 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 666,667 시간",
      "MTBF = 1,333,333 시간",
      "MTBF = 333,333 시간",
      "MTBF = 533,333 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (1.5 * 10^-6) = 666,667 시간",
    "diagramType": null
  },
  {
    "id": "s4_272",
    "question": "[272번] 부품의 고장률 λ = 2.0 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 500,000 시간",
      "MTBF = 1,000,000 시간",
      "MTBF = 250,000 시간",
      "MTBF = 400,000 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (2.0 * 10^-6) = 500,000 시간",
    "diagramType": null
  },
  {
    "id": "s4_273",
    "question": "[273번] 부품의 고장률 λ = 2.5 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 400,000 시간",
      "MTBF = 800,000 시간",
      "MTBF = 200,000 시간",
      "MTBF = 320,000 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (2.5 * 10^-6) = 400,000 시간",
    "diagramType": null
  },
  {
    "id": "s4_274",
    "question": "[274번] 부품의 고장률 λ = 3.0 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 333,333 시간",
      "MTBF = 666,667 시간",
      "MTBF = 166,667 시간",
      "MTBF = 266,667 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (3.0 * 10^-6) = 333,333 시간",
    "diagramType": null
  },
  {
    "id": "s4_275",
    "question": "[275번] 부품의 고장률 λ = 3.5 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 285,714 시간",
      "MTBF = 571,429 시간",
      "MTBF = 142,857 시간",
      "MTBF = 228,571 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (3.5 * 10^-6) = 285,714 시간",
    "diagramType": null
  },
  {
    "id": "s4_276",
    "question": "[276번] 부품의 고장률 λ = 4.0 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 250,000 시간",
      "MTBF = 500,000 시간",
      "MTBF = 125,000 시간",
      "MTBF = 200,000 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (4.0 * 10^-6) = 250,000 시간",
    "diagramType": null
  },
  {
    "id": "s4_277",
    "question": "[277번] 부품의 고장률 λ = 4.5 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 222,222 시간",
      "MTBF = 444,444 시간",
      "MTBF = 111,111 시간",
      "MTBF = 177,778 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (4.5 * 10^-6) = 222,222 시간",
    "diagramType": null
  },
  {
    "id": "s4_278",
    "question": "[278번] 부품의 고장률 λ = 5.0 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 200,000 시간",
      "MTBF = 400,000 시간",
      "MTBF = 100,000 시간",
      "MTBF = 160,000 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (5.0 * 10^-6) = 200,000 시간",
    "diagramType": null
  },
  {
    "id": "s4_279",
    "question": "[279번] 부품의 고장률 λ = 1.0 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 1,000,000 시간",
      "MTBF = 2,000,000 시간",
      "MTBF = 500,000 시간",
      "MTBF = 800,000 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (1.0 * 10^-6) = 1,000,000 시간",
    "diagramType": null
  },
  {
    "id": "s4_280",
    "question": "[280번] 부품의 고장률 λ = 1.5 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 666,667 시간",
      "MTBF = 1,333,333 시간",
      "MTBF = 333,333 시간",
      "MTBF = 533,333 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (1.5 * 10^-6) = 666,667 시간",
    "diagramType": null
  },
  {
    "id": "s4_281",
    "question": "[281번] 부품의 고장률 λ = 2.0 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 500,000 시간",
      "MTBF = 1,000,000 시간",
      "MTBF = 250,000 시간",
      "MTBF = 400,000 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (2.0 * 10^-6) = 500,000 시간",
    "diagramType": null
  },
  {
    "id": "s4_282",
    "question": "[282번] 부품의 고장률 λ = 2.5 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 400,000 시간",
      "MTBF = 800,000 시간",
      "MTBF = 200,000 시간",
      "MTBF = 320,000 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (2.5 * 10^-6) = 400,000 시간",
    "diagramType": null
  },
  {
    "id": "s4_283",
    "question": "[283번] 부품의 고장률 λ = 3.0 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 333,333 시간",
      "MTBF = 666,667 시간",
      "MTBF = 166,667 시간",
      "MTBF = 266,667 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (3.0 * 10^-6) = 333,333 시간",
    "diagramType": null
  },
  {
    "id": "s4_284",
    "question": "[284번] 부품의 고장률 λ = 3.5 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 285,714 시간",
      "MTBF = 571,429 시간",
      "MTBF = 142,857 시간",
      "MTBF = 228,571 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (3.5 * 10^-6) = 285,714 시간",
    "diagramType": null
  },
  {
    "id": "s4_285",
    "question": "[285번] 부품의 고장률 λ = 4.0 * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
    "options": [
      "MTBF = 250,000 시간",
      "MTBF = 500,000 시간",
      "MTBF = 125,000 시간",
      "MTBF = 200,000 시간"
    ],
    "answer": 0,
    "explanation": "[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / (4.0 * 10^-6) = 250,000 시간",
    "diagramType": null
  }
];
