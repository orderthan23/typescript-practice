var StarburklsGrade;
(function (StarburklsGrade) {
    StarburklsGrade[StarburklsGrade["WELCOME"] = 0] = "WELCOME";
    StarburklsGrade[StarburklsGrade["GREEN"] = 1] = "GREEN";
    StarburklsGrade[StarburklsGrade["GOLD"] = 2] = "GOLD";
})(StarburklsGrade || (StarburklsGrade = {}));
function getDiscount(v) {
    switch (v) {
        case StarburklsGrade.WELCOME:
            return 0;
        case StarburklsGrade.GREEN:
            return 5;
        case StarburklsGrade.GOLD:
            return 10;
    }
}
console.log(getDiscount(StarburklsGrade.GREEN));
console.log("green", StarburklsGrade);
//# sourceMappingURL=enum.js.map