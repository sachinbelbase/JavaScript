const randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.getElementById("subt");
const userInput = document.getElementById("guessField");
const PreviousGuesses = document.getElementsByClassName("guesses");
const RemainingGuesses = document.getElementsByClassName("lastResult");
const lowOrhigh = document.getElementsByClassName("lowOrHi");
const startOver = document.getElementsByClassName("resultParas");

const p = document.createElement("p");

let preGuess = [];
let numOfGuesses = 1;
let playGames = true;

if (playGames) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
  });
}

function validateGuess(guess) {
  if (isNaN(validateGuess) || validateGuess >= 100 || validateGuess < 1) {
    console.log("Invalid Input.");
  }
}

function checkGuess(guess) {
  //
}

function displayGuess(guess) {}

function displayMessage(message) {}

function endGame() {}

function newGame() {}
