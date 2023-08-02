// https://ko.javascript.info/nullish-coalescing-operator
// 스펙에 추가된 지 얼마 안 된 문법입니다. 구식 브라우저는 폴리필이(최신 문법을 구식 부라우저에서도 사용할 수 있도록 해주는 것) 필요합니다.

let firstName = null;
let lastName = 'hyeonji';
let nickName = 'hamding';

console.log(firstName ?? nickName); // hamding
console.log(firstName ?? lastName ?? nickName); // hyeonji

console.log(firstName || nickName); // hamding
console.log(firstName || lastName || nickName); // hyeonji



let firstName2 = null;
let lastName2 = null;
let nickName2 = 'hamding';

console.log(firstName2 ?? nickName2);
console.log(firstName2 ?? lastName2 ?? nickName2);



let a = null;
let b = 10;
let c = null;

console.log(a ?? b ?? c); // 10

let height = 0;
console.log(height ?? 100); // 0
console.log(height || 100); // 100


let height2;
console.log(height2 ?? 100); // 100
console.log(height2 || 100); // 100


let height3 = '';
console.log(height3 ?? 'world'); // 공백이 출력됨
console.log(height3 || 'hello'); // hello


// || : 0, null, undefined, false, NaN, '', etc...
// ?? : null, undefined

// falsy하다 : 0, null, undefined, false, NaN, '', etc...
// nullish하다 : null, undefined



// nullish 문제
let username; // undefined
let nickname; // undefined

console.log(username || nickname || 'Guest'); // Guest


let username2 = '';
let nickname2 = '';
console.log(username2 || nickname2 || 'Guest'); // Guest


let username3 = '';
let nickname3 = '';
console.log(username3 ?? nickname3 ?? 'Guest'); // 아무 문자열이 출력되지 않음

let username4;
let nickname4;
console.log(username4 ?? nickname4 ?? 'Guest'); // Guest