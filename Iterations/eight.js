// reduce

const myNums = [1, 2, 3];
const initialValue = 0;

// myTotal = myNums.reduce(function (preval, curval){
//     console.log(`Previous Value:${preval} and current value : ${curval}`)
//   return preval + curval;
// }, initialValue);

// myTotal = myNums.reduce((preval, curval) => {
//     console.log(`Previous Value:${preval} and current value : ${curval}`)
//   return preval + curval;
// }, initialValue);

myTotal = myNums.reduce((preval, curval) => preval + curval, initialValue);

// console.log(myTotal);

const shoppingCart = [
  { itemname: "JS", price: 2999 },

  { itemname: "Python", price: 3999 },

  { itemname: "Mobile Development", price: 5999 },

  { itemname: "Web Development", price: 4999 },
];

// const totalPrice = shoppingCart.reduce(
//   (preprice, curprice) => preprice + curprice.price,
//   0,
// );
// console.log(totalPrice);

const totalPrice = shoppingCart.reduce((preprice, curprice) => {
  maxPricetoPay = preprice + curprice.price;
  console.log(
    `Previous Price:${preprice} and Current Price : ${curprice.price} and Max Price: ${maxPricetoPay}`,
  );
  return maxPricetoPay;
}, 0);
console.log(totalPrice);
