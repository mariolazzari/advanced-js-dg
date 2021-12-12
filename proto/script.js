const person = {
  alive: true,
};

const musician = {
  plays: true,
};

// inheritance old way
//musician.__proto__ = person;

// inheritance new way
Object.setPrototypeOf(musician, person);
console.log("set proto:", Object.setPrototypeOf(musician, person));
console.log("musician proto", musician.__proto__);
console.log("check", Object.getPrototypeOf(musician) === musician.__proto__);

console.log(musician.plays);
console.log(musician.alive);

const guitarist = {
  strings: 6,
  __proto__: musician,
};
console.log(guitarist);

// getter and setter
const car = {
  doors: 2,
  seats: "vynil",

  get seatMaterial() {
    return this.seats;
  },

  set seatMaterial(value) {
    this.seats = value;
  },
};

const luxoryCar = {};
Object.setPrototypeOf(luxoryCar, car);
console.log("luxory car pros:", Object.getPrototypeOf(luxoryCar));
luxoryCar.seatMaterial = "leather";
console.log("luxory car", luxoryCar);
console.log("luxory car doors:", luxoryCar.doors);

console.log("forEcah -> only for objects");
Object.keys(luxoryCar).forEach(key => {
  console.log(key);
});

console.log("for in -> for all objects");
for (const key in luxoryCar) {
  console.log(key);
}
