export const subject4Data = [
  {
    "id": "s4_1",
    "question": "[1번] 아래 [계측 파형]과 같이 오실로스코프 화면에서 90° 위상차를 갖는 정원(Circle) 모양의 리사주 도형(Lissajous Pattern)을 얻기 위한 조건은?",
    "options": [
      "CH1과 CH2 신호의 진폭이 같고 위상차가 90°",
      "진폭이 2배 차이 나고 동위상",
      "위상차가 180°",
      "주파수가 2배 차이 난다"
    ],
    "answer": 0,
    "explanation": "리사주 도형이 정원이 되려면 수평/수직 입력 신호의 진폭이 동일하고 위상차가 90° 이어야 합니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_2",
    "question": "[2번] 오실로스코프 10:1 프로브 사용 시 측정 주의사항으로 옳은 것은?",
    "options": [
      "화면 측정 전압에 10을 곱해야 실제 전압이다",
      "측정 전압의 1/10을 곱해야 한다",
      "입력 임피던스가 줄어든다",
      "부하 효과가 커진다"
    ],
    "answer": 0,
    "explanation": "10:1 프로브는 측정 신호를 1/10 감쇄시키므로 화면 읽기값에 10배를 곱해야 실제 전압이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s4_3",
    "question": "[3번] 디지털 멀티미터(DMM)로 저항 측정 시 가장 중요한 주의사항은?",
    "options": [
      "회로 전원을 완전히 차단(OFF)한다",
      "전원을 켜둔 상태에서 측정한다",
      "AC 전압 모드로 설정한다",
      "프로브를 쇼트시킨다"
    ],
    "answer": 0,
    "explanation": "저항 측정 시 회로 전원을 차단해야 파손을 방지합니다.",
    "diagramType": null
  },
  {
    "id": "s4_4",
    "question": "[4번] SPICE 시뮬레이션에서 직류 동작점(DC Operating Point) 해석 디렉티브는?",
    "options": [
      ".DC",
      ".TRAN",
      ".OP",
      ".AC"
    ],
    "answer": 2,
    "explanation": ".OP 디렉티브는 DC 동작점을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_5",
    "question": "[5번] 시간에 따른 과도 응답 파형을 관찰할 때 사용하는 시뮬레이션 해석 방식은?",
    "options": [
      ".AC 해석",
      ".TRAN 해석",
      ".OP 해석",
      ".NOISE 해석"
    ],
    "answer": 1,
    "explanation": ".TRAN 해석은 시간에 따른 파형 응답을 관찰합니다.",
    "diagramType": null
  },
  {
    "id": "s4_6",
    "question": "[6번] 스펙트럼 분석기(Spectrum Analyzer)의 가로축(X축)과 세로축(Y축) 물리량은?",
    "options": [
      "X축: 시간, Y축: 전압",
      "X축: 주파수, Y축: 전력(dBm)",
      "X축: 전압, Y축: 전류",
      "X축: 위상, Y축: 주파수"
    ],
    "answer": 1,
    "explanation": "스펙트럼 분석기 X축은 주파수, Y축은 신호 크기/전력(dBm)입니다.",
    "diagramType": null
  },
  {
    "id": "s4_7",
    "question": "[7번] 로직 분석기(Logic Analyzer)의 주요 장점은?",
    "options": [
      "다채널 디지털 신호 상태를 동시에 측정 가능",
      "아날로그 미세 전압 측정",
      "고전압 파형 분석",
      "주파수 스펙트럼 분석"
    ],
    "answer": 0,
    "explanation": "로직 분석기는 다채널 디지털 타임 라인을 동시 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_8",
    "question": "[8번] 함수 발생기 출력 임피던스가 50Ω일 때 50Ω 정합 부하를 연결하면 부하 전압은?",
    "options": [
      "1/2 로 줄어든다",
      "2배로 증가한다",
      "변화 없다",
      "1/4 로 줄어든다"
    ],
    "answer": 0,
    "explanation": "임피던스 정합 시 전압 분압에 의해 부하 전압은 개방 전압의 1/2 이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s4_9",
    "question": "[9번] EMI/EMC 테스트의 주 목적은?",
    "options": [
      "전자기 노이즈 방출 및 견딤성을 평가하여 규격 만족 검증",
      "최대 전력 소모 측정",
      "부품 단가 절감",
      "동작 속도 극대화"
    ],
    "answer": 0,
    "explanation": "EMC 테스트는 노이즈 방출/내성을 평가 규격 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_10",
    "question": "[10번] PCB 검증 시 JTAG Boundary Scan 기술의 주 목적은?",
    "options": [
      "IC 핀 단선/단락 및 납땜 고장 진단",
      "정전압 측정",
      "아날로그 증폭도 산출",
      "안테나 이득 측정"
    ],
    "answer": 0,
    "explanation": "JTAG은 핀 단선/단락 및 내부 고장을 진단합니다.",
    "diagramType": null
  },
  {
    "id": "s4_11",
    "question": "[11번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_12",
    "question": "[12번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_13",
    "question": "[13번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_14",
    "question": "[14번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_15",
    "question": "[15번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_16",
    "question": "[16번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_17",
    "question": "[17번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_18",
    "question": "[18번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_19",
    "question": "[19번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_20",
    "question": "[20번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_21",
    "question": "[21번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_22",
    "question": "[22번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_23",
    "question": "[23번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_24",
    "question": "[24번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_25",
    "question": "[25번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_26",
    "question": "[26번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_27",
    "question": "[27번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_28",
    "question": "[28번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_29",
    "question": "[29번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_30",
    "question": "[30번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_31",
    "question": "[31번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_32",
    "question": "[32번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_33",
    "question": "[33번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_34",
    "question": "[34번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_35",
    "question": "[35번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_36",
    "question": "[36번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_37",
    "question": "[37번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_38",
    "question": "[38번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_39",
    "question": "[39번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_40",
    "question": "[40번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_41",
    "question": "[41번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_42",
    "question": "[42번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_43",
    "question": "[43번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_44",
    "question": "[44번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_45",
    "question": "[45번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_46",
    "question": "[46번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_47",
    "question": "[47번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_48",
    "question": "[48번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_49",
    "question": "[49번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_50",
    "question": "[50번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_51",
    "question": "[51번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_52",
    "question": "[52번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_53",
    "question": "[53번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_54",
    "question": "[54번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_55",
    "question": "[55번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_56",
    "question": "[56번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_57",
    "question": "[57번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_58",
    "question": "[58번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_59",
    "question": "[59번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_60",
    "question": "[60번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_61",
    "question": "[61번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_62",
    "question": "[62번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_63",
    "question": "[63번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_64",
    "question": "[64번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_65",
    "question": "[65번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_66",
    "question": "[66번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_67",
    "question": "[67번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_68",
    "question": "[68번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_69",
    "question": "[69번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_70",
    "question": "[70번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_71",
    "question": "[71번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_72",
    "question": "[72번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_73",
    "question": "[73번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_74",
    "question": "[74번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_75",
    "question": "[75번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_76",
    "question": "[76번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_77",
    "question": "[77번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_78",
    "question": "[78번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_79",
    "question": "[79번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_80",
    "question": "[80번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_81",
    "question": "[81번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_82",
    "question": "[82번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_83",
    "question": "[83번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_84",
    "question": "[84번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_85",
    "question": "[85번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_86",
    "question": "[86번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_87",
    "question": "[87번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_88",
    "question": "[88번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_89",
    "question": "[89번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_90",
    "question": "[90번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_91",
    "question": "[91번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_92",
    "question": "[92번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_93",
    "question": "[93번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_94",
    "question": "[94번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_95",
    "question": "[95번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_96",
    "question": "[96번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_97",
    "question": "[97번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_98",
    "question": "[98번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_99",
    "question": "[99번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_100",
    "question": "[100번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_101",
    "question": "[101번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_102",
    "question": "[102번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_103",
    "question": "[103번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_104",
    "question": "[104번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_105",
    "question": "[105번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_106",
    "question": "[106번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_107",
    "question": "[107번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_108",
    "question": "[108번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_109",
    "question": "[109번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_110",
    "question": "[110번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_111",
    "question": "[111번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_112",
    "question": "[112번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_113",
    "question": "[113번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_114",
    "question": "[114번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_115",
    "question": "[115번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_116",
    "question": "[116번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_117",
    "question": "[117번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_118",
    "question": "[118번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_119",
    "question": "[119번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_120",
    "question": "[120번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_121",
    "question": "[121번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_122",
    "question": "[122번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_123",
    "question": "[123번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_124",
    "question": "[124번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_125",
    "question": "[125번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_126",
    "question": "[126번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_127",
    "question": "[127번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_128",
    "question": "[128번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_129",
    "question": "[129번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_130",
    "question": "[130번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_131",
    "question": "[131번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_132",
    "question": "[132번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_133",
    "question": "[133번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_134",
    "question": "[134번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_135",
    "question": "[135번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_136",
    "question": "[136번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_137",
    "question": "[137번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_138",
    "question": "[138번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_139",
    "question": "[139번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_140",
    "question": "[140번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_141",
    "question": "[141번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_142",
    "question": "[142번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_143",
    "question": "[143번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_144",
    "question": "[144번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_145",
    "question": "[145번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_146",
    "question": "[146번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_147",
    "question": "[147번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_148",
    "question": "[148번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_149",
    "question": "[149번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_150",
    "question": "[150번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_151",
    "question": "[151번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_152",
    "question": "[152번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_153",
    "question": "[153번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_154",
    "question": "[154번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_155",
    "question": "[155번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_156",
    "question": "[156번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_157",
    "question": "[157번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_158",
    "question": "[158번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_159",
    "question": "[159번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_160",
    "question": "[160번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_161",
    "question": "[161번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_162",
    "question": "[162번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_163",
    "question": "[163번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_164",
    "question": "[164번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_165",
    "question": "[165번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_166",
    "question": "[166번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_167",
    "question": "[167번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_168",
    "question": "[168번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_169",
    "question": "[169번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_170",
    "question": "[170번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_171",
    "question": "[171번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_172",
    "question": "[172번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_173",
    "question": "[173번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_174",
    "question": "[174번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_175",
    "question": "[175번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_176",
    "question": "[176번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_177",
    "question": "[177번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_178",
    "question": "[178번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_179",
    "question": "[179번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_180",
    "question": "[180번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_181",
    "question": "[181번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_182",
    "question": "[182번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_183",
    "question": "[183번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_184",
    "question": "[184번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_185",
    "question": "[185번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_186",
    "question": "[186번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_187",
    "question": "[187번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_188",
    "question": "[188번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_189",
    "question": "[189번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_190",
    "question": "[190번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_191",
    "question": "[191번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_192",
    "question": "[192번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_193",
    "question": "[193번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_194",
    "question": "[194번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_195",
    "question": "[195번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  },
  {
    "id": "s4_196",
    "question": "[196번] 오실로스코프에서 10:1 프로브를 쓸 때 측정 전압이 0.5V로 읽혔다면 실제 전압은?",
    "options": [
      "5.0 V",
      "0.05 V",
      "0.5 V",
      "10.0 V"
    ],
    "answer": 0,
    "explanation": "실제 전압 = 읽기값 × 10 = 0.5V × 10 = 5.0V 입니다.",
    "diagramType": null
  },
  {
    "id": "s4_197",
    "question": "[197번] 회로 시뮬레이션에서 주파수에 따른 회로의 이득과 위상 응답(보드선도)을 분석하는 디렉티브는?",
    "options": [
      ".AC",
      ".DC",
      ".TRAN",
      ".FOUR"
    ],
    "answer": 0,
    "explanation": ".AC 해석은 주파수 응답을 분석합니다.",
    "diagramType": null
  },
  {
    "id": "s4_198",
    "question": "[198번] 아래 [계측 파형]과 같이 리사주 도형이 정원을 이룰 때 수평과 수직 입력 신호 사이의 위상차는 몇 도인가?",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2,
    "explanation": "정원 형태 리사주 도형의 위상차는 90° (또는 270°) 입니다.",
    "diagramType": "lissajousCircle"
  },
  {
    "id": "s4_199",
    "question": "[199번] 나이퀴스트(Nyquist) 샘플링 정리 기준 샘플링 주파수 f_s 조건은?",
    "options": [
      "신호 최고 주파수의 2배 이상 (f_s ≥ 2 f_max)",
      "f_s = f_max",
      "1/2 이하",
      "제곱에 비례"
    ],
    "answer": 0,
    "explanation": "나이퀴스트 정리: f_s ≥ 2 f_max 이어야 합니다.",
    "diagramType": null
  },
  {
    "id": "s4_200",
    "question": "[200번] IC 패키징 검증에서 열 화상 카메라를 활용한 검증 목적은?",
    "options": [
      "과열 부품 및 핫스팟 탐지",
      "신호 주파수 측정",
      "논리 레벨 판단",
      "전자기파 수신"
    ],
    "answer": 0,
    "explanation": "열 화상 카메라는 이상 발열 지점(핫스팟)을 검증합니다.",
    "diagramType": null
  }
];
