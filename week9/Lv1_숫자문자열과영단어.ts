// https://school.programmers.co.kr/learn/courses/30/lessons/81301

// 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.
// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.
// 1478 → "one4seveneight", 234567 → "23four5six7", 10203 → "1zerotwozero3"
// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return

function solution(s: string): number {
  const numArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  numArr.forEach((num, idx) => {
    const regex = RegExp(num, "g");
    if (s.includes(num)) {
      s = s.replace(regex, String(idx));
    }
  });
  return Number(s);
}

console.log(solution("one4seveneight"));
console.log(solution("1zerotwozero3"))