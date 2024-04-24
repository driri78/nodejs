const fs = require("fs");
// path :
const path = require("path");

// 코드를 입력할땐 확장자를 생략하면 안됨
// utf-8
// fs.readFile("./math/math.js", "utf-8", (err, data) => {
//   console.log(data);
// });
// 문자열
fs.readFile("./math/math.js", (err, data) => {
  console.log(data.toString());
});

fs.readFile("./data/lorem.txt", (err, data) => {
  console.log(data.toString());
});
