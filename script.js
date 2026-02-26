//This will get computer choice randomly
function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);

  switch (random) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    default:
      return "scissors";
  }
}

// console.log(getComputerChoice());

//This will get whatever the user input
function getHumanChoice(userChoice) {
  return userChoice;
}

const userChoice = prompt("Enter your choice here:");

// console.log(getHumanChoice(userChoice));

//For tracking player's score
let humanScore = 0;
let computerScore = 0;

// This function is to get choices from function getHumanChoice and getComputerChoice
function playRound(humanChoice, computerChoice) {
  return humanChoice.toLowerCase() + " | " + computerChoice;
}

const humanSelection = getHumanChoice(userChoice);
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
