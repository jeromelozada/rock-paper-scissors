function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    default:
      return "scissors";
  }
}

function getHumanChoice() {
  const humanChoice = prompt("Enter your choice here:");
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

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

  // Play exactly 5 rounds.
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    const roundSummary = playRound(humanSelection, computerSelection);

    console.log(roundSummary);
  }

  return `Score -> You: ${humanScore} | Computer: ${computerScore}`;
}

console.log(playGame());
