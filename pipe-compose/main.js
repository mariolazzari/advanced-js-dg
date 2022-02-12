// compose
const add2 = x => x + 2;
const subtract = x => x - 1;
const multiplyBy5 = x => x * 5;

let res = multiplyBy5(subtract(add2(4)));
console.log(res);

// right to left
const compose =
  (...fns) =>
  val =>
    fns.reduceRight((acc, fn) => fn(acc), val);

res = compose(multiplyBy5, subtract, add2)(4);
console.log(res);

// left to right
const pipe =
  (...fns) =>
  val =>
    fns.reduce((acc, fn) => fn(acc), val);

res = pipe(add2, subtract, multiplyBy5)(4);
console.log(res);
