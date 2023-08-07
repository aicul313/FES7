// 문제1
// 정수 n이 주어질 때, n 이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요
// https://school.programmers.co.kr/learn/courses/30/lessons/120831
function solution(n) {
    return;
};

Array(10); // (10) [empty x 10]
Array(10).fill(); // (10) [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
Array(10).fill(0); // (10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
Array(10).fill(0).map((v, i) => i); // (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
Array(10).fill(0).map((_, i) => i + 1); // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Array(10).fill(0).map((_, i) => i + 1).filter(v => v % 2 === 0); // (5) [2, 4, 6, 8, 10]
Array(10).fill(0).map((_, i) => i + 1).filter(v => v % 2 === 0).reduce((a, c) => a + c, 0); // 30

// 정답
function solution(n) {
    return Array(n).fill(0).map((_, i) => i + 1).filter(v => v % 2 === 0).reduce((a, c) => a + c, 0);
};


//////////////////////////////

// 문제2
// 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.
// https://school.programmers.co.kr/learn/courses/30/lessons/120585

let result1 = 0;
[149, 180, 192, 170].forEach(v => {
    if (v > 168) result1 ++;
});
result1;

let result2 = 0;
[149, 180, 192, 170].forEach(v => {
    v > 168 ? result2 ++ : null;
});
result2;

let result3 = 0;
let data3 = [149, 180, 192, 170];
data3.forEach(v => {
    v > 168 ? result3 ++ : null;
});
result3;

[149, 180, 192, 170].filter(v => v > 168).length;

// 정답
function solution() {
    return array.filter(v => v > height).length;
};


//////////////////////////////

// 문제3
// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
// https://school.programmers.co.kr/learn/courses/30/lessons/120849

function solution(my_string) {
    var answer = '';
    return answer;
};

let my_string = 'hello world';
let 모음 = ['a', 'e', 'i', 'o', 'u'];
my_string.split(''); // ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
my_string.split('').filter(v => 모음.includes(v)); // ['e', 'o', 'o']
my_string.split('').filter(v => !모음.includes(v)); // ['h', 'l', 'l', ' ', 'w', 'r', 'l', 'd']
my_string.split('').filter(v => !모음.includes(v)).join(''); //'hll wrld'


// 정답
function solution(my_string) {
    let 모음 = ['a', 'e', 'i', 'o', 'u'];
    return my_string.split('').filter(v => !모음.includes(v)).join('');
};


//////////////////////////////

// join에서 주의사항
[010, 8716, 9644].join(''); // 010은 8진법으로 8이 나옴. 011은 9로 나옴
['010', '8716', '9644'].join('');
// 0으로 시작하면 앞에 0이 사라짐
// 0 다음에 숫자가 나오기 시작하면 진법으로 인식함
// 2진법
// 0b100 == 4 // (b) 바이너리

// 8진법
//0o100 == 64 // (o) 옥타

// 16진법
// 0x100 == 256 // (x) 헥사


//////////////////////////////


// 문제4
// 1부터 100까지의 숫자 중 3의 배수만 더한 값을 출력해주세요.
// map과 filter, reduce를 사용

Array(100).fill(0)
    .map((_, i) => i + 1)
    .filter(v => v % 3 === 0)
    .reduce((a, c) => a + c, 0);

    

//////////////////////////////


// 문제5
// 1부터 100까지의 숫자 중 1이라는 숫자가 들어간 숫자는 모두 더한 값을 출력해주세요.
// 더하는 숫자 : 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, ...
// 더하지 않는 숫자 : 2, 3, 4, 5, 6, 7, 8, 9, 20, ...

Array(100).fill(0)
    .map((_, i) => i + 1)
    .filter(v => v.toString().includes('1'))
    .reduce((a, c) => a + c, 0);