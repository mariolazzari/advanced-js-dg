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

// 2nd parameter
const divideBy = (divisor, num) => num / divisor;

res = pipe(add2, subtract, multiplyBy5, x => divideBy(2, x))(5);
console.log(res);

// curry parameter
const divBy = divisor => num => num / divisor;
// partialy applied fx
const divBy2 = divBy(2);

res = pipe(add2, subtract, multiplyBy5, divBy2)(5);
console.log(res);

// not only math...
const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, mollitia totam veniam iure tempore molestiae nemo esse ex sint labore animi adipisci consectetur voluptatum cumque cupiditate, non deleniti, rem consequatur voluptatem. Ad, eius consequatur maxime cum cumque alias sunt quis minus, atque aut fuga, enim expedita totam ipsum qui eos laboriosam ratione magnam placeat pariatur exercitationem aspernatur ab. Eveniet, at aspernatur assumenda officia est non delectus cupiditate nobis sint excepturi facere alias tempora saepe architecto officiis! Perspiciatis dolorum, eaque in molestiae quidem cupiditate accusamus eveniet corrupti sint excepturi blanditiis, ut sed possimus? Saepe ratione corporis beatae sunt exercitationem, quasi perspiciatis.";

const splitOnSpace = string => string.split(" ");
const count = arr => arr.length;

const wordCount = pipe(splitOnSpace, count);
res = wordCount(lorem);
console.log(res);
res = wordCount("Ciao ciao a tutti");
console.log(res);

// combine
const pal1 = "taco cat";
const pal2 = "UFO tofu";
const pal3 = "Mario";

const split = str => str.split("");
const join = arr => arr.join("");
const lower = str => str.toLowerCase();
const reverse = str => str.reverse();

const fwd = pipe(splitOnSpace, join, lower);
const rev = pipe(fwd, split, reverse, join);

console.log(fwd(pal1) === rev(pal1));
console.log(fwd(pal2) === rev(pal2));
console.log(fwd(pal3) === rev(pal3));

// Copy / clone
const scoreObj = { home: 0, away: 0 };

const shallowClone = obj => (Array.isArray(obj) ? [...obj] : { ...obj });
