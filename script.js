//Using rock, paper and scissors word, instead of numbers

"use strict";

let userScore = 0;
let computerScore = 0;

document.querySelector(".btn").addEventListener("click", runGame);

function stringToNumber(input) {
  switch (input) {
    case "rock":
      return 0;
      break;
    case "paper":
      return 1;
    case "scissors":
      return 2;
    default:
      break;
  }
}

function numberToString(number) {
  switch (number) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      break;
  }
}

function displayGameResult(message) {
  document.querySelector(".game-result").textContent = message;
}

function runGame() {
  let userNumber = stringToNumber(document.querySelector(".input").value);
  let computerNumber = Math.floor(Math.random() * 3);
  let computerChoose = numberToString(computerNumber);

  //Game Logic
  if (userNumber === computerNumber) {
    displayGameResult("This game was a draw!");
  } else if (userNumber === 0) {
    if (computerNumber === 1) {
      displayGameResult("Computer wins!");
      computerScore++;
    } else {
      displayGameResult("You win!");
      userScore++;
    }
  } else if (userNumber === 1) {
    if (computerNumber === 0) {
      displayGameResult("You win!");
      userScore++;
    } else {
      displayGameResult("Computer wins!");
      computerScore++;
    }
  } else if (userNumber === 2) {
    if (computerNumber === 0) {
      displayGameResult("Computer wins!");
      computerScore++;
    } else {
      displayGameResult("You win!");
      userScore++;
    }
  }

  //Computer choose appers in screen
  document.querySelector(".computer-choice").textContent =
    "Computer choose: " + computerChoose;

  //New score established
  document.querySelector(".userScoreValue").textContent = userScore;
  document.querySelector(".computerScoreValue").textContent = computerScore;
}
