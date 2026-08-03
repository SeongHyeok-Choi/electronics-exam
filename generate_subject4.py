import json
import os

# Generate 285 High quality Electronics Circuit Verification (Subject 4) questions for Engineer Electronics Exam

questions = []

def add_q(q_id, question, options, answer, explanation, diagram_type=None):
    questions.append({
        "id": f"s4_{q_id}",
        "question": f"[{q_id}번] {question}",
        "options": options,
        "answer": answer,
        "explanation": explanation,
        "diagramType": diagram_type
    })

# Section 1: Measuring Instruments & Error Analysis (1-45)
# Section 2: Circuit Simulation & Analysis (SPICE, Monte Carlo) (46-90)
# Section 3: Signal Integrity (SI) & Power Integrity (PI) (91-135)
# Section 4: PCB Design & Thermal Verification (136-185)
# Section 5: Electromagnetic Compatibility (EMC/EMI/EMS) (186-235)
# Section 6: Reliability & Fault Diagnosis (MTBF, Failure Rate) (236-285)

# --- Section 1: Measuring Instruments & Error Analysis (1 - 45) ---
add_q(
    1,
    "오실로스코프의 아날로그 대역폭이 BW = 350 MHz 일 때, 이 오실로스코프 자체의 10%~90% 상승 시간(Rise Time, tr_scope)은 약 얼마인가?",
    ["1.0 ns", "3.5 ns", "0.35 ns", "10.0 ns"],
    0,
    "[1단계] 대역폭과 상승시간의 관계식: BW * tr = 0.35 (또는 tr = 0.35 / BW)\n[2단계] 수치 대입: tr_scope = 0.35 / (350 * 10^6 Hz) = 1.0 * 10^-9 s = 1.0 ns\n[3단계] 오답 함정: 350 MHz를 Hz로 대입할 때 10^6 곱셈 누락 또는 0.35 대신 3.5를 곱하는 계산 실수를 주의합니다."
)

add_q(
    2,
    "실제 상승시간이 tr_signal = 3.0 ns 인 신호를 오실로스코프 자체 상승시간 tr_scope = 4.0 ns 인 장비로 측정했을 때, 화면에 표시되는 측정 상승시간 tr_measured는?",
    ["5.0 ns", "7.0 ns", "3.5 ns", "2.6 ns"],
    0,
    "[1단계] 오실로스코프 측정 상승시간 공식: tr_measured = √(tr_signal^2 + tr_scope^2)\n[2단계] 수치 대입: tr_measured = √(3.0^2 + 4.0^2) = √(9 + 16) = √25 = 5.0 ns\n[3단계] 오답 함정: 단순히 두 상승시간을 단순 더하기(3.0 + 4.0 = 7.0 ns)하면 오답이 유도됩니다."
)

add_q(
    3,
    "입력 임피던스가 1 MΩ // 20 pF 인 오실로스코프에 10:1 감쇠 프로브(Passive Probe)를 연결하여 조정(Compensate)하려고 한다. 10:1 프로브 내부의 등가 팁 저항 R_p와 분할 커패시터 C_p의 올바른 값은?",
    ["R_p = 9 MΩ, C_p = 2.22 pF", "R_p = 10 MΩ, C_p = 20 pF", "R_p = 1 MΩ, C_p = 200 pF", "R_p = 9 MΩ, C_p = 180 pF"],
    0,
    "[1단계] 10:1 감쇠 조건: 전체 저항 = 10 * R_scope = 10 MΩ, 따라서 프로브 팁 저항 R_p = 10M - 1M = 9 MΩ\n[2단계] RC 시간상수 평형 조건: R_p * C_p = R_scope * C_scope\n[3단계] 수치 계산: 9 MΩ * C_p = 1 MΩ * 20 pF  =>  C_p = 20 pF / 9 = 2.22 pF"
)

add_q(
    4,
    "출력 임피던스 RS = 50 Ω 인 신호원에서 입력 저항 R_in = 1 MΩ, 입력 용량 C_in = 15 pF 인 오실로스코프 프로브로 f = 100 MHz 신호를 측정할 때, 프로브의 로딩 효과에 의해 보이는 실효 입력 임피던스 |Z_in|은 약 얼마인가?",
    ["Z_in ≈ 106 Ω", "Z_in = 1 MΩ", "Z_in = 50 Ω", "Z_in = 15 Ω"],
    0,
    "[1단계] 고주파(100 MHz)에서 용량성 리액턴스 계산: XC = 1 / (2 * π * f * C_in) = 1 / (2 * 3.1416 * 100e6 * 15e-12) = 106.1 Ω\n[2단계] 실효 임피던스: 1 MΩ 과 106.1 Ω 의 병렬 결합이므로 고주파에서는 C_in의 리액턴스인 약 106 Ω 이 지배합니다."
)

