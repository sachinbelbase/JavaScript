// for of loop

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5, 6];

for (const num of arr) {
  //   console.log(num);
}

const greeting = "Hello World!";
for (const greet of greeting) {
  if (greet == " ") {
    // console.log("Space Detected");
    break;
  }
  //   console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map();
map.set("NP", "Nepal");
map.set("IN", "India");
map.set("US", "United State");
map.set("NP", "Nepal");
// console.log(map)

for (const [key, value] of map) {
  console.log(key, ":", value);
}

const myObj = {
  game1: "NFS",
  game2: "Spider Man",
};

// for (const [key, value] of myObj) {
//     console.log(key, ":", value); // It will show error saying object are not iterable

// }
