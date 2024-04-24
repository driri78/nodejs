// 전역객체
// 프로그램을 실행중인 상태 : 프로세스

// console.log(process); // 프로세스
console.log("프로그램 실행");

// 이벤트
// 브라우저 단의 이벤트 : click, mousemove, mouseover, mouseenter, ...

process.on("exit", () => {
  console.log("프로그램 종료");
});

let cnt = 0;
const timer = setInterval(() => {
  cnt++;
  if (cnt >= 5) clearInterval(timer);
  process.emit("data"); // 내가 발생한 이벤트
}, 3000);

process.on("data", () => {
  console.log("data event " + cnt);
});
// ctrl + c : 프로그램 종료

// nodejs 를 코딩
// window 시스템, db 시스템 처리
// 이벤트 => data, exit, ... 눈에 보이지 않는 시스템간 상호작용(처리)
