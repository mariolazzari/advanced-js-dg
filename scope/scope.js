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
