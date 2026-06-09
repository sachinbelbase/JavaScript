// We used these after ES6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   changeUserName(){
//     return `${this.username.toUpperCase()}`
//   }
// }

// const user = new User("ram", "Ram@google.com", "123D");
// console.log(user.encryptPassword());
// console.log(user.changeUserName());

// console.log(user);

// behind the scene
function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeUserName = function () {
  return `${this.username.toUpperCase()}`;
};

const user = new User("hari", "hari@microsoft.com", "123DS");
console.log(user.encryptPassword());
console.log(user.changeUserName());
