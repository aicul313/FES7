// filter
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result1 = arr1.filter((item) => item % 2 === 0);

// filter는 return 값이 true인 것만 모아서 새로운 배열을 만듦
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result2 = arr2.filter( item => {
    return true;
});
result2;

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result3 = arr3.filter( item => {
    return false;
});
result3;

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result4 = arr4.filter(v => {
    return v % 2 != 0;
});
result4;


//////////////////////////////

// reduce
[10, 20, 30, 40, 50].reduce((a, c) => a + c, 0); // 암기코드
[10, 20, 30, 40, 50].reduce((a, c) => a + c); // X
[].reduce((a, c) => a + c); // X
[10, 20, 30, 40, 50].reduce((a, c) => {
    console.log(a, c);
    return a + c;
});

// 파라미터 이름은 자유롭게 지정할 수 있음
// forEach, map, filter, reduce 등의 메서드 모두 마찬가지임
[10, 20, 30, 40, 50].reduce((hyeon, ji) => {
    console.log(hyeon, ji);
    return hyeon + ji;
});


//////////////////////////////

// includes
const arr5 = ['hello', 'world', 'hyeonji'];
arr5.includes('world');

const arr6 = ['hello', 'world', 'hyeonji'];
arr6.includes('jeonghyeonji');

const arr7 = ['hello', 'world', 'hyeonji'];
arr7.includes('ji');


//////////////////////////////

// join(***)
let arr8 = ['hello', 'world', 'hyeonji'];
arr8.join('!');

let arr9 = ['hello', 'world', 'hyeonji'];
arr9.join(' ');

let arr10 = ['010', '8716', '9644'];
arr10.join('-');

let arr11 = ['안녕하세요', '제 이름은 정현지입니다.', '부산외국어대학교 다녀요.'];
arr11.join('\n');
console.log(arr11.join('\n'));

let arr12 = ['안녕하세요', '제 이름은 정현지입니다.', '부산외국어대학교 다녀요.'];
arr12.join('<br>');
console.log(arr12.join('<br>')); // innerHTML로 하면 <br>이 개행됨
document.write(arr12.join('<br>'));


//////////////////////////////

// reverse
[10, 20, 30].reverse(); // [30, 20, 10]