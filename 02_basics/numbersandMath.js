const score = 100;

const balance = new Number(100);

// console.log(score)
// console.log(balance)
// console.log(balance.toString().length)
// console.log(balance.toFixed(1));

const othernumber = 123.543;
// console.log(othernumber.toPrecision(4))

const hundreds = 100000;
// console.log(hundreds.toLocaleString('en-IN')) // for india value we use IN





// _________________________________MATHS_________________________________________________

// console.log(Math)
// console.log(Math.abs(-4));
// console.log(Math.abs(4));
// console.log(Math.round(5.3));
// console.log(Math.round(5.6));
// console.log(Math.ceil(6.3));
// console.log(Math.floor(5.3));
// console.log(Math.min(5,3,1,9,3,5));
// console.log(Math.max(5, 3, 1, 9, 3, 5));

// console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;

// console.log(Math.floor(Math.random() * (min)))
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// SO basically in line 34 we have do first math.random give a random value where math.floor give
//  floor value and if we multiply math.random it will give max 20 we can clearly see line line 34
