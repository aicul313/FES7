// 함수의 종류

// [#1.] 함수 선언문
// 화살표 함수에 다양한 예제(★★★★☆)
// 읽어볼만한 문헌 : https://ko.javascript.info/arrow-functions-basics
function sum(x, y) {
    return x + y;
};

// [#2.] 함수 표현식
let sumXY = function (x, y) {
    return x + y;
};

console.log(sum(10, 20));
console.log(sumXY(10, 20));

// [#3.] 화살표 함수
// #3.1 return문만 있는 경우
function sum(x, y) {
    return x + y;
};

let sum = (x, y) => x + y;

// #3.2 함수의 기능 + return이 있는 경우
function sum(x, y) {
    let z = x + y;
    console.log(z);
    return z;
};

let sum = (x, y) => {
    let z = x + y;
    console.log(z);
    return z;
};

// #3.3 인자가 하나인 경우
function pow(x) {
    return x * x;
};

let pow = x => x * x;
let pow = (x) => x * x;

// [#4.] 즉시 실행 함수
(function () {
    console.log('즉시실행!');
})();
// 즉시 실행 함수는 대부분 main 함수로 만들어서 사용하는 경우가 많음

(function main() {
    // 10만 줄
})();

// 즉시 실행함수로 얻을 수 있는 이점
// Ⅰ. main을 다시 사용할 수 없게 할 수 있음
// Ⅱ. 전역변수 등을 사용하지 않게 할 수 있음


// [#5.] 재귀함수
// 반복문으로 만들 수 있으면 재귀로 표현이 가능하고 재귀로 표현이 가능하면 반복문으로 표현이 가능함
function factorial(n){
    if(n == 1){
        return 1;
    }
    return n * factorial(n-1);
};

factorial(5); // 120

// factorial(5) == 5 * factorial(4)
// factorial(4) == 4 * factorial(3)
// factorial(3) == 3 * factorial(2)
// factorial(2) == 2 * factorial(1)
// factorial(1) == 1

// [#6.] 지역변수 전역변수
let a = 10; // 전역변수

function test() {
    console.log(a);
};

test();

////
// let a = 10;
function one() {
    let a = 10; // 지역변수
    function two() {
        function three() {
            console.log(a);
        };
        three();
    }
    two();
};
one();

// 자신의 공간에 해당 변수가 없으면 상위 공간에서 찾음
// 못 찾으면 error
function test() {
    let b = a + 100; // 단순히 읽어왔기 때문에 됨
    return b;
};
test(); 

// 지역변수끼리는 서로 간섭을 못함
function one() {
    let x = 10;
};

function two() {
    let x = 100;
    console.log(x);
};
// one() 안에 있는 x와 two() 안에 있는 x는 다른 거임

one();
two();


// 찾으면 읽을 수 있음
// 수정할 수 있지 않음
// let a = 10; 전역변수
function test() {
    let a = 100
    return a
}
test()
console.log(a) // 100


// let a = 10;
function test() {
    let a = a + 100; // 수정하려고 하면 error
    return a;
};
test(); 