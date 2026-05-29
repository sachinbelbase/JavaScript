const totalPrice = shoppingCart.reduce(
  (preprice, curprice) => preprice + curprice.price,
  0,
);
console.log(totalPrice);