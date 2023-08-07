// map 중요도 ★★★★★
// 면접 질문에서도 많이 나옴
// 교과서에서 보는 map의 용도와 실무에서 사용하는 map의 용도가 조금 다름

// map의 형태태
[1, 2, 3].map((value, index, arr) => {
    console.log(value, index, arr);
    return value;
});

// 교재에는 주로 아래 코드와 같이 써있음.
[1, 2, 3].map(v => {
    return v**2;
});

[1, 2, 3, 4].map(v => {
    return v * 3;
});

// forEach와 map의 차이점
// 1. forEach는 return이 없음
// 2. map은 원본을 수정하여 새로운 배열을 만들고, forEach는 원본 배열을 변경하지 않음.

// forEach을 사용하여 1부터 100까지 더하는 코드
let sum1 = 0;
Array(100).fill(0).forEach((v, i) => {
    sum1 += i + 1;
});
console.log(sum1);

// map을 사용하여 1부터 100까지 더하는 코드
let sum2 = 0;
Array(100).fill(0).map((v, i) => i);


[1, 2, 3, 4].map(v => 'hello world');
// 1. v는 1, 2, 3, 4이다. index, arr는 들어가지 않았음.
// 2. return은 'hello world'
// ['hello world', 'hello world', 'hello world', 'hello world']

[1, 2, 3, 4].map(v => 'hello world');
// ['hello1', 'hello2', 'hello3', 'hello4']

[1, 2, 3, 4].map(v => 'hello' + v);
// ['hello1', 'hello2', 'hello3', 'hello4']

let data = [1, 2, 3, 4];
data.map(v => 'hello' + v);
data; //원본은 수정되지 않음.

[1, 2, 3, 4].map((v, i) => 'hello' + (i + 1));
// ['hello1', 'hello2', 'hello3', 'hello4']

[1, 2, 3, 4].map((v, i) => 'hello' + i);
// ['hello0', 'hello1', 'hello2', 'hello3']

let data2 = [1, 2, 3, 4];
data2.map(v => 'hello' + v);
data2; // 원본은 수정되지 않음

// 같은 코드 1
[1, 2, 3, 4].map(v => 'hello' + v);

// 같은 코드 2
function 함수(v) {
    return 'hello' + v;
};
[1, 2, 3, 4].map(함수);

// 같은 코드 3
[1, 2, 3, 4].map(function (v) {
    return 'hello' + v;
});

// 같은 코드 4
[1, 2, 3, 4].map((v) => {
    return 'hello' + v;
});