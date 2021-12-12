// closure: fx having access to parent scope even after parent fx is executed

// global scope
let x = 1;

const parentFx = () => {
  // local scope
  let myValue = 2; // private variable due closure

  console.log("Global scope x:", x);
  console.log("Local scope myValue:", myValue);

  const childFx = () => {
    // global scope
    x += 1;
    console.log("Global scope x inc in chilld fx:", x);
    // local parent scope
    myValue += 1;
    console.log("Local scope myValue inc in child fx:", myValue);
  };

  //childFx();
  return childFx;
};

const res = parentFx();
console.log(res);

res();
// second increment
res();
// third increment
res();

// global scope x actual valur
console.log("Global scope x:", x);
//console.log("Local scope myValue:", myValue); => ref error

// IIFE
const privateCounter = (() => {
  let counter = 0;
  console.log("count init:", counter);

  return () => {
    counter += 1;
    console.log("count inc:", counter);
  };
})();

privateCounter();
privateCounter();
privateCounter();

const credits = (num => {
  let credits = num;
  console.log("Initial credits", credits);

  return () => {
    credits -= 1;
    if (credits > 0) {
      console.log("Credits left", credits);
    } else {
      console.log("No credits left");
    }
  };
})(3);

credits();
credits();
credits();
credits();
