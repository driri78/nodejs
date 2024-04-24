const fs = require("fs");

// 코드를 입력할땐 확장자를 생략하면 안됨
// utf-8
// fs.readFile("./math/math.js", "utf-8", (err, data) => {
//   console.log(data);
// });
// 문자열
fs.readFile("./math/math.js", (err, data) => {
  // console.log(data.toString());
});

fs.readFile("./data/lorem.txt", "utf-8", (err, data) => {
  // console.log(data);
  process.emit("data");
});

fs.readFile("./data/user.json", "utf-8", (err, data) => {
  // console.log(data);
});

process.on("data", () => {
  console.log("data event 발생");
});
