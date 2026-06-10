const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descripter)

// Math.PI = 50
// console.log(math)

const coffee = {
  name: "Americano",
  price: 550,
  isAvailable: true,

  orderCoffee: function () {
    console.log("Ordered Coffee!");
  },
};

// console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

Object.defineProperty(coffee, "name", {
  //   writable: false,
  enumerable: false,
});
coffee.name = "Milk Coffee";

console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

for (const [key, value] of Object.entries(coffee)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
