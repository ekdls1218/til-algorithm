// https://school.programmers.co.kr/learn/courses/30/lessons/120843
// 머쓱이는 친구들과 동그랗게 서서 공 던지기 게임을 하고 있습니다.
// 공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다.
// 친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때, k번째로 공을 던지는 사람의 번호는 무엇인지 return

// 인원이 홀수일 때 => 하나씩 건너뛰며 공을 주고 받음
// - 홀수 + 짝수 배열
// 인원이 짝수일 때 => 홀수번째 원소만 공을 주고 받음
// - numbers 홀수만 필터링
// k번째로 공을 던지는 사람 index => k % 원소 개수 - 1
function solution(numbers: number[], k: number): number {
  const oddNumbers = numbers.filter((num) => num % 2 !== 0);
  const xs = oddNumbers.concat(numbers.filter((num) => num % 2 === 0));
  const findBallThrower = (arr: number[]) => {
    return arr.length >= k ? arr[k - 1] : arr[(k % arr.length) - 1];
  };

  return numbers.length % 2 === 0
    ? findBallThrower(oddNumbers)
    : findBallThrower(xs);
}

console.log(solution([1, 2, 3, 4], 2));
console.log(solution([1, 2, 3, 4], 5));
console.log(solution([1, 2, 3, 4], 1));
console.log(solution([1, 2, 3, 4, 5, 6, 7], 7));
console.log(solution([1, 2, 3, 4, 5, 6, 7], 4));
console.log(solution([1, 2, 3, 4, 5, 6, 7], 10));
