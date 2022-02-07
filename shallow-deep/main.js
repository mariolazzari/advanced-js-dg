// primitives pass value
let x = 2;
let y = x;
y++;

console.log("x", x);
console.log("y", y);

// structural pass references
let xArray = [1, 2, 3];
let yArray = xArray;
yArray.push(4);
console.log("xArray", xArray);
console.log("yArray", yArray);

// Primitives are immutable
let myName = "Mario";
myName[3] = "c";
console.log("name", name);

// Primitives reassign works
myName = "Maria";
console.log(myName);

// sctrutural contains mutable data
yArray[0] = 9;
console.log(yArray);
console.log(xArray);

// const doesn't make array immutable

// shallow copy vs deep copy (clones)

// shallow copy with spread operator
let zArray = [...yArray, 10];
console.log("zArray", zArray);
console.log("yArray", yArray);

console.log("xArray === yArray", xArray === yArray);
console.log("zArray === yArray", zArray === yArray);

// shallow copy with object assing
const tArray = Object.assign([], zArray);
console.log("tArray", tArray);
console.log("tArray === zArray", tArray === zArray);
tArray.push(11);
console.log("tArray", tArray);
console.log("zArray", zArray);

// but nested objects...
yArray.push([8, 9, 10]);
const vArray = [...yArray];
console.log("vArray", vArray);
console.log("yArray", yArray);
vArray[4].push(5);
console.log("vArray", vArray);
console.log("yArray", yArray);

// nested structures share references

// freeze object
const scoreObj = {
  first: "44",
  second: "12",
  third: {
    a: 1,
    b: 2,
  },
};

// shallow freeze
Object.freeze(scoreObj);
scoreObj.third.a = 9;
console.log(scoreObj); // mutated!

// Deep copy
