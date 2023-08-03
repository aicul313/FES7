// 문제 1 : 더하기, 빼기, 나누기, 곱하기를 하는 함수를 만들어주세요.
// https://school.programmers.co.kr/learn/courses/30/120803
function add(x, y) {
    return x + y;
};
add(1, 2);

function sub(x, y) {
    return x - y;
};
sub(4, 3);

function mul(x, y) {
    return x * y;
};
mul(5, 6);

function div(x, y) {
    return x / y;
};
div(8, 2);


// 문제 2 : '10,000,000,000'와 같은 문자를 입력받아 10000000000와 같은 숫자를 반환하는 함수를 만들어주세요.
function stringTOint(str) {
    return parseInt(str.replaceAll(',', ''));
};

stringTOint('10,000,000,000');


// 문제 3 : 입력된 문자열을 콘솔로 출력하고 입력된 문자열을 쪼개서 출력하는 함수를 만들어주세요.
// 입력 : world
// 출력 : ['w', 'o', 'r', 'l', 'd']
function printAndSplit(str) {
    console.log(str);
    return str.split('');
};

let value = printAndSplit('world');


// 문제 4 : 2개의 숫자가 입력되면 2개의 숫자를 더하고, 더한 2개의 숫자를 곱하는 함수를 만들어주세요.
// 입력 : 1, 2
// 출력 : 9

// 문제 4 - 풀이 1
function addAndMul(a, b) {
    return (a+b) ** 2;
};

addAndMul(1, 2);

// 문제 4 - 풀이 2
function add(a, b) {
    return a + b;
};

function addAndMultiply(a, b) {
    let sum = add(a, b) * add(a, b);
    return sum;
};

addAndMultiply(1, 2);

// 문제 4 - 풀이 3
function addNMultiply(a, b) {
    function add(a, b) {
        return a + b;
    };
    let sum = add(a, b) * add(a, b);
    return sum;
};

addNMultiply(1, 2);


// 문제 5 : x**2 + 4x - 12를 구해주는 함수를 만들어주세요
// 입력 : 3
// 출력 : 9
function QuadraticEquation(x) {
    return x**2 + 4*x - 12;
}

QuadraticEquation(3);