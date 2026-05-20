let name = "Sachin"
let age = 18
let islogin = true


// number => 2 to power 52
// bigint => for large number
// string => "assembly of characters"
//boolean => true or false
// null => standalone value (type = object)
// undefined => when value is not define
// symbol => uniqeness

// object

// console.log(typeof undefined);
// console.log(typeof null);

// Primitive

// 7 types: String, Number, float, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.5
const isLoggedin = false
const outsidetemp = null
let userEmail;

const id = Symbol  ('123')
const anotherid = Symbol ('123')
// console.log(id == anotherid);
// const bigNumber = 546546546456578775763626465765678475754777576536n
// console.log(typeof(bigNumber));

// Reference Type / Non primitive

// Arrays, Objects, Functions

const heros = ["Ram", "Shyam", "Hari"];
let myObj = {
    name : "Sachin",
    age : 22,

}

const myfunction = function(){
    console.log("Hello World");
}


// --------------------------------------------------------------------------------------

// Memory:
// Stack(primitive), Heap(Non primitive)
// in stack we store copy so changing value doesnot affect original
// but on heap it takes reference so changing in value affect original value


let myname = "Sachin";
let anothername = myname
anothername = "Sunita"

// console.log(myname);
// console.log(anothername)

let userOne = {
email : "google.com",
name : "Ramu"
}
let usertwo = userOne
usertwo.email= "sachin@.com";
console.log(userOne)
console.log(usertwo);
