// Object Literal

const user = {
  username: "Sachin",
  isSignedIn: true,
  loginCount: 8,

  getUserDetails: function () {
    console.log("User Details Accessed from database");
    console.log(`Username: ${this.username}`);
    console.log(this);
  },
};
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)

/*
in above global consloe.log(this) we got {} empty but in browser console we have
multiple window in global (this) so node and browser
global (this) access are different 
*/

// Constructor Function

// In below the new keyword is Constructor Function
// The Constructor Function give a new instance every time

// const PromiseOne = new Promise()
// const date = new Date()

function User(username, isLoggedIn, loginCount) {
  this.username = username;
  this.isLoggedIn = isLoggedIn;
  this.loginCount = loginCount;

  this.greetings = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userOne = new User("Sachin", true, 12);
const userTwo = new User("CodewithSachin", false, 10);
// console.log(userOne.constructor);
// console.log(userTwo instanceof User);
// console.log(userTwo instanceof Object);
console.log(userOne);
console.log(userTwo);

/* new keyword
->  1. when we use new keyword the empty object created
    2. The Constructor Function call due to new keyword
    3. all the arguments are inject into this keyword
    4. we got the values 
*/
