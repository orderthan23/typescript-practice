var score1 = 0;
let scroe2 = 200;
const defaultScore = 0;
function outer() {
    if (true) {
        var score = 0;
    }
    for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i);
        }, 100);
    }
    console.log(score);
}
outer();
//# sourceMappingURL=variable.js.map