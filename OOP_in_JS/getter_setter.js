class User {
  constructor(email, password) {
    ((this.email = email), (this.password = password));
  }
  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}@!!#`.toUpperCase();
  }

  set password(value) {
    this._password = value;
  }
}
const Sachin = new User("susmita@s.ai", "sachin");
console.log(Sachin);
console.log(Sachin.email);
console.log(Sachin.password);

// By using Getter and Setter we have make _password and _email Private
// Only we are accessing mannually it to see whether it affect or not
// If we simple console.log(Sachin) at that time the Getter and Setter are not visable.
