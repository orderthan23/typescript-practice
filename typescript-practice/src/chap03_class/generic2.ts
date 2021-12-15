//인터페이스에서의 제네릭 사용
interface DB<T> {
    add(v: T): void;

    get(): T;
}

//임플리먼츠에서 제네릭 반드시 입력 클래스에도 제네릭을 명시해 주어야함
class D<T> implements DB<T> {
    add(v: T): void {
    }

    get(): T {
        return undefined;
    }

}

//클래스에 제네릭 선언

//제네릭을 특정 타입에 하위타입으로 고정하기
interface JSONSerialier {
    serialize(): string;
}


class LocalDB<T extends JSONSerialier> implements DB<T> {
    constructor(private localStorageKey: string) {
    }

    add(v: T) {
        localStorage.setItem(this.localStorageKey, v.serialize());
    }

    get(): T {
        const v = localStorage.getItem(this.localStorageKey);
        return (v) ? JSON.parse(v) : null;
    }
}


interface User {
    name: string
}

//const userDb = new LocalDB<User>('user');
//userDb.add({name: "jay"});
//const userA = userDb.get();
//userA.name;

//조건부 타입에서의 제네릭

interface Vegitable {
    v: string;
}

interface Meat {
    m: string;
}

interface Cart2<T> {
    getItem(): T extends Vegitable ? Vegitable : Meat
}

//meat || vegi 그외는 모두 meat
const cart1: Cart2<Vegitable> = {
    getItem() {
        return {
            v: ''
        }
    }
}

cart1.getItem();