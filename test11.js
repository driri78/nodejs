// 전역변수
console.log(__dirname);
console.log(__filename);

// os 내장모듈
const os = require("os");
console.log(os.freemem()); // 남은 메모리
console.log(os.cpus()); // cpu 정보
console.log(os.homedir()); // 저장소
console.log(os.hostname()); // 사용자명
