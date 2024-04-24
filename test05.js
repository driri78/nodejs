// node js
// 1. 패키지 관리 기능 : npm
// 2. js가 가진 내장모듈 다룬다(string, Math, Date, ...)
// 3. http 모듈을 이용해 서버 만들기

// 모듈
// 1. local modules 내가 만든 모듈
// 2. built-in modules 내장된 모듈
// 3. third party modules 외부 개발자들이 만든 모듈

// local modules 가져오기
// name변수안에는 exports한 값들이 들어있다
const { add, name } = require("./add");
// 전개 연산자(destructuring){name, add}
console.log("hello", name);
console.log("hello", add(20, 10));
