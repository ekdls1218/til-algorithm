// https://school.programmers.co.kr/learn/courses/30/lessons/181913

// 문자열 my_string과 이차원 정수 배열 queries가 매개변수로 주어집니다.
// queries의 원소는 [s, e] 형태로, my_string의 인덱스 s부터 인덱스 e까지를 뒤집으라는 의미입니다.
// my_string에 queries의 명령을 순서대로 처리한 후의 문자열을 return

// queries를 반복문으로 돌며 my_string에 순서대로 적용
function flipString(my_string: string, queries: number[][]): string {
  const xs = [...my_string];

  for (const [s, e] of queries) {
    const x = xs
      .slice(s, e + 1)
      .reverse()
      .join("");

    xs.splice(s, e - s + 1, ...x);
  }
  return xs.join("");
}

console.log(
  flipString("rermgorpsam", [
    [2, 3],
    [0, 7],
    [5, 9],
    [6, 10],
  ])
);
