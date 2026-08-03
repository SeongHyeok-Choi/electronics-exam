import json
import os

# Generate 285 High quality Electronics Circuit Design (Subject 3) questions for Engineer Electronics Exam

questions = []

def add_q(q_id, question, options, answer, explanation, diagram_type=None):
    questions.append({
        "id": f"s3_{q_id}",
        "question": f"[{q_id}번] {question}",
        "options": options,
        "answer": answer,
        "explanation": explanation,
        "diagramType": diagram_type
    })

# Section 1: DC Bias (1-40)
add_q(
    1,
    "BJT 고정 바이어스 회로에서 VCC = 12 V, RB = 240 kΩ, RC = 2 kΩ, β = 100 이고 VBE = 0.7 V 이다. 동작점(Q-point)에서의 컬렉터 전류 IC와 컬렉터-에미터 전압 VCE는?",
    ["IC = 4.71 mA, VCE = 2.58 V", "IC = 4.71 mA, VCE = 9.42 V", "IC = 2.35 mA, VCE = 7.30 V", "IC = 5.00 mA, VCE = 2.00 V"],
    0,
    "[1단계] 베이스 전류 계산: IB = (VCC - VBE) / RB = (12 - 0.7) / 240k = 11.3 / 240k = 47.08 μA\n[2단계] 컬렉터 전류 계산: IC = β * IB = 100 * 47.08 μA = 4.708 mA ≈ 4.71 mA\n[3단계] 컬렉터-에미터 전압 계산: VCE = VCC - IC * RC = 12 - (4.708m * 2k) = 12 - 9.416 = 2.58 V\n[4단계] 오답 함정: IC * RC 전압강하(9.42 V)를 VCE로 착각하는 실수를 유의해야 합니다."
)

add_q(
    2,
    "전압 분배 바이어스 BJT 회로에서 VCC = 15 V, R1 = 100 kΩ, R2 = 20 kΩ, RC = 3.9 kΩ, RE = 1 kΩ, VBE = 0.7 V 일 때, 베이스 전압 VB와 에미터 전류 IE는?",
    ["VB = 2.5 V, IE = 1.8 mA", "VB = 2.5 V, IE = 2.5 mA", "VB = 3.0 V, IE = 2.3 mA", "VB = 1.8 V, IE = 1.1 mA"],
    0,
    "[1단계] 베이스 전압 VB = VCC * R2 / (R1 + R2) = 15 * 20k / 120k = 2.5 V\n[2단계] 에미터 전압 VE = VB - VBE = 2.5 - 0.7 = 1.8 V\n[3단계] 에미터 전류 IE = VE / RE = 1.8 V / 1 kΩ = 1.8 mA\n[4단계] 오답 함정: VB에서 VBE 전압강하(0.7V) 차감을 누락하면 IE = 2.5 mA 오답이 유도됩니다."
)

add_q(
    3,
    "BJT 바이어스 회로의 바이어스 안정도 계수 S = dIC / dICBO 에 대한 설명 중 가장 올바른 것은?",
    ["S 값이 1에 가까울수록 온도 변화에 대해 회로가 매우 안정적이다.", "S 값이 크면 클수록 온도 변화에 대해 컬렉터 전류가 더 안정적이다.", "고정 바이어스 회로는 S 값이 1로 가장 우수한 바이어스 안정도를 갖는다.", "에미터 저항 RE가 커지면 S 값이 급격히 증가하여 불안정해진다."],
    0,
    "[1단계] 안정도 계수 정의: S = dIC / dICBO 로, 온도 변화에 따른 누설전류(ICBO) 변화가 IC에 미치는 영향을 나타냅니다.\n[2단계] 이상적 값: S가 1일 때가 완벽한 이상적 상태이며, S가 작을수록 안정적입니다.\n[3단계] 고정 바이어스 회로의 S = 1 + β 로 매우 크기 때문에 온도에 매우 불안정합니다."
)

add_q(
    4,
    "JFET 바이어스 회로에서 IDSS = 10 mA, VP = -4 V 이다. VGS = -2 V 일 때, Shockley 방정식을 이용한 드레인 전류 ID는?",
    ["ID = 2.5 mA", "ID = 5.0 mA", "ID = 1.25 mA", "ID = 7.5 mA"],
    0,
    "[1단계] Shockley 공식: ID = IDSS * (1 - VGS / VP)^2\n[2단계] 대입: ID = 10mA * (1 - (-2) / (-4))^2 = 10mA * (1 - 0.5)^2 = 10mA * 0.25 = 2.5 mA\n[3단계] 함정: 제곱(^2)을 누락하면 10mA * 0.5 = 5.0 mA 오답이 유도됩니다."
)

