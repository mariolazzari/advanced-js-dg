function countToTen(num = 1) {
  while (num <= 10) {
    console.log(num);
    num++;
  }
}

function recurToTen(num = 1) {
  if (num > 10) {
    return;
  }
  console.log(num);
  recurToTen(num + 1);
}

countToTen();
recurToTen();

function fibonacci(num, array = [0, 1]) {
  while (num > 2) {
    const [nextToLast, last] = array.slice(-2);
    array.push(last + nextToLast);
    num -= 1;
  }
  return array;
}

function fib(num, array = [0, 1]) {
  if (num <= 2) {
    return array;
  }
  const [nextToLast, last] = array.slice(-2);

  return fib(num - 1, [...array, nextToLast + last]);
}

console.log(fibonacci(12));
console.log(fib(12));

const fibonacciPos = pos => {
  while (pos <= 1) {
    return pos;
  }

  const seq = [0, 1];
  for (let i = 2; i <= pos; i++) {
    const [nextToLast, last] = seq.slice(-2);
    seq.push(last + nextToLast);
  }

  return seq[pos];
};

const fibPos = pos => {
  if (pos < 2) {
    return pos;
  }
  return fibPos(pos - 1) + fibPos(pos - 2);
};

console.log(fibonacciPos(8));
console.log(fibPos(8));
