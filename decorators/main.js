// decorator: closure to count function calls
const callCounter = fn => {
  // closure
  let counter = 0;

  return (...args) => {
    counter++;
    console.log(`${fn.name} call: ${counter}`);
    return fn(...args);
  };
};

// sum of all numbers
let sum = (...args) => {
  return [...args].reduce((acc, curr) => acc + curr);
};

// reassing sum: decorator pattern
sum = callCounter(sum);
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4, 5, 6));

// check valid data
const countParams = fn => {
  return (...params) => {
    if (params.length !== fn.length) {
      throw new Error(`Invalid number of parameters for function ${fn.name}`);
    }
  };
};

// check if params are integers
const checkIntegeres = fn => {
  const name = fn.name;

  return (...params) => {
    params.forEach(param => {
      if (typeof param !== "number" || Number.isInteger(param) === false) {
        throw new TypeError(`Invalid parameter type for function ${name}`);
      }
    });
  };
};

// let to reassign to decorator
let rectangleArea = (width, height) => {
  return width * height;
};

rectangleArea = countParams(rectangleArea);
rectangleArea = checkIntegeres(rectangleArea);
rectangleArea(1, 2);

try {
  rectangleArea(1, 2, 3);
} catch (error) {
  console.log(error.message);
}

try {
  rectangleArea(1, "b");
} catch (error) {
  console.log(error.message);
}

// async decorator
let requestData = async url => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

// response time decorator
const responseTime = fn => {
  return async url => {
    console.time(fn.name);
    const data = await fn(url);
    console.timeEnd(fn.name);
    return data;
  };
};

requestData = responseTime(requestData);

const getData = async () => {
  const data = await requestData("https://jsonplaceholder.typicode.com/todos");
  console.log(data);
};

getData();
