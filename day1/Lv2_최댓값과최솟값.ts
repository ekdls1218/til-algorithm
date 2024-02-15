// 문자열 s에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환

function minMax(s: string): string {
    let strArray : number[] = [];
    let answer: string;

    strArray = s.split(' ').map(Number);
    
    let maxNum = Math.max(...strArray);
    let minNum = Math.min(...strArray);

    answer = minNum + ' ' + maxNum;
    
    return answer;
}

console.log(minMax('1 2 3 4 5'));
console.log(minMax('-1 -2 -3 -4 -5'));