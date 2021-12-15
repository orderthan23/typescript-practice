interface User {
    name: string;
}

interface Action {
    do(): void;
}

//타입 alias 별칭 주기
//User와 Action을 합친 것을 UserAction으로 별칭 부여
type UserAction = User & Action;
function createUsesrAction(): UserAction{
    return{
        do() {},
        name: '',
    }
}

// 원시형으로 alias 만들기
type StringOrNumber = string | number;
type Arr<T> = T[];
//기존 타입을 축약시켜 별칭으로 만들 수 도 있음
type P<T> = Promise<T>;


//인터페이스 처럼 활용하기(인터페이스가 아님에도 implements 가능)
type User2 = {
    name : string;
    login(): boolean
}

class UserImpl implements User2{
    name: string;
    login(): boolean {
        return false;
    }
}

//세개중의 하나의 문자열중 하나로 타입을 정의하기
type UserState = "PENDING" | "APPROVED" | "REJECTED";

function checkUser(user : User2): UserState{
    if(user.login()){
        return "APPROVED";
    }else{
        return "REJECTED"
    }
}