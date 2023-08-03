function add(a, b) {
    let answer = a + b;
};

//////////////////////////////

function add(a, b) {
    let answer = a + b;
    return
};

//////////////////////////////

function add(a, b) {
    let answer = a + b;
    return undefined
};

let result = add (10, 20);

//////////////////////////////

function test() {
    console.log('hello');
    console.log('hello');
    console.log('hello');
    return;
    // return 아래쪽은 출력 X
    console.log('hello');
    console.log('hello');
    console.log('hello');
};

//////////////////////////////

function test() {
    console.log('hello');
    console.log('hello');
    console.log('hello');
    return;
    // 이렇게 에러가 나는 코드가 있어도 js 엔진이 보지 않는 공간에서는 에러를 출력하지 않음.
    console.logi('hello');
    console.logabc('hello');
    console.log23rsadf('hello');
};

//////////////////////////////

// 단락 평가에서도 js 엔진이 보지 않는 공간에서는 에러가 있어도 에러를 출력하지 않음.
function errorCode() {
    console.logabc('error');
}
let value = true;
// errorCode를 실행시키지 않음음
let result2 = true || errorCod();

//////////////////////////////

// return은 반환보다는 종료의 느낌으로 쓰는 코드
function test() {
    if(true) {
        if(true){
            consold.log('1');
            return;
        }
    }
    console.log('2');
    // 여러 코드 ... ~
    return;
};

// -> 1

function test() {
    if(true) {
        if(false){
            consold.log('1');
            return;
        }
    }
    console.log('2');
    // 여러 코드 ... ~
    return;
};

// -> 2


//////////////////////////////

// 함수의 이름은 결국 변수
// [#1]
console.log('hello'); // 'hello'는 argument

// [#2]
let jeonghyeonji = console.log; // jeonghyeonji는 console.log의 기능을 얻게 됨
jeonghyeonji('hello');

function test() {
    console.log('hello');
};

// [#3]
test();
let hamding = test;
hamding();

//////////////////////////////

//함수의 이름은 결국 변수이기 때문에 argument 또는 return 값으로 전달 할 수 있음

function add(a, b) {
    return a + b;
};

let x = 10;
let y = 20;
console.log(add(x, y));

//////////////////////////////

// [#1] 함수를 argument로 전달
// --> 콜백함수 : 아래와 같이 argument로 전달된 함수
function add(x, y) {
    return x + y;
};

function addAndMultiply(x, y, z) {
    let sum = z(x, y) * z(x, y);
    return sum;
};

addAndMultiply(1, 2, add);


// [#2] 함수를 return 값으로 전달
function one(x) {
    function two(y) {
        return x + y;
    }
    return two;
}

let result3 = one(10);
result3(100);

// ⬇️
// function one(10) {
//     function two(y) {
//         return 10 + y;
//     }
//     return two;
// }
// ⬇️
// function two(100) {
//     return 10 + 100;
// }
// ⬇️
// 110