// var c = 300;
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // console.log("Inner:", a);
}
// let a = 15;
// const b = 25;
// var c = 35;

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Sachin";
  function two() {
    const website = "Youtube";
    // console.log(username);
    // console.log(website);
  }
  two();
}
one();

if (true) {
  const username = "Sachin ";
  if (username === "Sachin") {
    const website = "youtube";
    console.log(username + website);
  }
  // console.log(website)
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5));
function addone(num) {
  return num + 1;
}

const addTwo = function (num) {
  return num + 1;
};
console.log(addTwo(6));
