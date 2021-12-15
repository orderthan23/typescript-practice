class D {
    add(v) {
    }
    get() {
        return undefined;
    }
}
class LocalDB {
    constructor(localStorageKey) {
        this.localStorageKey = localStorageKey;
    }
    add(v) {
        localStorage.setItem(this.localStorageKey, v.serialize());
    }
    get() {
        const v = localStorage.getItem(this.localStorageKey);
        return (v) ? JSON.parse(v) : null;
    }
}
const cart1 = {
    getItem() {
        return {
            v: ''
        };
    }
};
cart1.getItem();
//# sourceMappingURL=generic2.js.map