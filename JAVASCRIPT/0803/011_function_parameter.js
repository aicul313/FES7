function test(a, b, c) {
    console.log(a, b, c);
    return a + b + c;
};

test(10, 20); // 모자라면 undefined로 채워짐 -> NaN
test(10, 20, 30, 40); // 넘겨도 제대로 작동함 -> 10 20 30 -> 60
// 하지만 위에 있는 것들은 다른 언어에서는 error가 남

//////////////////////////////

function test(a = 10, b = 20, c = 30) {
    console.log(a, b, c);
    return a + b + c;
};

test(100, 200); // -> 100 200 30 -> 330
test(); // -> 10 20 30 -> 60
test(a = 100, b = 200); // -> 100 200 30 -> 330

// 문제점 1
test(b = 100, c = 200); // -> 100 300 30 -> 330
// ⬇️ js는 값을 순서대로 넣기 때문. 이를 해결하기 위해 RORO 기법 등장
// RORO : 객체로 받고 객체로 반환함 ( Receive an object, return an object )

// 문제점 2

function mob(scene, x, y, texture, animKey, initHp, dropRate) {
    // scene : 스토리신, 플레이신, 엔딩신
    // x, y : 몹의 위치
    // texture : 몹의 이름
    // animKey : 몹의 애니메이션
    // initHp : 몹의 체력
    // dropRate : 몹이 아이템을 떨어뜨리는 확률
    return;
};

// 위 문제점 1, 2를 해결하기 위해 RORO 기법을 사용할 수 있음
// mob('플레이신', 100, 200, '슬라임', '슬라임_애니', 100, 0.1);
// mob('플레이신', ...뭐가 들어가야 하지?);

function player({scene, x, y, texture, animKey, initHp, dropRate}) {
    console.log(scene, x, y, texture, animKey, initHp, dropRate);
    return;
};

// 아래와 같이 작성되기 때문에 문제점 2를 해결할 수 있고, 순서도 상관 없음.
player({
    scene: '플레이신',
    x: 100,
    y: 200,
    texture: '슬라임',
    animKey: '슬라임_애니',
    initHp: 100,
    dropRate: 0.1
});

// 아래와 같이 작성되기 때문에 문제점 1을 해결할 수 있음.
player({
    scene: '플레이신',
    y: 200,
    initHp: 100,
});

// 기본값 설정하는 방법
function player({scene = '플레이신', x = 0, y = 0, texture, animKey, initHp, dropRate = 0.1}) {
    console.log(scene, x, y);
};

player({initHp: 100});