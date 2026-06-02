let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const PreviousGuesses = document.querySelector(".guesses");
const RemainingGuesses = document.querySelector(".lastResult");
const lowOrhigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let preGuess = [];
let numOfGuesses = 1;

let playGames = true;

if (playGames) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Enter input is not a number!");
  } else if (guess > 100) {
    alert("Entered number is greater than 100!");
  } else if (guess < 1) {
    alert("Entered number is less than 1!");
  } else {
    preGuess.push(guess);
    if (guess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Your guess is correct`);
    endGame();
  }
  if (guess < randomNumber) {
    displayMessage(`Your guess is to Low`);
  }
  if (guess > randomNumber) {
    displayMessage(`Your guess is to High`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  PreviousGuesses.innerHTML += `${guess}, `;
  numOfGuesses++;
  RemainingGuesses.innerHTML = `${11 - numOfGuesses}`;
}

function displayMessage(message) {
  lowOrhigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id='newgame'>Start new Game</h2>`;
  startOver.appendChild(p);
  playGames = false;
  newGame();
}

function newGame() {
  const newGamebtn = document.querySelector("#newgame");
  newGamebtn.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    preGuess = [];
    numOfGuesses = 1;
    PreviousGuesses.innerHTML = "";
    RemainingGuesses.innerHTML = `${11 - numOfGuesses}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGames = true;
  });
}