add_q(
    5,
    "Self-Bias(자체 바이어스) JFET 회로에서 IDSS = 8 mA, VP = -4 V, RS = 1 kΩ 일 때, 동작점의 VGS와 ID 값은?",
    ["VGS = -2.0 V, ID = 2.0 mA", "VGS = -1.0 V, ID = 4.0 mA", "VGS = -3.0 V, ID = 1.0 mA", "VGS = -2.5 V, ID = 2.5 mA"],
    0,
    "[1단계] 자체 바이어스 관계식: VGS = -ID * RS\n[2단계] Shockley 식 대입: ID = 8mA * (1 - (-ID * 1k) / (-4))^2\n[3단계] 방정식 풀이: ID = 2.0 mA 일 때, VGS = -2.0 V 이며, IDSS * (1 - 0.5)^2 = 8mA * 0.25 = 2.0 mA 로 성립합니다."
)

add_q(
    6,
    "E-MOSFET(증가형 MOSFET) 바이어스 회로에서 VT = 2 V, k = 0.5 mA/V^2 일 때, VGS = 5 V에서 드레인 전류 ID는?",
    ["ID = 4.5 mA", "ID = 2.25 mA", "ID = 9.0 mA", "ID = 1.5 mA"],
    0,
    "[1단계] E-MOSFET 포화 영역 전류 공식: ID = k * (VGS - VT)^2\n[2단계] 수치 대입: ID = 0.5 mA/V^2 * (5 - 2)^2 = 0.5 * (3)^2 = 0.5 * 9 = 4.5 mA\n[3단계] 오답 함정: 1/2 계수가 k에 이미 포함되어 있는 형태인지 확인해야 하며, (5-2)=3만 곱하는 실수를 주의해야 합니다."
)

for i in range(7, 41):
    vcc = 10 + (i % 10) * 2
    rc = 1 + (i % 5) * 0.5
    re = 0.5 + (i % 4) * 0.2
    beta = 80 + (i % 6) * 20
    vbe = 0.7
    rb = 150 + (i % 8) * 30
    
    ib = (vcc - vbe) / (rb * 1000)
    ic = beta * ib * 1000 # mA
    vce = vcc - (ic * rc)
    
    add_q(
        i,
        f"BJT 회로 조건(VCC = {vcc}V, RB = {rb}kΩ, RC = {rc}kΩ, β = {beta})에서 베이스-에미터 전압 VBE = {vbe}V 일 때 컬렉터 전류 IC와 VCE는?",
        [f"IC = {ic:.2f} mA, VCE = {vce:.2f} V", f"IC = {ic*1.2:.2f} mA, VCE = {vce*0.8:.2f} V", f"IC = {ic*0.8:.2f} mA, VCE = {vce*1.2:.2f} V", f"IC = {ic:.2f} mA, VCE = {vcc - ic*rc*0.5:.2f} V"],
        0,
        f"[1단계] 베이스 전류 IB = ({vcc} - {vbe}) / {rb}kΩ = {(ib*1e6):.2f} μA\n[2단계] IC = β * IB = {ic:.2f} mA\n[3단계] VCE = VCC - IC * RC = {vcc} - ({ic:.2f}m * {rc}k) = {vce:.2f} V"
    )

# --- Section 2: Small-Signal Amplifiers (41 - 80) ---
add_q(
    41,
    "공통 에미터(CE) 증폭기에서 DC 에미터 전류 IE = 2.6 mA 일 때, 소신호 에미터 저항 r_e 값은 약 얼마인가? (단, 열전압 VT = 26 mV로 계산)",
    ["r_e = 10 Ω", "r_e = 26 Ω", "r_e = 100 Ω", "r_e = 2.6 Ω"],
    0,
    "[1단계] 소신호 에미터 저항 공식: r_e = VT / IE\n[2단계] 수치 대입: r_e = 26 mV / 2.6 mA = 10 Ω\n[3단계] 설명: VT = 26mV 기준 IE와 역수 관계입니다."
)

