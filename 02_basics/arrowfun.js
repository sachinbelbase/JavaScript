const user = {
  username: "Sachin",
  price: 199,

  welcomemesage: function () {
    console.log(`${this.username}, Welcome to website`);
    // console.log(this);
  },
};
// user.welcomemesage()
// user.username = "shyam"
// user.welcomemesage()
// console.log(this);

// function coffee(){
//     let username = "Sachin"
// console.log(this.username)
// }
// coffee()

// const coffee = function(){
//         let username = "Sachin";
//         console.log(this.username);
// }
// coffee();

// ------------------------arrow function-------------------------

// const coffee = ()=> {
//   let username = "Sachin";
//   console.log(this);
// };
// coffee();



// const addTwo = (num1, num2) => {
//   return num1 + num2; // Explicitly return 
// };
// console.log(addTwo(2, 3));



// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2) // Implicitly return

const addTwo = (num1, num2) => ({username : "Sachin"}) // object lai use garna lai paranthis ma wrap garnu parxa

console.log(addTwo(2, 3));