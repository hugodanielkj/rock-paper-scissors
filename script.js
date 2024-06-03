"use strict";

document.querySelector(".btn").addEventListener("click", runGame);

function displayGameResult(message) {
  document.querySelector(".game-result").textContent = message;
}

function runGame() {
  const userNumber = Number(document.querySelector(".number-input").value);
  let computerNumber = Math.floor(Math.random() * 3);
  console.log(computerNumber);

  if (userNumber === computerNumber) {
    displayGameResult("This game was a draw!");
  } else if (userNumber === 0) {
    if (computerNumber === 1) {
      displayGameResult("Computer wins!");
    } else {
      displayGameResult("You win!");
    }
  } else if (userNumber === 1) {
    if (computerNumber === 0) {
      displayGameResult("You win!");
    } else {
      displayGameResult("Computer wins!");
    }
  } else if (userNumber === 2) {
    if (computerNumber === 0) {
      displayGameResult("Computer wins!");
    } else {
      displayGameResult("You win!");
    }
  }
}