add_q(
    42,
    "CE 증폭기에서 r_e = 10 Ω, RC = 2 kΩ, RL = 2 kΩ 일 때, AC 부하 저항 r_L과 소신호 전압 이득 Av (바이패스 콘덴서 설치됨)는?",
    ["r_L = 1 kΩ, Av = -100", "r_L = 2 kΩ, Av = -200", "r_L = 4 kΩ, Av = -400", "r_L = 1 kΩ, Av = -200"],
    0,
    "[1단계] AC 부하저항 계산: r_L = RC || RL = 2k || 2k = 1 kΩ\n[2단계] CE 전압이득 공식: Av = - r_L / r_e = -1000 / 10 = -100\n[3단계] 오답 함정: 부하저항 RL과의 병렬 처리를 누락하고 RC=2k를 그대로 쓰면 Av = -200 오답이 됩니다."
)

add_q(
    43,
    "h-파라미터 모델에서 CE 증폭기의 전압이득 Av를 표현하는 근사식으로 가장 알맞은 것은? (단, hie: 입력 임피던스, hre: 역전압 전달비, hfe: 순방향 전류이득, hoe: 출력 어드미턴스)",
    ["Av ≈ - (hfe * RL) / hie", "Av ≈ - hfe / (hie * RL)", "Av ≈ (hie * RL) / hfe", "Av ≈ - (hre * RL) / hoe"],
    0,
    "[1단계] CE h-파라미터 전압이득 정의: Av = Vo / Vi = (- hfe * ib * RL) / (hie * ib) = - (hfe * RL) / hie\n[2단계] 위상반전에 의해 음(- ) 부호가 붙습니다."
)

for i in range(44, 81):
    re_val = 5 + (i % 10) * 2
    rc_val = 1.5 + (i % 6) * 0.5
    rl_val = 3.0 + (i % 4) * 1.0
    r_ac = (rc_val * rl_val) / (rc_val + rl_val)
    av = - (r_ac * 1000) / re_val
    
    add_q(
        i,
        f"CE 소신호 증폭기에서 r_e = {re_val} Ω, RC = {rc_val} kΩ, RL = {rl_val} kΩ 일 때, 병렬 AC 부하저항 r_L과 전압이득 Av는?",
        [f"r_L = {r_ac:.2f} kΩ, Av = {av:.1f}", f"r_L = {rc_val:.2f} kΩ, Av = {-rc_val*1000/re_val:.1f}", f"r_L = {r_ac:.2f} kΩ, Av = {av*2:.1f}", f"r_L = {rl_val:.2f} kΩ, Av = {-rl_val*1000/re_val:.1f}"],
        0,
        f"[1단계] r_L = RC || RL = {rc_val}k || {rl_val}k = {r_ac:.2f} kΩ\n[2단계] Av = - r_L / r_e = - ({r_ac:.2f} * 1000) / {re_val} = {av:.1f}"
    )

# --- Section 3: Frequency Response & Miller Effect (81 - 120) ---
add_q(
    81,
    "밀러 정리(Miller's Theorem)에 의해, 반전 전압 이득이 Av = -99 인 증폭기에서 베이스-컬렉터 간 궤환 커패시턴스 Cbc = 5 pF 일 때, 입력 측 밀러 커패시턴스 CM1은?",
    ["CM1 = 500 pF", "CM1 = 495 pF", "CM1 = 5 pF", "CM1 = 100 pF"],
    0,
    "[1단계] 입력 밀러 커패시턴스 공식: CM1 = Cbc * (1 - Av)\n[2단계] 수치 대입: CM1 = 5 pF * (1 - (-99)) = 5 pF * 100 = 500 pF\n[3단계] 오답 함정: (1 - Av)에서 Av = -99 이므로 (1 + 99) = 100 이 되는 부호 처리에 유의해야 합니다."
)

add_q(
    82,
    "증폭기의 저주파 차단주파수가 fL = 50 Hz 이고, 고주파 차단주파수가 fH = 500 kHz 일 때, 증폭기의 대역폭(BW, Bandwidth)은 약 얼마인가?",
    ["BW ≈ 500 kHz (499.95 kHz)", "BW = 50.05 kHz", "BW = 450 kHz", "BW = 250 kHz"],
    0,
    "[1단계] 대역폭 정의: BW = fH - fL\n[2단계] 수치 계산: BW = 500,000 Hz - 50 Hz = 499,950 Hz ≈ 500 kHz\n[3단계] 설명: 일반적인 광대역 증폭기에서 fH >> fL 이므로 대역폭 BW는 fH에 근사합니다."
)

