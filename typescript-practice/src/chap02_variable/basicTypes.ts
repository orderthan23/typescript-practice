//타입스크립트 기본 타입
let numValue: number;
let stringValue : string;
let booleanValue : boolean;
let undefinedValue: undefined;
let nullValue : null;
let objValue: object;
let symbolValue : symbol;
let anyValue : any;
//숫자형 값만 할당 가능
numValue = 3.3;
//문자형 값만 할당 가능
stringValue = "hello";
stringValue = 'hello';
stringValue = `hello ${1 + 1}`;

//true, false만 할당 가능
booleanValue = true;

//undefined, null 할당 가능 사용할일은 거의 없음 하위 타입
undefinedValue = undefined
//하위 타입은 상위 타입으로 정의된 변수에 할당이 가능하다.
numValue = null;

//모든 타입의 최상위 타입은 any
anyValue = 1;
anyValue ="3"


//원시형 값은 할당 불가
objValue = {name : 'jay'};
objValue = {};
objValue = new String(33);

//무조건 Symbol 함수를 통해 선언
symbolValue = Symbol();


//배열 타입 정의

let nameList: string[];
//오류발생(문자열만 넣고 초기화 하거나 push)
// nameList = [1,2,3,4,5];
nameList = ["1", "3"];
nameList.push("5");


//인라인 타입 변수선언과 동시에 타입을 정의(문자열 name과 정수형 score를 가진 객체만 선언가능
//재사용 되는 타입의 경우 (type aliance, interface 등을 통해 선언)
let user1 : {name : string, score : number};
user1 = {
    name : 'jay',
    score : 30
}

//튜플 타입 정의 ( 갯수, 타입 모두 일치해야함)
let tuple2 : [number, string];
let tuple3 : [number, number, number];
tuple2 = [1, "hello"];