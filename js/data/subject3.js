export const subject3Data = [
  {
    "id": "s3_1",
    "question": "[1번] BJT 고정 바이어스 회로에서 VCC = 12 V, RB = 240 kΩ, RC = 2 kΩ, β = 100 이고 VBE = 0.7 V 이다. 동작점(Q-point)에서의 컬렉터 전류 IC와 컬렉터-에미터 전압 VCE는?",
    "options": [
      "IC = 4.71 mA, VCE = 2.58 V",
      "IC = 4.71 mA, VCE = 9.42 V",
      "IC = 2.35 mA, VCE = 7.30 V",
      "IC = 5.00 mA, VCE = 2.00 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 계산: IB = (VCC - VBE) / RB = (12 - 0.7) / 240k = 11.3 / 240k = 47.08 μA\n[2단계] 컬렉터 전류 계산: IC = β * IB = 100 * 47.08 μA = 4.708 mA ≈ 4.71 mA\n[3단계] 컬렉터-에미터 전압 계산: VCE = VCC - IC * RC = 12 - (4.708m * 2k) = 12 - 9.416 = 2.58 V\n[4단계] 오답 함정: IC * RC 전압강하(9.42 V)를 VCE로 착각하는 실수를 유의해야 합니다.",
    "diagramType": null
  },
  {
    "id": "s3_2",
    "question": "[2번] 전압 분배 바이어스 BJT 회로에서 VCC = 15 V, R1 = 100 kΩ, R2 = 20 kΩ, RC = 3.9 kΩ, RE = 1 kΩ, VBE = 0.7 V 일 때, 베이스 전압 VB와 에미터 전류 IE는?",
    "options": [
      "VB = 2.5 V, IE = 1.8 mA",
      "VB = 2.5 V, IE = 2.5 mA",
      "VB = 3.0 V, IE = 2.3 mA",
      "VB = 1.8 V, IE = 1.1 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전압 VB = VCC * R2 / (R1 + R2) = 15 * 20k / 120k = 2.5 V\n[2단계] 에미터 전압 VE = VB - VBE = 2.5 - 0.7 = 1.8 V\n[3단계] 에미터 전류 IE = VE / RE = 1.8 V / 1 kΩ = 1.8 mA\n[4단계] 오답 함정: VB에서 VBE 전압강하(0.7V) 차감을 누락하면 IE = 2.5 mA 오답이 유도됩니다.",
    "diagramType": null
  },
  {
    "id": "s3_3",
    "question": "[3번] BJT 바이어스 회로의 바이어스 안정도 계수 S = dIC / dICBO 에 대한 설명 중 가장 올바른 것은?",
    "options": [
      "S 값이 1에 가까울수록 온도 변화에 대해 회로가 매우 안정적이다.",
      "S 값이 크면 클수록 온도 변화에 대해 컬렉터 전류가 더 안정적이다.",
      "고정 바이어스 회로는 S 값이 1로 가장 우수한 바이어스 안정도를 갖는다.",
      "에미터 저항 RE가 커지면 S 값이 급격히 증가하여 불안정해진다."
    ],
    "answer": 0,
    "explanation": "[1단계] 안정도 계수 정의: S = dIC / dICBO 로, 온도 변화에 따른 누설전류(ICBO) 변화가 IC에 미치는 영향을 나타냅니다.\n[2단계] 이상적 값: S가 1일 때가 완벽한 이상적 상태이며, S가 작을수록 안정적입니다.\n[3단계] 고정 바이어스 회로의 S = 1 + β 로 매우 크기 때문에 온도에 매우 불안정합니다.",
    "diagramType": null
  },
  {
    "id": "s3_4",
    "question": "[4번] JFET 바이어스 회로에서 IDSS = 10 mA, VP = -4 V 이다. VGS = -2 V 일 때, Shockley 방정식을 이용한 드레인 전류 ID는?",
    "options": [
      "ID = 2.5 mA",
      "ID = 5.0 mA",
      "ID = 1.25 mA",
      "ID = 7.5 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] Shockley 공식: ID = IDSS * (1 - VGS / VP)^2\n[2단계] 대입: ID = 10mA * (1 - (-2) / (-4))^2 = 10mA * (1 - 0.5)^2 = 10mA * 0.25 = 2.5 mA\n[3단계] 함정: 제곱(^2)을 누락하면 10mA * 0.5 = 5.0 mA 오답이 유도됩니다.",
    "diagramType": null
  },
  {
    "id": "s3_5",
    "question": "[5번] Self-Bias(자체 바이어스) JFET 회로에서 IDSS = 8 mA, VP = -4 V, RS = 1 kΩ 일 때, 동작점의 VGS와 ID 값은?",
    "options": [
      "VGS = -2.0 V, ID = 2.0 mA",
      "VGS = -1.0 V, ID = 4.0 mA",
      "VGS = -3.0 V, ID = 1.0 mA",
      "VGS = -2.5 V, ID = 2.5 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] 자체 바이어스 관계식: VGS = -ID * RS\n[2단계] Shockley 식 대입: ID = 8mA * (1 - (-ID * 1k) / (-4))^2\n[3단계] 방정식 풀이: ID = 2.0 mA 일 때, VGS = -2.0 V 이며, IDSS * (1 - 0.5)^2 = 8mA * 0.25 = 2.0 mA 로 성립합니다.",
    "diagramType": null
  },
  {
    "id": "s3_6",
    "question": "[6번] E-MOSFET(증가형 MOSFET) 바이어스 회로에서 VT = 2 V, k = 0.5 mA/V^2 일 때, VGS = 5 V에서 드레인 전류 ID는?",
    "options": [
      "ID = 4.5 mA",
      "ID = 2.25 mA",
      "ID = 9.0 mA",
      "ID = 1.5 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] E-MOSFET 포화 영역 전류 공식: ID = k * (VGS - VT)^2\n[2단계] 수치 대입: ID = 0.5 mA/V^2 * (5 - 2)^2 = 0.5 * (3)^2 = 0.5 * 9 = 4.5 mA\n[3단계] 오답 함정: 1/2 계수가 k에 이미 포함되어 있는 형태인지 확인해야 하며, (5-2)=3만 곱하는 실수를 주의해야 합니다.",
    "diagramType": null
  },
  {
    "id": "s3_7",
    "question": "[7번] BJT 회로 조건(VCC = 24V, RB = 360kΩ, RC = 2.0kΩ, β = 100)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 6.47 mA, VCE = 11.06 V",
      "IC = 7.77 mA, VCE = 8.84 V",
      "IC = 5.18 mA, VCE = 13.27 V",
      "IC = 6.47 mA, VCE = 17.53 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (24 - 0.7) / 360kΩ = 64.72 μA\n[2단계] IC = β * IB = 6.47 mA\n[3단계] VCE = VCC - IC * RC = 24 - (6.47m * 2.0k) = 11.06 V",
    "diagramType": null
  },
  {
    "id": "s3_8",
    "question": "[8번] BJT 회로 조건(VCC = 26V, RB = 150kΩ, RC = 2.5kΩ, β = 120)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 20.24 mA, VCE = -24.60 V",
      "IC = 24.29 mA, VCE = -19.68 V",
      "IC = 16.19 mA, VCE = -29.52 V",
      "IC = 20.24 mA, VCE = 0.70 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (26 - 0.7) / 150kΩ = 168.67 μA\n[2단계] IC = β * IB = 20.24 mA\n[3단계] VCE = VCC - IC * RC = 26 - (20.24m * 2.5k) = -24.60 V",
    "diagramType": null
  },
  {
    "id": "s3_9",
    "question": "[9번] BJT 회로 조건(VCC = 28V, RB = 180kΩ, RC = 3.0kΩ, β = 140)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 21.23 mA, VCE = -35.70 V",
      "IC = 25.48 mA, VCE = -28.56 V",
      "IC = 16.99 mA, VCE = -42.84 V",
      "IC = 21.23 mA, VCE = -3.85 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (28 - 0.7) / 180kΩ = 151.67 μA\n[2단계] IC = β * IB = 21.23 mA\n[3단계] VCE = VCC - IC * RC = 28 - (21.23m * 3.0k) = -35.70 V",
    "diagramType": null
  },
  {
    "id": "s3_10",
    "question": "[10번] BJT 회로 조건(VCC = 10V, RB = 210kΩ, RC = 1.0kΩ, β = 160)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 7.09 mA, VCE = 2.91 V",
      "IC = 8.50 mA, VCE = 2.33 V",
      "IC = 5.67 mA, VCE = 3.50 V",
      "IC = 7.09 mA, VCE = 6.46 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (10 - 0.7) / 210kΩ = 44.29 μA\n[2단계] IC = β * IB = 7.09 mA\n[3단계] VCE = VCC - IC * RC = 10 - (7.09m * 1.0k) = 2.91 V",
    "diagramType": null
  },
  {
    "id": "s3_11",
    "question": "[11번] BJT 회로 조건(VCC = 12V, RB = 240kΩ, RC = 1.5kΩ, β = 180)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 8.47 mA, VCE = -0.71 V",
      "IC = 10.17 mA, VCE = -0.57 V",
      "IC = 6.78 mA, VCE = -0.85 V",
      "IC = 8.47 mA, VCE = 5.64 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (12 - 0.7) / 240kΩ = 47.08 μA\n[2단계] IC = β * IB = 8.47 mA\n[3단계] VCE = VCC - IC * RC = 12 - (8.47m * 1.5k) = -0.71 V",
    "diagramType": null
  },
  {
    "id": "s3_12",
    "question": "[12번] BJT 회로 조건(VCC = 14V, RB = 270kΩ, RC = 2.0kΩ, β = 80)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 3.94 mA, VCE = 6.12 V",
      "IC = 4.73 mA, VCE = 4.89 V",
      "IC = 3.15 mA, VCE = 7.34 V",
      "IC = 3.94 mA, VCE = 10.06 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (14 - 0.7) / 270kΩ = 49.26 μA\n[2단계] IC = β * IB = 3.94 mA\n[3단계] VCE = VCC - IC * RC = 14 - (3.94m * 2.0k) = 6.12 V",
    "diagramType": null
  },
  {
    "id": "s3_13",
    "question": "[13번] BJT 회로 조건(VCC = 16V, RB = 300kΩ, RC = 2.5kΩ, β = 100)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 5.10 mA, VCE = 3.25 V",
      "IC = 6.12 mA, VCE = 2.60 V",
      "IC = 4.08 mA, VCE = 3.90 V",
      "IC = 5.10 mA, VCE = 9.62 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (16 - 0.7) / 300kΩ = 51.00 μA\n[2단계] IC = β * IB = 5.10 mA\n[3단계] VCE = VCC - IC * RC = 16 - (5.10m * 2.5k) = 3.25 V",
    "diagramType": null
  },
  {
    "id": "s3_14",
    "question": "[14번] BJT 회로 조건(VCC = 18V, RB = 330kΩ, RC = 3.0kΩ, β = 120)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 6.29 mA, VCE = -0.87 V",
      "IC = 7.55 mA, VCE = -0.70 V",
      "IC = 5.03 mA, VCE = -1.05 V",
      "IC = 6.29 mA, VCE = 8.56 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (18 - 0.7) / 330kΩ = 52.42 μA\n[2단계] IC = β * IB = 6.29 mA\n[3단계] VCE = VCC - IC * RC = 18 - (6.29m * 3.0k) = -0.87 V",
    "diagramType": null
  },
  {
    "id": "s3_15",
    "question": "[15번] BJT 회로 조건(VCC = 20V, RB = 360kΩ, RC = 1.0kΩ, β = 140)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 7.51 mA, VCE = 12.49 V",
      "IC = 9.01 mA, VCE = 10.00 V",
      "IC = 6.00 mA, VCE = 14.99 V",
      "IC = 7.51 mA, VCE = 16.25 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (20 - 0.7) / 360kΩ = 53.61 μA\n[2단계] IC = β * IB = 7.51 mA\n[3단계] VCE = VCC - IC * RC = 20 - (7.51m * 1.0k) = 12.49 V",
    "diagramType": null
  },
  {
    "id": "s3_16",
    "question": "[16번] BJT 회로 조건(VCC = 22V, RB = 150kΩ, RC = 1.5kΩ, β = 160)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 22.72 mA, VCE = -12.08 V",
      "IC = 27.26 mA, VCE = -9.66 V",
      "IC = 18.18 mA, VCE = -14.50 V",
      "IC = 22.72 mA, VCE = 4.96 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (22 - 0.7) / 150kΩ = 142.00 μA\n[2단계] IC = β * IB = 22.72 mA\n[3단계] VCE = VCC - IC * RC = 22 - (22.72m * 1.5k) = -12.08 V",
    "diagramType": null
  },
  {
    "id": "s3_17",
    "question": "[17번] BJT 회로 조건(VCC = 24V, RB = 180kΩ, RC = 2.0kΩ, β = 180)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 23.30 mA, VCE = -22.60 V",
      "IC = 27.96 mA, VCE = -18.08 V",
      "IC = 18.64 mA, VCE = -27.12 V",
      "IC = 23.30 mA, VCE = 0.70 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (24 - 0.7) / 180kΩ = 129.44 μA\n[2단계] IC = β * IB = 23.30 mA\n[3단계] VCE = VCC - IC * RC = 24 - (23.30m * 2.0k) = -22.60 V",
    "diagramType": null
  },
  {
    "id": "s3_18",
    "question": "[18번] BJT 회로 조건(VCC = 26V, RB = 210kΩ, RC = 2.5kΩ, β = 80)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 9.64 mA, VCE = 1.90 V",
      "IC = 11.57 mA, VCE = 1.52 V",
      "IC = 7.71 mA, VCE = 2.29 V",
      "IC = 9.64 mA, VCE = 13.95 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (26 - 0.7) / 210kΩ = 120.48 μA\n[2단계] IC = β * IB = 9.64 mA\n[3단계] VCE = VCC - IC * RC = 26 - (9.64m * 2.5k) = 1.90 V",
    "diagramType": null
  },
  {
    "id": "s3_19",
    "question": "[19번] BJT 회로 조건(VCC = 28V, RB = 240kΩ, RC = 3.0kΩ, β = 100)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 11.38 mA, VCE = -6.12 V",
      "IC = 13.65 mA, VCE = -4.90 V",
      "IC = 9.10 mA, VCE = -7.35 V",
      "IC = 11.38 mA, VCE = 10.94 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (28 - 0.7) / 240kΩ = 113.75 μA\n[2단계] IC = β * IB = 11.38 mA\n[3단계] VCE = VCC - IC * RC = 28 - (11.38m * 3.0k) = -6.12 V",
    "diagramType": null
  },
  {
    "id": "s3_20",
    "question": "[20번] BJT 회로 조건(VCC = 10V, RB = 270kΩ, RC = 1.0kΩ, β = 120)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 4.13 mA, VCE = 5.87 V",
      "IC = 4.96 mA, VCE = 4.69 V",
      "IC = 3.31 mA, VCE = 7.04 V",
      "IC = 4.13 mA, VCE = 7.93 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (10 - 0.7) / 270kΩ = 34.44 μA\n[2단계] IC = β * IB = 4.13 mA\n[3단계] VCE = VCC - IC * RC = 10 - (4.13m * 1.0k) = 5.87 V",
    "diagramType": null
  },
  {
    "id": "s3_21",
    "question": "[21번] BJT 회로 조건(VCC = 12V, RB = 300kΩ, RC = 1.5kΩ, β = 140)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 5.27 mA, VCE = 4.09 V",
      "IC = 6.33 mA, VCE = 3.27 V",
      "IC = 4.22 mA, VCE = 4.91 V",
      "IC = 5.27 mA, VCE = 8.04 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (12 - 0.7) / 300kΩ = 37.67 μA\n[2단계] IC = β * IB = 5.27 mA\n[3단계] VCE = VCC - IC * RC = 12 - (5.27m * 1.5k) = 4.09 V",
    "diagramType": null
  },
  {
    "id": "s3_22",
    "question": "[22번] BJT 회로 조건(VCC = 14V, RB = 330kΩ, RC = 2.0kΩ, β = 160)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 6.45 mA, VCE = 1.10 V",
      "IC = 7.74 mA, VCE = 0.88 V",
      "IC = 5.16 mA, VCE = 1.32 V",
      "IC = 6.45 mA, VCE = 7.55 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (14 - 0.7) / 330kΩ = 40.30 μA\n[2단계] IC = β * IB = 6.45 mA\n[3단계] VCE = VCC - IC * RC = 14 - (6.45m * 2.0k) = 1.10 V",
    "diagramType": null
  },
  {
    "id": "s3_23",
    "question": "[23번] BJT 회로 조건(VCC = 16V, RB = 360kΩ, RC = 2.5kΩ, β = 180)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 7.65 mA, VCE = -3.12 V",
      "IC = 9.18 mA, VCE = -2.50 V",
      "IC = 6.12 mA, VCE = -3.75 V",
      "IC = 7.65 mA, VCE = 6.44 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (16 - 0.7) / 360kΩ = 42.50 μA\n[2단계] IC = β * IB = 7.65 mA\n[3단계] VCE = VCC - IC * RC = 16 - (7.65m * 2.5k) = -3.12 V",
    "diagramType": null
  },
  {
    "id": "s3_24",
    "question": "[24번] BJT 회로 조건(VCC = 18V, RB = 150kΩ, RC = 3.0kΩ, β = 80)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 9.23 mA, VCE = -9.68 V",
      "IC = 11.07 mA, VCE = -7.74 V",
      "IC = 7.38 mA, VCE = -11.62 V",
      "IC = 9.23 mA, VCE = 4.16 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (18 - 0.7) / 150kΩ = 115.33 μA\n[2단계] IC = β * IB = 9.23 mA\n[3단계] VCE = VCC - IC * RC = 18 - (9.23m * 3.0k) = -9.68 V",
    "diagramType": null
  },
  {
    "id": "s3_25",
    "question": "[25번] BJT 회로 조건(VCC = 20V, RB = 180kΩ, RC = 1.0kΩ, β = 100)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 10.72 mA, VCE = 9.28 V",
      "IC = 12.87 mA, VCE = 7.42 V",
      "IC = 8.58 mA, VCE = 11.13 V",
      "IC = 10.72 mA, VCE = 14.64 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (20 - 0.7) / 180kΩ = 107.22 μA\n[2단계] IC = β * IB = 10.72 mA\n[3단계] VCE = VCC - IC * RC = 20 - (10.72m * 1.0k) = 9.28 V",
    "diagramType": null
  },
  {
    "id": "s3_26",
    "question": "[26번] BJT 회로 조건(VCC = 22V, RB = 210kΩ, RC = 1.5kΩ, β = 120)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 12.17 mA, VCE = 3.74 V",
      "IC = 14.61 mA, VCE = 2.99 V",
      "IC = 9.74 mA, VCE = 4.49 V",
      "IC = 12.17 mA, VCE = 12.87 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (22 - 0.7) / 210kΩ = 101.43 μA\n[2단계] IC = β * IB = 12.17 mA\n[3단계] VCE = VCC - IC * RC = 22 - (12.17m * 1.5k) = 3.74 V",
    "diagramType": null
  },
  {
    "id": "s3_27",
    "question": "[27번] BJT 회로 조건(VCC = 24V, RB = 240kΩ, RC = 2.0kΩ, β = 140)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 13.59 mA, VCE = -3.18 V",
      "IC = 16.31 mA, VCE = -2.55 V",
      "IC = 10.87 mA, VCE = -3.82 V",
      "IC = 13.59 mA, VCE = 10.41 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (24 - 0.7) / 240kΩ = 97.08 μA\n[2단계] IC = β * IB = 13.59 mA\n[3단계] VCE = VCC - IC * RC = 24 - (13.59m * 2.0k) = -3.18 V",
    "diagramType": null
  },
  {
    "id": "s3_28",
    "question": "[28번] BJT 회로 조건(VCC = 26V, RB = 270kΩ, RC = 2.5kΩ, β = 160)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 14.99 mA, VCE = -11.48 V",
      "IC = 17.99 mA, VCE = -9.19 V",
      "IC = 11.99 mA, VCE = -13.78 V",
      "IC = 14.99 mA, VCE = 7.26 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (26 - 0.7) / 270kΩ = 93.70 μA\n[2단계] IC = β * IB = 14.99 mA\n[3단계] VCE = VCC - IC * RC = 26 - (14.99m * 2.5k) = -11.48 V",
    "diagramType": null
  },
  {
    "id": "s3_29",
    "question": "[29번] BJT 회로 조건(VCC = 28V, RB = 300kΩ, RC = 3.0kΩ, β = 180)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 16.38 mA, VCE = -21.14 V",
      "IC = 19.66 mA, VCE = -16.91 V",
      "IC = 13.10 mA, VCE = -25.37 V",
      "IC = 16.38 mA, VCE = 3.43 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (28 - 0.7) / 300kΩ = 91.00 μA\n[2단계] IC = β * IB = 16.38 mA\n[3단계] VCE = VCC - IC * RC = 28 - (16.38m * 3.0k) = -21.14 V",
    "diagramType": null
  },
  {
    "id": "s3_30",
    "question": "[30번] BJT 회로 조건(VCC = 10V, RB = 330kΩ, RC = 1.0kΩ, β = 80)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 2.25 mA, VCE = 7.75 V",
      "IC = 2.71 mA, VCE = 6.20 V",
      "IC = 1.80 mA, VCE = 9.29 V",
      "IC = 2.25 mA, VCE = 8.87 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (10 - 0.7) / 330kΩ = 28.18 μA\n[2단계] IC = β * IB = 2.25 mA\n[3단계] VCE = VCC - IC * RC = 10 - (2.25m * 1.0k) = 7.75 V",
    "diagramType": null
  },
  {
    "id": "s3_31",
    "question": "[31번] BJT 회로 조건(VCC = 12V, RB = 360kΩ, RC = 1.5kΩ, β = 100)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 3.14 mA, VCE = 7.29 V",
      "IC = 3.77 mA, VCE = 5.83 V",
      "IC = 2.51 mA, VCE = 8.75 V",
      "IC = 3.14 mA, VCE = 9.65 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (12 - 0.7) / 360kΩ = 31.39 μA\n[2단계] IC = β * IB = 3.14 mA\n[3단계] VCE = VCC - IC * RC = 12 - (3.14m * 1.5k) = 7.29 V",
    "diagramType": null
  },
  {
    "id": "s3_32",
    "question": "[32번] BJT 회로 조건(VCC = 14V, RB = 150kΩ, RC = 2.0kΩ, β = 120)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 10.64 mA, VCE = -7.28 V",
      "IC = 12.77 mA, VCE = -5.82 V",
      "IC = 8.51 mA, VCE = -8.74 V",
      "IC = 10.64 mA, VCE = 3.36 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (14 - 0.7) / 150kΩ = 88.67 μA\n[2단계] IC = β * IB = 10.64 mA\n[3단계] VCE = VCC - IC * RC = 14 - (10.64m * 2.0k) = -7.28 V",
    "diagramType": null
  },
  {
    "id": "s3_33",
    "question": "[33번] BJT 회로 조건(VCC = 16V, RB = 180kΩ, RC = 2.5kΩ, β = 140)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 11.90 mA, VCE = -13.75 V",
      "IC = 14.28 mA, VCE = -11.00 V",
      "IC = 9.52 mA, VCE = -16.50 V",
      "IC = 11.90 mA, VCE = 1.12 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (16 - 0.7) / 180kΩ = 85.00 μA\n[2단계] IC = β * IB = 11.90 mA\n[3단계] VCE = VCC - IC * RC = 16 - (11.90m * 2.5k) = -13.75 V",
    "diagramType": null
  },
  {
    "id": "s3_34",
    "question": "[34번] BJT 회로 조건(VCC = 18V, RB = 210kΩ, RC = 3.0kΩ, β = 160)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 13.18 mA, VCE = -21.54 V",
      "IC = 15.82 mA, VCE = -17.23 V",
      "IC = 10.54 mA, VCE = -25.85 V",
      "IC = 13.18 mA, VCE = -1.77 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (18 - 0.7) / 210kΩ = 82.38 μA\n[2단계] IC = β * IB = 13.18 mA\n[3단계] VCE = VCC - IC * RC = 18 - (13.18m * 3.0k) = -21.54 V",
    "diagramType": null
  },
  {
    "id": "s3_35",
    "question": "[35번] BJT 회로 조건(VCC = 20V, RB = 240kΩ, RC = 1.0kΩ, β = 180)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 14.47 mA, VCE = 5.53 V",
      "IC = 17.37 mA, VCE = 4.42 V",
      "IC = 11.58 mA, VCE = 6.63 V",
      "IC = 14.47 mA, VCE = 12.76 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (20 - 0.7) / 240kΩ = 80.42 μA\n[2단계] IC = β * IB = 14.47 mA\n[3단계] VCE = VCC - IC * RC = 20 - (14.47m * 1.0k) = 5.53 V",
    "diagramType": null
  },
  {
    "id": "s3_36",
    "question": "[36번] BJT 회로 조건(VCC = 22V, RB = 270kΩ, RC = 1.5kΩ, β = 80)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 6.31 mA, VCE = 12.53 V",
      "IC = 7.57 mA, VCE = 10.03 V",
      "IC = 5.05 mA, VCE = 15.04 V",
      "IC = 6.31 mA, VCE = 17.27 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (22 - 0.7) / 270kΩ = 78.89 μA\n[2단계] IC = β * IB = 6.31 mA\n[3단계] VCE = VCC - IC * RC = 22 - (6.31m * 1.5k) = 12.53 V",
    "diagramType": null
  },
  {
    "id": "s3_37",
    "question": "[37번] BJT 회로 조건(VCC = 24V, RB = 300kΩ, RC = 2.0kΩ, β = 100)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 7.77 mA, VCE = 8.47 V",
      "IC = 9.32 mA, VCE = 6.77 V",
      "IC = 6.21 mA, VCE = 10.16 V",
      "IC = 7.77 mA, VCE = 16.23 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (24 - 0.7) / 300kΩ = 77.67 μA\n[2단계] IC = β * IB = 7.77 mA\n[3단계] VCE = VCC - IC * RC = 24 - (7.77m * 2.0k) = 8.47 V",
    "diagramType": null
  },
  {
    "id": "s3_38",
    "question": "[38번] BJT 회로 조건(VCC = 26V, RB = 330kΩ, RC = 2.5kΩ, β = 120)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 9.20 mA, VCE = 3.00 V",
      "IC = 11.04 mA, VCE = 2.40 V",
      "IC = 7.36 mA, VCE = 3.60 V",
      "IC = 9.20 mA, VCE = 14.50 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (26 - 0.7) / 330kΩ = 76.67 μA\n[2단계] IC = β * IB = 9.20 mA\n[3단계] VCE = VCC - IC * RC = 26 - (9.20m * 2.5k) = 3.00 V",
    "diagramType": null
  },
  {
    "id": "s3_39",
    "question": "[39번] BJT 회로 조건(VCC = 28V, RB = 360kΩ, RC = 3.0kΩ, β = 140)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 10.62 mA, VCE = -3.85 V",
      "IC = 12.74 mA, VCE = -3.08 V",
      "IC = 8.49 mA, VCE = -4.62 V",
      "IC = 10.62 mA, VCE = 12.07 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (28 - 0.7) / 360kΩ = 75.83 μA\n[2단계] IC = β * IB = 10.62 mA\n[3단계] VCE = VCC - IC * RC = 28 - (10.62m * 3.0k) = -3.85 V",
    "diagramType": null
  },
  {
    "id": "s3_40",
    "question": "[40번] BJT 회로 조건(VCC = 10V, RB = 150kΩ, RC = 1.0kΩ, β = 160)에서 베이스-에미터 전압 VBE = 0.7V 일 때 컬렉터 전류 IC와 VCE는?",
    "options": [
      "IC = 9.92 mA, VCE = 0.08 V",
      "IC = 11.90 mA, VCE = 0.06 V",
      "IC = 7.94 mA, VCE = 0.10 V",
      "IC = 9.92 mA, VCE = 5.04 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 베이스 전류 IB = (10 - 0.7) / 150kΩ = 62.00 μA\n[2단계] IC = β * IB = 9.92 mA\n[3단계] VCE = VCC - IC * RC = 10 - (9.92m * 1.0k) = 0.08 V",
    "diagramType": null
  },
  {
    "id": "s3_41",
    "question": "[41번] 공통 에미터(CE) 증폭기에서 DC 에미터 전류 IE = 2.6 mA 일 때, 소신호 에미터 저항 r_e 값은 약 얼마인가? (단, 열전압 VT = 26 mV로 계산)",
    "options": [
      "r_e = 10 Ω",
      "r_e = 26 Ω",
      "r_e = 100 Ω",
      "r_e = 2.6 Ω"
    ],
    "answer": 0,
    "explanation": "[1단계] 소신호 에미터 저항 공식: r_e = VT / IE\n[2단계] 수치 대입: r_e = 26 mV / 2.6 mA = 10 Ω\n[3단계] 설명: VT = 26mV 기준 IE와 역수 관계입니다.",
    "diagramType": null
  },
  {
    "id": "s3_42",
    "question": "[42번] CE 증폭기에서 r_e = 10 Ω, RC = 2 kΩ, RL = 2 kΩ 일 때, AC 부하 저항 r_L과 소신호 전압 이득 Av (바이패스 콘덴서 설치됨)는?",
    "options": [
      "r_L = 1 kΩ, Av = -100",
      "r_L = 2 kΩ, Av = -200",
      "r_L = 4 kΩ, Av = -400",
      "r_L = 1 kΩ, Av = -200"
    ],
    "answer": 0,
    "explanation": "[1단계] AC 부하저항 계산: r_L = RC || RL = 2k || 2k = 1 kΩ\n[2단계] CE 전압이득 공식: Av = - r_L / r_e = -1000 / 10 = -100\n[3단계] 오답 함정: 부하저항 RL과의 병렬 처리를 누락하고 RC=2k를 그대로 쓰면 Av = -200 오답이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s3_43",
    "question": "[43번] h-파라미터 모델에서 CE 증폭기의 전압이득 Av를 표현하는 근사식으로 가장 알맞은 것은? (단, hie: 입력 임피던스, hre: 역전압 전달비, hfe: 순방향 전류이득, hoe: 출력 어드미턴스)",
    "options": [
      "Av ≈ - (hfe * RL) / hie",
      "Av ≈ - hfe / (hie * RL)",
      "Av ≈ (hie * RL) / hfe",
      "Av ≈ - (hre * RL) / hoe"
    ],
    "answer": 0,
    "explanation": "[1단계] CE h-파라미터 전압이득 정의: Av = Vo / Vi = (- hfe * ib * RL) / (hie * ib) = - (hfe * RL) / hie\n[2단계] 위상반전에 의해 음(- ) 부호가 붙습니다.",
    "diagramType": null
  },
  {
    "id": "s3_44",
    "question": "[44번] CE 소신호 증폭기에서 r_e = 13 Ω, RC = 2.5 kΩ, RL = 3.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 1.36 kΩ, Av = -104.9",
      "r_L = 2.50 kΩ, Av = -192.3",
      "r_L = 1.36 kΩ, Av = -209.8",
      "r_L = 3.00 kΩ, Av = -230.8"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 2.5k || 3.0k = 1.36 kΩ\n[2단계] Av = - r_L / r_e = - (1.36 * 1000) / 13 = -104.9",
    "diagramType": null
  },
  {
    "id": "s3_45",
    "question": "[45번] CE 소신호 증폭기에서 r_e = 15 Ω, RC = 3.0 kΩ, RL = 4.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 1.71 kΩ, Av = -114.3",
      "r_L = 3.00 kΩ, Av = -200.0",
      "r_L = 1.71 kΩ, Av = -228.6",
      "r_L = 4.00 kΩ, Av = -266.7"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 3.0k || 4.0k = 1.71 kΩ\n[2단계] Av = - r_L / r_e = - (1.71 * 1000) / 15 = -114.3",
    "diagramType": null
  },
  {
    "id": "s3_46",
    "question": "[46번] CE 소신호 증폭기에서 r_e = 17 Ω, RC = 3.5 kΩ, RL = 5.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 2.06 kΩ, Av = -121.1",
      "r_L = 3.50 kΩ, Av = -205.9",
      "r_L = 2.06 kΩ, Av = -242.2",
      "r_L = 5.00 kΩ, Av = -294.1"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 3.5k || 5.0k = 2.06 kΩ\n[2단계] Av = - r_L / r_e = - (2.06 * 1000) / 17 = -121.1",
    "diagramType": null
  },
  {
    "id": "s3_47",
    "question": "[47번] CE 소신호 증폭기에서 r_e = 19 Ω, RC = 4.0 kΩ, RL = 6.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 2.40 kΩ, Av = -126.3",
      "r_L = 4.00 kΩ, Av = -210.5",
      "r_L = 2.40 kΩ, Av = -252.6",
      "r_L = 6.00 kΩ, Av = -315.8"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 4.0k || 6.0k = 2.40 kΩ\n[2단계] Av = - r_L / r_e = - (2.40 * 1000) / 19 = -126.3",
    "diagramType": null
  },
  {
    "id": "s3_48",
    "question": "[48번] CE 소신호 증폭기에서 r_e = 21 Ω, RC = 1.5 kΩ, RL = 3.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 1.00 kΩ, Av = -47.6",
      "r_L = 1.50 kΩ, Av = -71.4",
      "r_L = 1.00 kΩ, Av = -95.2",
      "r_L = 3.00 kΩ, Av = -142.9"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 1.5k || 3.0k = 1.00 kΩ\n[2단계] Av = - r_L / r_e = - (1.00 * 1000) / 21 = -47.6",
    "diagramType": null
  },
  {
    "id": "s3_49",
    "question": "[49번] CE 소신호 증폭기에서 r_e = 23 Ω, RC = 2.0 kΩ, RL = 4.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 1.33 kΩ, Av = -58.0",
      "r_L = 2.00 kΩ, Av = -87.0",
      "r_L = 1.33 kΩ, Av = -115.9",
      "r_L = 4.00 kΩ, Av = -173.9"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 2.0k || 4.0k = 1.33 kΩ\n[2단계] Av = - r_L / r_e = - (1.33 * 1000) / 23 = -58.0",
    "diagramType": null
  },
  {
    "id": "s3_50",
    "question": "[50번] CE 소신호 증폭기에서 r_e = 5 Ω, RC = 2.5 kΩ, RL = 5.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 1.67 kΩ, Av = -333.3",
      "r_L = 2.50 kΩ, Av = -500.0",
      "r_L = 1.67 kΩ, Av = -666.7",
      "r_L = 5.00 kΩ, Av = -1000.0"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 2.5k || 5.0k = 1.67 kΩ\n[2단계] Av = - r_L / r_e = - (1.67 * 1000) / 5 = -333.3",
    "diagramType": null
  },
  {
    "id": "s3_51",
    "question": "[51번] CE 소신호 증폭기에서 r_e = 7 Ω, RC = 3.0 kΩ, RL = 6.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 2.00 kΩ, Av = -285.7",
      "r_L = 3.00 kΩ, Av = -428.6",
      "r_L = 2.00 kΩ, Av = -571.4",
      "r_L = 6.00 kΩ, Av = -857.1"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 3.0k || 6.0k = 2.00 kΩ\n[2단계] Av = - r_L / r_e = - (2.00 * 1000) / 7 = -285.7",
    "diagramType": null
  },
  {
    "id": "s3_52",
    "question": "[52번] CE 소신호 증폭기에서 r_e = 9 Ω, RC = 3.5 kΩ, RL = 3.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 1.62 kΩ, Av = -179.5",
      "r_L = 3.50 kΩ, Av = -388.9",
      "r_L = 1.62 kΩ, Av = -359.0",
      "r_L = 3.00 kΩ, Av = -333.3"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 3.5k || 3.0k = 1.62 kΩ\n[2단계] Av = - r_L / r_e = - (1.62 * 1000) / 9 = -179.5",
    "diagramType": null
  },
  {
    "id": "s3_53",
    "question": "[53번] CE 소신호 증폭기에서 r_e = 11 Ω, RC = 4.0 kΩ, RL = 4.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 2.00 kΩ, Av = -181.8",
      "r_L = 4.00 kΩ, Av = -363.6",
      "r_L = 2.00 kΩ, Av = -363.6",
      "r_L = 4.00 kΩ, Av = -363.6"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 4.0k || 4.0k = 2.00 kΩ\n[2단계] Av = - r_L / r_e = - (2.00 * 1000) / 11 = -181.8",
    "diagramType": null
  },
  {
    "id": "s3_54",
    "question": "[54번] CE 소신호 증폭기에서 r_e = 13 Ω, RC = 1.5 kΩ, RL = 5.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 1.15 kΩ, Av = -88.8",
      "r_L = 1.50 kΩ, Av = -115.4",
      "r_L = 1.15 kΩ, Av = -177.5",
      "r_L = 5.00 kΩ, Av = -384.6"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 1.5k || 5.0k = 1.15 kΩ\n[2단계] Av = - r_L / r_e = - (1.15 * 1000) / 13 = -88.8",
    "diagramType": null
  },
  {
    "id": "s3_55",
    "question": "[55번] CE 소신호 증폭기에서 r_e = 15 Ω, RC = 2.0 kΩ, RL = 6.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 1.50 kΩ, Av = -100.0",
      "r_L = 2.00 kΩ, Av = -133.3",
      "r_L = 1.50 kΩ, Av = -200.0",
      "r_L = 6.00 kΩ, Av = -400.0"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 2.0k || 6.0k = 1.50 kΩ\n[2단계] Av = - r_L / r_e = - (1.50 * 1000) / 15 = -100.0",
    "diagramType": null
  },
  {
    "id": "s3_56",
    "question": "[56번] CE 소신호 증폭기에서 r_e = 17 Ω, RC = 2.5 kΩ, RL = 3.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 1.36 kΩ, Av = -80.2",
      "r_L = 2.50 kΩ, Av = -147.1",
      "r_L = 1.36 kΩ, Av = -160.4",
      "r_L = 3.00 kΩ, Av = -176.5"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 2.5k || 3.0k = 1.36 kΩ\n[2단계] Av = - r_L / r_e = - (1.36 * 1000) / 17 = -80.2",
    "diagramType": null
  },
  {
    "id": "s3_57",
    "question": "[57번] CE 소신호 증폭기에서 r_e = 19 Ω, RC = 3.0 kΩ, RL = 4.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 1.71 kΩ, Av = -90.2",
      "r_L = 3.00 kΩ, Av = -157.9",
      "r_L = 1.71 kΩ, Av = -180.5",
      "r_L = 4.00 kΩ, Av = -210.5"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 3.0k || 4.0k = 1.71 kΩ\n[2단계] Av = - r_L / r_e = - (1.71 * 1000) / 19 = -90.2",
    "diagramType": null
  },
  {
    "id": "s3_58",
    "question": "[58번] CE 소신호 증폭기에서 r_e = 21 Ω, RC = 3.5 kΩ, RL = 5.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 2.06 kΩ, Av = -98.0",
      "r_L = 3.50 kΩ, Av = -166.7",
      "r_L = 2.06 kΩ, Av = -196.1",
      "r_L = 5.00 kΩ, Av = -238.1"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 3.5k || 5.0k = 2.06 kΩ\n[2단계] Av = - r_L / r_e = - (2.06 * 1000) / 21 = -98.0",
    "diagramType": null
  },
  {
    "id": "s3_59",
    "question": "[59번] CE 소신호 증폭기에서 r_e = 23 Ω, RC = 4.0 kΩ, RL = 6.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 2.40 kΩ, Av = -104.3",
      "r_L = 4.00 kΩ, Av = -173.9",
      "r_L = 2.40 kΩ, Av = -208.7",
      "r_L = 6.00 kΩ, Av = -260.9"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 4.0k || 6.0k = 2.40 kΩ\n[2단계] Av = - r_L / r_e = - (2.40 * 1000) / 23 = -104.3",
    "diagramType": null
  },
  {
    "id": "s3_60",
    "question": "[60번] CE 소신호 증폭기에서 r_e = 5 Ω, RC = 1.5 kΩ, RL = 3.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 1.00 kΩ, Av = -200.0",
      "r_L = 1.50 kΩ, Av = -300.0",
      "r_L = 1.00 kΩ, Av = -400.0",
      "r_L = 3.00 kΩ, Av = -600.0"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 1.5k || 3.0k = 1.00 kΩ\n[2단계] Av = - r_L / r_e = - (1.00 * 1000) / 5 = -200.0",
    "diagramType": null
  },
  {
    "id": "s3_61",
    "question": "[61번] CE 소신호 증폭기에서 r_e = 7 Ω, RC = 2.0 kΩ, RL = 4.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 1.33 kΩ, Av = -190.5",
      "r_L = 2.00 kΩ, Av = -285.7",
      "r_L = 1.33 kΩ, Av = -381.0",
      "r_L = 4.00 kΩ, Av = -571.4"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 2.0k || 4.0k = 1.33 kΩ\n[2단계] Av = - r_L / r_e = - (1.33 * 1000) / 7 = -190.5",
    "diagramType": null
  },
  {
    "id": "s3_62",
    "question": "[62번] CE 소신호 증폭기에서 r_e = 9 Ω, RC = 2.5 kΩ, RL = 5.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 1.67 kΩ, Av = -185.2",
      "r_L = 2.50 kΩ, Av = -277.8",
      "r_L = 1.67 kΩ, Av = -370.4",
      "r_L = 5.00 kΩ, Av = -555.6"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 2.5k || 5.0k = 1.67 kΩ\n[2단계] Av = - r_L / r_e = - (1.67 * 1000) / 9 = -185.2",
    "diagramType": null
  },
  {
    "id": "s3_63",
    "question": "[63번] CE 소신호 증폭기에서 r_e = 11 Ω, RC = 3.0 kΩ, RL = 6.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 2.00 kΩ, Av = -181.8",
      "r_L = 3.00 kΩ, Av = -272.7",
      "r_L = 2.00 kΩ, Av = -363.6",
      "r_L = 6.00 kΩ, Av = -545.5"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 3.0k || 6.0k = 2.00 kΩ\n[2단계] Av = - r_L / r_e = - (2.00 * 1000) / 11 = -181.8",
    "diagramType": null
  },
  {
    "id": "s3_64",
    "question": "[64번] CE 소신호 증폭기에서 r_e = 13 Ω, RC = 3.5 kΩ, RL = 3.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 1.62 kΩ, Av = -124.3",
      "r_L = 3.50 kΩ, Av = -269.2",
      "r_L = 1.62 kΩ, Av = -248.5",
      "r_L = 3.00 kΩ, Av = -230.8"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 3.5k || 3.0k = 1.62 kΩ\n[2단계] Av = - r_L / r_e = - (1.62 * 1000) / 13 = -124.3",
    "diagramType": null
  },
  {
    "id": "s3_65",
    "question": "[65번] CE 소신호 증폭기에서 r_e = 15 Ω, RC = 4.0 kΩ, RL = 4.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 2.00 kΩ, Av = -133.3",
      "r_L = 4.00 kΩ, Av = -266.7",
      "r_L = 2.00 kΩ, Av = -266.7",
      "r_L = 4.00 kΩ, Av = -266.7"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 4.0k || 4.0k = 2.00 kΩ\n[2단계] Av = - r_L / r_e = - (2.00 * 1000) / 15 = -133.3",
    "diagramType": null
  },
  {
    "id": "s3_66",
    "question": "[66번] CE 소신호 증폭기에서 r_e = 17 Ω, RC = 1.5 kΩ, RL = 5.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 1.15 kΩ, Av = -67.9",
      "r_L = 1.50 kΩ, Av = -88.2",
      "r_L = 1.15 kΩ, Av = -135.7",
      "r_L = 5.00 kΩ, Av = -294.1"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 1.5k || 5.0k = 1.15 kΩ\n[2단계] Av = - r_L / r_e = - (1.15 * 1000) / 17 = -67.9",
    "diagramType": null
  },
  {
    "id": "s3_67",
    "question": "[67번] CE 소신호 증폭기에서 r_e = 19 Ω, RC = 2.0 kΩ, RL = 6.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 1.50 kΩ, Av = -78.9",
      "r_L = 2.00 kΩ, Av = -105.3",
      "r_L = 1.50 kΩ, Av = -157.9",
      "r_L = 6.00 kΩ, Av = -315.8"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 2.0k || 6.0k = 1.50 kΩ\n[2단계] Av = - r_L / r_e = - (1.50 * 1000) / 19 = -78.9",
    "diagramType": null
  },
  {
    "id": "s3_68",
    "question": "[68번] CE 소신호 증폭기에서 r_e = 21 Ω, RC = 2.5 kΩ, RL = 3.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 1.36 kΩ, Av = -64.9",
      "r_L = 2.50 kΩ, Av = -119.0",
      "r_L = 1.36 kΩ, Av = -129.9",
      "r_L = 3.00 kΩ, Av = -142.9"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 2.5k || 3.0k = 1.36 kΩ\n[2단계] Av = - r_L / r_e = - (1.36 * 1000) / 21 = -64.9",
    "diagramType": null
  },
  {
    "id": "s3_69",
    "question": "[69번] CE 소신호 증폭기에서 r_e = 23 Ω, RC = 3.0 kΩ, RL = 4.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 1.71 kΩ, Av = -74.5",
      "r_L = 3.00 kΩ, Av = -130.4",
      "r_L = 1.71 kΩ, Av = -149.1",
      "r_L = 4.00 kΩ, Av = -173.9"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 3.0k || 4.0k = 1.71 kΩ\n[2단계] Av = - r_L / r_e = - (1.71 * 1000) / 23 = -74.5",
    "diagramType": null
  },
  {
    "id": "s3_70",
    "question": "[70번] CE 소신호 증폭기에서 r_e = 5 Ω, RC = 3.5 kΩ, RL = 5.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 2.06 kΩ, Av = -411.8",
      "r_L = 3.50 kΩ, Av = -700.0",
      "r_L = 2.06 kΩ, Av = -823.5",
      "r_L = 5.00 kΩ, Av = -1000.0"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 3.5k || 5.0k = 2.06 kΩ\n[2단계] Av = - r_L / r_e = - (2.06 * 1000) / 5 = -411.8",
    "diagramType": null
  },
  {
    "id": "s3_71",
    "question": "[71번] CE 소신호 증폭기에서 r_e = 7 Ω, RC = 4.0 kΩ, RL = 6.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 2.40 kΩ, Av = -342.9",
      "r_L = 4.00 kΩ, Av = -571.4",
      "r_L = 2.40 kΩ, Av = -685.7",
      "r_L = 6.00 kΩ, Av = -857.1"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 4.0k || 6.0k = 2.40 kΩ\n[2단계] Av = - r_L / r_e = - (2.40 * 1000) / 7 = -342.9",
    "diagramType": null
  },
  {
    "id": "s3_72",
    "question": "[72번] CE 소신호 증폭기에서 r_e = 9 Ω, RC = 1.5 kΩ, RL = 3.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 1.00 kΩ, Av = -111.1",
      "r_L = 1.50 kΩ, Av = -166.7",
      "r_L = 1.00 kΩ, Av = -222.2",
      "r_L = 3.00 kΩ, Av = -333.3"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 1.5k || 3.0k = 1.00 kΩ\n[2단계] Av = - r_L / r_e = - (1.00 * 1000) / 9 = -111.1",
    "diagramType": null
  },
  {
    "id": "s3_73",
    "question": "[73번] CE 소신호 증폭기에서 r_e = 11 Ω, RC = 2.0 kΩ, RL = 4.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 1.33 kΩ, Av = -121.2",
      "r_L = 2.00 kΩ, Av = -181.8",
      "r_L = 1.33 kΩ, Av = -242.4",
      "r_L = 4.00 kΩ, Av = -363.6"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 2.0k || 4.0k = 1.33 kΩ\n[2단계] Av = - r_L / r_e = - (1.33 * 1000) / 11 = -121.2",
    "diagramType": null
  },
  {
    "id": "s3_74",
    "question": "[74번] CE 소신호 증폭기에서 r_e = 13 Ω, RC = 2.5 kΩ, RL = 5.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 1.67 kΩ, Av = -128.2",
      "r_L = 2.50 kΩ, Av = -192.3",
      "r_L = 1.67 kΩ, Av = -256.4",
      "r_L = 5.00 kΩ, Av = -384.6"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 2.5k || 5.0k = 1.67 kΩ\n[2단계] Av = - r_L / r_e = - (1.67 * 1000) / 13 = -128.2",
    "diagramType": null
  },
  {
    "id": "s3_75",
    "question": "[75번] CE 소신호 증폭기에서 r_e = 15 Ω, RC = 3.0 kΩ, RL = 6.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 2.00 kΩ, Av = -133.3",
      "r_L = 3.00 kΩ, Av = -200.0",
      "r_L = 2.00 kΩ, Av = -266.7",
      "r_L = 6.00 kΩ, Av = -400.0"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 3.0k || 6.0k = 2.00 kΩ\n[2단계] Av = - r_L / r_e = - (2.00 * 1000) / 15 = -133.3",
    "diagramType": null
  },
  {
    "id": "s3_76",
    "question": "[76번] CE 소신호 증폭기에서 r_e = 17 Ω, RC = 3.5 kΩ, RL = 3.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 1.62 kΩ, Av = -95.0",
      "r_L = 3.50 kΩ, Av = -205.9",
      "r_L = 1.62 kΩ, Av = -190.0",
      "r_L = 3.00 kΩ, Av = -176.5"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 3.5k || 3.0k = 1.62 kΩ\n[2단계] Av = - r_L / r_e = - (1.62 * 1000) / 17 = -95.0",
    "diagramType": null
  },
  {
    "id": "s3_77",
    "question": "[77번] CE 소신호 증폭기에서 r_e = 19 Ω, RC = 4.0 kΩ, RL = 4.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 2.00 kΩ, Av = -105.3",
      "r_L = 4.00 kΩ, Av = -210.5",
      "r_L = 2.00 kΩ, Av = -210.5",
      "r_L = 4.00 kΩ, Av = -210.5"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 4.0k || 4.0k = 2.00 kΩ\n[2단계] Av = - r_L / r_e = - (2.00 * 1000) / 19 = -105.3",
    "diagramType": null
  },
  {
    "id": "s3_78",
    "question": "[78번] CE 소신호 증폭기에서 r_e = 21 Ω, RC = 1.5 kΩ, RL = 5.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 1.15 kΩ, Av = -54.9",
      "r_L = 1.50 kΩ, Av = -71.4",
      "r_L = 1.15 kΩ, Av = -109.9",
      "r_L = 5.00 kΩ, Av = -238.1"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 1.5k || 5.0k = 1.15 kΩ\n[2단계] Av = - r_L / r_e = - (1.15 * 1000) / 21 = -54.9",
    "diagramType": null
  },
  {
    "id": "s3_79",
    "question": "[79번] CE 소신호 증폭기에서 r_e = 23 Ω, RC = 2.0 kΩ, RL = 6.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 1.50 kΩ, Av = -65.2",
      "r_L = 2.00 kΩ, Av = -87.0",
      "r_L = 1.50 kΩ, Av = -130.4",
      "r_L = 6.00 kΩ, Av = -260.9"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 2.0k || 6.0k = 1.50 kΩ\n[2단계] Av = - r_L / r_e = - (1.50 * 1000) / 23 = -65.2",
    "diagramType": null
  },
  {
    "id": "s3_80",
    "question": "[80번] CE 소신호 증폭기에서 r_e = 5 Ω, RC = 2.5 kΩ, RL = 3.0 kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
    "options": [
      "r_L = 1.36 kΩ, Av = -272.7",
      "r_L = 2.50 kΩ, Av = -500.0",
      "r_L = 1.36 kΩ, Av = -545.5",
      "r_L = 3.00 kΩ, Av = -600.0"
    ],
    "answer": 0,
    "explanation": "[1단계] r_L = RC || RL = 2.5k || 3.0k = 1.36 kΩ\n[2단계] Av = - r_L / r_e = - (1.36 * 1000) / 5 = -272.7",
    "diagramType": null
  },
  {
    "id": "s3_81",
    "question": "[81번] 밀러 정리(Miller's Theorem)에 의해, 반전 전압 이득이 Av = -99 인 증폭기에서 베이스-컬렉터 간 궤환 커패시턴스 Cbc = 5 pF 일 때, 입력 측 밀러 커패시턴스 CM1은?",
    "options": [
      "CM1 = 500 pF",
      "CM1 = 495 pF",
      "CM1 = 5 pF",
      "CM1 = 100 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] 입력 밀러 커패시턴스 공식: CM1 = Cbc * (1 - Av)\n[2단계] 수치 대입: CM1 = 5 pF * (1 - (-99)) = 5 pF * 100 = 500 pF\n[3단계] 오답 함정: (1 - Av)에서 Av = -99 이므로 (1 + 99) = 100 이 되는 부호 처리에 유의해야 합니다.",
    "diagramType": null
  },
  {
    "id": "s3_82",
    "question": "[82번] 증폭기의 저주파 차단주파수가 fL = 50 Hz 이고, 고주파 차단주파수가 fH = 500 kHz 일 때, 증폭기의 대역폭(BW, Bandwidth)은 약 얼마인가?",
    "options": [
      "BW ≈ 500 kHz (499.95 kHz)",
      "BW = 50.05 kHz",
      "BW = 450 kHz",
      "BW = 250 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] 대역폭 정의: BW = fH - fL\n[2단계] 수치 계산: BW = 500,000 Hz - 50 Hz = 499,950 Hz ≈ 500 kHz\n[3단계] 설명: 일반적인 광대역 증폭기에서 fH >> fL 이므로 대역폭 BW는 fH에 근사합니다.",
    "diagramType": null
  },
  {
    "id": "s3_83",
    "question": "[83번] 반전 전압이득 Av = -70 인 증폭기에서 Cbc = 5 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 355 pF",
      "CM1 = 350 pF",
      "CM1 = 350 pF",
      "CM1 = 365 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 5 pF * (1 - (-70)) = 5 * 71 = 355 pF",
    "diagramType": null
  },
  {
    "id": "s3_84",
    "question": "[84번] 반전 전압이득 Av = -80 인 증폭기에서 Cbc = 6 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 486 pF",
      "CM1 = 480 pF",
      "CM1 = 480 pF",
      "CM1 = 496 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 6 pF * (1 - (-80)) = 6 * 81 = 486 pF",
    "diagramType": null
  },
  {
    "id": "s3_85",
    "question": "[85번] 반전 전압이득 Av = -90 인 증폭기에서 Cbc = 2 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 182 pF",
      "CM1 = 180 pF",
      "CM1 = 180 pF",
      "CM1 = 192 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 2 pF * (1 - (-90)) = 2 * 91 = 182 pF",
    "diagramType": null
  },
  {
    "id": "s3_86",
    "question": "[86번] 반전 전압이득 Av = -100 인 증폭기에서 Cbc = 3 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 303 pF",
      "CM1 = 300 pF",
      "CM1 = 300 pF",
      "CM1 = 313 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 3 pF * (1 - (-100)) = 3 * 101 = 303 pF",
    "diagramType": null
  },
  {
    "id": "s3_87",
    "question": "[87번] 반전 전압이득 Av = -110 인 증폭기에서 Cbc = 4 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 444 pF",
      "CM1 = 440 pF",
      "CM1 = 440 pF",
      "CM1 = 454 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 4 pF * (1 - (-110)) = 4 * 111 = 444 pF",
    "diagramType": null
  },
  {
    "id": "s3_88",
    "question": "[88번] 반전 전압이득 Av = -120 인 증폭기에서 Cbc = 5 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 605 pF",
      "CM1 = 600 pF",
      "CM1 = 600 pF",
      "CM1 = 615 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 5 pF * (1 - (-120)) = 5 * 121 = 605 pF",
    "diagramType": null
  },
  {
    "id": "s3_89",
    "question": "[89번] 반전 전압이득 Av = -130 인 증폭기에서 Cbc = 6 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 786 pF",
      "CM1 = 780 pF",
      "CM1 = 780 pF",
      "CM1 = 796 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 6 pF * (1 - (-130)) = 6 * 131 = 786 pF",
    "diagramType": null
  },
  {
    "id": "s3_90",
    "question": "[90번] 반전 전압이득 Av = -140 인 증폭기에서 Cbc = 2 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 282 pF",
      "CM1 = 280 pF",
      "CM1 = 280 pF",
      "CM1 = 292 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 2 pF * (1 - (-140)) = 2 * 141 = 282 pF",
    "diagramType": null
  },
  {
    "id": "s3_91",
    "question": "[91번] 반전 전압이득 Av = -150 인 증폭기에서 Cbc = 3 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 453 pF",
      "CM1 = 450 pF",
      "CM1 = 450 pF",
      "CM1 = 463 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 3 pF * (1 - (-150)) = 3 * 151 = 453 pF",
    "diagramType": null
  },
  {
    "id": "s3_92",
    "question": "[92번] 반전 전압이득 Av = -160 인 증폭기에서 Cbc = 4 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 644 pF",
      "CM1 = 640 pF",
      "CM1 = 640 pF",
      "CM1 = 654 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 4 pF * (1 - (-160)) = 4 * 161 = 644 pF",
    "diagramType": null
  },
  {
    "id": "s3_93",
    "question": "[93번] 반전 전압이득 Av = -170 인 증폭기에서 Cbc = 5 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 855 pF",
      "CM1 = 850 pF",
      "CM1 = 850 pF",
      "CM1 = 865 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 5 pF * (1 - (-170)) = 5 * 171 = 855 pF",
    "diagramType": null
  },
  {
    "id": "s3_94",
    "question": "[94번] 반전 전압이득 Av = -180 인 증폭기에서 Cbc = 6 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 1086 pF",
      "CM1 = 1080 pF",
      "CM1 = 1080 pF",
      "CM1 = 1096 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 6 pF * (1 - (-180)) = 6 * 181 = 1086 pF",
    "diagramType": null
  },
  {
    "id": "s3_95",
    "question": "[95번] 반전 전압이득 Av = -190 인 증폭기에서 Cbc = 2 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 382 pF",
      "CM1 = 380 pF",
      "CM1 = 380 pF",
      "CM1 = 392 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 2 pF * (1 - (-190)) = 2 * 191 = 382 pF",
    "diagramType": null
  },
  {
    "id": "s3_96",
    "question": "[96번] 반전 전압이득 Av = -200 인 증폭기에서 Cbc = 3 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 603 pF",
      "CM1 = 600 pF",
      "CM1 = 600 pF",
      "CM1 = 613 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 3 pF * (1 - (-200)) = 3 * 201 = 603 pF",
    "diagramType": null
  },
  {
    "id": "s3_97",
    "question": "[97번] 반전 전압이득 Av = -210 인 증폭기에서 Cbc = 4 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 844 pF",
      "CM1 = 840 pF",
      "CM1 = 840 pF",
      "CM1 = 854 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 4 pF * (1 - (-210)) = 4 * 211 = 844 pF",
    "diagramType": null
  },
  {
    "id": "s3_98",
    "question": "[98번] 반전 전압이득 Av = -220 인 증폭기에서 Cbc = 5 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 1105 pF",
      "CM1 = 1100 pF",
      "CM1 = 1100 pF",
      "CM1 = 1115 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 5 pF * (1 - (-220)) = 5 * 221 = 1105 pF",
    "diagramType": null
  },
  {
    "id": "s3_99",
    "question": "[99번] 반전 전압이득 Av = -230 인 증폭기에서 Cbc = 6 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 1386 pF",
      "CM1 = 1380 pF",
      "CM1 = 1380 pF",
      "CM1 = 1396 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 6 pF * (1 - (-230)) = 6 * 231 = 1386 pF",
    "diagramType": null
  },
  {
    "id": "s3_100",
    "question": "[100번] 반전 전압이득 Av = -40 인 증폭기에서 Cbc = 2 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 82 pF",
      "CM1 = 80 pF",
      "CM1 = 80 pF",
      "CM1 = 92 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 2 pF * (1 - (-40)) = 2 * 41 = 82 pF",
    "diagramType": null
  },
  {
    "id": "s3_101",
    "question": "[101번] 반전 전압이득 Av = -50 인 증폭기에서 Cbc = 3 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 153 pF",
      "CM1 = 150 pF",
      "CM1 = 150 pF",
      "CM1 = 163 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 3 pF * (1 - (-50)) = 3 * 51 = 153 pF",
    "diagramType": null
  },
  {
    "id": "s3_102",
    "question": "[102번] 반전 전압이득 Av = -60 인 증폭기에서 Cbc = 4 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 244 pF",
      "CM1 = 240 pF",
      "CM1 = 240 pF",
      "CM1 = 254 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 4 pF * (1 - (-60)) = 4 * 61 = 244 pF",
    "diagramType": null
  },
  {
    "id": "s3_103",
    "question": "[103번] 반전 전압이득 Av = -70 인 증폭기에서 Cbc = 5 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 355 pF",
      "CM1 = 350 pF",
      "CM1 = 350 pF",
      "CM1 = 365 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 5 pF * (1 - (-70)) = 5 * 71 = 355 pF",
    "diagramType": null
  },
  {
    "id": "s3_104",
    "question": "[104번] 반전 전압이득 Av = -80 인 증폭기에서 Cbc = 6 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 486 pF",
      "CM1 = 480 pF",
      "CM1 = 480 pF",
      "CM1 = 496 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 6 pF * (1 - (-80)) = 6 * 81 = 486 pF",
    "diagramType": null
  },
  {
    "id": "s3_105",
    "question": "[105번] 반전 전압이득 Av = -90 인 증폭기에서 Cbc = 2 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 182 pF",
      "CM1 = 180 pF",
      "CM1 = 180 pF",
      "CM1 = 192 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 2 pF * (1 - (-90)) = 2 * 91 = 182 pF",
    "diagramType": null
  },
  {
    "id": "s3_106",
    "question": "[106번] 반전 전압이득 Av = -100 인 증폭기에서 Cbc = 3 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 303 pF",
      "CM1 = 300 pF",
      "CM1 = 300 pF",
      "CM1 = 313 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 3 pF * (1 - (-100)) = 3 * 101 = 303 pF",
    "diagramType": null
  },
  {
    "id": "s3_107",
    "question": "[107번] 반전 전압이득 Av = -110 인 증폭기에서 Cbc = 4 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 444 pF",
      "CM1 = 440 pF",
      "CM1 = 440 pF",
      "CM1 = 454 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 4 pF * (1 - (-110)) = 4 * 111 = 444 pF",
    "diagramType": null
  },
  {
    "id": "s3_108",
    "question": "[108번] 반전 전압이득 Av = -120 인 증폭기에서 Cbc = 5 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 605 pF",
      "CM1 = 600 pF",
      "CM1 = 600 pF",
      "CM1 = 615 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 5 pF * (1 - (-120)) = 5 * 121 = 605 pF",
    "diagramType": null
  },
  {
    "id": "s3_109",
    "question": "[109번] 반전 전압이득 Av = -130 인 증폭기에서 Cbc = 6 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 786 pF",
      "CM1 = 780 pF",
      "CM1 = 780 pF",
      "CM1 = 796 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 6 pF * (1 - (-130)) = 6 * 131 = 786 pF",
    "diagramType": null
  },
  {
    "id": "s3_110",
    "question": "[110번] 반전 전압이득 Av = -140 인 증폭기에서 Cbc = 2 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 282 pF",
      "CM1 = 280 pF",
      "CM1 = 280 pF",
      "CM1 = 292 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 2 pF * (1 - (-140)) = 2 * 141 = 282 pF",
    "diagramType": null
  },
  {
    "id": "s3_111",
    "question": "[111번] 반전 전압이득 Av = -150 인 증폭기에서 Cbc = 3 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 453 pF",
      "CM1 = 450 pF",
      "CM1 = 450 pF",
      "CM1 = 463 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 3 pF * (1 - (-150)) = 3 * 151 = 453 pF",
    "diagramType": null
  },
  {
    "id": "s3_112",
    "question": "[112번] 반전 전압이득 Av = -160 인 증폭기에서 Cbc = 4 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 644 pF",
      "CM1 = 640 pF",
      "CM1 = 640 pF",
      "CM1 = 654 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 4 pF * (1 - (-160)) = 4 * 161 = 644 pF",
    "diagramType": null
  },
  {
    "id": "s3_113",
    "question": "[113번] 반전 전압이득 Av = -170 인 증폭기에서 Cbc = 5 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 855 pF",
      "CM1 = 850 pF",
      "CM1 = 850 pF",
      "CM1 = 865 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 5 pF * (1 - (-170)) = 5 * 171 = 855 pF",
    "diagramType": null
  },
  {
    "id": "s3_114",
    "question": "[114번] 반전 전압이득 Av = -180 인 증폭기에서 Cbc = 6 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 1086 pF",
      "CM1 = 1080 pF",
      "CM1 = 1080 pF",
      "CM1 = 1096 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 6 pF * (1 - (-180)) = 6 * 181 = 1086 pF",
    "diagramType": null
  },
  {
    "id": "s3_115",
    "question": "[115번] 반전 전압이득 Av = -190 인 증폭기에서 Cbc = 2 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 382 pF",
      "CM1 = 380 pF",
      "CM1 = 380 pF",
      "CM1 = 392 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 2 pF * (1 - (-190)) = 2 * 191 = 382 pF",
    "diagramType": null
  },
  {
    "id": "s3_116",
    "question": "[116번] 반전 전압이득 Av = -200 인 증폭기에서 Cbc = 3 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 603 pF",
      "CM1 = 600 pF",
      "CM1 = 600 pF",
      "CM1 = 613 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 3 pF * (1 - (-200)) = 3 * 201 = 603 pF",
    "diagramType": null
  },
  {
    "id": "s3_117",
    "question": "[117번] 반전 전압이득 Av = -210 인 증폭기에서 Cbc = 4 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 844 pF",
      "CM1 = 840 pF",
      "CM1 = 840 pF",
      "CM1 = 854 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 4 pF * (1 - (-210)) = 4 * 211 = 844 pF",
    "diagramType": null
  },
  {
    "id": "s3_118",
    "question": "[118번] 반전 전압이득 Av = -220 인 증폭기에서 Cbc = 5 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 1105 pF",
      "CM1 = 1100 pF",
      "CM1 = 1100 pF",
      "CM1 = 1115 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 5 pF * (1 - (-220)) = 5 * 221 = 1105 pF",
    "diagramType": null
  },
  {
    "id": "s3_119",
    "question": "[119번] 반전 전압이득 Av = -230 인 증폭기에서 Cbc = 6 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 1386 pF",
      "CM1 = 1380 pF",
      "CM1 = 1380 pF",
      "CM1 = 1396 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 6 pF * (1 - (-230)) = 6 * 231 = 1386 pF",
    "diagramType": null
  },
  {
    "id": "s3_120",
    "question": "[120번] 반전 전압이득 Av = -40 인 증폭기에서 Cbc = 2 pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
    "options": [
      "CM1 = 82 pF",
      "CM1 = 80 pF",
      "CM1 = 80 pF",
      "CM1 = 92 pF"
    ],
    "answer": 0,
    "explanation": "[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = 2 pF * (1 - (-40)) = 2 * 41 = 82 pF",
    "diagramType": null
  },
  {
    "id": "s3_121",
    "question": "[121번] 무궤환 전압이득이 A = 1000 인 증폭기에 궤환율 β = 0.009 인 부궤환(Negative Feedback)을 걸었을 때, 궤환 증폭기의 전압이득 Af는?",
    "options": [
      "Af = 100",
      "Af = 90",
      "Af = 10",
      "Af = 111"
    ],
    "answer": 0,
    "explanation": "[1단계] 부궤환 이득 공식: Af = A / (1 + β * A)\n[2단계] 수치 대입: Af = 1000 / (1 + 0.009 * 1000) = 1000 / (1 + 9) = 1000 / 10 = 100\n[3단계] 궤환을 걸면 이득은 줄어들지만 대역폭과 안정도는 대폭 향상됩니다.",
    "diagramType": null
  },
  {
    "id": "s3_122",
    "question": "[122번] 부궤환 증폭기의 4가지 궤환 토폴로지 중, 입력 임피던스를 증가시키고 출력 임피던스를 감소시키는 구조는?",
    "options": [
      "전압-직렬 궤환 (Voltage-Series Feedback)",
      "전압-병렬 궤환 (Voltage-Shunt Feedback)",
      "전류-직렬 궤환 (Current-Series Feedback)",
      "전류-병렬 궤환 (Current-Shunt Feedback)"
    ],
    "answer": 0,
    "explanation": "[1단계] 직렬 입력: 입력 임피던스 증가 (Zinf = Zin * (1 + βA))\n[2단계] 전압 출력: 출력 임피던스 감소 (Zotf = Zot / (1 + βA))\n[3단계] 따라서 전압-직렬 궤환이 이상적인 전압 증폭기 특성을 갖습니다.",
    "diagramType": null
  },
  {
    "id": "s3_123",
    "question": "[123번] 무궤환 이득 A = 2000, 궤환율 β = 0.04 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 24.69",
      "Af = 1920.00",
      "Af = 29.63",
      "Af = 19.75"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 2000 / (1 + 0.04 * 2000) = 2000 / 81.00 = 24.69",
    "diagramType": null
  },
  {
    "id": "s3_124",
    "question": "[124번] 무궤환 이득 A = 2500, 궤환율 β = 0.05 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 19.84",
      "Af = 2375.00",
      "Af = 23.81",
      "Af = 15.87"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 2500 / (1 + 0.05 * 2500) = 2500 / 126.00 = 19.84",
    "diagramType": null
  },
  {
    "id": "s3_125",
    "question": "[125번] 무궤환 이득 A = 3000, 궤환율 β = 0.01 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 96.77",
      "Af = 2970.00",
      "Af = 116.13",
      "Af = 77.42"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 3000 / (1 + 0.01 * 3000) = 3000 / 31.00 = 96.77",
    "diagramType": null
  },
  {
    "id": "s3_126",
    "question": "[126번] 무궤환 이득 A = 3500, 궤환율 β = 0.02 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 49.30",
      "Af = 3430.00",
      "Af = 59.15",
      "Af = 39.44"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 3500 / (1 + 0.02 * 3500) = 3500 / 71.00 = 49.30",
    "diagramType": null
  },
  {
    "id": "s3_127",
    "question": "[127번] 무궤환 이득 A = 4000, 궤환율 β = 0.03 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 33.06",
      "Af = 3880.00",
      "Af = 39.67",
      "Af = 26.45"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 4000 / (1 + 0.03 * 4000) = 4000 / 121.00 = 33.06",
    "diagramType": null
  },
  {
    "id": "s3_128",
    "question": "[128번] 무궤환 이득 A = 4500, 궤환율 β = 0.04 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 24.86",
      "Af = 4320.00",
      "Af = 29.83",
      "Af = 19.89"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 4500 / (1 + 0.04 * 4500) = 4500 / 181.00 = 24.86",
    "diagramType": null
  },
  {
    "id": "s3_129",
    "question": "[129번] 무궤환 이득 A = 5000, 궤환율 β = 0.05 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 19.92",
      "Af = 4750.00",
      "Af = 23.90",
      "Af = 15.94"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 5000 / (1 + 0.05 * 5000) = 5000 / 251.00 = 19.92",
    "diagramType": null
  },
  {
    "id": "s3_130",
    "question": "[130번] 무궤환 이득 A = 500, 궤환율 β = 0.01 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 83.33",
      "Af = 495.00",
      "Af = 100.00",
      "Af = 66.67"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 500 / (1 + 0.01 * 500) = 500 / 6.00 = 83.33",
    "diagramType": null
  },
  {
    "id": "s3_131",
    "question": "[131번] 무궤환 이득 A = 1000, 궤환율 β = 0.02 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 47.62",
      "Af = 980.00",
      "Af = 57.14",
      "Af = 38.10"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 1000 / (1 + 0.02 * 1000) = 1000 / 21.00 = 47.62",
    "diagramType": null
  },
  {
    "id": "s3_132",
    "question": "[132번] 무궤환 이득 A = 1500, 궤환율 β = 0.03 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 32.61",
      "Af = 1455.00",
      "Af = 39.13",
      "Af = 26.09"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 1500 / (1 + 0.03 * 1500) = 1500 / 46.00 = 32.61",
    "diagramType": null
  },
  {
    "id": "s3_133",
    "question": "[133번] 무궤환 이득 A = 2000, 궤환율 β = 0.04 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 24.69",
      "Af = 1920.00",
      "Af = 29.63",
      "Af = 19.75"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 2000 / (1 + 0.04 * 2000) = 2000 / 81.00 = 24.69",
    "diagramType": null
  },
  {
    "id": "s3_134",
    "question": "[134번] 무궤환 이득 A = 2500, 궤환율 β = 0.05 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 19.84",
      "Af = 2375.00",
      "Af = 23.81",
      "Af = 15.87"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 2500 / (1 + 0.05 * 2500) = 2500 / 126.00 = 19.84",
    "diagramType": null
  },
  {
    "id": "s3_135",
    "question": "[135번] 무궤환 이득 A = 3000, 궤환율 β = 0.01 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 96.77",
      "Af = 2970.00",
      "Af = 116.13",
      "Af = 77.42"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 3000 / (1 + 0.01 * 3000) = 3000 / 31.00 = 96.77",
    "diagramType": null
  },
  {
    "id": "s3_136",
    "question": "[136번] 무궤환 이득 A = 3500, 궤환율 β = 0.02 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 49.30",
      "Af = 3430.00",
      "Af = 59.15",
      "Af = 39.44"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 3500 / (1 + 0.02 * 3500) = 3500 / 71.00 = 49.30",
    "diagramType": null
  },
  {
    "id": "s3_137",
    "question": "[137번] 무궤환 이득 A = 4000, 궤환율 β = 0.03 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 33.06",
      "Af = 3880.00",
      "Af = 39.67",
      "Af = 26.45"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 4000 / (1 + 0.03 * 4000) = 4000 / 121.00 = 33.06",
    "diagramType": null
  },
  {
    "id": "s3_138",
    "question": "[138번] 무궤환 이득 A = 4500, 궤환율 β = 0.04 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 24.86",
      "Af = 4320.00",
      "Af = 29.83",
      "Af = 19.89"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 4500 / (1 + 0.04 * 4500) = 4500 / 181.00 = 24.86",
    "diagramType": null
  },
  {
    "id": "s3_139",
    "question": "[139번] 무궤환 이득 A = 5000, 궤환율 β = 0.05 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 19.92",
      "Af = 4750.00",
      "Af = 23.90",
      "Af = 15.94"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 5000 / (1 + 0.05 * 5000) = 5000 / 251.00 = 19.92",
    "diagramType": null
  },
  {
    "id": "s3_140",
    "question": "[140번] 무궤환 이득 A = 500, 궤환율 β = 0.01 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 83.33",
      "Af = 495.00",
      "Af = 100.00",
      "Af = 66.67"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 500 / (1 + 0.01 * 500) = 500 / 6.00 = 83.33",
    "diagramType": null
  },
  {
    "id": "s3_141",
    "question": "[141번] 무궤환 이득 A = 1000, 궤환율 β = 0.02 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 47.62",
      "Af = 980.00",
      "Af = 57.14",
      "Af = 38.10"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 1000 / (1 + 0.02 * 1000) = 1000 / 21.00 = 47.62",
    "diagramType": null
  },
  {
    "id": "s3_142",
    "question": "[142번] 무궤환 이득 A = 1500, 궤환율 β = 0.03 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 32.61",
      "Af = 1455.00",
      "Af = 39.13",
      "Af = 26.09"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 1500 / (1 + 0.03 * 1500) = 1500 / 46.00 = 32.61",
    "diagramType": null
  },
  {
    "id": "s3_143",
    "question": "[143번] 무궤환 이득 A = 2000, 궤환율 β = 0.04 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 24.69",
      "Af = 1920.00",
      "Af = 29.63",
      "Af = 19.75"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 2000 / (1 + 0.04 * 2000) = 2000 / 81.00 = 24.69",
    "diagramType": null
  },
  {
    "id": "s3_144",
    "question": "[144번] 무궤환 이득 A = 2500, 궤환율 β = 0.05 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 19.84",
      "Af = 2375.00",
      "Af = 23.81",
      "Af = 15.87"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 2500 / (1 + 0.05 * 2500) = 2500 / 126.00 = 19.84",
    "diagramType": null
  },
  {
    "id": "s3_145",
    "question": "[145번] 무궤환 이득 A = 3000, 궤환율 β = 0.01 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 96.77",
      "Af = 2970.00",
      "Af = 116.13",
      "Af = 77.42"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 3000 / (1 + 0.01 * 3000) = 3000 / 31.00 = 96.77",
    "diagramType": null
  },
  {
    "id": "s3_146",
    "question": "[146번] 무궤환 이득 A = 3500, 궤환율 β = 0.02 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 49.30",
      "Af = 3430.00",
      "Af = 59.15",
      "Af = 39.44"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 3500 / (1 + 0.02 * 3500) = 3500 / 71.00 = 49.30",
    "diagramType": null
  },
  {
    "id": "s3_147",
    "question": "[147번] 무궤환 이득 A = 4000, 궤환율 β = 0.03 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 33.06",
      "Af = 3880.00",
      "Af = 39.67",
      "Af = 26.45"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 4000 / (1 + 0.03 * 4000) = 4000 / 121.00 = 33.06",
    "diagramType": null
  },
  {
    "id": "s3_148",
    "question": "[148번] 무궤환 이득 A = 4500, 궤환율 β = 0.04 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 24.86",
      "Af = 4320.00",
      "Af = 29.83",
      "Af = 19.89"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 4500 / (1 + 0.04 * 4500) = 4500 / 181.00 = 24.86",
    "diagramType": null
  },
  {
    "id": "s3_149",
    "question": "[149번] 무궤환 이득 A = 5000, 궤환율 β = 0.05 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 19.92",
      "Af = 4750.00",
      "Af = 23.90",
      "Af = 15.94"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 5000 / (1 + 0.05 * 5000) = 5000 / 251.00 = 19.92",
    "diagramType": null
  },
  {
    "id": "s3_150",
    "question": "[150번] 무궤환 이득 A = 500, 궤환율 β = 0.01 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 83.33",
      "Af = 495.00",
      "Af = 100.00",
      "Af = 66.67"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 500 / (1 + 0.01 * 500) = 500 / 6.00 = 83.33",
    "diagramType": null
  },
  {
    "id": "s3_151",
    "question": "[151번] 무궤환 이득 A = 1000, 궤환율 β = 0.02 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 47.62",
      "Af = 980.00",
      "Af = 57.14",
      "Af = 38.10"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 1000 / (1 + 0.02 * 1000) = 1000 / 21.00 = 47.62",
    "diagramType": null
  },
  {
    "id": "s3_152",
    "question": "[152번] 무궤환 이득 A = 1500, 궤환율 β = 0.03 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 32.61",
      "Af = 1455.00",
      "Af = 39.13",
      "Af = 26.09"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 1500 / (1 + 0.03 * 1500) = 1500 / 46.00 = 32.61",
    "diagramType": null
  },
  {
    "id": "s3_153",
    "question": "[153번] 무궤환 이득 A = 2000, 궤환율 β = 0.04 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 24.69",
      "Af = 1920.00",
      "Af = 29.63",
      "Af = 19.75"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 2000 / (1 + 0.04 * 2000) = 2000 / 81.00 = 24.69",
    "diagramType": null
  },
  {
    "id": "s3_154",
    "question": "[154번] 무궤환 이득 A = 2500, 궤환율 β = 0.05 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 19.84",
      "Af = 2375.00",
      "Af = 23.81",
      "Af = 15.87"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 2500 / (1 + 0.05 * 2500) = 2500 / 126.00 = 19.84",
    "diagramType": null
  },
  {
    "id": "s3_155",
    "question": "[155번] 무궤환 이득 A = 3000, 궤환율 β = 0.01 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 96.77",
      "Af = 2970.00",
      "Af = 116.13",
      "Af = 77.42"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 3000 / (1 + 0.01 * 3000) = 3000 / 31.00 = 96.77",
    "diagramType": null
  },
  {
    "id": "s3_156",
    "question": "[156번] 무궤환 이득 A = 3500, 궤환율 β = 0.02 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 49.30",
      "Af = 3430.00",
      "Af = 59.15",
      "Af = 39.44"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 3500 / (1 + 0.02 * 3500) = 3500 / 71.00 = 49.30",
    "diagramType": null
  },
  {
    "id": "s3_157",
    "question": "[157번] 무궤환 이득 A = 4000, 궤환율 β = 0.03 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 33.06",
      "Af = 3880.00",
      "Af = 39.67",
      "Af = 26.45"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 4000 / (1 + 0.03 * 4000) = 4000 / 121.00 = 33.06",
    "diagramType": null
  },
  {
    "id": "s3_158",
    "question": "[158번] 무궤환 이득 A = 4500, 궤환율 β = 0.04 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 24.86",
      "Af = 4320.00",
      "Af = 29.83",
      "Af = 19.89"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 4500 / (1 + 0.04 * 4500) = 4500 / 181.00 = 24.86",
    "diagramType": null
  },
  {
    "id": "s3_159",
    "question": "[159번] 무궤환 이득 A = 5000, 궤환율 β = 0.05 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 19.92",
      "Af = 4750.00",
      "Af = 23.90",
      "Af = 15.94"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 5000 / (1 + 0.05 * 5000) = 5000 / 251.00 = 19.92",
    "diagramType": null
  },
  {
    "id": "s3_160",
    "question": "[160번] 무궤환 이득 A = 500, 궤환율 β = 0.01 일 때 부궤환 증폭기의 궤환이득 Af는?",
    "options": [
      "Af = 83.33",
      "Af = 495.00",
      "Af = 100.00",
      "Af = 66.67"
    ],
    "answer": 0,
    "explanation": "[1단계] Af = A / (1 + β * A)\n[2단계] Af = 500 / (1 + 0.01 * 500) = 500 / 6.00 = 83.33",
    "diagramType": null
  },
  {
    "id": "s3_161",
    "question": "[161번] 반전 연산증폭기(Inverting OP-Amp) 회로에서 R1 = 10 kΩ, Rf = 100 kΩ 일 때, 전압 이득 Av와 입력 전압 Vi = 0.5 V 입력 시 출력 전압 Vo는?",
    "options": [
      "Av = -10, Vo = -5.0 V",
      "Av = -11, Vo = -5.5 V",
      "Av = 10, Vo = 5.0 V",
      "Av = -10, Vo = -0.5 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 반전 증폭기 이득: Av = - Rf / R1 = - 100k / 10k = -10\n[2단계] 출력 전압: Vo = Av * Vi = -10 * 0.5 V = -5.0 V\n[3단계] 오답 함정: 비반전 증폭기 공식 (1 + Rf/R1 = 11)과 혼동하지 않도록 주의합니다.",
    "diagramType": "opampInverting"
  },
  {
    "id": "s3_162",
    "question": "[162번] 비반전 연산증폭기(Non-Inverting OP-Amp) 회로에서 R1 = 4.7 kΩ, Rf = 47 kΩ 일 때, 전압 이득 Av는?",
    "options": [
      "Av = 11.0",
      "Av = 10.0",
      "Av = -10.0",
      "Av = 9.0"
    ],
    "answer": 0,
    "explanation": "[1단계] 비반전 증폭기 이득: Av = 1 + (Rf / R1)\n[2단계] 수치 대입: Av = 1 + (47k / 4.7k) = 1 + 10 = 11.0",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_163",
    "question": "[163번] 차동 증폭기(Differential Amplifier)에서 R1 = R2 = 10 kΩ, Rf = R3 = 100 kΩ 이다. 두 입력 V1 = 2.1 V, V2 = 2.0 V 일 때, 출력 전압 Vo = (Rf/R1) * (V2 - V1) 은?",
    "options": [
      "Vo = -1.0 V",
      "Vo = 1.0 V",
      "Vo = -0.1 V",
      "Vo = -10.0 V"
    ],
    "answer": 0,
    "explanation": "[1단계] 차동 증폭기 출력 공식: Vo = (Rf / R1) * (V2 - V1)\n[2단계] 수치 대입: Vo = (100k / 10k) * (2.0 - 2.1) = 10 * (-0.1 V) = -1.0 V",
    "diagramType": null
  },
  {
    "id": "s3_164",
    "question": "[164번] 1차 능동 저역통과 필터(LPF) 회로에서 R = 15.9 kΩ, C = 0.01 μF 일 때, 3dB 차단 주파수 fc는 약 얼마인가?",
    "options": [
      "fc = 1000 Hz (1 kHz)",
      "fc = 100 Hz",
      "fc = 15.9 kHz",
      "fc = 3.18 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] LPF 차단주파수 공식: fc = 1 / (2 * π * R * C)\n[2단계] 대입: fc = 1 / (2 * 3.14159 * 15900 * 1e-8) = 1 / (1.0e-3) = 1000 Hz = 1 kHz",
    "diagramType": null
  },
  {
    "id": "s3_165",
    "question": "[165번] 비반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 20 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = 3.0",
      "Av = -2.0",
      "Av = 2.0",
      "Av = 4.0"
    ],
    "answer": 0,
    "explanation": "[1단계] 비반전 증폭기 Av = 1 + (Rf / R1) = 1 + (20 / 10) = 3.0",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_166",
    "question": "[166번] 반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 25 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = -2.5",
      "Av = 3.5",
      "Av = -3.5",
      "Av = -3.5"
    ],
    "answer": 0,
    "explanation": "[1단계] 반전 증폭기 Av = - Rf / R1 = - 25 / 10 = -2.5",
    "diagramType": "opampInverting"
  },
  {
    "id": "s3_167",
    "question": "[167번] 비반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 30 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = 4.0",
      "Av = -3.0",
      "Av = 3.0",
      "Av = 5.0"
    ],
    "answer": 0,
    "explanation": "[1단계] 비반전 증폭기 Av = 1 + (Rf / R1) = 1 + (30 / 10) = 4.0",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_168",
    "question": "[168번] 반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 35 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = -3.5",
      "Av = 4.5",
      "Av = -4.5",
      "Av = -4.5"
    ],
    "answer": 0,
    "explanation": "[1단계] 반전 증폭기 Av = - Rf / R1 = - 35 / 10 = -3.5",
    "diagramType": "opampInverting"
  },
  {
    "id": "s3_169",
    "question": "[169번] 비반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 40 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = 5.0",
      "Av = -4.0",
      "Av = 4.0",
      "Av = 6.0"
    ],
    "answer": 0,
    "explanation": "[1단계] 비반전 증폭기 Av = 1 + (Rf / R1) = 1 + (40 / 10) = 5.0",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_170",
    "question": "[170번] 반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 45 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = -4.5",
      "Av = 5.5",
      "Av = -5.5",
      "Av = -5.5"
    ],
    "answer": 0,
    "explanation": "[1단계] 반전 증폭기 Av = - Rf / R1 = - 45 / 10 = -4.5",
    "diagramType": "opampInverting"
  },
  {
    "id": "s3_171",
    "question": "[171번] 비반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 50 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = 6.0",
      "Av = -5.0",
      "Av = 5.0",
      "Av = 7.0"
    ],
    "answer": 0,
    "explanation": "[1단계] 비반전 증폭기 Av = 1 + (Rf / R1) = 1 + (50 / 10) = 6.0",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_172",
    "question": "[172번] 반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 55 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = -5.5",
      "Av = 6.5",
      "Av = -6.5",
      "Av = -6.5"
    ],
    "answer": 0,
    "explanation": "[1단계] 반전 증폭기 Av = - Rf / R1 = - 55 / 10 = -5.5",
    "diagramType": "opampInverting"
  },
  {
    "id": "s3_173",
    "question": "[173번] 비반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 60 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = 7.0",
      "Av = -6.0",
      "Av = 6.0",
      "Av = 8.0"
    ],
    "answer": 0,
    "explanation": "[1단계] 비반전 증폭기 Av = 1 + (Rf / R1) = 1 + (60 / 10) = 7.0",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_174",
    "question": "[174번] 반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 65 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = -6.5",
      "Av = 7.5",
      "Av = -7.5",
      "Av = -7.5"
    ],
    "answer": 0,
    "explanation": "[1단계] 반전 증폭기 Av = - Rf / R1 = - 65 / 10 = -6.5",
    "diagramType": "opampInverting"
  },
  {
    "id": "s3_175",
    "question": "[175번] 비반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 70 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = 8.0",
      "Av = -7.0",
      "Av = 7.0",
      "Av = 9.0"
    ],
    "answer": 0,
    "explanation": "[1단계] 비반전 증폭기 Av = 1 + (Rf / R1) = 1 + (70 / 10) = 8.0",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_176",
    "question": "[176번] 반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 75 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = -7.5",
      "Av = 8.5",
      "Av = -8.5",
      "Av = -8.5"
    ],
    "answer": 0,
    "explanation": "[1단계] 반전 증폭기 Av = - Rf / R1 = - 75 / 10 = -7.5",
    "diagramType": "opampInverting"
  },
  {
    "id": "s3_177",
    "question": "[177번] 비반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 80 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = 9.0",
      "Av = -8.0",
      "Av = 8.0",
      "Av = 10.0"
    ],
    "answer": 0,
    "explanation": "[1단계] 비반전 증폭기 Av = 1 + (Rf / R1) = 1 + (80 / 10) = 9.0",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_178",
    "question": "[178번] 반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 85 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = -8.5",
      "Av = 9.5",
      "Av = -9.5",
      "Av = -9.5"
    ],
    "answer": 0,
    "explanation": "[1단계] 반전 증폭기 Av = - Rf / R1 = - 85 / 10 = -8.5",
    "diagramType": "opampInverting"
  },
  {
    "id": "s3_179",
    "question": "[179번] 비반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 90 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = 10.0",
      "Av = -9.0",
      "Av = 9.0",
      "Av = 11.0"
    ],
    "answer": 0,
    "explanation": "[1단계] 비반전 증폭기 Av = 1 + (Rf / R1) = 1 + (90 / 10) = 10.0",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_180",
    "question": "[180번] 반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 20 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = -2.0",
      "Av = 3.0",
      "Av = -3.0",
      "Av = -3.0"
    ],
    "answer": 0,
    "explanation": "[1단계] 반전 증폭기 Av = - Rf / R1 = - 20 / 10 = -2.0",
    "diagramType": "opampInverting"
  },
  {
    "id": "s3_181",
    "question": "[181번] 비반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 25 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = 3.5",
      "Av = -2.5",
      "Av = 2.5",
      "Av = 4.5"
    ],
    "answer": 0,
    "explanation": "[1단계] 비반전 증폭기 Av = 1 + (Rf / R1) = 1 + (25 / 10) = 3.5",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_182",
    "question": "[182번] 반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 30 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = -3.0",
      "Av = 4.0",
      "Av = -4.0",
      "Av = -4.0"
    ],
    "answer": 0,
    "explanation": "[1단계] 반전 증폭기 Av = - Rf / R1 = - 30 / 10 = -3.0",
    "diagramType": "opampInverting"
  },
  {
    "id": "s3_183",
    "question": "[183번] 비반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 35 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = 4.5",
      "Av = -3.5",
      "Av = 3.5",
      "Av = 5.5"
    ],
    "answer": 0,
    "explanation": "[1단계] 비반전 증폭기 Av = 1 + (Rf / R1) = 1 + (35 / 10) = 4.5",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_184",
    "question": "[184번] 반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 40 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = -4.0",
      "Av = 5.0",
      "Av = -5.0",
      "Av = -5.0"
    ],
    "answer": 0,
    "explanation": "[1단계] 반전 증폭기 Av = - Rf / R1 = - 40 / 10 = -4.0",
    "diagramType": "opampInverting"
  },
  {
    "id": "s3_185",
    "question": "[185번] 비반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 45 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = 5.5",
      "Av = -4.5",
      "Av = 4.5",
      "Av = 6.5"
    ],
    "answer": 0,
    "explanation": "[1단계] 비반전 증폭기 Av = 1 + (Rf / R1) = 1 + (45 / 10) = 5.5",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_186",
    "question": "[186번] 반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 50 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = -5.0",
      "Av = 6.0",
      "Av = -6.0",
      "Av = -6.0"
    ],
    "answer": 0,
    "explanation": "[1단계] 반전 증폭기 Av = - Rf / R1 = - 50 / 10 = -5.0",
    "diagramType": "opampInverting"
  },
  {
    "id": "s3_187",
    "question": "[187번] 비반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 55 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = 6.5",
      "Av = -5.5",
      "Av = 5.5",
      "Av = 7.5"
    ],
    "answer": 0,
    "explanation": "[1단계] 비반전 증폭기 Av = 1 + (Rf / R1) = 1 + (55 / 10) = 6.5",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_188",
    "question": "[188번] 반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 60 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = -6.0",
      "Av = 7.0",
      "Av = -7.0",
      "Av = -7.0"
    ],
    "answer": 0,
    "explanation": "[1단계] 반전 증폭기 Av = - Rf / R1 = - 60 / 10 = -6.0",
    "diagramType": "opampInverting"
  },
  {
    "id": "s3_189",
    "question": "[189번] 비반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 65 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = 7.5",
      "Av = -6.5",
      "Av = 6.5",
      "Av = 8.5"
    ],
    "answer": 0,
    "explanation": "[1단계] 비반전 증폭기 Av = 1 + (Rf / R1) = 1 + (65 / 10) = 7.5",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_190",
    "question": "[190번] 반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 70 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = -7.0",
      "Av = 8.0",
      "Av = -8.0",
      "Av = -8.0"
    ],
    "answer": 0,
    "explanation": "[1단계] 반전 증폭기 Av = - Rf / R1 = - 70 / 10 = -7.0",
    "diagramType": "opampInverting"
  },
  {
    "id": "s3_191",
    "question": "[191번] 비반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 75 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = 8.5",
      "Av = -7.5",
      "Av = 7.5",
      "Av = 9.5"
    ],
    "answer": 0,
    "explanation": "[1단계] 비반전 증폭기 Av = 1 + (Rf / R1) = 1 + (75 / 10) = 8.5",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_192",
    "question": "[192번] 반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 80 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = -8.0",
      "Av = 9.0",
      "Av = -9.0",
      "Av = -9.0"
    ],
    "answer": 0,
    "explanation": "[1단계] 반전 증폭기 Av = - Rf / R1 = - 80 / 10 = -8.0",
    "diagramType": "opampInverting"
  },
  {
    "id": "s3_193",
    "question": "[193번] 비반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 85 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = 9.5",
      "Av = -8.5",
      "Av = 8.5",
      "Av = 10.5"
    ],
    "answer": 0,
    "explanation": "[1단계] 비반전 증폭기 Av = 1 + (Rf / R1) = 1 + (85 / 10) = 9.5",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_194",
    "question": "[194번] 반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 90 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = -9.0",
      "Av = 10.0",
      "Av = -10.0",
      "Av = -10.0"
    ],
    "answer": 0,
    "explanation": "[1단계] 반전 증폭기 Av = - Rf / R1 = - 90 / 10 = -9.0",
    "diagramType": "opampInverting"
  },
  {
    "id": "s3_195",
    "question": "[195번] 비반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 20 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = 3.0",
      "Av = -2.0",
      "Av = 2.0",
      "Av = 4.0"
    ],
    "answer": 0,
    "explanation": "[1단계] 비반전 증폭기 Av = 1 + (Rf / R1) = 1 + (20 / 10) = 3.0",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_196",
    "question": "[196번] 반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 25 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = -2.5",
      "Av = 3.5",
      "Av = -3.5",
      "Av = -3.5"
    ],
    "answer": 0,
    "explanation": "[1단계] 반전 증폭기 Av = - Rf / R1 = - 25 / 10 = -2.5",
    "diagramType": "opampInverting"
  },
  {
    "id": "s3_197",
    "question": "[197번] 비반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 30 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = 4.0",
      "Av = -3.0",
      "Av = 3.0",
      "Av = 5.0"
    ],
    "answer": 0,
    "explanation": "[1단계] 비반전 증폭기 Av = 1 + (Rf / R1) = 1 + (30 / 10) = 4.0",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_198",
    "question": "[198번] 반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 35 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = -3.5",
      "Av = 4.5",
      "Av = -4.5",
      "Av = -4.5"
    ],
    "answer": 0,
    "explanation": "[1단계] 반전 증폭기 Av = - Rf / R1 = - 35 / 10 = -3.5",
    "diagramType": "opampInverting"
  },
  {
    "id": "s3_199",
    "question": "[199번] 비반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 40 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = 5.0",
      "Av = -4.0",
      "Av = 4.0",
      "Av = 6.0"
    ],
    "answer": 0,
    "explanation": "[1단계] 비반전 증폭기 Av = 1 + (Rf / R1) = 1 + (40 / 10) = 5.0",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_200",
    "question": "[200번] 반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 45 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = -4.5",
      "Av = 5.5",
      "Av = -5.5",
      "Av = -5.5"
    ],
    "answer": 0,
    "explanation": "[1단계] 반전 증폭기 Av = - Rf / R1 = - 45 / 10 = -4.5",
    "diagramType": "opampInverting"
  },
  {
    "id": "s3_201",
    "question": "[201번] 비반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 50 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = 6.0",
      "Av = -5.0",
      "Av = 5.0",
      "Av = 7.0"
    ],
    "answer": 0,
    "explanation": "[1단계] 비반전 증폭기 Av = 1 + (Rf / R1) = 1 + (50 / 10) = 6.0",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_202",
    "question": "[202번] 반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 55 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = -5.5",
      "Av = 6.5",
      "Av = -6.5",
      "Av = -6.5"
    ],
    "answer": 0,
    "explanation": "[1단계] 반전 증폭기 Av = - Rf / R1 = - 55 / 10 = -5.5",
    "diagramType": "opampInverting"
  },
  {
    "id": "s3_203",
    "question": "[203번] 비반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 60 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = 7.0",
      "Av = -6.0",
      "Av = 6.0",
      "Av = 8.0"
    ],
    "answer": 0,
    "explanation": "[1단계] 비반전 증폭기 Av = 1 + (Rf / R1) = 1 + (60 / 10) = 7.0",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_204",
    "question": "[204번] 반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 65 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = -6.5",
      "Av = 7.5",
      "Av = -7.5",
      "Av = -7.5"
    ],
    "answer": 0,
    "explanation": "[1단계] 반전 증폭기 Av = - Rf / R1 = - 65 / 10 = -6.5",
    "diagramType": "opampInverting"
  },
  {
    "id": "s3_205",
    "question": "[205번] 비반전 OP-Amp 회로에서 R1 = 10 kΩ, Rf = 70 kΩ 일 때, 전압 증폭도 Av는?",
    "options": [
      "Av = 8.0",
      "Av = -7.0",
      "Av = 7.0",
      "Av = 9.0"
    ],
    "answer": 0,
    "explanation": "[1단계] 비반전 증폭기 Av = 1 + (Rf / R1) = 1 + (70 / 10) = 8.0",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_206",
    "question": "[206번] RC 위상전이 발진기(RC Phase-Shift Oscillator)에서 각 단의 RC 귀환망 저항 R = 10 kΩ, C = 0.001 μF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 6.50 kHz",
      "f0 = 15.9 kHz",
      "f0 = 3.98 kHz",
      "f0 = 1.00 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] RC 위상전이 발진주파수 공식: f0 = 1 / (2 * π * R * C * √6)\n[2단계] 계산: f0 = 1 / (2 * 3.14159 * 10000 * 1e-9 * 2.449) = 1 / (1.538e-4) = 6500 Hz = 6.50 kHz\n[3단계] 설명: √6 팩터가 분모에 들어가는 것이 핵심입니다.",
    "diagramType": null
  },
  {
    "id": "s3_207",
    "question": "[207번] 비인 브리지 발진기(Wien Bridge Oscillator)에서 R = 10 kΩ, C = 0.01 μF 일 때, 지속적인 정현파 발진을 일으키는 발진 주파수 f0와 필요한 증폭기의 최소 이득 Av는?",
    "options": [
      "f0 = 1.59 kHz, Av ≥ 3",
      "f0 = 1.59 kHz, Av ≥ 29",
      "f0 = 6.50 kHz, Av ≥ 3",
      "f0 = 3.18 kHz, Av ≥ 3"
    ],
    "answer": 0,
    "explanation": "[1단계] 비인 브리지 발진주파수: f0 = 1 / (2 * π * R * C) = 1 / (2 * 3.1416 * 10k * 0.01u) = 1.59 kHz\n[2단계] 발진 조건: 귀환율 β = 1/3 이므로, 지속 발진을 위해 증폭기 이득 Av ≥ 3 이 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s3_208",
    "question": "[208번] 비인 브리지 발진기에서 R = 25 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 636.62 kHz",
      "f0 = 259.95 kHz",
      "f0 = 1273.24 kHz",
      "f0 = 1998.99 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 25k * 10n) = 636.62 kHz",
    "diagramType": null
  },
  {
    "id": "s3_209",
    "question": "[209번] 비인 브리지 발진기에서 R = 30 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 530.52 kHz",
      "f0 = 216.63 kHz",
      "f0 = 1061.03 kHz",
      "f0 = 1665.82 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 30k * 10n) = 530.52 kHz",
    "diagramType": null
  },
  {
    "id": "s3_210",
    "question": "[210번] 비인 브리지 발진기에서 R = 10 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 1591.55 kHz",
      "f0 = 649.88 kHz",
      "f0 = 3183.10 kHz",
      "f0 = 4997.47 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 10k * 10n) = 1591.55 kHz",
    "diagramType": null
  },
  {
    "id": "s3_211",
    "question": "[211번] 비인 브리지 발진기에서 R = 15 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 1061.03 kHz",
      "f0 = 433.25 kHz",
      "f0 = 2122.07 kHz",
      "f0 = 3331.65 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 15k * 10n) = 1061.03 kHz",
    "diagramType": null
  },
  {
    "id": "s3_212",
    "question": "[212번] 비인 브리지 발진기에서 R = 20 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 795.78 kHz",
      "f0 = 324.94 kHz",
      "f0 = 1591.55 kHz",
      "f0 = 2498.73 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 20k * 10n) = 795.78 kHz",
    "diagramType": null
  },
  {
    "id": "s3_213",
    "question": "[213번] 비인 브리지 발진기에서 R = 25 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 636.62 kHz",
      "f0 = 259.95 kHz",
      "f0 = 1273.24 kHz",
      "f0 = 1998.99 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 25k * 10n) = 636.62 kHz",
    "diagramType": null
  },
  {
    "id": "s3_214",
    "question": "[214번] 비인 브리지 발진기에서 R = 30 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 530.52 kHz",
      "f0 = 216.63 kHz",
      "f0 = 1061.03 kHz",
      "f0 = 1665.82 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 30k * 10n) = 530.52 kHz",
    "diagramType": null
  },
  {
    "id": "s3_215",
    "question": "[215번] 비인 브리지 발진기에서 R = 10 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 1591.55 kHz",
      "f0 = 649.88 kHz",
      "f0 = 3183.10 kHz",
      "f0 = 4997.47 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 10k * 10n) = 1591.55 kHz",
    "diagramType": null
  },
  {
    "id": "s3_216",
    "question": "[216번] 비인 브리지 발진기에서 R = 15 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 1061.03 kHz",
      "f0 = 433.25 kHz",
      "f0 = 2122.07 kHz",
      "f0 = 3331.65 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 15k * 10n) = 1061.03 kHz",
    "diagramType": null
  },
  {
    "id": "s3_217",
    "question": "[217번] 비인 브리지 발진기에서 R = 20 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 795.78 kHz",
      "f0 = 324.94 kHz",
      "f0 = 1591.55 kHz",
      "f0 = 2498.73 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 20k * 10n) = 795.78 kHz",
    "diagramType": null
  },
  {
    "id": "s3_218",
    "question": "[218번] 비인 브리지 발진기에서 R = 25 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 636.62 kHz",
      "f0 = 259.95 kHz",
      "f0 = 1273.24 kHz",
      "f0 = 1998.99 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 25k * 10n) = 636.62 kHz",
    "diagramType": null
  },
  {
    "id": "s3_219",
    "question": "[219번] 비인 브리지 발진기에서 R = 30 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 530.52 kHz",
      "f0 = 216.63 kHz",
      "f0 = 1061.03 kHz",
      "f0 = 1665.82 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 30k * 10n) = 530.52 kHz",
    "diagramType": null
  },
  {
    "id": "s3_220",
    "question": "[220번] 비인 브리지 발진기에서 R = 10 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 1591.55 kHz",
      "f0 = 649.88 kHz",
      "f0 = 3183.10 kHz",
      "f0 = 4997.47 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 10k * 10n) = 1591.55 kHz",
    "diagramType": null
  },
  {
    "id": "s3_221",
    "question": "[221번] 비인 브리지 발진기에서 R = 15 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 1061.03 kHz",
      "f0 = 433.25 kHz",
      "f0 = 2122.07 kHz",
      "f0 = 3331.65 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 15k * 10n) = 1061.03 kHz",
    "diagramType": null
  },
  {
    "id": "s3_222",
    "question": "[222번] 비인 브리지 발진기에서 R = 20 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 795.78 kHz",
      "f0 = 324.94 kHz",
      "f0 = 1591.55 kHz",
      "f0 = 2498.73 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 20k * 10n) = 795.78 kHz",
    "diagramType": null
  },
  {
    "id": "s3_223",
    "question": "[223번] 비인 브리지 발진기에서 R = 25 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 636.62 kHz",
      "f0 = 259.95 kHz",
      "f0 = 1273.24 kHz",
      "f0 = 1998.99 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 25k * 10n) = 636.62 kHz",
    "diagramType": null
  },
  {
    "id": "s3_224",
    "question": "[224번] 비인 브리지 발진기에서 R = 30 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 530.52 kHz",
      "f0 = 216.63 kHz",
      "f0 = 1061.03 kHz",
      "f0 = 1665.82 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 30k * 10n) = 530.52 kHz",
    "diagramType": null
  },
  {
    "id": "s3_225",
    "question": "[225번] 비인 브리지 발진기에서 R = 10 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 1591.55 kHz",
      "f0 = 649.88 kHz",
      "f0 = 3183.10 kHz",
      "f0 = 4997.47 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 10k * 10n) = 1591.55 kHz",
    "diagramType": null
  },
  {
    "id": "s3_226",
    "question": "[226번] 비인 브리지 발진기에서 R = 15 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 1061.03 kHz",
      "f0 = 433.25 kHz",
      "f0 = 2122.07 kHz",
      "f0 = 3331.65 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 15k * 10n) = 1061.03 kHz",
    "diagramType": null
  },
  {
    "id": "s3_227",
    "question": "[227번] 비인 브리지 발진기에서 R = 20 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 795.78 kHz",
      "f0 = 324.94 kHz",
      "f0 = 1591.55 kHz",
      "f0 = 2498.73 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 20k * 10n) = 795.78 kHz",
    "diagramType": null
  },
  {
    "id": "s3_228",
    "question": "[228번] 비인 브리지 발진기에서 R = 25 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 636.62 kHz",
      "f0 = 259.95 kHz",
      "f0 = 1273.24 kHz",
      "f0 = 1998.99 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 25k * 10n) = 636.62 kHz",
    "diagramType": null
  },
  {
    "id": "s3_229",
    "question": "[229번] 비인 브리지 발진기에서 R = 30 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 530.52 kHz",
      "f0 = 216.63 kHz",
      "f0 = 1061.03 kHz",
      "f0 = 1665.82 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 30k * 10n) = 530.52 kHz",
    "diagramType": null
  },
  {
    "id": "s3_230",
    "question": "[230번] 비인 브리지 발진기에서 R = 10 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 1591.55 kHz",
      "f0 = 649.88 kHz",
      "f0 = 3183.10 kHz",
      "f0 = 4997.47 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 10k * 10n) = 1591.55 kHz",
    "diagramType": null
  },
  {
    "id": "s3_231",
    "question": "[231번] 비인 브리지 발진기에서 R = 15 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 1061.03 kHz",
      "f0 = 433.25 kHz",
      "f0 = 2122.07 kHz",
      "f0 = 3331.65 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 15k * 10n) = 1061.03 kHz",
    "diagramType": null
  },
  {
    "id": "s3_232",
    "question": "[232번] 비인 브리지 발진기에서 R = 20 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 795.78 kHz",
      "f0 = 324.94 kHz",
      "f0 = 1591.55 kHz",
      "f0 = 2498.73 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 20k * 10n) = 795.78 kHz",
    "diagramType": null
  },
  {
    "id": "s3_233",
    "question": "[233번] 비인 브리지 발진기에서 R = 25 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 636.62 kHz",
      "f0 = 259.95 kHz",
      "f0 = 1273.24 kHz",
      "f0 = 1998.99 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 25k * 10n) = 636.62 kHz",
    "diagramType": null
  },
  {
    "id": "s3_234",
    "question": "[234번] 비인 브리지 발진기에서 R = 30 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 530.52 kHz",
      "f0 = 216.63 kHz",
      "f0 = 1061.03 kHz",
      "f0 = 1665.82 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 30k * 10n) = 530.52 kHz",
    "diagramType": null
  },
  {
    "id": "s3_235",
    "question": "[235번] 비인 브리지 발진기에서 R = 10 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 1591.55 kHz",
      "f0 = 649.88 kHz",
      "f0 = 3183.10 kHz",
      "f0 = 4997.47 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 10k * 10n) = 1591.55 kHz",
    "diagramType": null
  },
  {
    "id": "s3_236",
    "question": "[236번] 비인 브리지 발진기에서 R = 15 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 1061.03 kHz",
      "f0 = 433.25 kHz",
      "f0 = 2122.07 kHz",
      "f0 = 3331.65 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 15k * 10n) = 1061.03 kHz",
    "diagramType": null
  },
  {
    "id": "s3_237",
    "question": "[237번] 비인 브리지 발진기에서 R = 20 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 795.78 kHz",
      "f0 = 324.94 kHz",
      "f0 = 1591.55 kHz",
      "f0 = 2498.73 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 20k * 10n) = 795.78 kHz",
    "diagramType": null
  },
  {
    "id": "s3_238",
    "question": "[238번] 비인 브리지 발진기에서 R = 25 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 636.62 kHz",
      "f0 = 259.95 kHz",
      "f0 = 1273.24 kHz",
      "f0 = 1998.99 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 25k * 10n) = 636.62 kHz",
    "diagramType": null
  },
  {
    "id": "s3_239",
    "question": "[239번] 비인 브리지 발진기에서 R = 30 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 530.52 kHz",
      "f0 = 216.63 kHz",
      "f0 = 1061.03 kHz",
      "f0 = 1665.82 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 30k * 10n) = 530.52 kHz",
    "diagramType": null
  },
  {
    "id": "s3_240",
    "question": "[240번] 비인 브리지 발진기에서 R = 10 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 1591.55 kHz",
      "f0 = 649.88 kHz",
      "f0 = 3183.10 kHz",
      "f0 = 4997.47 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 10k * 10n) = 1591.55 kHz",
    "diagramType": null
  },
  {
    "id": "s3_241",
    "question": "[241번] 비인 브리지 발진기에서 R = 15 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 1061.03 kHz",
      "f0 = 433.25 kHz",
      "f0 = 2122.07 kHz",
      "f0 = 3331.65 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 15k * 10n) = 1061.03 kHz",
    "diagramType": null
  },
  {
    "id": "s3_242",
    "question": "[242번] 비인 브리지 발진기에서 R = 20 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 795.78 kHz",
      "f0 = 324.94 kHz",
      "f0 = 1591.55 kHz",
      "f0 = 2498.73 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 20k * 10n) = 795.78 kHz",
    "diagramType": null
  },
  {
    "id": "s3_243",
    "question": "[243번] 비인 브리지 발진기에서 R = 25 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 636.62 kHz",
      "f0 = 259.95 kHz",
      "f0 = 1273.24 kHz",
      "f0 = 1998.99 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 25k * 10n) = 636.62 kHz",
    "diagramType": null
  },
  {
    "id": "s3_244",
    "question": "[244번] 비인 브리지 발진기에서 R = 30 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 530.52 kHz",
      "f0 = 216.63 kHz",
      "f0 = 1061.03 kHz",
      "f0 = 1665.82 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 30k * 10n) = 530.52 kHz",
    "diagramType": null
  },
  {
    "id": "s3_245",
    "question": "[245번] 비인 브리지 발진기에서 R = 10 kΩ, C = 10 nF 일 때, 발진 주파수 f0는 약 얼마인가?",
    "options": [
      "f0 = 1591.55 kHz",
      "f0 = 649.88 kHz",
      "f0 = 3183.10 kHz",
      "f0 = 4997.47 kHz"
    ],
    "answer": 0,
    "explanation": "[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * 10k * 10n) = 1591.55 kHz",
    "diagramType": null
  },
  {
    "id": "s3_246",
    "question": "[246번] 이상적인 B급 푸시풀(Push-Pull) 전력 증폭기가 최대 출력 파형을 낼 때 얻을 수 있는 이론상 최대 컬렉터 전력 효율(Efficiency, η)은?",
    "options": [
      "78.5 %",
      "50.0 %",
      "25.0 %",
      "90.0 %"
    ],
    "answer": 0,
    "explanation": "[1단계] B급 푸시풀 전력증폭기 최대 효율: η_max = (π / 4) * 100% = 78.54% ≈ 78.5%\n[2단계] 비교: A급 변압기 결합 증폭기는 최대 50%, A급 RC 결합은 최대 25% 효율을 갖습니다.",
    "diagramType": null
  },
  {
    "id": "s3_247",
    "question": "[247번] 제너 다이오드 정전압 회로에서 입력 직류 전압 Vin = 20 V, 제너 전압 VZ = 12 V, RS = 200 Ω, 부하 저항 RL = 1 kΩ 일 때, 부하 전류 IL과 제너 다이오드를 흐르는 제너 전류 IZ는?",
    "options": [
      "IL = 12 mA, IZ = 28 mA",
      "IL = 12 mA, IZ = 40 mA",
      "IL = 20 mA, IZ = 20 mA",
      "IL = 8 mA, IZ = 32 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] 정전압 동작 시 부하 전압 VL = VZ = 12 V\n[2단계] 부하 전류 IL = VL / RL = 12 V / 1 kΩ = 12 mA\n[3단계] 전체 공급 전류 IS = (Vin - VZ) / RS = (20 - 12) / 200 = 8 V / 200 Ω = 40 mA\n[4단계] 제너 전류 IZ = IS - IL = 40 mA - 12 mA = 28 mA",
    "diagramType": null
  },
  {
    "id": "s3_248",
    "question": "[248번] 제너 정전압 회로에서 Vin = 25V, VZ = 9V, RS = 250Ω, RL = 500Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 46.0 mA",
      "IZ = 64.0 mA",
      "IZ = 18.0 mA",
      "IZ = 69.0 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (25 - 9) / 250 = 64.0 mA\n[2단계] IL = VZ / RL = 9 / 500 = 18.0 mA\n[3단계] IZ = IS - IL = 64.0 - 18.0 = 46.0 mA",
    "diagramType": null
  },
  {
    "id": "s3_249",
    "question": "[249번] 제너 정전압 회로에서 Vin = 30V, VZ = 12V, RS = 300Ω, RL = 1000Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 48.0 mA",
      "IZ = 60.0 mA",
      "IZ = 12.0 mA",
      "IZ = 72.0 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (30 - 12) / 300 = 60.0 mA\n[2단계] IL = VZ / RL = 12 / 1000 = 12.0 mA\n[3단계] IZ = IS - IL = 60.0 - 12.0 = 48.0 mA",
    "diagramType": null
  },
  {
    "id": "s3_250",
    "question": "[250번] 제너 정전압 회로에서 Vin = 35V, VZ = 15V, RS = 100Ω, RL = 1500Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 190.0 mA",
      "IZ = 200.0 mA",
      "IZ = 10.0 mA",
      "IZ = 285.0 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (35 - 15) / 100 = 200.0 mA\n[2단계] IL = VZ / RL = 15 / 1500 = 10.0 mA\n[3단계] IZ = IS - IL = 200.0 - 10.0 = 190.0 mA",
    "diagramType": null
  },
  {
    "id": "s3_251",
    "question": "[251번] 제너 정전압 회로에서 Vin = 40V, VZ = 18V, RS = 150Ω, RL = 2000Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 137.7 mA",
      "IZ = 146.7 mA",
      "IZ = 9.0 mA",
      "IZ = 206.5 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (40 - 18) / 150 = 146.7 mA\n[2단계] IL = VZ / RL = 18 / 2000 = 9.0 mA\n[3단계] IZ = IS - IL = 146.7 - 9.0 = 137.7 mA",
    "diagramType": null
  },
  {
    "id": "s3_252",
    "question": "[252번] 제너 정전압 회로에서 Vin = 15V, VZ = 9V, RS = 200Ω, RL = 500Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 12.0 mA",
      "IZ = 30.0 mA",
      "IZ = 18.0 mA",
      "IZ = 18.0 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (15 - 9) / 200 = 30.0 mA\n[2단계] IL = VZ / RL = 9 / 500 = 18.0 mA\n[3단계] IZ = IS - IL = 30.0 - 18.0 = 12.0 mA",
    "diagramType": null
  },
  {
    "id": "s3_253",
    "question": "[253번] 제너 정전압 회로에서 Vin = 20V, VZ = 12V, RS = 250Ω, RL = 1000Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 20.0 mA",
      "IZ = 32.0 mA",
      "IZ = 12.0 mA",
      "IZ = 30.0 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (20 - 12) / 250 = 32.0 mA\n[2단계] IL = VZ / RL = 12 / 1000 = 12.0 mA\n[3단계] IZ = IS - IL = 32.0 - 12.0 = 20.0 mA",
    "diagramType": null
  },
  {
    "id": "s3_254",
    "question": "[254번] 제너 정전압 회로에서 Vin = 25V, VZ = 15V, RS = 300Ω, RL = 1500Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 23.3 mA",
      "IZ = 33.3 mA",
      "IZ = 10.0 mA",
      "IZ = 35.0 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (25 - 15) / 300 = 33.3 mA\n[2단계] IL = VZ / RL = 15 / 1500 = 10.0 mA\n[3단계] IZ = IS - IL = 33.3 - 10.0 = 23.3 mA",
    "diagramType": null
  },
  {
    "id": "s3_255",
    "question": "[255번] 제너 정전압 회로에서 Vin = 30V, VZ = 18V, RS = 100Ω, RL = 2000Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 111.0 mA",
      "IZ = 120.0 mA",
      "IZ = 9.0 mA",
      "IZ = 166.5 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (30 - 18) / 100 = 120.0 mA\n[2단계] IL = VZ / RL = 18 / 2000 = 9.0 mA\n[3단계] IZ = IS - IL = 120.0 - 9.0 = 111.0 mA",
    "diagramType": null
  },
  {
    "id": "s3_256",
    "question": "[256번] 제너 정전압 회로에서 Vin = 35V, VZ = 9V, RS = 150Ω, RL = 500Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 155.3 mA",
      "IZ = 173.3 mA",
      "IZ = 18.0 mA",
      "IZ = 233.0 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (35 - 9) / 150 = 173.3 mA\n[2단계] IL = VZ / RL = 9 / 500 = 18.0 mA\n[3단계] IZ = IS - IL = 173.3 - 18.0 = 155.3 mA",
    "diagramType": null
  },
  {
    "id": "s3_257",
    "question": "[257번] 제너 정전압 회로에서 Vin = 40V, VZ = 12V, RS = 200Ω, RL = 1000Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 128.0 mA",
      "IZ = 140.0 mA",
      "IZ = 12.0 mA",
      "IZ = 192.0 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (40 - 12) / 200 = 140.0 mA\n[2단계] IL = VZ / RL = 12 / 1000 = 12.0 mA\n[3단계] IZ = IS - IL = 140.0 - 12.0 = 128.0 mA",
    "diagramType": null
  },
  {
    "id": "s3_258",
    "question": "[258번] 제너 정전압 회로에서 Vin = 15V, VZ = 15V, RS = 250Ω, RL = 1500Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = -10.0 mA",
      "IZ = 0.0 mA",
      "IZ = 10.0 mA",
      "IZ = -15.0 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (15 - 15) / 250 = 0.0 mA\n[2단계] IL = VZ / RL = 15 / 1500 = 10.0 mA\n[3단계] IZ = IS - IL = 0.0 - 10.0 = -10.0 mA",
    "diagramType": null
  },
  {
    "id": "s3_259",
    "question": "[259번] 제너 정전압 회로에서 Vin = 20V, VZ = 18V, RS = 300Ω, RL = 2000Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = -2.3 mA",
      "IZ = 6.7 mA",
      "IZ = 9.0 mA",
      "IZ = -3.5 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (20 - 18) / 300 = 6.7 mA\n[2단계] IL = VZ / RL = 18 / 2000 = 9.0 mA\n[3단계] IZ = IS - IL = 6.7 - 9.0 = -2.3 mA",
    "diagramType": null
  },
  {
    "id": "s3_260",
    "question": "[260번] 제너 정전압 회로에서 Vin = 25V, VZ = 9V, RS = 100Ω, RL = 500Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 142.0 mA",
      "IZ = 160.0 mA",
      "IZ = 18.0 mA",
      "IZ = 213.0 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (25 - 9) / 100 = 160.0 mA\n[2단계] IL = VZ / RL = 9 / 500 = 18.0 mA\n[3단계] IZ = IS - IL = 160.0 - 18.0 = 142.0 mA",
    "diagramType": null
  },
  {
    "id": "s3_261",
    "question": "[261번] 제너 정전압 회로에서 Vin = 30V, VZ = 12V, RS = 150Ω, RL = 1000Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 108.0 mA",
      "IZ = 120.0 mA",
      "IZ = 12.0 mA",
      "IZ = 162.0 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (30 - 12) / 150 = 120.0 mA\n[2단계] IL = VZ / RL = 12 / 1000 = 12.0 mA\n[3단계] IZ = IS - IL = 120.0 - 12.0 = 108.0 mA",
    "diagramType": null
  },
  {
    "id": "s3_262",
    "question": "[262번] 제너 정전압 회로에서 Vin = 35V, VZ = 15V, RS = 200Ω, RL = 1500Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 90.0 mA",
      "IZ = 100.0 mA",
      "IZ = 10.0 mA",
      "IZ = 135.0 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (35 - 15) / 200 = 100.0 mA\n[2단계] IL = VZ / RL = 15 / 1500 = 10.0 mA\n[3단계] IZ = IS - IL = 100.0 - 10.0 = 90.0 mA",
    "diagramType": null
  },
  {
    "id": "s3_263",
    "question": "[263번] 제너 정전압 회로에서 Vin = 40V, VZ = 18V, RS = 250Ω, RL = 2000Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 79.0 mA",
      "IZ = 88.0 mA",
      "IZ = 9.0 mA",
      "IZ = 118.5 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (40 - 18) / 250 = 88.0 mA\n[2단계] IL = VZ / RL = 18 / 2000 = 9.0 mA\n[3단계] IZ = IS - IL = 88.0 - 9.0 = 79.0 mA",
    "diagramType": null
  },
  {
    "id": "s3_264",
    "question": "[264번] 제너 정전압 회로에서 Vin = 15V, VZ = 9V, RS = 300Ω, RL = 500Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 2.0 mA",
      "IZ = 20.0 mA",
      "IZ = 18.0 mA",
      "IZ = 3.0 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (15 - 9) / 300 = 20.0 mA\n[2단계] IL = VZ / RL = 9 / 500 = 18.0 mA\n[3단계] IZ = IS - IL = 20.0 - 18.0 = 2.0 mA",
    "diagramType": null
  },
  {
    "id": "s3_265",
    "question": "[265번] 제너 정전압 회로에서 Vin = 20V, VZ = 12V, RS = 100Ω, RL = 1000Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 68.0 mA",
      "IZ = 80.0 mA",
      "IZ = 12.0 mA",
      "IZ = 102.0 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (20 - 12) / 100 = 80.0 mA\n[2단계] IL = VZ / RL = 12 / 1000 = 12.0 mA\n[3단계] IZ = IS - IL = 80.0 - 12.0 = 68.0 mA",
    "diagramType": null
  },
  {
    "id": "s3_266",
    "question": "[266번] 제너 정전압 회로에서 Vin = 25V, VZ = 15V, RS = 150Ω, RL = 1500Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 56.7 mA",
      "IZ = 66.7 mA",
      "IZ = 10.0 mA",
      "IZ = 85.0 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (25 - 15) / 150 = 66.7 mA\n[2단계] IL = VZ / RL = 15 / 1500 = 10.0 mA\n[3단계] IZ = IS - IL = 66.7 - 10.0 = 56.7 mA",
    "diagramType": null
  },
  {
    "id": "s3_267",
    "question": "[267번] 제너 정전압 회로에서 Vin = 30V, VZ = 18V, RS = 200Ω, RL = 2000Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 51.0 mA",
      "IZ = 60.0 mA",
      "IZ = 9.0 mA",
      "IZ = 76.5 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (30 - 18) / 200 = 60.0 mA\n[2단계] IL = VZ / RL = 18 / 2000 = 9.0 mA\n[3단계] IZ = IS - IL = 60.0 - 9.0 = 51.0 mA",
    "diagramType": null
  },
  {
    "id": "s3_268",
    "question": "[268번] 제너 정전압 회로에서 Vin = 35V, VZ = 9V, RS = 250Ω, RL = 500Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 86.0 mA",
      "IZ = 104.0 mA",
      "IZ = 18.0 mA",
      "IZ = 129.0 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (35 - 9) / 250 = 104.0 mA\n[2단계] IL = VZ / RL = 9 / 500 = 18.0 mA\n[3단계] IZ = IS - IL = 104.0 - 18.0 = 86.0 mA",
    "diagramType": null
  },
  {
    "id": "s3_269",
    "question": "[269번] 제너 정전압 회로에서 Vin = 40V, VZ = 12V, RS = 300Ω, RL = 1000Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 81.3 mA",
      "IZ = 93.3 mA",
      "IZ = 12.0 mA",
      "IZ = 122.0 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (40 - 12) / 300 = 93.3 mA\n[2단계] IL = VZ / RL = 12 / 1000 = 12.0 mA\n[3단계] IZ = IS - IL = 93.3 - 12.0 = 81.3 mA",
    "diagramType": null
  },
  {
    "id": "s3_270",
    "question": "[270번] 제너 정전압 회로에서 Vin = 15V, VZ = 15V, RS = 100Ω, RL = 1500Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = -10.0 mA",
      "IZ = 0.0 mA",
      "IZ = 10.0 mA",
      "IZ = -15.0 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (15 - 15) / 100 = 0.0 mA\n[2단계] IL = VZ / RL = 15 / 1500 = 10.0 mA\n[3단계] IZ = IS - IL = 0.0 - 10.0 = -10.0 mA",
    "diagramType": null
  },
  {
    "id": "s3_271",
    "question": "[271번] 제너 정전압 회로에서 Vin = 20V, VZ = 18V, RS = 150Ω, RL = 2000Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 4.3 mA",
      "IZ = 13.3 mA",
      "IZ = 9.0 mA",
      "IZ = 6.5 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (20 - 18) / 150 = 13.3 mA\n[2단계] IL = VZ / RL = 18 / 2000 = 9.0 mA\n[3단계] IZ = IS - IL = 13.3 - 9.0 = 4.3 mA",
    "diagramType": null
  },
  {
    "id": "s3_272",
    "question": "[272번] 제너 정전압 회로에서 Vin = 25V, VZ = 9V, RS = 200Ω, RL = 500Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 62.0 mA",
      "IZ = 80.0 mA",
      "IZ = 18.0 mA",
      "IZ = 93.0 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (25 - 9) / 200 = 80.0 mA\n[2단계] IL = VZ / RL = 9 / 500 = 18.0 mA\n[3단계] IZ = IS - IL = 80.0 - 18.0 = 62.0 mA",
    "diagramType": null
  },
  {
    "id": "s3_273",
    "question": "[273번] 제너 정전압 회로에서 Vin = 30V, VZ = 12V, RS = 250Ω, RL = 1000Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 60.0 mA",
      "IZ = 72.0 mA",
      "IZ = 12.0 mA",
      "IZ = 90.0 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (30 - 12) / 250 = 72.0 mA\n[2단계] IL = VZ / RL = 12 / 1000 = 12.0 mA\n[3단계] IZ = IS - IL = 72.0 - 12.0 = 60.0 mA",
    "diagramType": null
  },
  {
    "id": "s3_274",
    "question": "[274번] 제너 정전압 회로에서 Vin = 35V, VZ = 15V, RS = 300Ω, RL = 1500Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 56.7 mA",
      "IZ = 66.7 mA",
      "IZ = 10.0 mA",
      "IZ = 85.0 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (35 - 15) / 300 = 66.7 mA\n[2단계] IL = VZ / RL = 15 / 1500 = 10.0 mA\n[3단계] IZ = IS - IL = 66.7 - 10.0 = 56.7 mA",
    "diagramType": null
  },
  {
    "id": "s3_275",
    "question": "[275번] 제너 정전압 회로에서 Vin = 40V, VZ = 18V, RS = 100Ω, RL = 2000Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 211.0 mA",
      "IZ = 220.0 mA",
      "IZ = 9.0 mA",
      "IZ = 316.5 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (40 - 18) / 100 = 220.0 mA\n[2단계] IL = VZ / RL = 18 / 2000 = 9.0 mA\n[3단계] IZ = IS - IL = 220.0 - 9.0 = 211.0 mA",
    "diagramType": null
  },
  {
    "id": "s3_276",
    "question": "[276번] 제너 정전압 회로에서 Vin = 15V, VZ = 9V, RS = 150Ω, RL = 500Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 22.0 mA",
      "IZ = 40.0 mA",
      "IZ = 18.0 mA",
      "IZ = 33.0 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (15 - 9) / 150 = 40.0 mA\n[2단계] IL = VZ / RL = 9 / 500 = 18.0 mA\n[3단계] IZ = IS - IL = 40.0 - 18.0 = 22.0 mA",
    "diagramType": null
  },
  {
    "id": "s3_277",
    "question": "[277번] 제너 정전압 회로에서 Vin = 20V, VZ = 12V, RS = 200Ω, RL = 1000Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 28.0 mA",
      "IZ = 40.0 mA",
      "IZ = 12.0 mA",
      "IZ = 42.0 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (20 - 12) / 200 = 40.0 mA\n[2단계] IL = VZ / RL = 12 / 1000 = 12.0 mA\n[3단계] IZ = IS - IL = 40.0 - 12.0 = 28.0 mA",
    "diagramType": null
  },
  {
    "id": "s3_278",
    "question": "[278번] 제너 정전압 회로에서 Vin = 25V, VZ = 15V, RS = 250Ω, RL = 1500Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 30.0 mA",
      "IZ = 40.0 mA",
      "IZ = 10.0 mA",
      "IZ = 45.0 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (25 - 15) / 250 = 40.0 mA\n[2단계] IL = VZ / RL = 15 / 1500 = 10.0 mA\n[3단계] IZ = IS - IL = 40.0 - 10.0 = 30.0 mA",
    "diagramType": null
  },
  {
    "id": "s3_279",
    "question": "[279번] 제너 정전압 회로에서 Vin = 30V, VZ = 18V, RS = 300Ω, RL = 2000Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 31.0 mA",
      "IZ = 40.0 mA",
      "IZ = 9.0 mA",
      "IZ = 46.5 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (30 - 18) / 300 = 40.0 mA\n[2단계] IL = VZ / RL = 18 / 2000 = 9.0 mA\n[3단계] IZ = IS - IL = 40.0 - 9.0 = 31.0 mA",
    "diagramType": null
  },
  {
    "id": "s3_280",
    "question": "[280번] 제너 정전압 회로에서 Vin = 35V, VZ = 9V, RS = 100Ω, RL = 500Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 242.0 mA",
      "IZ = 260.0 mA",
      "IZ = 18.0 mA",
      "IZ = 363.0 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (35 - 9) / 100 = 260.0 mA\n[2단계] IL = VZ / RL = 9 / 500 = 18.0 mA\n[3단계] IZ = IS - IL = 260.0 - 18.0 = 242.0 mA",
    "diagramType": null
  },
  {
    "id": "s3_281",
    "question": "[281번] 제너 정전압 회로에서 Vin = 40V, VZ = 12V, RS = 150Ω, RL = 1000Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 174.7 mA",
      "IZ = 186.7 mA",
      "IZ = 12.0 mA",
      "IZ = 262.0 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (40 - 12) / 150 = 186.7 mA\n[2단계] IL = VZ / RL = 12 / 1000 = 12.0 mA\n[3단계] IZ = IS - IL = 186.7 - 12.0 = 174.7 mA",
    "diagramType": null
  },
  {
    "id": "s3_282",
    "question": "[282번] 제너 정전압 회로에서 Vin = 15V, VZ = 15V, RS = 200Ω, RL = 1500Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = -10.0 mA",
      "IZ = 0.0 mA",
      "IZ = 10.0 mA",
      "IZ = -15.0 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (15 - 15) / 200 = 0.0 mA\n[2단계] IL = VZ / RL = 15 / 1500 = 10.0 mA\n[3단계] IZ = IS - IL = 0.0 - 10.0 = -10.0 mA",
    "diagramType": null
  },
  {
    "id": "s3_283",
    "question": "[283번] 제너 정전압 회로에서 Vin = 20V, VZ = 18V, RS = 250Ω, RL = 2000Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = -1.0 mA",
      "IZ = 8.0 mA",
      "IZ = 9.0 mA",
      "IZ = -1.5 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (20 - 18) / 250 = 8.0 mA\n[2단계] IL = VZ / RL = 18 / 2000 = 9.0 mA\n[3단계] IZ = IS - IL = 8.0 - 9.0 = -1.0 mA",
    "diagramType": null
  },
  {
    "id": "s3_284",
    "question": "[284번] 제너 정전압 회로에서 Vin = 25V, VZ = 9V, RS = 300Ω, RL = 500Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 35.3 mA",
      "IZ = 53.3 mA",
      "IZ = 18.0 mA",
      "IZ = 53.0 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (25 - 9) / 300 = 53.3 mA\n[2단계] IL = VZ / RL = 9 / 500 = 18.0 mA\n[3단계] IZ = IS - IL = 53.3 - 18.0 = 35.3 mA",
    "diagramType": null
  },
  {
    "id": "s3_285",
    "question": "[285번] 제너 정전압 회로에서 Vin = 30V, VZ = 12V, RS = 100Ω, RL = 1000Ω 일 때 제너 전류 IZ는?",
    "options": [
      "IZ = 168.0 mA",
      "IZ = 180.0 mA",
      "IZ = 12.0 mA",
      "IZ = 252.0 mA"
    ],
    "answer": 0,
    "explanation": "[1단계] IS = (Vin - VZ) / RS = (30 - 12) / 100 = 180.0 mA\n[2단계] IL = VZ / RL = 12 / 1000 = 12.0 mA\n[3단계] IZ = IS - IL = 180.0 - 12.0 = 168.0 mA",
    "diagramType": null
  }
];
