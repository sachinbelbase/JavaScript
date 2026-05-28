// for each loop

const coding = ["js", "cpp", "python", "ruby", "java"];

/*This loop works in callbacks means we write any function inside it like
(normal or arrow) and doesn't have to give name for function because it
automatically know what we want to access and if we pass parameter inside
function it will know what we need to access. So this forEach loop is widely used */

// Below are the different method for writing forEach loop

// 1.
// coding.forEach(function (value) {
//   console.log(value);
// });

// 2.
// coding.forEach((items) => {
//   console.log(items);
// });

// 3.
//  function printMe(items) {
//   console.log(items);
// }
// coding.forEach(printMe); // Only give refrence not execute it

// 4.
// coding.forEach( (item, index, array)=> {
//     console.log(item, index, array);
// } )

const myCoding = [
  {
    languageName: "JavaScript",
    languageFilename: "js",
  },
  {
    languageName: "Java",
    languageFilename: "java",
  },
  {
    languageName: "Python",
    languageFilename: "py",
  },
];

myCoding.forEach((obj) => {
  console.log(obj.languageFilename);
});

/* Note: forEach loop doesnot return anything if we mannuly return
the data also the loop remain undefined */

// const coding = ["js", "cpp", "python", "ruby", "java"];

// const values = coding.forEach((items) => {
//   console.log(items);
//   return items;
// });
// console.log(values)
