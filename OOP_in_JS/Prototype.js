let myHeros = ["thor", "ironman"];

let herosPower = {
  thor: "Hammer",
  ironman: "Suit",

  getThorPower: function () {
    console.log(`Thor power is ${this.thor}`);
  },
};

Object.prototype.sachin = function () {
  console.log(`Sachin is present in every Object`);
};
// herosPower.sachin();
// myHeros.sachin();

Array.prototype.saySachin = function () {
  console.log(`Sachin says hello `);
};
// herosPower.saySachin()
// myHeros.saySachin();

// Inheritance
const User = {
  name: "Ram",
  email: "Ram@google.com",
};
const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fulltime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let myName = "Sachin     ";
let myChannel = "Code     ";

String.prototype.trueLength = function () {
  console.log(this);
  console.log(`The true length is : ${this.trim().length}`);
};
myName.trueLength();
myChannel.trueLength();
"Susmita".trueLength();
