// https://school.programmers.co.kr/learn/courses/30/lessons/120840

// 머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다.
// 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때,
// balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return

// 조합: 서로 다른 balls개 중 share개를 고르는 경우의 수 => balls C share

import _ from "lodash";
function shareMarbles(balls: number, share: number): number {
  const xs = _.range(0, balls);
  let count = 0;
  console.log(xs);

  for (const x of combination(xs, share)) {
    console.log(x)
    count++;
  }

  return count;
}

function* combination<T>(numbers: T[], pick: number): Iterable<T[]> {
  if (pick === 0) {
    yield [];
  }

  if (numbers.length === 0) {
    return;
  }

  const [head, ...tail] = numbers;

  yield* combination(tail, pick);
  for (const x of combination(tail, pick - 1)) {
    yield [head, ...x];
  }
}

console.log(shareMarbles(5, 3));
