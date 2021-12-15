//intersection union

interface User{
    name : string
}

interface Action{
    do() : void;
}

//&로 두가지 인터페이스를 합친 타입을 선언할 수 있음(intersection)
function createUserAction(u:User, a: Action) : User & Action{
    return {...u, ...a};
}

const u = createUserAction({name : 'jay'}, {do(){}});


//union 
//문자열이거나 숫자거나

//오버로딩 활용
function compare(x: string, y:string);
function compare(x: number, y:number);
function compare(x: string | number, y: string | number) {
    //typeof 연산자를 활용해 분기 처리
    if (typeof x === "number" && typeof y === "number") {
        return x === y ? 0 : x > y ? 1 : -1;
    }

    if(typeof x === 'string' && typeof y === 'string'){
        return x.localeCompare(y);
    }

    throw Error("not Supported type");
}

let v = compare(1, 2);
 v = compare("1", "1");
 //오버로딩에 의해 사용 불가
// v = compare(1, "1");
console.log([3,2,1].sort(compare))
console.log(['c','b','a'].sort(compare))

//참조자료형일 때 union
function process(v: User | Action){
    
    //typeof 사용불가
    // if(typeof v === "object"){}

    //Action 강제 형변환 방식
    //if((<Action>v).do){
    //    (<Action>v).do();
    //}

    //type guard 적용
    if(isAction(v)){
        v.do();
    }else{
        v.name
    }

}

//사용자 정의의 type guard 만들기
function isAction(v: User | Action): v is Action{
    return  (<Action>v).do !== undefined;
}