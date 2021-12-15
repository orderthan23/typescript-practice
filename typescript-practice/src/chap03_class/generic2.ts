//클래스에 제네릭 선언

class LocalDB<T> {
    constructor(private localStorageKey: string) {
    }

    add(v : T) {
        localStorage.setItem(this.localStorageKey, JSON.stringify(v));
    }

    get():T {
        const v = localStorage.getItem(this.localStorageKey);
        return (v) ? JSON.parse(v) : null;
    }
}

interface User {
    name: string
}
const userDb = new LocalDB<User>('user');
userDb.add({name: "jay"});
const userA = userDb.get();
userA.name;