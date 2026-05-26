const myArr = [0, 1, 2, 3, 4, 5];
const mySuperHeros = ["Flash", "Thor", "ironMan", "Wonder_Women"];

// console.log(myArr)

//Array Methods

myArr.push(6);
// console.log(myArr)

myArr.pop();
// console.log(myArr);

myArr.unshift(0);
// console.log(myArr);

myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(4));

const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);

//  Slice , Splice

// console.log("A", myArr);
const myNewArray1 = myArr.slice(1, 3);
// console.log(myNewArray1);
// console.log("B", myArr);

const myNewArray2 = myArr.splice(1, 3);
// console.log("C", myArr);
// console.log(myNewArray2);

const marvel_Heros = ["Thor", "SpiderMan", "IronMan"];
const dc_Heros = ["SuperMan", "Flash", "Batman"];

// marvel_Heros.push(dc_Heros);
// console.log(marvel_Heros);

// mixed_heros = marvel_Heros.concat(dc_Heros);
// console.log(mixed_heros);

//Sprat Operator
// const all_Heros =[...dc_Heros,...marvel_Heros]
// console.log(all_Heros)

const anotherArray = [1, 2, 3, [4, 5, 6, [7, [6, 7, [4, 5]]]]];

const real_another_array = anotherArray.flat(Infinity);

// console.log(real_another_array)

console.log(Array.isArray("Sachin"));
console.log(Array.from("Sunita"));
// console.log(Array.from({name:"Sachin"})) //Returns Empty Array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
