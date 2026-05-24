function sayMyName() {
  console.log("S");
  console.log("A");
  console.log("C");
  console.log("H");
  console.log("I");
  console.log("N");
}

// sayMyName()

// function addTwoNum(a,b){
//     console.log( a + b)
// }

function addTwoNum(a, b) {
  //  let result = (a + b);
  //  console.log("Sachin");
  //  return result;

  return a + b;
}

const result = addTwoNum(4, 5);
// console.log("Result: ", result)

function loginUsermessage(username = "Ram") {
  // if(username === undefined)
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in `;
}
// console.log(loginUsermessage("Sachin"))
// console.log(loginUsermessage());

function CalculatePrice(val1, val2, ...num1) {
  return num1;
}
// console.log(CalculatePrice(200,400,500,200))

const user = {
  name: "Sachin",
  price: "199",
};

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.name} and Price is ${anyObject.price}`);
}
// handleObject(user);

handleObject({
  name: "Ram",
  price: 399,
});

const myNewArray = [200, 400, 600];

function returnSecondValue(getArray) {
  return getArray;
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([100, 300, 500]));
