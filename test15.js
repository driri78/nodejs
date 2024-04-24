const fs = require("node:fs");
const path = require("node:path");

// fs.readFile(
//   path.join(__dirname, "data", "mydata.txt"),
//   "utf-8",
//   (err, data) => {
//     if (err) throw err; // err 처리하는 코드에게 넘기기
//     if (data) console.log(data);
//   }
// );
const myPath = path.join(__dirname, "data", "lorem.txt");

fs.readFile(myPath, "utf-8", (err, data) => {
  if (err) throw err; // err 처리하는 코드에게 넘기기
  if (data) console.log(data);
});

// javascript는 싱글 쓰레드 => 동시 다발적인 처리를 못함(한번에 한가지씩 처리함)
// but 멀티 쓰레드인것 처럼 동작한다 => 병렬처리된것처럼 보인다(하나씩 순차적으로 처리하지 않는다!!!!!)
// 10번 실행중 9번째가 엄청 긴 실행일 경우(대기시간이 길어짐) 10번째
for (let i = 0; i < 5; i++) {
  fs.appendFile(myPath, "\n세종대왕" + i, (err) => {
    if (err) throw err;
  });
}

fs.readFile(myPath, "utf-8", (err, data) => {
  if (err) throw err;
  if (data) console.log(data);
});

process.on("uncaughtException", (err) => {
  console.log(err);
  console.log("에러가 났습니다!!!!");
});

process.on("exit", () => {
  console.log("프로그램 종료");
});
