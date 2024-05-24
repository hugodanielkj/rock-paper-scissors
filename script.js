// User will choose rock, papper or scissors
// User will click on a buttom
// Alert will show computer's choose and show who won the game

function getUserChoice() {
  let user = prompt("Type 0 to Rock, 1 to Papper, 2 to Scissors");
  return user;
}

//Function copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getComputerChoice(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  let number = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  return number;
  /*if (number == 0) {
    return "Rock";
  }
  else if (number == 1) {
    return "Papper";
  }
  else
    return  "Scissors";*/
}

function winner(getUserChoice, getComputerChoice) {
  if (getUserChoice == getComputerChoice) {
    alert("The game was a draw");
  }
  else if (getUserChoice == 0) {
    if (getComputerChoice == 1) 
      alert("Computer wins");
  }
    else
      alert("You win");

  if (getUserChoice == 1) {
    if (getComputerChoice == 0)
      alert("You win");
    else
      alert("Computer wins")
  }

  if (getUserChoice == 2) {
    if (getComputerChoice == 0)
      alert("Computer wins")
    else
      alert("You win")
  }
}

console.log(getUserChoice())
console.log(getComputerChoice(0, 2))
console.log(winner())