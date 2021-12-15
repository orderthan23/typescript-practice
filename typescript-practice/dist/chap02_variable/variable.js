var score1 = 0;
let scroe2 = 200;
const defaultScore = 0;
function outer() {
    if (true) {
        const score = 100;
    }
    for (let i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i);
        }, 100);
    }
}
outer();
//# sourceMappingURL=variable.js.map