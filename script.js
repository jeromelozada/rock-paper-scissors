//This will get computer choice randomly
function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);

  switch (random) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    default:
      return "Scissors";
  }
}

console.log(getComputerChoice());

//This will get whatever the user input
function getHumanChoice(userChoice) {
  return userChoice;
}

const userChoice = prompt("Enter your choice here:");

console.log(getHumanChoice(userChoice));
