// Currying brakes function with multiple params in multiple functions with one param
let buildSandwich = ingredient1 => {
  return ingredient2 => {
    return ingredient3 => {
      return `${ingredient1} ${ingredient2} ${ingredient3}`;
    };
  };
};

let sandwich = buildSandwich("bread")("peanut butter")("jelly");
console.log("Sandwich:", sandwich);

// shortcut
buildSandwich = ingredient1 => ingredient2 => ingredient3 =>
  `${ingredient1} ${ingredient2} ${ingredient3}`;

sandwich = buildSandwich("bread")("peanut butter")("jelly");
console.log("Sandwich:", sandwich);

const multiply = (a, b) => a * b;
const curriedMultiply = a => b => a * b;
console.log("2 * 3:", multiply(2, 3));
console.log("2:", curriedMultiply(2));
console.log("2 * 3:", curriedMultiply(2)(3));

// Partially applied
const multiplyBy10 = curriedMultiply(10);
console.log("2 times 10:", multiplyBy10(2));

// update dom element
const updateText = id => text =>
  (document.querySelector(`#${id}`).textContent = text);
const header = updateText("header");
header("Updated header");

// composition
const addCustomer =
  fn =>
  (...args) => {
    console.log("Saving customer info...");
    return fn(...args);
  };

const processOrder =
  fn =>
  (...args) => {
    console.log(`Processing order ${args[0]}...`);
    return fn(...args);
  };

let completeOrder = (...args) => {
  console.log("Order complete:", args.toString());
};

completeOrder = processOrder(completeOrder);
console.log(completeOrder);
completeOrder = addCustomer(completeOrder);
completeOrder(10000);
console.log(completeOrder);

const curry = fn => {
  console.log(fn.length);

  return (curried = (...args) => {
    console.log(args.length);

    if (fn.length !== args.length) {
      return curried.bind(null, ...args);
    }
    return fn(...args);
  });
};

const total = (a, b, c) => a + b + c;
const curryTotal = curry(total);
console.log("total:", total(1, 2, 3));
