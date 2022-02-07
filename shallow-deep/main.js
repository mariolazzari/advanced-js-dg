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
