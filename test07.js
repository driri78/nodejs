const fs = require("fs");
// file system과 관련하여 정의
// node가 깔려있으면 정의됨 => node modules

// fs.mkdir("./newNode1", (err) => {
//   console.log(err);
// });

// const { mkdir } = require("fs");

// mkdir("./newNode2", (err) => {
//   console.log(err);
// });

// 같은 이름의 폴더가 있는지 검사
if (!fs.existsSync("./newNode4")) {
  fs.mkdir("./newNode4", (err) => {
    console.log(err);
  });
}
