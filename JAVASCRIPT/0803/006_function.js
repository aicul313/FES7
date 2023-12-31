// 함수 설명
// 건물 올리기 할 예정
// 땅다지기()
// 말뚝세우기()
// 기초콘크리트()
// 철근바인딩()
// 기둥세우기()
// 외벽내벽올리기()
// 지붕올리기()

// 첫 번째 장점
// 이 코드를 보고 건물올리기를 한다는 것을 알 수 있음

// 두 번째 장점
// 유지보수 할 때 기둥에 문제가 생기면 기둥세우기() 함수로 가면 됨 

// 세 번째 장점
// 재사용성이 높음, 새로운 건물 세울 때 똑같은 함수 다시 사용


// 이렇게 선언하면 인부들이 투입된 상태가 아님 실제로 일을 하라고 '호출'해야 함
// 이것은 '정의'일뿐

function 땅다지기(삽, 인원){
    // 기능
    console.log(`${삽}개의 삽을 가지고 ${인원}명이 땅을 다진다!`);
    return '다져진 땅';
};

function 말뚝세우기(){};

function 기초콘크리트(){};

function 철근바인딩(){};

function 기둥세우기(){};

function 외벽내벽올리기(){};

function 지붕올리기(){};

땅다지기(10, 30);