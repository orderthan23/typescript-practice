//기존

// function add(x, y) {
//     return x + y;
// }


//함수형 타입 ( 함수의 매개변수에 type 어노테이션을 적용 가능)
//함수에 타입을 정의시 리턴타입을 정의할 수 있음
function add(x: number, y: number): number {
    return x + y;
}

// //number 타입외에는 할당할 수 없다
// add(1, "2");
const result = add(1, 2);

//기본값을 (defaultset을 정의해줄수 있음);
function buildUserInfo(name = "-", email = "-") {
    return {name, email};
}

const user = buildUserInfo();

//화살표 함수를 사용한 함수의 타입 정의
const add2 = (a: number, b: number): number => a + b;


//함수의 오버로딩
interface Storage {
    a: string
}

interface ColdStorage {
    b: String
}

function store(type: "통조림"): Storage
// @ts-ignore
function store(type: "아이스크림"): ColdStorage

//union type
function store(type: "통조림" | "아이스크림") {
    if (type === "통조림") {
        return {a: "통조림"}
    } else if (type === "아이스크림") {
        return {b: "아이스크림"}
    } else {
        throw new Error('unsupported type');
    }
}

const s = store("아이스크림");
s.b;