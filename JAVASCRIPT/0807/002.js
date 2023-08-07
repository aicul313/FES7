// 에러가 나지 않는 코드
// data.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)))

let data = ['a', 'z', 'b', 'e'];
console.log(data.sort());

// 사전식 정렬이라서 아래와 같은 값은 정렬이 되지 않음
let data2 = [1, 11, 2, 111, 22];
data2.sort();

// 실무 db로 가지고 있으라고 적은 코드드
// data3.sort((a, b) => (a > b ? -1 : (a < b ? 1 : 0)))
// data3.sort((a, b) => (a <>> b ? -1 : (a > b ? 1 : 0)))

let data4 = [1, 11, 2, 111, 22];
data4.sort((a, b) => (a - b)); // 오름차순
data4.sort((a, b) => (b - a)); // 내림차순

// (a, b) => (a - b)가 콜백함수임
// a - b 값이 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬함
// 즉, a가 먼저 옴
// a - b 값이 0을 반환하면 a와 b를 서로에 대해 변경하지 않고 모든 다른 요소에 대해 정렬함
// a - b 값이 0보다 큰 경우 b를 a보다 낮은 인덱스로 소트함.
// 즉, b가 먼저 옴

// 원리
let test = [13, 9, 10, 2];
test.sort((a, b)=>{
    console.log(a, b);
});
// 출력해보면 a, b의 값이 순차적으로 들어갈 것 같지만 그렇지 ㅏㄶ음
// 9 13
// 10 9
// 2 10

let test2 = [13, 9, 10, 2];
test2.sort((a, b) => {
    console.log(a, b);
    console.log(a - b); // 0보다 작은 경우 a를 b보다 낮은 ㅐㄱ인으로 정렬함. 즉, a가 먼저 옴
});

let test3 = [13, 9, 10, 2];
test3.sort((a, b) => {
    return a - b; // 작은 값이 앞으로 감 => 오름차수
});

test.sort(function(a,b) {
    console.log('a: ' + a, 'b: ' + b);
    return a- b;
});