class User {
  constructor(username) {
    this.username = username;
  }

  loggedMe() {
    console.log(`User ${this.username} is logged: `);
  }

  static createID() {
    return "123";
  }
}

const user = new User("Ram");
user.loggedMe();
// console.log(user.createID())

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}
const teacher = new Teacher("Rusna", "Rusna@teacher.com");
teacher.loggedMe();
// console.log(teacher instanceof User)
// console.log(teacher.createID());
