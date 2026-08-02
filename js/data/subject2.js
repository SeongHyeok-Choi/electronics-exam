export const subject2Data = [
  {
    "id": "s2_1",
    "question": "[1번] 2진수 (1011)₂을 10진수로 변환한 값은?",
    "options": [
      "9",
      "10",
      "11",
      "12"
    ],
    "answer": 2,
    "explanation": "(1011)₂ = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = 11 입니다.",
    "diagramType": null
  },
  {
    "id": "s2_2",
    "question": "[2번] 아래 [그림]에 해당하는 2입력 논리 게이트의 명칭과 논리식으로 옳은 것은?",
    "options": [
      "AND 게이트 (Y = A · B)",
      "OR 게이트 (Y = A + B)",
      "XOR 게이트 (Y = A'B + AB')",
      "XNOR 게이트 (Y = AB + A'B')"
    ],
    "answer": 2,
    "explanation": "제시된 그림은 입력이 다를 때 1을 출력하는 2입력 XOR(Exclusive-OR) 게이트 회로 기호입니다.",
    "diagramType": "xorGate"
  },
  {
    "id": "s2_3",
    "question": "[3번] 다음 카르노 맵 [그림]에서 주황색 묶음에 해당하는 간소화된 논리식은?",
    "options": [
      "Y = B · D",
      "Y = A · C",
      "Y = B' + D",
      "Y = A' + B"
    ],
    "answer": 0,
    "explanation": "카르노 맵에서 2x2 영역(4개 셀)을 묶으면 2개의 변수가 소거되어 Y = B · D 가 됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_4",
    "question": "[4번] 드모르간(De Morgan)의 정리로 옳은 것은?",
    "options": [
      "(A + B)' = A' · B'",
      "(A + B)' = A' + B'",
      "(A · B)' = A' · B'",
      "A'' = A'"
    ],
    "answer": 0,
    "explanation": "드모르간 법칙: (A + B)' = A' · B'",
    "diagramType": null
  },
  {
    "id": "s2_5",
    "question": "[5번] 다음 중 조합논리회로(Combinational Logic Circuit)에 해당하는 것은?",
    "options": [
      "플립플롭 (Flip-Flop)",
      "가산기 (Adder)",
      "카운터 (Counter)",
      "레지스터 (Register)"
    ],
    "answer": 1,
    "explanation": "가산기는 메모리 기능이 없는 조합논리회로입니다.",
    "diagramType": null
  },
  {
    "id": "s2_6",
    "question": "[6번] J=1, K=1 일 때 JK 플립플롭의 동작 상태는?",
    "options": [
      "리셋(Reset, 0)",
      "셋(Set, 1)",
      "반전(Toggle)",
      "불가(No Change)"
    ],
    "answer": 2,
    "explanation": "JK 플립플롭에서 J=1, K=1 일 때 이전 상태가 반전(Toggle)됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_7",
    "question": "[7번] D 플립플롭(D Flip-Flop)의 주요 역할은 무엇인가?",
    "options": [
      "데이터 지연 및 1비트 저장",
      "토글 동작",
      "2진 가산",
      "데이터 반전"
    ],
    "answer": 0,
    "explanation": "D 플립플롭은 데이터 D의 값을 1비트 저장하는 역할을 합니다.",
    "diagramType": null
  },
  {
    "id": "s2_8",
    "question": "[8번] 2ⁿ 개의 입력 중에서 선택 신호에 의해 1개의 입력을 출력으로 전달하는 회로는?",
    "options": [
      "디코더 (Decoder)",
      "인코더 (Encoder)",
      "멀티플렉서 (MUX)",
      "디멀티플렉서 (DEMUX)"
    ],
    "answer": 2,
    "explanation": "멀티플렉서(MUX)는 다수 입력 중 하나를 선택 출력합니다.",
    "diagramType": null
  },
  {
    "id": "s2_9",
    "question": "[9번] 불 함수 Y = A'B + AB를 간소화하면?",
    "options": [
      "A",
      "B",
      "A+B",
      "AB"
    ],
    "answer": 1,
    "explanation": "Y = (A' + A)B = 1 · B = B 입니다.",
    "diagramType": null
  },
  {
    "id": "s2_10",
    "question": "[10번] 카르노 맵(Karnaugh Map)을 사용하는 주요 목적은 무엇인가?",
    "options": [
      "논리식의 최소화 (간소화)",
      "순서 회로 동작 분석",
      "클록 주파수 계산",
      "전력 소비 계산"
    ],
    "answer": 0,
    "explanation": "카르노 맵은 논리식 간소화 목적으로 사용됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_11",
    "question": "[11번] 2진수 (1011)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "10",
      "11",
      "12",
      "13"
    ],
    "answer": 1,
    "explanation": "2진수 (1011)₂을 각 자리 가중치를 곱해 합산하면 10진수 11이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_12",
    "question": "[12번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_13",
    "question": "[13번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_14",
    "question": "[14번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_15",
    "question": "[15번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_16",
    "question": "[16번] 2진수 (1000)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ],
    "answer": 1,
    "explanation": "2진수 (1000)₂을 각 자리 가중치를 곱해 합산하면 10진수 8이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_17",
    "question": "[17번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_18",
    "question": "[18번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_19",
    "question": "[19번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_20",
    "question": "[20번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_21",
    "question": "[21번] 2진수 (1101)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "12",
      "13",
      "14",
      "15"
    ],
    "answer": 1,
    "explanation": "2진수 (1101)₂을 각 자리 가중치를 곱해 합산하면 10진수 13이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_22",
    "question": "[22번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_23",
    "question": "[23번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_24",
    "question": "[24번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_25",
    "question": "[25번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_26",
    "question": "[26번] 2진수 (1010)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "9",
      "10",
      "11",
      "12"
    ],
    "answer": 1,
    "explanation": "2진수 (1010)₂을 각 자리 가중치를 곱해 합산하면 10진수 10이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_27",
    "question": "[27번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_28",
    "question": "[28번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_29",
    "question": "[29번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_30",
    "question": "[30번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_31",
    "question": "[31번] 2진수 (1111)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "14",
      "15",
      "16",
      "17"
    ],
    "answer": 1,
    "explanation": "2진수 (1111)₂을 각 자리 가중치를 곱해 합산하면 10진수 15이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_32",
    "question": "[32번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_33",
    "question": "[33번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_34",
    "question": "[34번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_35",
    "question": "[35번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_36",
    "question": "[36번] 2진수 (1100)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "11",
      "12",
      "13",
      "14"
    ],
    "answer": 1,
    "explanation": "2진수 (1100)₂을 각 자리 가중치를 곱해 합산하면 10진수 12이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_37",
    "question": "[37번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_38",
    "question": "[38번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_39",
    "question": "[39번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_40",
    "question": "[40번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_41",
    "question": "[41번] 2진수 (1001)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "8",
      "9",
      "10",
      "11"
    ],
    "answer": 1,
    "explanation": "2진수 (1001)₂을 각 자리 가중치를 곱해 합산하면 10진수 9이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_42",
    "question": "[42번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_43",
    "question": "[43번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_44",
    "question": "[44번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_45",
    "question": "[45번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_46",
    "question": "[46번] 2진수 (1110)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "13",
      "14",
      "15",
      "16"
    ],
    "answer": 1,
    "explanation": "2진수 (1110)₂을 각 자리 가중치를 곱해 합산하면 10진수 14이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_47",
    "question": "[47번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_48",
    "question": "[48번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_49",
    "question": "[49번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_50",
    "question": "[50번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_51",
    "question": "[51번] 2진수 (1011)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "10",
      "11",
      "12",
      "13"
    ],
    "answer": 1,
    "explanation": "2진수 (1011)₂을 각 자리 가중치를 곱해 합산하면 10진수 11이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_52",
    "question": "[52번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_53",
    "question": "[53번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_54",
    "question": "[54번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_55",
    "question": "[55번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_56",
    "question": "[56번] 2진수 (1000)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ],
    "answer": 1,
    "explanation": "2진수 (1000)₂을 각 자리 가중치를 곱해 합산하면 10진수 8이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_57",
    "question": "[57번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_58",
    "question": "[58번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_59",
    "question": "[59번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_60",
    "question": "[60번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_61",
    "question": "[61번] 2진수 (1101)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "12",
      "13",
      "14",
      "15"
    ],
    "answer": 1,
    "explanation": "2진수 (1101)₂을 각 자리 가중치를 곱해 합산하면 10진수 13이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_62",
    "question": "[62번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_63",
    "question": "[63번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_64",
    "question": "[64번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_65",
    "question": "[65번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_66",
    "question": "[66번] 2진수 (1010)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "9",
      "10",
      "11",
      "12"
    ],
    "answer": 1,
    "explanation": "2진수 (1010)₂을 각 자리 가중치를 곱해 합산하면 10진수 10이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_67",
    "question": "[67번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_68",
    "question": "[68번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_69",
    "question": "[69번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_70",
    "question": "[70번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_71",
    "question": "[71번] 2진수 (1111)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "14",
      "15",
      "16",
      "17"
    ],
    "answer": 1,
    "explanation": "2진수 (1111)₂을 각 자리 가중치를 곱해 합산하면 10진수 15이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_72",
    "question": "[72번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_73",
    "question": "[73번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_74",
    "question": "[74번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_75",
    "question": "[75번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_76",
    "question": "[76번] 2진수 (1100)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "11",
      "12",
      "13",
      "14"
    ],
    "answer": 1,
    "explanation": "2진수 (1100)₂을 각 자리 가중치를 곱해 합산하면 10진수 12이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_77",
    "question": "[77번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_78",
    "question": "[78번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_79",
    "question": "[79번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_80",
    "question": "[80번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_81",
    "question": "[81번] 2진수 (1001)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "8",
      "9",
      "10",
      "11"
    ],
    "answer": 1,
    "explanation": "2진수 (1001)₂을 각 자리 가중치를 곱해 합산하면 10진수 9이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_82",
    "question": "[82번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_83",
    "question": "[83번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_84",
    "question": "[84번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_85",
    "question": "[85번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_86",
    "question": "[86번] 2진수 (1110)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "13",
      "14",
      "15",
      "16"
    ],
    "answer": 1,
    "explanation": "2진수 (1110)₂을 각 자리 가중치를 곱해 합산하면 10진수 14이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_87",
    "question": "[87번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_88",
    "question": "[88번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_89",
    "question": "[89번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_90",
    "question": "[90번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_91",
    "question": "[91번] 2진수 (1011)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "10",
      "11",
      "12",
      "13"
    ],
    "answer": 1,
    "explanation": "2진수 (1011)₂을 각 자리 가중치를 곱해 합산하면 10진수 11이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_92",
    "question": "[92번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_93",
    "question": "[93번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_94",
    "question": "[94번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_95",
    "question": "[95번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_96",
    "question": "[96번] 2진수 (1000)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ],
    "answer": 1,
    "explanation": "2진수 (1000)₂을 각 자리 가중치를 곱해 합산하면 10진수 8이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_97",
    "question": "[97번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_98",
    "question": "[98번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_99",
    "question": "[99번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_100",
    "question": "[100번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_101",
    "question": "[101번] 2진수 (1101)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "12",
      "13",
      "14",
      "15"
    ],
    "answer": 1,
    "explanation": "2진수 (1101)₂을 각 자리 가중치를 곱해 합산하면 10진수 13이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_102",
    "question": "[102번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_103",
    "question": "[103번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_104",
    "question": "[104번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_105",
    "question": "[105번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_106",
    "question": "[106번] 2진수 (1010)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "9",
      "10",
      "11",
      "12"
    ],
    "answer": 1,
    "explanation": "2진수 (1010)₂을 각 자리 가중치를 곱해 합산하면 10진수 10이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_107",
    "question": "[107번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_108",
    "question": "[108번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_109",
    "question": "[109번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_110",
    "question": "[110번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_111",
    "question": "[111번] 2진수 (1111)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "14",
      "15",
      "16",
      "17"
    ],
    "answer": 1,
    "explanation": "2진수 (1111)₂을 각 자리 가중치를 곱해 합산하면 10진수 15이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_112",
    "question": "[112번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_113",
    "question": "[113번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_114",
    "question": "[114번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_115",
    "question": "[115번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_116",
    "question": "[116번] 2진수 (1100)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "11",
      "12",
      "13",
      "14"
    ],
    "answer": 1,
    "explanation": "2진수 (1100)₂을 각 자리 가중치를 곱해 합산하면 10진수 12이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_117",
    "question": "[117번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_118",
    "question": "[118번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_119",
    "question": "[119번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_120",
    "question": "[120번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_121",
    "question": "[121번] 2진수 (1001)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "8",
      "9",
      "10",
      "11"
    ],
    "answer": 1,
    "explanation": "2진수 (1001)₂을 각 자리 가중치를 곱해 합산하면 10진수 9이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_122",
    "question": "[122번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_123",
    "question": "[123번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_124",
    "question": "[124번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_125",
    "question": "[125번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_126",
    "question": "[126번] 2진수 (1110)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "13",
      "14",
      "15",
      "16"
    ],
    "answer": 1,
    "explanation": "2진수 (1110)₂을 각 자리 가중치를 곱해 합산하면 10진수 14이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_127",
    "question": "[127번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_128",
    "question": "[128번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_129",
    "question": "[129번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_130",
    "question": "[130번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_131",
    "question": "[131번] 2진수 (1011)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "10",
      "11",
      "12",
      "13"
    ],
    "answer": 1,
    "explanation": "2진수 (1011)₂을 각 자리 가중치를 곱해 합산하면 10진수 11이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_132",
    "question": "[132번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_133",
    "question": "[133번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_134",
    "question": "[134번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_135",
    "question": "[135번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_136",
    "question": "[136번] 2진수 (1000)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ],
    "answer": 1,
    "explanation": "2진수 (1000)₂을 각 자리 가중치를 곱해 합산하면 10진수 8이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_137",
    "question": "[137번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_138",
    "question": "[138번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_139",
    "question": "[139번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_140",
    "question": "[140번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_141",
    "question": "[141번] 2진수 (1101)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "12",
      "13",
      "14",
      "15"
    ],
    "answer": 1,
    "explanation": "2진수 (1101)₂을 각 자리 가중치를 곱해 합산하면 10진수 13이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_142",
    "question": "[142번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_143",
    "question": "[143번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_144",
    "question": "[144번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_145",
    "question": "[145번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_146",
    "question": "[146번] 2진수 (1010)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "9",
      "10",
      "11",
      "12"
    ],
    "answer": 1,
    "explanation": "2진수 (1010)₂을 각 자리 가중치를 곱해 합산하면 10진수 10이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_147",
    "question": "[147번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_148",
    "question": "[148번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_149",
    "question": "[149번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_150",
    "question": "[150번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_151",
    "question": "[151번] 2진수 (1111)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "14",
      "15",
      "16",
      "17"
    ],
    "answer": 1,
    "explanation": "2진수 (1111)₂을 각 자리 가중치를 곱해 합산하면 10진수 15이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_152",
    "question": "[152번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_153",
    "question": "[153번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_154",
    "question": "[154번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_155",
    "question": "[155번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_156",
    "question": "[156번] 2진수 (1100)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "11",
      "12",
      "13",
      "14"
    ],
    "answer": 1,
    "explanation": "2진수 (1100)₂을 각 자리 가중치를 곱해 합산하면 10진수 12이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_157",
    "question": "[157번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_158",
    "question": "[158번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_159",
    "question": "[159번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_160",
    "question": "[160번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_161",
    "question": "[161번] 2진수 (1001)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "8",
      "9",
      "10",
      "11"
    ],
    "answer": 1,
    "explanation": "2진수 (1001)₂을 각 자리 가중치를 곱해 합산하면 10진수 9이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_162",
    "question": "[162번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_163",
    "question": "[163번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_164",
    "question": "[164번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_165",
    "question": "[165번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_166",
    "question": "[166번] 2진수 (1110)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "13",
      "14",
      "15",
      "16"
    ],
    "answer": 1,
    "explanation": "2진수 (1110)₂을 각 자리 가중치를 곱해 합산하면 10진수 14이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_167",
    "question": "[167번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_168",
    "question": "[168번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_169",
    "question": "[169번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_170",
    "question": "[170번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_171",
    "question": "[171번] 2진수 (1011)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "10",
      "11",
      "12",
      "13"
    ],
    "answer": 1,
    "explanation": "2진수 (1011)₂을 각 자리 가중치를 곱해 합산하면 10진수 11이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_172",
    "question": "[172번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_173",
    "question": "[173번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_174",
    "question": "[174번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_175",
    "question": "[175번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_176",
    "question": "[176번] 2진수 (1000)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ],
    "answer": 1,
    "explanation": "2진수 (1000)₂을 각 자리 가중치를 곱해 합산하면 10진수 8이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_177",
    "question": "[177번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_178",
    "question": "[178번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_179",
    "question": "[179번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_180",
    "question": "[180번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_181",
    "question": "[181번] 2진수 (1101)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "12",
      "13",
      "14",
      "15"
    ],
    "answer": 1,
    "explanation": "2진수 (1101)₂을 각 자리 가중치를 곱해 합산하면 10진수 13이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_182",
    "question": "[182번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_183",
    "question": "[183번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_184",
    "question": "[184번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_185",
    "question": "[185번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_186",
    "question": "[186번] 2진수 (1010)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "9",
      "10",
      "11",
      "12"
    ],
    "answer": 1,
    "explanation": "2진수 (1010)₂을 각 자리 가중치를 곱해 합산하면 10진수 10이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_187",
    "question": "[187번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_188",
    "question": "[188번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_189",
    "question": "[189번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_190",
    "question": "[190번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_191",
    "question": "[191번] 2진수 (1111)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "14",
      "15",
      "16",
      "17"
    ],
    "answer": 1,
    "explanation": "2진수 (1111)₂을 각 자리 가중치를 곱해 합산하면 10진수 15이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_192",
    "question": "[192번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_193",
    "question": "[193번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_194",
    "question": "[194번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_195",
    "question": "[195번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  },
  {
    "id": "s2_196",
    "question": "[196번] 2진수 (1100)₂을 10진수로 변환한 값은 얼마인가?",
    "options": [
      "11",
      "12",
      "13",
      "14"
    ],
    "answer": 1,
    "explanation": "2진수 (1100)₂을 각 자리 가중치를 곱해 합산하면 10진수 12이 됩니다.",
    "diagramType": null
  },
  {
    "id": "s2_197",
    "question": "[197번] N개의 입력비트를 2ⁿ개의 출력선 중 하나로 해독하는 조합논리회로는?",
    "options": [
      "인코더 (Encoder)",
      "디코더 (Decoder)",
      "멀티플렉서 (MUX)",
      "플립플롭 (Flip-Flop)"
    ],
    "answer": 1,
    "explanation": "디코더(Decoder)는 N개의 입력을 해독하여 2ⁿ개 출력 중 하나를 선택 활성화합니다.",
    "diagramType": null
  },
  {
    "id": "s2_198",
    "question": "[198번] 아래 [그림]과 같은 카르노 맵을 이용해 4개 셀을 그룹화할 때 감소되는 불 변수의 개수는?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 1,
    "explanation": "카르노 맵에서 2ⁿ개(4개)의 셀을 한 묶음으로 처리하면 n=2개의 불 변수가 소거되어 단순화됩니다.",
    "diagramType": "karnaughMap"
  },
  {
    "id": "s2_199",
    "question": "[199번] 4비트 리플 카운터(Ripple Counter)가 표현할 수 있는 최대 모듈러스(Modulus, 상태 수)는?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "4비트 카운터 상태 수 = 2⁴ = 16개입니다.",
    "diagramType": null
  },
  {
    "id": "s2_200",
    "question": "[200번] ROM 중 자외선(UV)을 조사하여 내용을 지우고 재기록할 수 있는 메모리는?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "Mask ROM"
    ],
    "answer": 1,
    "explanation": "EPROM은 자외선을 이용해 데이터를 소거하고 재작성하는 메모리입니다.",
    "diagramType": null
  }
];
