// {add, sub, mul, divd}

const myMath = require("./math");
console.log(myMath);

const sum = myMath.add(30, 40);
console.log(sum);

const sub = myMath.sub(30, 40);
console.log(sub);

// 직접 속성만 꺼내오는법 (destructuring)
const { mul, divd } = require("./math");
console.log(mul(5, 6));
console.log(divd(10, 2));
