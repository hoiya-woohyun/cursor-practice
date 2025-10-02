import React, { useState, useEffect } from "react";

const UserManagement: React.FC = () => {
  // 문제: 아래 함수를 완성해주세요
  // 요구사항:
  // 1. numbers 배열의 각 요소를 순회하는 함수 작성
  // 2. 2의 배수인 숫자만 콘솔에 출력

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [consoleOutput, setConsoleOutput] = useState<number[]>([]);

  // TODO: 아래 함수를 완성해주세요
  const printNumbers = () => {
    // 2의 배수인 숫자만 const xxx 에 할당해주세요.
    // "xxx" 라는 변수명 대신 적절한 변수명을 사용하세요.

    /* 여기에 코드를 작성하세요 */
    const answerTest = numbers;

    setConsoleOutput(answerTest);
  };

  // 함수 실행
  useEffect(() => {
    printNumbers();
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        gap: "20px",
      }}
    >
      {/* 문제 설명 */}
      <div style={{ flex: 2 }}>
        <h2>📋 문제 설명</h2>
        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "15px",
            borderRadius: "8px",
          }}
        >
          <p>
            <strong>과제:</strong> for loop와 조건문을 사용하여 2의 배수인
            숫자만 필터링하는 함수를 작성하세요
          </p>
          <ul style={{ textAlign: "left" }}>
            <li>numbers 배열: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</li>
            <li>for loop를 사용하여 배열 순회</li>
            <li>조건문을 사용하여 2의 배수인지 확인</li>
            <li>2의 배수인 숫자만 새로운 배열에 저장</li>
          </ul>
        </div>
      </div>

      {/* 예상 결과와 실제 결과 */}
      <div style={{ flex: 2, display: "flex", gap: "20px" }}>
        {/* 예상 결과 */}
        <div style={{ flex: 1 }}>
          <h2>🎯 예상 결과</h2>
          <div
            style={{
              backgroundColor: "#d4edda",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <p>콘솔에 다음과 같이 출력되어야 합니다:</p>
            <div
              style={{
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "4px",
                fontFamily: "monospace",
                fontSize: "14px",
              }}
            >
              <div>[2, 4, 6, 8, 10]</div>
            </div>
            <div style={{ marginTop: "10px", fontSize: "12px", color: "#666" }}>
              <strong>좋은 변수명 예시:</strong> evenNumbers, filteredNumbers,
              result
            </div>
          </div>
        </div>

        {/* 실제 결과 */}
        <div style={{ flex: 1 }}>
          <h2>📊 실제 결과</h2>
          <div
            style={{
              backgroundColor: "#e8f4fd",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <p>현재 함수 실행 결과:</p>
            <div
              style={{
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "4px",
                fontFamily: "monospace",
                fontSize: "14px",
                minHeight: "200px",
              }}
            >
              {consoleOutput.length > 0 ? (
                <div>[{consoleOutput.join(", ")}]</div>
              ) : (
                <div style={{ color: "#666" }}>
                  함수를 완성하면 결과가 여기에 표시됩니다
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 코드 작성 영역 - 주석으로 처리 */}
      {/* 
      const printNumbers = () => {
        const output: string[] = [];
        for (let i = 0; i < numbers.length; i++) {
          if (numbers[i] % 2 === 0) {
            output.push(numbers[i].toString());
          }
        }
        setConsoleOutput(output);
      };
      */}
    </div>
  );
};

export default UserManagement;