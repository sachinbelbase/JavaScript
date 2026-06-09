class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME IS: ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`New Course added by ${this.username}`);
  }
}

const teacher = new Teacher("Sita", "Sita@teacher.com", "1234");
const user = new User("Susmita");
teacher.addCourse();
teacher.logMe();
user.logMe();

console.log(teacher instanceof User);
console.log(user instanceof Teacher);