for i in range(83, 121):
    av_val = - (40 + (i % 20) * 10)
    cbc_val = 2 + (i % 5)
    cm1 = cbc_val * (1 - av_val)
    
    add_q(
        i,
        f"반전 전압이득 Av = {av_val} 인 증폭기에서 Cbc = {cbc_val} pF 일 때, 밀러 효과에 의한 입력 등가 커패시턴스 CM1의 값은?",
        [f"CM1 = {cm1} pF", f"CM1 = {cbc_val * (-av_val)} pF", f"CM1 = {cm1 - cbc_val} pF", f"CM1 = {cm1 + 10} pF"],
        0,
        f"[1단계] CM1 = Cbc * (1 - Av)\n[2단계] CM1 = {cbc_val} pF * (1 - ({av_val})) = {cbc_val} * {1 - av_val} = {cm1} pF"
    )

# --- Section 4: Feedback Amplifiers (121 - 160) ---
add_q(
    121,
    "무궤환 전압이득이 A = 1000 인 증폭기에 궤환율 β = 0.009 인 부궤환(Negative Feedback)을 걸었을 때, 궤환 증폭기의 전압이득 Af는?",
    ["Af = 100", "Af = 90", "Af = 10", "Af = 111"],
    0,
    "[1단계] 부궤환 이득 공식: Af = A / (1 + β * A)\n[2단계] 수치 대입: Af = 1000 / (1 + 0.009 * 1000) = 1000 / (1 + 9) = 1000 / 10 = 100\n[3단계] 궤환을 걸면 이득은 줄어들지만 대역폭과 안정도는 대폭 향상됩니다."
)

add_q(
    122,
    "부궤환 증폭기의 4가지 궤환 토폴로지 중, 입력 임피던스를 증가시키고 출력 임피던스를 감소시키는 구조는?",
    ["전압-직렬 궤환 (Voltage-Series Feedback)", "전압-병렬 궤환 (Voltage-Shunt Feedback)", "전류-직렬 궤환 (Current-Series Feedback)", "전류-병렬 궤환 (Current-Shunt Feedback)"],
    0,
    "[1단계] 직렬 입력: 입력 임피던스 증가 (Zinf = Zin * (1 + βA))\n[2단계] 전압 출력: 출력 임피던스 감소 (Zotf = Zot / (1 + βA))\n[3단계] 따라서 전압-직렬 궤환이 이상적인 전압 증폭기 특성을 갖습니다."
)

for i in range(123, 161):
    a_val = 500 + (i % 10) * 500
    beta_val = 0.01 + (i % 5) * 0.01
    af_val = a_val / (1 + beta_val * a_val)
    
    add_q(
        i,
        f"무궤환 이득 A = {a_val}, 궤환율 β = {beta_val:.2f} 일 때 부궤환 증폭기의 궤환이득 Af는?",
        [f"Af = {af_val:.2f}", f"Af = {a_val * (1-beta_val):.2f}", f"Af = {af_val * 1.2:.2f}", f"Af = {af_val * 0.8:.2f}"],
        0,
        f"[1단계] Af = A / (1 + β * A)\n[2단계] Af = {a_val} / (1 + {beta_val:.2f} * {a_val}) = {a_val} / {(1 + beta_val * a_val):.2f} = {af_val:.2f}"
    )

# --- Section 5: OP-Amp Applications & Active Filters (161 - 205) ---
add_q(
    161,
    "반전 연산증폭기(Inverting OP-Amp) 회로에서 R1 = 10 kΩ, Rf = 100 kΩ 일 때, 전압 이득 Av와 입력 전압 Vi = 0.5 V 입력 시 출력 전압 Vo는?",
    ["Av = -10, Vo = -5.0 V", "Av = -11, Vo = -5.5 V", "Av = 10, Vo = 5.0 V", "Av = -10, Vo = -0.5 V"],
    0,
    "[1단계] 반전 증폭기 이득: Av = - Rf / R1 = - 100k / 10k = -10\n[2단계] 출력 전압: Vo = Av * Vi = -10 * 0.5 V = -5.0 V\n[3단계] 오답 함정: 비반전 증폭기 공식 (1 + Rf/R1 = 11)과 혼동하지 않도록 주의합니다.",
    "opampInverting"
)

add_q(
    162,
    "비반전 연산증폭기(Non-Inverting OP-Amp) 회로에서 R1 = 4.7 kΩ, Rf = 47 kΩ 일 때, 전압 이득 Av는?",
    ["Av = 11.0", "Av = 10.0", "Av = -10.0", "Av = 9.0"],
    0,
    "[1단계] 비반전 증폭기 이득: Av = 1 + (Rf / R1)\n[2단계] 수치 대입: Av = 1 + (47k / 4.7k) = 1 + 10 = 11.0",
    "opampNonInverting"
)

