//for in loop

const myObj = {
  JS: "JavaScript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift by Apple",
};

for (const key in myObj) {
  //   console.log(key);
}

// console.log("\n");

for (const key in myObj) {
  //   console.log(myObj[key]);
}

// console.log("\n");

for (const key in myObj) {
  //   console.log(`${key} full form is ${myObj[key]}`);
}

const Programming = ["JS", "Cpp", "Python", "Java"];
for (const key in Programming) {
  // console.log(`${key} value is ${Programming[key]}`)
}

// const map = new Map();
// map.set("NP", "Nepal");
// map.set("IN", "India");
// map.set("US", "United State");
// map.set("NP", "Nepal");

// for (const key in map) {
//     console.log(map[key]);
// }

// Simply we use forof loop for array and forin loop for object
