// compose
const add2 = x => x + 2;
const subtract = x => x - 1;
const multiplyBy5 = x => x * 5;

const res = multiplyBy5(subtract(add2(4)));
console.log(res);
