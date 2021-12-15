function createUserAction(u, a) {
    return Object.assign(Object.assign({}, u), a);
}
const u = createUserAction({ name: 'jay' }, { do() { } });
function compare(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x === y ? 0 : x > y ? 1 : -1;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.localeCompare(y);
    }
    throw Error("not Supported type");
}
let v = compare(1, 2);
v = compare("1", "1");
console.log([3, 2, 1].sort(compare));
console.log(['c', 'b', 'a'].sort(compare));
function process(v) {
    if (isAction(v)) {
        v.do();
    }
    else {
        v.name;
    }
}
function isAction(v) {
    return v.do !== undefined;
}
//# sourceMappingURL=intersection-union.js.map