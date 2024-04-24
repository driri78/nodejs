const fs = require("fs");
const path = require("path");
// window : /(영문), ￦(한글)
// unix, mac : \
// path : 통일화 시켜준다 => \
// 경로를 이쁘게 만들어 줄때 사용하는 내장모듈

// 코드를 입력할땐 확장자를 생략하면 안됨
// utf-8
// fs.readFile("./math/math.js", "utf-8", (err, data) => {
//   console.log(data);
// });

// 현재 폴더 정보
// 전역변수로 노드가 가지고 있다 : __filename, __dirname(절대경로);

// .math/math.js로 만들어줌 => /(슬래쉬)오타나도 path가 알아서 지워준다
fs.readFile(path.join(__dirname, "math", "math.js"), (err, data) => {
  console.log(data.toString());
});

const { join } = require("path");
//C:\kdw\day10_0424/data/lorem.txt
console.log("절대경로", __dirname); // C:\kdw\day10_0424
fs.readFile(join(__dirname, "data", "lorem.txt"), "utf-8", (err, data) => {
  console.log(data);
});

// C:\kdw\day10_0424/data/user.json
fs.readFile(join(__dirname, "/data/user.json"), "utf-8", (err, data) => {
  console.log(data);
});
