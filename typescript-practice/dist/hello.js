"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 타입스크립트 시작하기
//tsc hello.ts <- es5 문법으로 컴파일
//tsc hello.ts --target es6 <- es6 문법으로 컴파일
//tsc hello.ts --lib es5,es2015.promise, es2015.iterable, dom <-- es6에 관한 문법들을 예외 라이브러리로 등록
//tsc.hello.ts --target es6 --lib es2015, dom --module commonjs <-- 실행모듈을 commonjs로 설정
var hello = "hello";
var hello2 = "hello";
// @ts-ignore
var timeoutPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("1 sec");
    }, 1000);
});
timeoutPromise.then(console.log);
var util_1 = require("./util");
var value = (0, util_1.default)(1, 2);
console.log(value);
