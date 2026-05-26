// Object.create

// Object Literals
const mySym = Symbol("key1");

const JSuser = {
  name: "Sachin",
  "full name": "Sachin Belbase",
  [mySym]: "mykey1",
  age: 18,
  location: "Lamahi, Dang",
  email: "sachinbelbase@123gmail.com",
  isLoggedin: false,
  lastlogginedin: ["Monday", "Tuesday"],
};

// console.log(JSuser.name)
// console.log(JSuser.lastlogginedin);
// console.log(JSuser["full name"]);
// console.log(JSuser[mySym])

JSuser.location = "Kathmandu";
// Object.freeze(JSuser)
JSuser.location = "Koteshwor";
// console.log(JSuser)

JSuser.greeting = function () {
  // console.log("Hello JS user");
};

JSuser.greeting2 = function () {
  // console.log(`Hello JS user, ${this.name}`);
  // console.log("Hello JS user",",", JSuser.name);
};
// console.log(JSuser.greeting());
// console.log(JSuser.greeting2());

// ---------------------------------------------------------------------------------

// Singleton
// Object Constructer

// const tinderUser = {}; // Non singleton

const tinderUser = new Object(); // Singleton
tinderUser.id = "123abc";
tinderUser.name = "Renu";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "sum@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Sachin",
      lastname: "Belbase",
    },
  },
};

// console.log(regularUser.fullname.userfullname);

const obj1 = { 1: "A", 2: "B" };
const obj2 = { 3: "C", 4: "D" };
const obj3 = { 4: "E", 5: "D" };
const obj4 = { 6: "F", 7: "D" };

// const obj3 = {obj1, obj2}
// const obj5 = Object.assign({}, obj1, obj2, obj3, obj4);

const obj5 = {...obj1,...obj2,...obj3}

// console.log(obj5);


const user = [
  {
    id: 1,
    name: "Ram",
  },
  {
    id: 2,
    name: "Shyam",
  }
];

// console.log(user[0].name)
// console.log(tinderUser)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(Object.entries(tinderUser)[0]);

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// -----------------------------------------------------------------------------------

const course = {
    coursename: "JS",
    price: "1000",
    courseinstructer: "Sir"
};

// course.courseinstructer

const {courseinstructer: instructer} = course
const { courseinstructer} = course;
console.log(courseinstructer)
console.log(instructer);

// JSON
// {
//   "name": "Sachin",
//   "coursename" : "JS",
//   "price" : "Free"
// }