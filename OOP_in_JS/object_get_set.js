const User = {
  _email: "deep@ai.com",
  _password: "passWord",

  get email() {
    return this._email.toLocaleUpperCase();
  },
  set email(value) {
    this._email = value;
  },
  get password() {
    return this._password.toLocaleUpperCase();
  },
  set password(value) {
    this._password = value;
  },
};

const Sachin = Object.create(User);

console.log(User);
console.log(Sachin.email);
console.log(Sachin.password);
