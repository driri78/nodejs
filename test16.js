const fs = require("node:fs");
const path = require("node:path");
// event loop
// node가 처리하는 방식

// 동기식(싱글 쓰레드)
// fetch(url)
// .then(프로미스(객체) // 순차적 처리를 위해 프로미스처리
// .then()

// 비동기식 : 완료를 보증 => promise, async, await 순차적 처리를 하기위해서 비동기식 처리가 필요하다
// 멀티쓰레드 인것 처럼 보임 = 병렬처리 처럼 보임(빠른처리를 위해)
const myPath = path.join(__dirname, "data", "lorem.txt");
console.log("1. 맨처음");
// callstack 메모리

fs.readFile(myPath, "utf-8", (err, data) => {
  if (err) throw err; // err 처리하는 코드에게 넘기기
  if (data) console.log(data);
  console.log("2. 두번째");
});
console.log("3. 세번째");

fs.appendFile(myPath, "\n세종대왕", (err) => {
  if (err) throw err;
  console.log("4. 네번째");
});
console.log("5. 다섯번째");
fs.readFile(myPath, "utf-8", (err, data) => {
  if (err) throw err;
  if (data) console.log(data);
});

process.on("uncaughtException", (err) => {
  console.log(err);
  console.log("에러가 났습니다!!!!");
});
console.log("6. 여섯번째");

process.on("exit", () => {
  console.log("프로그램 종료");
});
