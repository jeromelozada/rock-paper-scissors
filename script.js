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
function getHumanChoice() {
  const userChoice = prompt("Enter your choice here:");
  return userChoice;
}

// console.log(getHumanChoice(userChoice));

function playGame() {
  //For tracking player's score
  let humanScore = 0;
  let computerScore = 0;

  // This function is to get choices from function getHumanChoice and getComputerChoice
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    let result;

    if (humanChoice === computerChoice) {
      result = "Draw!";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore += 1;
      result = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
      computerScore += 1;
      result = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    return `You: ${humanChoice} | Computer: ${computerChoice} | Result: ${result}`;
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    // ✅ pass the actual variables you created
    const roundSummary = playRound(humanSelection, computerSelection);

    console.log(roundSummary);
  }
  // ✅ return something so playGame() doesn't print undefined
  return `Score -> You: ${humanScore} | Computer: ${computerScore}`;
}

console.log(playGame());
