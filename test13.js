const EventEmitter = require("events");
const customEvent = new EventEmitter(); // 이벤트 사용 객체 선언

customEvent.on("event1", () => {
  console.log("event1 발생");
});
customEvent.on("hello", () => {
  console.log("hello 발생");
});
customEvent.once("hey", () => {
  console.log("hey 한번만 발생");
  // 중복처리되면 문제가 발생할 수 있기 때문에 once로 한번만 처리되도록 등록
});

setTimeout(() => {
  customEvent.emit("hello");
}, 3000);
customEvent.emit("event1");
customEvent.emit("hey");
customEvent.emit("hey");
