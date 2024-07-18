// https://school.programmers.co.kr/learn/courses/30/lessons/120894
// 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return

function hateEnglish(numbers: string): number {
  const xs = [
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
  let a = numbers;

  xs.forEach((x, idx) => {
    a = a.replaceAll(x, idx.toString());
  });

  return Number(a);
}

console.log(hateEnglish("onetwothreefourfivesixseveneightnine"));
