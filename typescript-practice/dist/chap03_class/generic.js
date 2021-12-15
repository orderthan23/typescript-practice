function createPromise(x, timeoute) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x);
        }, timeoute);
    });
}
createPromise('100', 100)
    .then(v => console.log(v));
function createTuple2(v, v2, v3) {
    return [v, v2, v3];
}
const t1 = createTuple2("user1", 1000, "asdasf");
//# sourceMappingURL=generic.js.map