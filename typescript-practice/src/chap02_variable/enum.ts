//열거형 타입

//정의하지 않을 시 인덱스로 값 정의 값을 할당해주면 고정값으로 유지됨(문자열 대입도 가능)
enum StarburksGrade {
    WELCOME = 0,
    GREEN = 1,
    GOLD =2,
}

function getDiscount(v: StarburksGrade): number {
    switch (v) {
        case StarburksGrade.WELCOME:
            return 0;
        case StarburksGrade.GREEN:
            return 5;
        case StarburksGrade.GOLD:
            return 10;
    }
}

console.log("getDiscount",getDiscount(StarburksGrade.GREEN));
console.log("green", StarburksGrade);