// doesn't manipulate global scope
const x = "global scope";
const helloWorld = () => "Hello World";

// isolate definitions
(() => {
  const x = "local scope";
  const helloWorld = () => "Hello World";
  console.log(x);
  console.log(helloWorld());
})();

console.log(x);
console.log(helloWorld());

// private scope from closure
const increment = (() => {
  let counter = 0;
  console.log(counter);

  const credits = num => console.log(`I have ${num} credits.`);

  return () => {
    counter++;
    credits(counter);
  };
})();

increment();
increment();

// module pattern
const Score = (() => {
  let count = 0;

  return {
    current: () => {
      return count;
    },

    increment: () => {
      count++;
    },

    reset: () => {
      count = 0;
    },
  };
})();

Score.increment();
console.log(Score.current());
Score.increment();
console.log(Score.current());
Score.reset();
console.log(Score.current());

// revealing pattern
const Game = (() => {
  let count = 0;

  const current = () => `Current score: ${count}`;

  const increment = () => {
    count++;
  };

  const reset = () => {
    count = 0;
  };

  return {
    current,
    increment,
    reset,
  };
})();

Game.increment();
console.log(Game.current());
