// url : https://school.programmers.co.kr/learn/courses/30/lessons/120807
// 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 return하도록 solution 함수를 완성해주세요.
let num1 = 3;
let num2 = 5;
let answer = num1 === num2 ? 1 : -1

// 정답
function solution(num1, num2) {
    return num1 === num2 ? 1 : -1;
}



// url : https://school.programmers.co.kr/learn/courses/30/lessons/120908
// 문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을, 없다면 2를 return하도록 solution 함수를 완성해주세요.
// indexOf, includes, search, replace 풀 수 있음
// replace로 어떻게 푸느냐 ? 예를들어, 'XXcompany CEO jeonghyeonji'에서 CEO를 찾는다고 했을 때, CEO를 replace해서 문자열이 줄어들었거나 늘어났으면 그 문자가 포함되어있는 것인지 확인할 수 있음
'XXcompany CEO jeonghyeonji'.includes(CEO); //true

let str1 = 'XXcompany CEO jeonghyeonji';
let str2 = 'CEO';

str1.includes(str2) ? 1 : 2;

// 정답
function solution(str1, str2) {
    str1.includes(str2) ? 1 : 2;
}



// url : https://school.programmers.co.kr/learn/courses/30/lessons/120819
// 머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 문제대로라면 문자열로 들어오는 것인데 실제로는 숫자가 들어옴 아래 풀이 방식이 맞는 풀이방식
let pocketmoney = '15,000';
let result = [0, 0]; // [아메리카노 잔 수, 남는 돈]

let americano = parseInt(parseInt(pocketmoney.replaceAll(',', '')) / 5500);
let money = parseInt(pocketmoney.replaceAll(',', '')) / 5500;

result = [americano, money];

// 정답
function solution(pocketmoney) {
    return [~~(pocketmoney/5500), pocketmoney%5500];
}