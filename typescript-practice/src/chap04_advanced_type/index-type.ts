//인덱스 타입

interface Props{
    //고정 필수 키값을 설정해줄수 있음
    name: string;
    //인덱스 매개변수는 string, 혹은 number만 가능
    [key : string]: string;
}

//key가 string인 경우에도 number형 키를 넣을 수 있음
const p : Props = {
    name : 'hello',
    a : 'd',
    b : 'e',
    c: '3',
    0 : 'd',
    1 : 'b'
}

//keyof 연산자 이용 시 키에 대한 타입을 가져올수 있음
let keys : keyof Props;


//일반적인 인터페이스에 keyof 연산자 사용
interface User3{
    name : string;
    age : number;
    hello(msg : string): void;
}

let keysOfUser : keyof User3;
let helloMethod: User3["hello"];
//User 인터페이스의 hello 매개변수 타입을 물려받음 (string만 사용가능)
helloMethod = function(msg: string){}