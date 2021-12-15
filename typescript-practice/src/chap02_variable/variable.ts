// 타입스크립트의 변수 선언
var score1 = 0;
let scroe2 = 200;
const defaultScore = 0;

//var의 스코프는 함수 단위 함수안에서 선언된 var는 함수 밖에서 접근 불가
// function outer(){
//     var score = 0;
//     function inner(){
//         //var score = 0;
//         //접근 가능
//         console.log(score);
//     }
//     inner();
//     //접근 불가
//     //console.log(score);
// }
//
// outer();

// function outer() {
//     if (true) {
//         var score = 0;
//     }
//
//     for (var i = 0; i < 3; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, 100);
//     }
//
//     console.log(score);
// }
//
// outer();

//let은 블록단위 scope
function outer() {
    if (true) {
        //초기값을 지정하지 않으면 any Type 으로 선언됨
        // let score;
        
        //score 변수를 숫자형으로 지정
        // let score: number;
        // let score = 0;
        //const 의 경우 초기값을 무조건 주어야하기때문에 선언시 타입을 정의할 필요가 없음
        const score = 100;
        // score = 30;
        //불가 타입스크립트는 초기값을 주고 선언했을 때 다른 타입으로 변경이 불가
        // score = "30";
    }

    for (let i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i);
        }, 100);
    }
    
    // 실행 불가
    // console.log(score);
}

outer();