const PromiseOne = new Promise(function (resolve, reject) {
  // Do a async task
  // Data Base Calls, Cryptography, network

  setTimeout(function () {
     console.log("Async Task Complete.");
    resolve();
  }, 1000);
});

PromiseOne.then(function () {
     console.log("Promise consumed.");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
     console.log("Async task 2 Complete.");
    resolve();
  }, 1000);
}).then(function () {
    console.log("Promise 2 consumed.");
});

const PromiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Sachin", email: "learwithsachin@gmail.com" });
  }, 1000);
});

PromiseThree.then(function (user) {
    console.log(user);
});

/*
 Resolve Data using .then and Handing error using .catch and use .finally for execute code
 either promise resolve or reject
*/
const PromiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    error = false;
    if (!error) {
      resolve({ username: "Sachin Dada", password: "12345" });
    }
    reject("ERROR: SOMETHING WENT WRONG!");
  }, 1000);
});
PromiseFour.then(function (user) {
    console.log(user);
  return user.username;
})
  .then(function (username) {
    console.log(username);
  })

  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("The Promise either resolved or reject.");
  });

/* 
 Using async await function to handle promise
 we have to use try catch block to display data and handle errors
*/
const PromiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    error = true;
    if (!error) {
      resolve({ username: "Java Script", password: "12345" });
    }
    reject("ERROR: JS WENT WRONG!");
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await PromiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// now let's fetch some data form api

// async function getAllData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json()
//     console.log(data);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }
// getAllData();

fetch("https://api.github.com/users/sachinbelbase")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log("E:", error);
  });
