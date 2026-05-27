const useremail = [];

if (useremail) {
  //   console.log("Got the user email");
} else {
  console.log("Dont have user email");
}

// Note
// fasly value:
//->    false, 0, "", -0, BigInt 0n, null, undefined, NaN

// truthy value:
// ->   true, "0", [], 'false', " ",{},function(){},

// if(useremail.length === 0){
//     console.log("array is empty")
// }

const emptyObj = { 1: "One" };
if (Object.keys(emptyObj).length === 0) {
  //   console.log("Object is empty");
} else {
  // console.log("Object is not empty")
}

// Note
false == 0; // true
0 == ""; //true
false == ""; // true

// Nullish Coalescing Operator (??) : null undefined

/* This operator is mainly used to handle null undefined value when we fetch data from database
If a value is null or undefined it check another value after null if that is found
then that will be fetch if not than simply we handle by null
*/

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15;

// console.log(val1);

// Ternary Operator

// condition ? true : false

const iceTeaprice = 100;

iceTeaprice <= 80
  ? console.log("Tea is less than 80")
  : console.log("Tea is Greater than 80");
