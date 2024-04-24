const name = "kim";

console.log(name);

// 명령어 pwd 현재위치를 알려줌

const add = (n, m) => {
  return n + m;
};

const sum = add(3, 4);
console.log(sum);

// 함수 빼내기
// module.exports = { name: name, add: add };
module.exports = { name, add }; // 변수이름과 속성값이 같으면 생략가능
