const EventEmitter = require("events");
const customEvent = new EventEmitter(); // 이벤트 사용 객체 선언

// removeListener 콜백을 별도 함수로 지정해야 한다
const event1Handle = () => {
  console.log("event1 발생");
};
customEvent.addListener("event1", event1Handle);
customEvent.removeListener("event1", event1Handle);
const helloHandle = () => {
  console.log("hello 발생");
};
customEvent.addListener("hello", helloHandle);
customEvent.removeListener("hello", helloHandle);

customEvent.once("hey", () => {
  console.log("hey 발생");
  // 중복처리되면 문제가 발생할 수 있기 때문에 once로 한번만 처리되도록 등록
});

setTimeout(() => {
  customEvent.emit("hello");
}, 3000);
customEvent.emit("event1");
customEvent.emit("hey");
customEvent.emit("hey"); // 한번만 이벤트 발생
