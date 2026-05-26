//  Immediately Invoked Function Expressions (IIFE)

// Named IIFE
(function coffee() {
  console.log("DB CONNECTED");
})();

// UnNamed IIFE
((name) => {
  console.log(`DB CONNECTED TWO, ${name}`);
})("Sachin");

// Use ; to close IIFE
// We can wrap a function using () which make easier to call it