for i in range(5, 46):
    bw_mhz = 100 + (i % 20) * 50
    tr_ns = 0.35 / (bw_mhz * 1e-3)
    
    add_q(
        i,
        f"대역폭 BW = {bw_mhz} MHz 인 오실로스코프의 자체 10%~90% 상승 시간(tr)은 약 얼마인가?",
        [f"tr = {tr_ns:.2f} ns", f"tr = {tr_ns*3.5:.2f} ns", f"tr = {tr_ns/2:.2f} ns", f"tr = {tr_ns*10:.2f} ns"],
        0,
        f"[1단계] tr = 0.35 / BW\n[2단계] tr = 0.35 / ({bw_mhz} * 10^6 Hz) = {tr_ns:.2f} ns"
    )

# --- Section 2: Circuit Simulation & Analysis (46 - 90) ---
add_q(
    46,
    "SPICE 시뮬레이션에서 .TRAN 1n 100n 명령어 구문의 정확한 의미는?",
    ["최대 출력 단계 1 ns 간격으로 총 100 ns 동안 과도 응답(Transient) 해석을 수행한다.", "DC 전압을 1 nV에서 100 nV까지 스위프(DC Sweep)한다.", "주파수를 1 Hz에서 100 Hz까지 AC 해석을 수행한다.", "온도를 1 ℃에서 100 ℃까지 온도 스위프 해석을 수행한다."],
    0,
    "[1단계] .TRAN 명령어 정의: .TRAN <Print Step> <Final Time> 구문으로 시간 영역 과도 응답(Transient Analysis)을 나타냅니다.\n[2단계] 1n은 프린트 타임 스텝, 100n은 전체 해석 최종 시간입니다."
)

add_q(
    47,
    "SPICE의 Monte Carlo 해석(몬테카를로 해석)을 수행하는 주요 목적 및 특징으로 가장 알맞은 것은?",
    ["부품 값의 통계적 공차(Tolerance) 분포에 따른 회로 수율(Yield) 및 특성 변동을 예측한다.", "회로의 최악 조건(Worst-Case) 단 한 가지 경우만 확정적으로 계산한다.", "직류 바이어스 동작점(Q-point)만을 정밀하게 출력한다.", "주파수 응답의 보드선도(Bode Plot)를 고속으로 작도한다."],
    0,
    "[1단계] Monte Carlo 해석: 부품 공차(예: R=10kΩ ±5%)를 가우스 분포나 균일 분포로 무작위 변경하며 다수 시뮬레이션을 수행하여 양산 수율 및 통계적 변동을 평가합니다."
)

for i in range(48, 91):
    r_val = 10
    tol = 5 + (i % 5) * 5
    r_min = r_val * (1 - tol/100)
    r_max = r_val * (1 + tol/100)
    
    add_q(
        i,
        f"Worst-Case(최악 조건) 해석에서 기준 저항 R = {r_val} kΩ (공차 ±{tol}%) 일 때 저항의 최소값 R_min과 최대값 R_max는?",
        [f"R_min = {r_min:.2f} kΩ, R_max = {r_max:.2f} kΩ", f"R_min = {r_val - tol:.2f} kΩ, R_max = {r_val + tol:.2f} kΩ", f"R_min = {r_min*0.9:.2f} kΩ, R_max = {r_max*1.1:.2f} kΩ", f"R_min = {r_val:.2f} kΩ, R_max = {r_max*1.5:.2f} kΩ"],
        0,
        f"[1단계] R_min = R * (1 - 공차) = {r_val} * (1 - {tol/100}) = {r_min:.2f} kΩ\n[2단계] R_max = R * (1 + 공차) = {r_val} * (1 + {tol/100}) = {r_max:.2f} kΩ"
    )

# --- Section 3: Signal Integrity (SI) & Power Integrity (PI) (91 - 135) ---
add_q(
    91,
    "PCB 전송선로의 특성 임피던스가 Z0 = 50 Ω 이고, 부하 종단 저항이 ZL = 150 Ω 일 때, 신호 반사 계수(Reflection Coefficient, Γ) 및 전압 정화비(VSWR)는?",
    ["Γ = +0.5, VSWR = 3.0", "Γ = -0.5, VSWR = 2.0", "Γ = +0.33, VSWR = 1.5", "Γ = +1.0, VSWR = ∞"],
    0,
    "[1단계] 반사 계수 공식: Γ = (ZL - Z0) / (ZL + Z0)\n[2단계] 수치 대입: Γ = (150 - 50) / (150 + 50) = 100 / 200 = +0.5\n[3단계] VSWR 공식: VSWR = (1 + |Γ|) / (1 - |Γ|) = (1 + 0.5) / (1 - 0.5) = 1.5 / 0.5 = 3.0"
)

