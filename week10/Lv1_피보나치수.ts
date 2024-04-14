// https://school.programmers.co.kr/learn/courses/30/lessons/12945
// 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수
// F(2) = F(0) + F(1) = 0 + 1 = 1
// F(3) = F(1) + F(2) = 1 + 1 = 2
// F(4) = F(2) + F(3) = 1 + 2 = 3
// F(5) = F(3) + F(4) = 2 + 3 = 5
// 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 return

function fibonacci1(n: number): number {
  let fibonacciN = 1;

  if (n >= 3) {
    const fibonacciArray = [...fibonacci(n)];
    fibonacciN = fibonacciArray[fibonacciArray.length - 1];
    //console.log(fibonacci2);
  }

  return fibonacciN % 1234567;
}

function* fibonacci(n: number): Iterable<number> {
  let n1 = 1;
  let n2 = 1;

  for (let i = 3; i <= n; i++) {
    const n3 = n1 + n2;
    n1 = n2;
    n2 = n3;

    //console.log(n2)
    yield n2;
  }
}

console.log(fibonacci1(3));
console.log(fibonacci1(5));
console.log(fibonacci1(8));
console.log(fibonacci1(1000));
console.log(fibonacci1(999));
console.log(fibonacci1(1001));
console.log(fibonacci1(1002));
