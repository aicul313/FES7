// forEach(콜백함수)
let arr1 = [10, 20, 30, 40, 50];
arr1.forEach((value, index, array) => {
    console.log(value, index, array);
});

//////////////////////////////

// 문제1. forEach를 사용해서 배열의 모든 요소를 더하는 코드를 작성하세요.
let arr2 = [10, 20, 30, 40, 50];
let sum2 = 0;
arr2.forEach(v => {
    sum2 += v;
});
console.log(sum2);

//////////////////////////////

// 문제2.
let arr3 = [10, '20', 30, '40', 50];
let sum3 = 0;
arr3.forEach(v => {
    sum3 += parseInt(v);
});
console.log(sum3);

//////////////////////////////

// 문제3. forEach를 사용해서 짝수 인덱스의 값을 모두 더하세요.
// arr4[0] + arr4[2] + arr4[4] + arr[6] + arr[8]
// === 1 + 3 + 5 + 7 + 9 = 25

// 풀이 1
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum4 = 0;
arr4.forEach((v, i) => {
    if(i % 2 === 0) {
        sum4 += v;
    }
});
console.log(sum4); // 25

// 풀이 2
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum5 = 0;
arr6.forEach((v, i) => {
    i % 2 === 0 ? sum5 += v : null;
});
console.log(sum5);

// Array(100).fill(0)와 같은 코드 대신 map을 더 많이 사용함
// 문제4. 1부터 100까지의 숫자를 다 더해주세요.
Array(100).fill(0).forEach((v, i) => {
    console.log(i+1);
});

let sum6 = 0;
Array(100).fill(0).forEach((v, i) => {
    sum6 += i + 1;
});
console.log(sum6); // 5050
// 수학 수식으로 계산되는 코드는 위 코드와 같이 순회를 돌면서 푸는 것은 좋지 않음

/*
    let n = 100;
    n * (n + 1) / 2;
*/


//////////////////////////////

// 문제4.
// https://school.programmers.co.kr/learn/courses/30/lessons/120835
// let userInput = [3, 76, 24];
// let sortValue = userInput.sort((a, b) => b - a);

// let userInput = [3, 76, 24];
// let sortValue = [...userInput].sort((a, b) => b - a);

// 한글 풀이
// userInput = [3, 76, 24]라면 정렬된 후의 값은 [76, 24, 3]이 됨. 그렇다면 정렬된 후의 값에 3이 위치한 인덱스는 2가 됨. 76이 위치한 인덱스는 0이 됨. 24가 위치한 인덱스는 1이 됨.
// 그렇다면 userInput에 이 인덱스를 하나씩 지정함. 그러면 userInput은 [2, 0, 1]이 됨.
// 결과 값을 보니 0번째는 없음. 따라서 여기에 1씩 더해줌. [3, 1, 2]가 됨.

// step1 = [3, 76, 24]
// step2 = [76, 24, 3] 정렬된 값
// step3 = [2, 0, 1] 
// step4 = [3, 1, 2] 정답

[10, 20, 30, 40].indexOf(30); // 2

let userInput = [3, 76, 24];
let sortValue = [...userInput].sort((a, b) => b - a);
userInput.forEach((v, i) => {
    userInput[i] = sortValue.indexOf(v) + 1;
});

//////////////////////////////

// 문제5. 1부터 100까지의 숫자 중 3의 배수만 더해주세요.
let sum7 = 0;
Array(101).fill(0).forEach((v, i) => {
    if(i % 3 === 0) {
        sum7 += i;
    }
});
console.log(sum7);

let sum8 = 0;
Array(101).fill(0).forEach((v, i) => {
    i % 3 === 0 ? sum8 += i : null;
});
console.log(sum8);

//////////////////////////////

// 문제 6. 아래와 같이 출력되게 해주세요.
// input = ['hyeonji', 'hyeongyeong', 'taegyeong', 'jinwoo']
// output = ['hyeonji is good', 'hyeongyeong is good', 'taegyeong is good', 'jinwoo is good']
let input = ['hyeonji', 'hyeongyeong', 'taegyeong', 'jinwoo'];
let output = [];
input.forEach(v => {
    output.push(`${v} is good`);
});
console.log(output);

//////////////////////////////

// 문제 7. 010-8716-9644 번호가 있었을 때 아래와 같이 출력되게 해주세요. 뒤에 두 자리를 x로 바꾸어주세요.
// input = '010-8716-9644'
// output = '0xx-87xx-96xx'
'010-8716-9644'.split('-').forEach((v, i) => {
    console.log(v);
});

'010-4444-9644'.split('-').forEach((v, i) => {
    console.log(v.replace(v.slice(-2), 'xx'));
});

'010-8716-9644'.split('-').forEach((v, i) => {
    console.log(v.replace(v.slice(-2), 'xx'));
});

'hello world hello'.replace('hello', 'hyeonji');

//////////////////////////////

'010-4444-9644'.split('-').forEach((v, i) => {
    if (v.length === 4) {
        console.log(v[0] + v[1] + 'xx');
    }
    else {
    console.log('0xx');
    }
});

'010-8716-9644'.split('-').forEach((v, i) => {
    v.length === 4 ? console.log(v[0] + v[1] + 'xx') : console.log('0xx');
});

'010-8716-9644'.split('-').forEach((v, i) => {
    v.length === 4 ? console.log(v.slice(0, 2) + 'xx') : console.log('0xx');
});


//////////////////////////////

// 주의사항!
// forEach는 return을 사용할 수 없다.
[1, 2, 3].forEach(v => {
    console.log(v);
    return; // 리턴했는데 멈추지 않는다.
});

[1, 2, 3].forEach(v => {
    return; // 뒤에 코드를 무시하는 코드로는 사용할 수 있음음
    console.log(v);
});

// forEach는 break, continue를 사용할 수 없다.
[1, 2, 3].forEach(v => {
    console.log(v);
    // break; //break는 에러임
});

[1, 2, 3].forEach(v => {
    console.log(v);
    // continue; //break는 에러임
});

// ElementnNodeList는 forEach는 익스플로러를 지원하지 않음
// 기억해야 할 문구 : forEach라고 다 같은 forEach가 아님
// html파일
// <div>1</div>
// <div>2</div>
// <div>3</div>
document.querySelectorAll('div').forEach(v => {
    console.log(v);
});