add_q(
    92,
    "전원 무결성(PI) 설계를 위해 전원선과 그라운드 사이에 디커플링 커패시터를 배치하려고 한다. 공선 주파수 f_target = 100 MHz에서 리액턴스를 0.1 Ω 이하로 내리기 위한 최소 커패시턴스 C_dec는?",
    ["C_dec ≈ 15.9 nF", "C_dec = 1.59 nF", "C_dec = 159 pF", "C_dec = 1.59 μF"],
    0,
    "[1단계] 용량성 리액턴스 공식: XC = 1 / (2 * π * f * C)\n[2단계] C에 대해 정리: C = 1 / (2 * π * f * XC)\n[3단계] 대입: C_dec = 1 / (2 * 3.1416 * 100e6 * 0.1) = 1 / 62.83e6 = 1.59e-8 F = 15.9 nF"
)

for i in range(93, 136):
    z0 = 50
    zl = 50 + (i % 10) * 25
    if zl == z0: zl = 100
    gamma = (zl - z0) / (zl + z0)
    vswr = (1 + abs(gamma)) / (1 - abs(gamma))
    
    add_q(
        i,
        f"특성 임피던스 Z0 = {z0} Ω 인 전송선로에 ZL = {zl} Ω 부하가 연결되었을 때, 반사 계수 Γ와 VSWR은?",
        [f"Γ = {gamma:+.3f}, VSWR = {vswr:.2f}", f"Γ = {-gamma:+.3f}, VSWR = {vswr*1.5:.2f}", f"Γ = {gamma*2:+.3f}, VSWR = {vswr:.2f}", f"Γ = {gamma:+.3f}, VSWR = {vswr-1:.2f}"],
        0,
        f"[1단계] Γ = (ZL - Z0) / (ZL + Z0) = ({zl} - {z0}) / ({zl} + {z0}) = {gamma:+.3f}\n[2단계] VSWR = (1 + |Γ|) / (1 - |Γ|) = {vswr:.2f}"
    )

# --- Section 4: PCB Design & Thermal Verification (136 - 185) ---
add_q(
    136,
    "반도체 집적회로(IC)의 발열 소모 전력이 Pd = 5 W 이다. 접합부-케이스 열저항 Rth_jc = 2 ℃/W, 케이스-방열판 열저항 Rth_cs = 1 ℃/W, 방열판-대기 열저항 Rth_sa = 5 ℃/W 일 때, 대기 온도 Ta = 25 ℃에서 접합부 최고 온도 Tj는?",
    ["Tj = 65 ℃", "Tj = 40 ℃", "Tj = 75 ℃", "Tj = 90 ℃"],
    0,
    "[1단계] 총 열저항 계산: Rth_total = Rth_jc + Rth_cs + Rth_sa = 2 + 1 + 5 = 8 ℃/W\n[2단계] 온도 상승 계산: ΔT = Pd * Rth_total = 5 W * 8 ℃/W = 40 ℃\n[3단계] 접합부 최고 온도: Tj = Ta + ΔT = 25 ℃ + 40 ℃ = 65 ℃"
)

add_q(
    137,
    "PCB 외층(Outer Layer) 1 oz (35 μm 두께) 동박 패턴에서 1 A의 전류를 흘릴 때 허용 온도 상승 ΔT = 10 ℃를 만족하기 위한 IPC-2221 기준 표준 패턴 폭(Trace Width)은 약 얼마인가?",
    ["약 0.3 mm (12 mil)", "약 3.0 mm (120 mil)", "약 0.03 mm (1.2 mil)", "약 1.0 cm (400 mil)"],
    0,
    "[1단계] IPC-2221 PCB 패턴 전류 용량 공식에 의해, 1 oz 동박에서 1 A 연속 전류 시 대략 10~15 mil(0.25~0.38 mm) 패턴 폭이 요구됩니다.\n[2단계] 따라서 약 0.3 mm (12 mil)가 정답입니다."
)

for i in range(138, 186):
    pd = 2 + (i % 6) * 1
    r_jc = 1.5
    r_cs = 0.5
    r_sa = 3.0 + (i % 4) * 1.0
    ta = 25
    r_tot = r_jc + r_cs + r_sa
    tj = ta + pd * r_tot
    
    add_q(
        i,
        f"소모 전력 Pd = {pd} W, Rth_jc = {r_jc} ℃/W, Rth_cs = {r_cs} ℃/W, Rth_sa = {r_sa} ℃/W 일 때, 대기온도 {ta} ℃에서의 접합부 온도 Tj는?",
        [f"Tj = {tj:.1f} ℃", f"Tj = {ta + pd * r_sa:.1f} ℃", f"Tj = {tj * 1.2:.1f} ℃", f"Tj = {tj - 10:.1f} ℃"],
        0,
        f"[1단계] Rth_total = {r_jc} + {r_cs} + {r_sa} = {r_tot:.1f} ℃/W\n[2단계] Tj = Ta + Pd * Rth_total = {ta} + {pd} * {r_tot:.1f} = {tj:.1f} ℃"
    )

