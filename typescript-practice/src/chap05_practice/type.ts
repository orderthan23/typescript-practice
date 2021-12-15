export interface Hello{
    text : string;
}

export const user = {
    name : "user1",
}

type d = Hello & {hi(): void}
//타입을 export
export  default d;

// 이름이 의미없이 기본값으로 EXPORT
// export default class A{
//     a(){};
// }

//모듈 내 default는 한개만 가능함
// export default function(){}