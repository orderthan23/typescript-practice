//제네릭
//타입을 파라미터화 할수 있음

function createPromise<T>(x: T, timeoute: number) {
    return new Promise<T>((resolve, reject) => {
        setTimeout(() => {
            resolve(x);
        }, timeoute);
    });
}

createPromise<string>('100', 100)
    .then(v => console.log(v));

//제네릭으로 여러 타입을 정의할 수 있음 대체적으로 대문자로 작성하는게 관례

function createTuple2<T, U, D>(v: T, v2: U, v3 : D):[T, U, D]{
    return [v, v2, v3];
}

const t1 = createTuple2("user1", 1000, "asdasf");