# --- Section 5: Electromagnetic Compatibility (EMC/EMI/EMS) (186 - 235) ---
add_q(
    186,
    "금속 차폐함(Shielding Enclosure)의 차폐 효과(Shielding Effectiveness, SE)가 SE = 60 dB 일 때, 입사 전계 강도 E_in 과 내부 과도 전계 강도 E_out 의 비율 (E_in / E_out)은?",
    ["1000 배", "60 배", "100 배", "10000 배"],
    0,
    "[1단계] 전계 차폐 효과 dB 공식: SE(dB) = 20 * log10(E_in / E_out)\n[2단계] 수치 계산: 60 dB = 20 * log10(Ratio)  =>  log10(Ratio) = 3\n[3단계] 비율 계산: Ratio = 10^3 = 1000 배\n[4단계] 오답 함정: 전력 dB(10 log) 공식과 착각하여 10^6 배로 계산하지 않도록 유의합니다."
)

for i in range(187, 236):
    se_db = 20 + (i % 5) * 20
    ratio = 10 ** (se_db / 20)
    
    add_q(
        i,
        f"차폐 효과가 SE = {se_db} dB 일 때, 외부 전계 대비 내부 전계 감쇠 비율(E_in / E_out)은?",
        [f"{int(ratio)} 배", f"{se_db} 배", f"{int(ratio*10)} 배", f"{int(ratio/2)} 배"],
        0,
        f"[1단계] SE(dB) = 20 * log10(Ratio)\n[2단계] {se_db} / 20 = {se_db/20:.1f}  =>  10^{se_db/20:.1f} = {int(ratio)} 배"
    )

# --- Section 6: Reliability & Fault Diagnosis (236 - 285) ---
add_q(
    236,
    "전자 장비 내 부품의 고장률이 λ = 2.5 * 10^-6 [failures/hour] 로 일정(지수 분포)할 때, 이 장비의 평균 무고장 시간(MTBF, Mean Time Between Failures)은?",
    ["400,000 시간 (약 45.6년)", "250,000 시간", "1,000,000 시간", "40,000 시간"],
    0,
    "[1단계] MTBF와 고장률의 관계: MTBF = 1 / λ\n[2단계] 수치 대입: MTBF = 1 / (2.5 * 10^-6) = 10^6 / 2.5 = 400,000 시간\n[3단계] 설명: 고장률이 일정할 때 MTBF는 고장률의 역수 관계입니다."
)

add_q(
    237,
    "직렬 구조로 연결된 3개의 전자 부품 A, B, C의 고장률이 각각 λA = 1e-5, λB = 2e-5, λC = 2e-5 [1/h] 일 때, 시스템 전체의 고장률 λ_total 과 MTBF는?",
    ["λ_total = 5e-5 /h, MTBF = 20,000 시간", "λ_total = 2e-5 /h, MTBF = 50,000 시간", "λ_total = 1e-5 /h, MTBF = 100,000 시간", "λ_total = 4e-5 /h, MTBF = 25,000 시간"],
    0,
    "[1단계] 직렬 시스템 고장률 공식: λ_total = λA + λB + λC\n[2단계] 고장률 합산: λ_total = 1e-5 + 2e-5 + 2e-5 = 5e-5 [1/h]\n[3단계] MTBF 계산: MTBF = 1 / λ_total = 1 / (5e-5) = 20,000 시간"
)

for i in range(238, 286):
    fail_rate_u = 1.0 + (i % 9) * 0.5 # FIT
    lambda_val = fail_rate_u * 1e-6
    mtbf_h = 1 / lambda_val
    
    add_q(
        i,
        f"부품의 고장률 λ = {fail_rate_u:.1f} * 10^-6 /h 일 때, 평균 무고장 시간 MTBF는?",
        [f"MTBF = {mtbf_h:,.0f} 시간", f"MTBF = {mtbf_h*2:,.0f} 시간", f"MTBF = {mtbf_h/2:,.0f} 시간", f"MTBF = {mtbf_h*0.8:,.0f} 시간"],
        0,
        f"[1단계] MTBF = 1 / λ\n[2단계] MTBF = 1 / ({fail_rate_u:.1f} * 10^-6) = {mtbf_h:,.0f} 시간"
    )

# Save to subject4.js
js_content = "export const subject4Data = " + json.dumps(questions, ensure_ascii=False, indent=2) + ";\n"

current_dir = os.path.dirname(os.path.abspath(__file__))
output_path = os.path.abspath(os.path.join(current_dir, "js", "data", "subject4.js"))

with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully generated {len(questions)} questions in {output_path}")
