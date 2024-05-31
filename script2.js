"use strict";

document.querySelector(".btn").addEventListener("click", runGame);

function runGame() {
  //COrrect userNumber
  const userNumber = document.querySelector(".number-input");
  const computerNumber = Math.trunc(Math.random() * 2) + 1;
  //Correct transformation of game result
  let gameResultText = document.querySelector(".game-result").textContent;

  if (userNumber === computerNumber) {
    gameResultText = "The game was a draw";
    alert("The game was a draw");
  } else if (userNumber === 0) {
    if (computer === 1) {
      gameResultText = "Computer wins";
      alert("Computer wins");
    } else {
      gameResultText = "You win";
      alert("You win");
    }
  }
  if (userNumber === 1) {
    if (computerNumber === 0) {
      gameResultText = "You win";
      alert("You win");
    } else {
      gameResultText = "Computer wins";
      alert("Computer wins");
    }
  }
  if (userNumber === 2) {
    if (computerNumber === 0) {
      gameResultText = "Computer wins";
      alert("Computer wins");
    } else {
      gameResultText = "You win";
      alert("You win");
    }
  }
}

//The result of the game on display
