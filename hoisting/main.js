// hoisting
console.log("hoisted", h);
// var is hoisted
var h = "hoisted";

// let is not hoisted
let x = 5;
console.log(x);

// function is hoisted
stepOne();

const initApp = () => {
  console.log("init app");
  stepTwo();
};

document.addEventListener("DOMContentLoaded", initApp);

function stepOne() {
  console.log("step one");
}

// const not hoistend
const stepTwo = () => {
  console.log("step two");
};

stepTwo();
