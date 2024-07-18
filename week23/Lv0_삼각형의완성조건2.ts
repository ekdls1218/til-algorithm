// https://school.programmers.co.kr/learn/courses/30/lessons/120868

// 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
// 삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 나머지 한 변이 될 수 있는 정수의 개수를 return

// 가장 긴 변의 길이 < 다른 두 변의 길이의 합
// 1 ≤ sides의 원소 ≤ 1,000
// 긴 변이 sides 배열에 있을 때 => 1부터 긴 변까지 가장 긴 변의 길이 < 다른 두 변의 길이의 합의 조건에 맞는 길이 개수 구하기
// 없을 때 => sides의 긴 변부터 sides원소들의 합까지 개수 구하기
function makeTriangle(sides: number[]): number {
  const longSide = Math.max(...sides);
  const smallSide = Math.min(...sides);
  let count = 0;

  for (let i = 1; i <= longSide; i++) {
    if (smallSide + i > longSide) {
      count++;
    }
  }

  for (let i = longSide + 1; i < smallSide + longSide; i++) {
    count++;
  }

  return count;
}

console.log(makeTriangle([3, 6]));
console.log(makeTriangle([11, 7]));
