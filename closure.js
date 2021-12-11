// lexical scope: how vars are resolved  in nested fx

// global scope
let x = 1;

const parentFx = () => {
  // local scope
  let myValue = 2;

  console.log("Global scope x:", x);
};
