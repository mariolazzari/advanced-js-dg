// 1) same I/O always
const add = (x, y) => x + y;
console.log(add(1, 2));
console.log(add(1, 2));

const fullName = (first, last) => `${first} ${last}`;
console.log(fullName("John", "Doe"));

// at least 1 parameter (or it woud be a constant)
const firstName = () => "John"; // const firstName = "John";

// 2) No side effects: no db, api call, console log, storage, Dom manipulation
const z = 5;
const add2 = (x, y) => x + y + z;
console.log(add2(1, 2));

// 3) NO data mutation

// impure ex1
let x = 1;
console.log("x", x);

const increment = () => x++;
console.log("Inctrement", increment());
console.log("x", x);

// impure ex2
const myArray = [1, 2, 3];
console.log("myArray", myArray);

const addToArray = (arr, item) => arr.push(item);
console.log("addToArray", addToArray(myArray, 4));
console.log("myArray", myArray);

// ex1 pure
const pureIncrement = x => x + 1;
console.log("pureIncrement", pureIncrement(x));
console.log("x", x);

// ex2 pure
const pureAddToArray = (arr, item) => [...arr, item];
console.log("pureAddToArray", pureAddToArray(myArray, 5));
console.log("myArray", myArray);

// NB: shallow copy only... deep copy is needed for objects

// 4) always return a value

// filter is a pure fx
const numTo5 = [1, 2, 3, 4, 5];
const oddTo5 = numTo5.filter(n => n % 2);
console.log("odds to 5", oddTo5);

// map is a pure fx
const doubled = numTo5.map(n => n * 2);
console.log("doubled", doubled);

// reduce is a pure fx
const sum = numTo5.reduce((acc, cur) => acc + cur);
console.log("sum", sum);
console.log(numTo5);
