import json
import re
import os

project_dir = os.path.dirname(os.path.abspath(__file__))
data_dir = os.path.join(project_dir, "js", "data")

subjects = {
    1: "subject1.js",
    2: "subject2.js",
    3: "subject3.js",
    4: "subject4.js"
}

total_all_questions = 0

print("==========================================")
print("  전자기사 문제 데이터셋 전수 검증 결과  ")
print("==========================================")

for sub_id, filename in subjects.items():
    filepath = os.path.join(data_dir, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Extract JSON part from JS export syntax
    match = re.search(r"export\s+const\s+\w+\s*=\s*(\[[\s\S]*\])\s*;?", content)
    if not match:
        print(f"[FAIL] {filename}: JS export JSON 매칭 실패")
        continue
    
    json_str = match.group(1)
    try:
        data = json.loads(json_str)
    except Exception as e:
        print(f"[FAIL] {filename}: JSON 파싱 에러 - {e}")
        continue
    
    count = len(data)
    total_all_questions += count
    
    # Verify items
    valid = True
    for idx, item in enumerate(data):
        for field in ["id", "question", "options", "answer", "explanation"]:
            if field not in item:
                print(f"[FAIL] {filename} [{idx}]: 누락 필드 '{field}'")
                valid = False
        if "options" in item and len(item["options"]) != 4:
            print(f"[FAIL] {filename} [{idx}]: options 개수가 4개가 아님 ({len(item['options'])}개)")
            valid = False
        if "answer" in item and (not isinstance(item["answer"], int) or item["answer"] < 0 or item["answer"] > 3):
            print(f"[FAIL] {filename} [{idx}]: answer 범위를 벗어남 ({item['answer']})")
            valid = False

    if valid:
        print(f"[PASS] 과목 {sub_id} ({filename}): 총 {count}문항 완벽 검증 완료!")

print("------------------------------------------")
print(f"전체 4개 과목 총합 문제 수: {total_all_questions}문항")
print("==========================================")
