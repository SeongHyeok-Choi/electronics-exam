export const subject3Data = [
  {
    "id": "s3_1",
    "question": "[1번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1=10kΩ, Rf=90kΩ 일 때 전압 증폭도 A_v는?",
    "options": [
      "9",
      "10",
      "11",
      "-9"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (90k / 10k) = 10 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_2",
    "question": "[2번] 아래 [회로 도면]과 같은 브리지 정류회로(Bridge Rectifier)에서 입력 AC 전압 실효값이 V_rms 일 때 DC 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "0.45 V_rms",
      "0.637 V_rms",
      "0.9 V_rms",
      "1.414 V_rms"
    ],
    "answer": 2,
    "explanation": "전파 브리지 정류회로의 직류 전압 V_dc ≒ 0.9 V_rms 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_3",
    "question": "[3번] 아래 [회로 도면]과 같은 공통 에미터(CE) 증폭회로에서 입력 신호 Vin과 출력 신호 Vout 간의 위상차는?",
    "options": [
      "0° (동위상)",
      "90°",
      "180° (반위상)",
      "270°"
    ],
    "answer": 2,
    "explanation": "공통 에미터(CE) 증폭회로는 입력과 출력 간에 180° 위상 반전이 일어납니다.",
    "diagramType": "bjtCommonEmitter"
  },
  {
    "id": "s3_4",
    "question": "[4번] 이상적인 연산증폭기(OP-Amp)의 조건으로 틀린 것은?",
    "options": [
      "전압 증폭도 A_v = ∞",
      "입력 임피던스 Z_in = ∞",
      "대역폭 BW = ∞",
      "출력 임피던스 Z_out = ∞"
    ],
    "answer": 3,
    "explanation": "이상적 OP-Amp의 출력 임피던스는 0 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s3_5",
    "question": "[5번] BJT 증폭회로에서 바이패스 콘덴서(Bypass Capacitor)의 주요 역할은?",
    "options": [
      "직류 바이어스 차단",
      "교류 신호에 대한 접지 경로 제공(증폭도 저하 방지)",
      "고주파 여과",
      "위상 반전"
    ],
    "answer": 1,
    "explanation": "바이패스 콘덴서는 교류 신호 접지 경로를 제공하여 증폭도 감소를 방지합니다.",
    "diagramType": null
  },
  {
    "id": "s3_6",
    "question": "[6번] 반전 연산증폭기 회로에서 R1=10kΩ, Rf=50kΩ 일 때 전압 증폭도 A_v는?",
    "options": [
      "-5",
      "5",
      "-6",
      "0.2"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (50k / 10k) = -5 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_7",
    "question": "[7번] RC 부귀환 증폭회로에서 부귀환 적용 시 나타나는 특징으로 틀린 것은?",
    "options": [
      "증폭도 안정도 향상",
      "대역폭 증가",
      "왜곡 및 잡음 감소",
      "전압 증폭도 증가"
    ],
    "answer": 3,
    "explanation": "부귀환 적용 시 증폭도는 감소합니다.",
    "diagramType": null
  },
  {
    "id": "s3_8",
    "question": "[8번] 바르크하우젠(Barkhausen) 정현파 발진 조건으로 옳은 것은?",
    "options": [
      "|Aβ| = 1, 위상차 0° (또는 360°)",
      "|Aβ| > 2, 위상차 90°",
      "|Aβ| = 0, 위상차 180°",
      "|Aβ| < 1, 위상차 270°"
    ],
    "answer": 0,
    "explanation": "바르크하우젠 발진 조건: |Aβ| = 1 이고 위상 이동량 0° 이어야 발진합니다.",
    "diagramType": null
  },
  {
    "id": "s3_9",
    "question": "[9번] 제너 다이오드(Zener Diode)의 주요 용도는?",
    "options": [
      "정전압(전압 안정화) 회로",
      "고주파 정류 회로",
      "발광 소자",
      "광전 변환 소자"
    ],
    "answer": 0,
    "explanation": "제너 다이오드는 역방향 항복 특성을 이용한 정전압 회로에 쓰입니다.",
    "diagramType": null
  },
  {
    "id": "s3_10",
    "question": "[10번] 리플률(Ripple Factor) r의 정의식으로 옳은 것은?",
    "options": [
      "r = (직류 성분) / (교류 성분 실효값)",
      "r = (교류 성분 실효값) / (직류 성분)",
      "r = (최대 전압) / (최소 전압)",
      "r = (전체 전압) / (직류 전압)"
    ],
    "answer": 1,
    "explanation": "리플률 r = (교류 성분 실효값 V_ac) / (직류 성분 V_dc) 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_11",
    "question": "[11번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 6 kΩ, Rf = 42 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "7.0",
      "8.0",
      "9.0",
      "7.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (42 / 6) = 8.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_12",
    "question": "[12번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 50 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-5.0",
      "5.0",
      "-6.0",
      "6.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (50 / 10) = -5.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_13",
    "question": "[13번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 16V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "14.4 V",
      "7.2 V",
      "22.6 V",
      "16.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 16 = 14.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_14",
    "question": "[14번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_15",
    "question": "[15번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_16",
    "question": "[16번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 11 kΩ, Rf = 66 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "6.0",
      "7.0",
      "8.0",
      "6.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (66 / 11) = 7.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_17",
    "question": "[17번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 20 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-2.0",
      "2.0",
      "-3.0",
      "3.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (20 / 10) = -2.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_18",
    "question": "[18번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 26V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "23.4 V",
      "11.7 V",
      "36.8 V",
      "26.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 26 = 23.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_19",
    "question": "[19번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_20",
    "question": "[20번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_21",
    "question": "[21번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 6 kΩ, Rf = 30 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "5.0",
      "6.0",
      "7.0",
      "5.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (30 / 6) = 6.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_22",
    "question": "[22번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 70 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-7.0",
      "7.0",
      "-8.0",
      "8.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (70 / 10) = -7.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_23",
    "question": "[23번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 16V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "14.4 V",
      "7.2 V",
      "22.6 V",
      "16.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 16 = 14.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_24",
    "question": "[24번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_25",
    "question": "[25번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_26",
    "question": "[26번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 11 kΩ, Rf = 44 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "4.0",
      "5.0",
      "6.0",
      "4.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (44 / 11) = 5.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_27",
    "question": "[27번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 40 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-4.0",
      "4.0",
      "-5.0",
      "5.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (40 / 10) = -4.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_28",
    "question": "[28번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 26V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "23.4 V",
      "11.7 V",
      "36.8 V",
      "26.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 26 = 23.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_29",
    "question": "[29번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_30",
    "question": "[30번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_31",
    "question": "[31번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 6 kΩ, Rf = 18 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "3.0",
      "4.0",
      "5.0",
      "3.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (18 / 6) = 4.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_32",
    "question": "[32번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 10 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-1.0",
      "1.0",
      "-2.0",
      "2.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (10 / 10) = -1.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_33",
    "question": "[33번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 16V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "14.4 V",
      "7.2 V",
      "22.6 V",
      "16.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 16 = 14.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_34",
    "question": "[34번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_35",
    "question": "[35번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_36",
    "question": "[36번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 11 kΩ, Rf = 22 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "2.0",
      "3.0",
      "4.0",
      "2.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (22 / 11) = 3.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_37",
    "question": "[37번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 60 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-6.0",
      "6.0",
      "-7.0",
      "7.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (60 / 10) = -6.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_38",
    "question": "[38번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 26V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "23.4 V",
      "11.7 V",
      "36.8 V",
      "26.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 26 = 23.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_39",
    "question": "[39번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_40",
    "question": "[40번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_41",
    "question": "[41번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 6 kΩ, Rf = 42 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "7.0",
      "8.0",
      "9.0",
      "7.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (42 / 6) = 8.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_42",
    "question": "[42번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 30 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-3.0",
      "3.0",
      "-4.0",
      "4.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (30 / 10) = -3.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_43",
    "question": "[43번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 16V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "14.4 V",
      "7.2 V",
      "22.6 V",
      "16.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 16 = 14.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_44",
    "question": "[44번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_45",
    "question": "[45번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_46",
    "question": "[46번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 11 kΩ, Rf = 66 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "6.0",
      "7.0",
      "8.0",
      "6.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (66 / 11) = 7.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_47",
    "question": "[47번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 80 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-8.0",
      "8.0",
      "-9.0",
      "9.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (80 / 10) = -8.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_48",
    "question": "[48번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 26V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "23.4 V",
      "11.7 V",
      "36.8 V",
      "26.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 26 = 23.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_49",
    "question": "[49번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_50",
    "question": "[50번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_51",
    "question": "[51번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 6 kΩ, Rf = 30 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "5.0",
      "6.0",
      "7.0",
      "5.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (30 / 6) = 6.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_52",
    "question": "[52번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 50 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-5.0",
      "5.0",
      "-6.0",
      "6.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (50 / 10) = -5.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_53",
    "question": "[53번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 16V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "14.4 V",
      "7.2 V",
      "22.6 V",
      "16.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 16 = 14.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_54",
    "question": "[54번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_55",
    "question": "[55번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_56",
    "question": "[56번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 11 kΩ, Rf = 44 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "4.0",
      "5.0",
      "6.0",
      "4.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (44 / 11) = 5.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_57",
    "question": "[57번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 20 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-2.0",
      "2.0",
      "-3.0",
      "3.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (20 / 10) = -2.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_58",
    "question": "[58번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 26V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "23.4 V",
      "11.7 V",
      "36.8 V",
      "26.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 26 = 23.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_59",
    "question": "[59번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_60",
    "question": "[60번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_61",
    "question": "[61번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 6 kΩ, Rf = 18 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "3.0",
      "4.0",
      "5.0",
      "3.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (18 / 6) = 4.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_62",
    "question": "[62번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 70 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-7.0",
      "7.0",
      "-8.0",
      "8.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (70 / 10) = -7.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_63",
    "question": "[63번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 16V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "14.4 V",
      "7.2 V",
      "22.6 V",
      "16.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 16 = 14.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_64",
    "question": "[64번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_65",
    "question": "[65번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_66",
    "question": "[66번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 11 kΩ, Rf = 22 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "2.0",
      "3.0",
      "4.0",
      "2.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (22 / 11) = 3.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_67",
    "question": "[67번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 40 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-4.0",
      "4.0",
      "-5.0",
      "5.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (40 / 10) = -4.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_68",
    "question": "[68번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 26V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "23.4 V",
      "11.7 V",
      "36.8 V",
      "26.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 26 = 23.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_69",
    "question": "[69번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_70",
    "question": "[70번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_71",
    "question": "[71번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 6 kΩ, Rf = 42 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "7.0",
      "8.0",
      "9.0",
      "7.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (42 / 6) = 8.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_72",
    "question": "[72번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 10 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-1.0",
      "1.0",
      "-2.0",
      "2.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (10 / 10) = -1.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_73",
    "question": "[73번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 16V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "14.4 V",
      "7.2 V",
      "22.6 V",
      "16.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 16 = 14.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_74",
    "question": "[74번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_75",
    "question": "[75번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_76",
    "question": "[76번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 11 kΩ, Rf = 66 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "6.0",
      "7.0",
      "8.0",
      "6.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (66 / 11) = 7.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_77",
    "question": "[77번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 60 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-6.0",
      "6.0",
      "-7.0",
      "7.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (60 / 10) = -6.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_78",
    "question": "[78번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 26V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "23.4 V",
      "11.7 V",
      "36.8 V",
      "26.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 26 = 23.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_79",
    "question": "[79번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_80",
    "question": "[80번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_81",
    "question": "[81번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 6 kΩ, Rf = 30 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "5.0",
      "6.0",
      "7.0",
      "5.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (30 / 6) = 6.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_82",
    "question": "[82번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 30 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-3.0",
      "3.0",
      "-4.0",
      "4.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (30 / 10) = -3.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_83",
    "question": "[83번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 16V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "14.4 V",
      "7.2 V",
      "22.6 V",
      "16.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 16 = 14.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_84",
    "question": "[84번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_85",
    "question": "[85번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_86",
    "question": "[86번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 11 kΩ, Rf = 44 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "4.0",
      "5.0",
      "6.0",
      "4.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (44 / 11) = 5.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_87",
    "question": "[87번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 80 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-8.0",
      "8.0",
      "-9.0",
      "9.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (80 / 10) = -8.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_88",
    "question": "[88번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 26V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "23.4 V",
      "11.7 V",
      "36.8 V",
      "26.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 26 = 23.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_89",
    "question": "[89번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_90",
    "question": "[90번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_91",
    "question": "[91번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 6 kΩ, Rf = 18 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "3.0",
      "4.0",
      "5.0",
      "3.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (18 / 6) = 4.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_92",
    "question": "[92번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 50 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-5.0",
      "5.0",
      "-6.0",
      "6.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (50 / 10) = -5.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_93",
    "question": "[93번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 16V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "14.4 V",
      "7.2 V",
      "22.6 V",
      "16.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 16 = 14.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_94",
    "question": "[94번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_95",
    "question": "[95번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_96",
    "question": "[96번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 11 kΩ, Rf = 22 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "2.0",
      "3.0",
      "4.0",
      "2.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (22 / 11) = 3.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_97",
    "question": "[97번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 20 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-2.0",
      "2.0",
      "-3.0",
      "3.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (20 / 10) = -2.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_98",
    "question": "[98번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 26V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "23.4 V",
      "11.7 V",
      "36.8 V",
      "26.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 26 = 23.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_99",
    "question": "[99번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_100",
    "question": "[100번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_101",
    "question": "[101번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 6 kΩ, Rf = 42 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "7.0",
      "8.0",
      "9.0",
      "7.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (42 / 6) = 8.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_102",
    "question": "[102번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 70 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-7.0",
      "7.0",
      "-8.0",
      "8.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (70 / 10) = -7.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_103",
    "question": "[103번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 16V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "14.4 V",
      "7.2 V",
      "22.6 V",
      "16.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 16 = 14.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_104",
    "question": "[104번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_105",
    "question": "[105번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_106",
    "question": "[106번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 11 kΩ, Rf = 66 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "6.0",
      "7.0",
      "8.0",
      "6.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (66 / 11) = 7.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_107",
    "question": "[107번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 40 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-4.0",
      "4.0",
      "-5.0",
      "5.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (40 / 10) = -4.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_108",
    "question": "[108번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 26V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "23.4 V",
      "11.7 V",
      "36.8 V",
      "26.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 26 = 23.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_109",
    "question": "[109번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_110",
    "question": "[110번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_111",
    "question": "[111번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 6 kΩ, Rf = 30 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "5.0",
      "6.0",
      "7.0",
      "5.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (30 / 6) = 6.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_112",
    "question": "[112번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 10 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-1.0",
      "1.0",
      "-2.0",
      "2.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (10 / 10) = -1.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_113",
    "question": "[113번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 16V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "14.4 V",
      "7.2 V",
      "22.6 V",
      "16.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 16 = 14.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_114",
    "question": "[114번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_115",
    "question": "[115번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_116",
    "question": "[116번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 11 kΩ, Rf = 44 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "4.0",
      "5.0",
      "6.0",
      "4.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (44 / 11) = 5.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_117",
    "question": "[117번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 60 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-6.0",
      "6.0",
      "-7.0",
      "7.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (60 / 10) = -6.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_118",
    "question": "[118번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 26V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "23.4 V",
      "11.7 V",
      "36.8 V",
      "26.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 26 = 23.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_119",
    "question": "[119번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_120",
    "question": "[120번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_121",
    "question": "[121번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 6 kΩ, Rf = 18 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "3.0",
      "4.0",
      "5.0",
      "3.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (18 / 6) = 4.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_122",
    "question": "[122번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 30 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-3.0",
      "3.0",
      "-4.0",
      "4.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (30 / 10) = -3.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_123",
    "question": "[123번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 16V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "14.4 V",
      "7.2 V",
      "22.6 V",
      "16.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 16 = 14.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_124",
    "question": "[124번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_125",
    "question": "[125번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_126",
    "question": "[126번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 11 kΩ, Rf = 22 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "2.0",
      "3.0",
      "4.0",
      "2.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (22 / 11) = 3.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_127",
    "question": "[127번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 80 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-8.0",
      "8.0",
      "-9.0",
      "9.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (80 / 10) = -8.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_128",
    "question": "[128번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 26V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "23.4 V",
      "11.7 V",
      "36.8 V",
      "26.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 26 = 23.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_129",
    "question": "[129번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_130",
    "question": "[130번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_131",
    "question": "[131번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 6 kΩ, Rf = 42 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "7.0",
      "8.0",
      "9.0",
      "7.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (42 / 6) = 8.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_132",
    "question": "[132번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 50 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-5.0",
      "5.0",
      "-6.0",
      "6.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (50 / 10) = -5.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_133",
    "question": "[133번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 16V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "14.4 V",
      "7.2 V",
      "22.6 V",
      "16.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 16 = 14.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_134",
    "question": "[134번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_135",
    "question": "[135번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_136",
    "question": "[136번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 11 kΩ, Rf = 66 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "6.0",
      "7.0",
      "8.0",
      "6.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (66 / 11) = 7.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_137",
    "question": "[137번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 20 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-2.0",
      "2.0",
      "-3.0",
      "3.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (20 / 10) = -2.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_138",
    "question": "[138번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 26V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "23.4 V",
      "11.7 V",
      "36.8 V",
      "26.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 26 = 23.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_139",
    "question": "[139번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_140",
    "question": "[140번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_141",
    "question": "[141번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 6 kΩ, Rf = 30 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "5.0",
      "6.0",
      "7.0",
      "5.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (30 / 6) = 6.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_142",
    "question": "[142번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 70 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-7.0",
      "7.0",
      "-8.0",
      "8.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (70 / 10) = -7.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_143",
    "question": "[143번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 16V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "14.4 V",
      "7.2 V",
      "22.6 V",
      "16.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 16 = 14.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_144",
    "question": "[144번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_145",
    "question": "[145번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_146",
    "question": "[146번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 11 kΩ, Rf = 44 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "4.0",
      "5.0",
      "6.0",
      "4.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (44 / 11) = 5.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_147",
    "question": "[147번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 40 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-4.0",
      "4.0",
      "-5.0",
      "5.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (40 / 10) = -4.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_148",
    "question": "[148번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 26V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "23.4 V",
      "11.7 V",
      "36.8 V",
      "26.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 26 = 23.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_149",
    "question": "[149번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_150",
    "question": "[150번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_151",
    "question": "[151번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 6 kΩ, Rf = 18 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "3.0",
      "4.0",
      "5.0",
      "3.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (18 / 6) = 4.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_152",
    "question": "[152번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 10 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-1.0",
      "1.0",
      "-2.0",
      "2.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (10 / 10) = -1.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_153",
    "question": "[153번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 16V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "14.4 V",
      "7.2 V",
      "22.6 V",
      "16.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 16 = 14.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_154",
    "question": "[154번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_155",
    "question": "[155번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_156",
    "question": "[156번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 11 kΩ, Rf = 22 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "2.0",
      "3.0",
      "4.0",
      "2.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (22 / 11) = 3.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_157",
    "question": "[157번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 60 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-6.0",
      "6.0",
      "-7.0",
      "7.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (60 / 10) = -6.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_158",
    "question": "[158번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 26V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "23.4 V",
      "11.7 V",
      "36.8 V",
      "26.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 26 = 23.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_159",
    "question": "[159번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_160",
    "question": "[160번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_161",
    "question": "[161번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 6 kΩ, Rf = 42 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "7.0",
      "8.0",
      "9.0",
      "7.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (42 / 6) = 8.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_162",
    "question": "[162번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 30 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-3.0",
      "3.0",
      "-4.0",
      "4.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (30 / 10) = -3.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_163",
    "question": "[163번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 16V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "14.4 V",
      "7.2 V",
      "22.6 V",
      "16.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 16 = 14.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_164",
    "question": "[164번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_165",
    "question": "[165번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_166",
    "question": "[166번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 11 kΩ, Rf = 66 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "6.0",
      "7.0",
      "8.0",
      "6.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (66 / 11) = 7.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_167",
    "question": "[167번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 80 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-8.0",
      "8.0",
      "-9.0",
      "9.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (80 / 10) = -8.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_168",
    "question": "[168번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 26V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "23.4 V",
      "11.7 V",
      "36.8 V",
      "26.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 26 = 23.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_169",
    "question": "[169번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_170",
    "question": "[170번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_171",
    "question": "[171번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 6 kΩ, Rf = 30 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "5.0",
      "6.0",
      "7.0",
      "5.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (30 / 6) = 6.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_172",
    "question": "[172번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 50 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-5.0",
      "5.0",
      "-6.0",
      "6.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (50 / 10) = -5.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_173",
    "question": "[173번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 16V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "14.4 V",
      "7.2 V",
      "22.6 V",
      "16.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 16 = 14.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_174",
    "question": "[174번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_175",
    "question": "[175번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_176",
    "question": "[176번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 11 kΩ, Rf = 44 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "4.0",
      "5.0",
      "6.0",
      "4.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (44 / 11) = 5.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_177",
    "question": "[177번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 20 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-2.0",
      "2.0",
      "-3.0",
      "3.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (20 / 10) = -2.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_178",
    "question": "[178번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 26V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "23.4 V",
      "11.7 V",
      "36.8 V",
      "26.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 26 = 23.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_179",
    "question": "[179번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_180",
    "question": "[180번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_181",
    "question": "[181번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 6 kΩ, Rf = 18 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "3.0",
      "4.0",
      "5.0",
      "3.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (18 / 6) = 4.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_182",
    "question": "[182번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 70 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-7.0",
      "7.0",
      "-8.0",
      "8.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (70 / 10) = -7.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_183",
    "question": "[183번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 16V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "14.4 V",
      "7.2 V",
      "22.6 V",
      "16.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 16 = 14.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_184",
    "question": "[184번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_185",
    "question": "[185번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_186",
    "question": "[186번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 11 kΩ, Rf = 22 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "2.0",
      "3.0",
      "4.0",
      "2.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (22 / 11) = 3.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_187",
    "question": "[187번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 40 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-4.0",
      "4.0",
      "-5.0",
      "5.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (40 / 10) = -4.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_188",
    "question": "[188번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 26V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "23.4 V",
      "11.7 V",
      "36.8 V",
      "26.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 26 = 23.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_189",
    "question": "[189번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_190",
    "question": "[190번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_191",
    "question": "[191번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 6 kΩ, Rf = 42 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "7.0",
      "8.0",
      "9.0",
      "7.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (42 / 6) = 8.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_192",
    "question": "[192번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 10 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-1.0",
      "1.0",
      "-2.0",
      "2.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (10 / 10) = -1.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_193",
    "question": "[193번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 16V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "14.4 V",
      "7.2 V",
      "22.6 V",
      "16.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 16 = 14.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_194",
    "question": "[194번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_195",
    "question": "[195번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  },
  {
    "id": "s3_196",
    "question": "[196번] 아래 [회로 도면]과 같은 비반전 연산증폭기 회로에서 R1 = 11 kΩ, Rf = 66 kΩ 일 때 회로의 전압증폭도 A_v는?",
    "options": [
      "6.0",
      "7.0",
      "8.0",
      "6.0"
    ],
    "answer": 1,
    "explanation": "비반전 증폭기 전압이득 A_v = 1 + (Rf / R1) = 1 + (66 / 11) = 7.0 입니다.",
    "diagramType": "opampNonInverting"
  },
  {
    "id": "s3_197",
    "question": "[197번] 반전 연산증폭기 회로에서 입력저항 R1 = 10 kΩ, 피드백 저항 Rf = 60 kΩ 일 때 전압 증폭도는?",
    "options": [
      "-6.0",
      "6.0",
      "-7.0",
      "7.0"
    ],
    "answer": 0,
    "explanation": "반전 증폭기 전압이득 A_v = - (Rf / R1) = - (60 / 10) = -6.0 입니다.",
    "diagramType": null
  },
  {
    "id": "s3_198",
    "question": "[198번] 아래 [회로 도면]과 같은 브리지 정류회로에서 입력 AC 실효 전압이 V_rms = 26V 일 때 직류 출력 전압 V_dc는 약 얼마인가?",
    "options": [
      "23.4 V",
      "11.7 V",
      "36.8 V",
      "26.0 V"
    ],
    "answer": 0,
    "explanation": "브리지 정류 직류 전압 V_dc = 0.9 * V_rms = 0.9 * 26 = 23.4 V 입니다.",
    "diagramType": "bridgeRectifier"
  },
  {
    "id": "s3_199",
    "question": "[199번] 슈미트 트리거(Schmitt Trigger) 회로의 대표적인 특성 및 기능은 무엇인가?",
    "options": [
      "히스테리시스(Hysteresis) 특성을 이용한 파형 정형",
      "정현파 발진",
      "직류 고전압 발생",
      "전력 증폭"
    ],
    "answer": 0,
    "explanation": "슈미트 트리거는 히스테리시스 특성으로 디지털 파형을 정형합니다.",
    "diagramType": null
  },
  {
    "id": "s3_200",
    "question": "[200번] SMPS가 선형 전원장치에 비해 갖는 장점으로 옳은 것은?",
    "options": [
      "효율이 높고 소형·경량화가 가능하다",
      "회로 구조가 매우 단순하다",
      "스위칭 노이즈가 전혀 발생하지 않는다",
      "응답 속도가 느리다"
    ],
    "answer": 0,
    "explanation": "SMPS는 고효율 소형 경량화가 가능합니다.",
    "diagramType": null
  }
];