add_q(
    163,
    "차동 증폭기(Differential Amplifier)에서 R1 = R2 = 10 kΩ, Rf = R3 = 100 kΩ 이다. 두 입력 V1 = 2.1 V, V2 = 2.0 V 일 때, 출력 전압 Vo = (Rf/R1) * (V2 - V1) 은?",
    ["Vo = -1.0 V", "Vo = 1.0 V", "Vo = -0.1 V", "Vo = -10.0 V"],
    0,
    "[1단계] 차동 증폭기 출력 공식: Vo = (Rf / R1) * (V2 - V1)\n[2단계] 수치 대입: Vo = (100k / 10k) * (2.0 - 2.1) = 10 * (-0.1 V) = -1.0 V"
)

add_q(
    164,
    "1차 능동 저역통과 필터(LPF) 회로에서 R = 15.9 kΩ, C = 0.01 μF 일 때, 3dB 차단 주파수 fc는 약 얼마인가?",
    ["fc = 1000 Hz (1 kHz)", "fc = 100 Hz", "fc = 15.9 kHz", "fc = 3.18 kHz"],
    0,
    "[1단계] LPF 차단주파수 공식: fc = 1 / (2 * π * R * C)\n[2단계] 대입: fc = 1 / (2 * 3.14159 * 15900 * 1e-8) = 1 / (1.0e-3) = 1000 Hz = 1 kHz"
)

for i in range(165, 206):
    r1_k = 10
    rf_k = 20 + (i % 15) * 5
    av_inv = - (rf_k / r1_k)
    av_non = 1 + (rf_k / r1_k)
    
    if i % 2 == 0:
        add_q(
            i,
            f"반전 OP-Amp 회로에서 R1 = {r1_k} kΩ, Rf = {rf_k} kΩ 일 때, 전압 증폭도 Av는?",
            [f"Av = {av_inv:.1f}", f"Av = {av_non:.1f}", f"Av = {-av_non:.1f}", f"Av = {av_inv - 1:.1f}"],
            0,
            f"[1단계] 반전 증폭기 Av = - Rf / R1 = - {rf_k} / {r1_k} = {av_inv:.1f}",
            "opampInverting"
        )
    else:
        add_q(
            i,
            f"비반전 OP-Amp 회로에서 R1 = {r1_k} kΩ, Rf = {rf_k} kΩ 일 때, 전압 증폭도 Av는?",
            [f"Av = {av_non:.1f}", f"Av = {av_inv:.1f}", f"Av = {av_non - 1:.1f}", f"Av = {av_non + 1:.1f}"],
            0,
            f"[1단계] 비반전 증폭기 Av = 1 + (Rf / R1) = 1 + ({rf_k} / {r1_k}) = {av_non:.1f}",
            "opampNonInverting"
        )

# --- Section 6: Oscillators & Waveform Generators (206 - 245) ---
add_q(
    206,
    "RC 위상전이 발진기(RC Phase-Shift Oscillator)에서 각 단의 RC 귀환망 저항 R = 10 kΩ, C = 0.001 μF 일 때, 발진 주파수 f0는 약 얼마인가?",
    ["f0 = 6.50 kHz", "f0 = 15.9 kHz", "f0 = 3.98 kHz", "f0 = 1.00 kHz"],
    0,
    "[1단계] RC 위상전이 발진주파수 공식: f0 = 1 / (2 * π * R * C * √6)\n[2단계] 계산: f0 = 1 / (2 * 3.14159 * 10000 * 1e-9 * 2.449) = 1 / (1.538e-4) = 6500 Hz = 6.50 kHz\n[3단계] 설명: √6 팩터가 분모에 들어가는 것이 핵심입니다."
)

add_q(
    207,
    "비인 브리지 발진기(Wien Bridge Oscillator)에서 R = 10 kΩ, C = 0.01 μF 일 때, 지속적인 정현파 발진을 일으키는 발진 주파수 f0와 필요한 증폭기의 최소 이득 Av는?",
    ["f0 = 1.59 kHz, Av ≥ 3", "f0 = 1.59 kHz, Av ≥ 29", "f0 = 6.50 kHz, Av ≥ 3", "f0 = 3.18 kHz, Av ≥ 3"],
    0,
    "[1단계] 비인 브리지 발진주파수: f0 = 1 / (2 * π * R * C) = 1 / (2 * 3.1416 * 10k * 0.01u) = 1.59 kHz\n[2단계] 발진 조건: 귀환율 β = 1/3 이므로, 지속 발진을 위해 증폭기 이득 Av ≥ 3 이 이어야 합니다."
)

