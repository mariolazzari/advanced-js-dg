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
