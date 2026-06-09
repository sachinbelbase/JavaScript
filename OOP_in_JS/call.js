function setUsername(username) {
  // Complex Calculation || Complex DB Calls
  this.username = username;
  console.log("called")
}

function createUser(username, email, password) {
  setUsername.call(this, username);
  this.email = email;
  this.password = password;
}
const user = new createUser("ram", "ram@gmail.com", "1234356");
console.log(user);