for i in range(208, 246):
    r_k = 10 + (i % 5) * 5
    c_nf = 10
    f0_wien = 1000 / (2 * 3.14159 * r_k * c_nf * 1e-3)
    
    add_q(
        i,
        f"비인 브리지 발진기에서 R = {r_k} kΩ, C = {c_nf} nF 일 때, 발진 주파수 f0는 약 얼마인가?",
        [f"f0 = {f0_wien:.2f} kHz", f"f0 = {f0_wien / 2.449:.2f} kHz", f"f0 = {f0_wien * 2:.2f} kHz", f"f0 = {f0_wien * 3.14:.2f} kHz"],
        0,
        f"[1단계] f0 = 1 / (2 * π * R * C)\n[2단계] f0 = 1 / (2 * 3.14159 * {r_k}k * {c_nf}n) = {f0_wien:.2f} kHz"
    )

# --- Section 7: Power Amplifiers & Power Supply (246 - 285) ---
add_q(
    246,
    "이상적인 B급 푸시풀(Push-Pull) 전력 증폭기가 최대 출력 파형을 낼 때 얻을 수 있는 이론상 최대 컬렉터 전력 효율(Efficiency, η)은?",
    ["78.5 %", "50.0 %", "25.0 %", "90.0 %"],
    0,
    "[1단계] B급 푸시풀 전력증폭기 최대 효율: η_max = (π / 4) * 100% = 78.54% ≈ 78.5%\n[2단계] 비교: A급 변압기 결합 증폭기는 최대 50%, A급 RC 결합은 최대 25% 효율을 갖습니다."
)

add_q(
    247,
    "제너 다이오드 정전압 회로에서 입력 직류 전압 Vin = 20 V, 제너 전압 VZ = 12 V, RS = 200 Ω, 부하 저항 RL = 1 kΩ 일 때, 부하 전류 IL과 제너 다이오드를 흐르는 제너 전류 IZ는?",
    ["IL = 12 mA, IZ = 28 mA", "IL = 12 mA, IZ = 40 mA", "IL = 20 mA, IZ = 20 mA", "IL = 8 mA, IZ = 32 mA"],
    0,
    "[1단계] 정전압 동작 시 부하 전압 VL = VZ = 12 V\n[2단계] 부하 전류 IL = VL / RL = 12 V / 1 kΩ = 12 mA\n[3단계] 전체 공급 전류 IS = (Vin - VZ) / RS = (20 - 12) / 200 = 8 V / 200 Ω = 40 mA\n[4단계] 제너 전류 IZ = IS - IL = 40 mA - 12 mA = 28 mA"
)

for i in range(248, 286):
    vin = 15 + (i % 6) * 5
    vz = 9 + (i % 4) * 3
    rs = 100 + (i % 5) * 50
    rl = 500 + (i % 4) * 500
    
    il = (vz / rl) * 1000
    is_tot = ((vin - vz) / rs) * 1000
    iz = is_tot - il
    
    add_q(
        i,
        f"제너 정전압 회로에서 Vin = {vin}V, VZ = {vz}V, RS = {rs}Ω, RL = {rl}Ω 일 때 제너 전류 IZ는?",
        [f"IZ = {iz:.1f} mA", f"IZ = {is_tot:.1f} mA", f"IZ = {il:.1f} mA", f"IZ = {iz * 1.5:.1f} mA"],
        0,
        f"[1단계] IS = (Vin - VZ) / RS = ({vin} - {vz}) / {rs} = {is_tot:.1f} mA\n[2단계] IL = VZ / RL = {vz} / {rl} = {il:.1f} mA\n[3단계] IZ = IS - IL = {is_tot:.1f} - {il:.1f} = {iz:.1f} mA"
    )

# Save to subject3.js
js_content = "export const subject3Data = " + json.dumps(questions, ensure_ascii=False, indent=2) + ";\n"

current_dir = os.path.dirname(os.path.abspath(__file__))
output_path = os.path.abspath(os.path.join(current_dir, "js", "data", "subject3.js"))

with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully generated {len(questions)} questions in {output_path}")
