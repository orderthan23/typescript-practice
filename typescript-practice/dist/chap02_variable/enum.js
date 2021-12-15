var StarburksGrade;
(function (StarburksGrade) {
    StarburksGrade[StarburksGrade["WELCOME"] = 0] = "WELCOME";
    StarburksGrade[StarburksGrade["GREEN"] = 1] = "GREEN";
    StarburksGrade[StarburksGrade["GOLD"] = 2] = "GOLD";
})(StarburksGrade || (StarburksGrade = {}));
function getDiscount(v) {
    switch (v) {
        case StarburksGrade.WELCOME:
            return 0;
        case StarburksGrade.GREEN:
            return 5;
        case StarburksGrade.GOLD:
            return 10;
    }
}
console.log("getDiscount", getDiscount(StarburksGrade.GREEN));
console.log("green", StarburksGrade);
//# sourceMappingURL=enum.js.map