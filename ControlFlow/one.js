// if

// if (true) {
// }

// if (false) {

// }

// const isUserloggedIn = true
// const temparature = 41

// if(temparature < 50){
//     console.log("Temparature is Less than 50");
// }

// else{
//     console.log("Temparature is greater than 50");
// }

// >, <, >=, <=, ==, !=, ===, !==,

// const score = 200;
// if (score > 100){
//     const power = "Fly"
//     console.log(`User can: ${power}`)
// }

// console.log(`User can: ${power}`);

/* above outside scope console.log will show error because I defined using const 
which is scope level variable */

// const balance = 1000;

// if(balance > 500) console.log("Balance is greater than 500"),
// console.log("Exectuted");    // We can write without {} and seprate usig , but this is bad practice

// if (balance < 500) {
//   console.log("Less than 500");
// } else if (balance < 750) {
//   console.log("Less than 750");
// }
//  else if (balance < 900) {
//   console.log("Less than 900");
// }

// else{
//     console.log("Greater than 1000")
// }

const isUserloggedIn = true;
const debitCard = true;
const loggedInfromgoogle = false;
const loggedInfromgoogleemail = true;
const guestUser = false;

if (isUserloggedIn && debitCard) {
  console.log("User can do shopping.");
}

if (loggedInfromgoogle || loggedInfromgoogleemail || guestUser) {
  console.log("User is Logged In.");
}
