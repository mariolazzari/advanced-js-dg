// var
var x = 1;
var x = 2; // does not throw an error
console.log("var:", x);

// let
let y = 1;
//let y = 2; // throws an error
y = 2; // does not throw an error
console.log("let:", y);

// const
const z = 1;
//x = 2; // throws an error
console.log("const:", z);

// global scope
var globalVar = 1;
let globalLet = 1;
const globalConst = 1;

// local scope
{
  let x = 1;
  console.log("local scope:", x);
}

function myFunc() {
  const z = 1;
  console.log("local scope:", z);
  //console.log(x); // throws an error

  {
    let x = 1;
    console.log("local fx scope:", x);
  }
}

myFunc();

console.log("");

// var does not have block scope
// let and const have block scope
var varOne = 1;
let letTwo = 2;
const constThree = 3;

console.log("global varOne:", varOne);
console.log("global letTwo:", letTwo);
console.log("global constThree:", constThree);

function varScope() {
  var varOne = 11;
  let letTwo = 22;
  const constThree = 33;

  {
    var varOne = 111; // var is function scoped
    const constThree = 333; // const is block scoped
    console.log("block varOne:", varOne);
    console.log("block letTwo:", letTwo);
    console.log("block constThree:", constThree);
  }

  console.log("fx varOne:", varOne);
  console.log("fx letTwo:", letTwo);
  console.log("fx constThree:", constThree);
}

varScope();
