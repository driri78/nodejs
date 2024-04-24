const fs = require("fs");
//built-in modules

// fs.rmdir("./newNode", (err) => {
//   console.log(err);
// });

const { rmdir } = fs;

if (fs.existsSync("./newNode1")) {
  rmdir("./newNode1", (err) => {
    console.log(err);
  });
}

for (let i = 0; i < 5; i++) {
  if (fs.existsSync(`./newNode${i}`)) {
    rmdir(`./newNode${i}`, (err) => {
      console.log(err);
    });
  }
}
