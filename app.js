const buttons = document.querySelectorAll("button");

const resultDisplay = document.getElementById("result");

const userScoreDisplay = document.getElementById("user-score");
const comScoreDisplay = document.getElementById("computer-score");

// Initialize user and computer scores
let userScore = 0;
let computerScore = 0;

// Add event listeners to each button for user's choice
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const userChoice = button.id; // Get user's choice from button's ID
    const computerChoice = computerPlay(); // Generate computer's choice

    // Play a round and display the result
    const result = playRound(userChoice, computerChoice);
    resultDisplay.innerHTML = result;
  });
});

//generate the computer's choice
function computerPlay() {
  const choices = ["rock", "paper", "scissor"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

//determine the winner of a round and update scores
function playRound(userSelection, comSelection) {
  const emojis = {
    rock: "✊",
    paper: "✋",
    scissor: "✌️",
  };
  if (userSelection === comSelection) {
    return "It's a tie! try again";
  } else if (
    (userSelection === "rock" && comSelection === "scissor") ||
    (userSelection === "paper" && comSelection === "rock") ||
    (userSelection === "scissor" && comSelection === "paper")
  ) {
    userScore++;
    userScoreDisplay.textContent = userScore;
    return `${emojis[userSelection]} VS ${emojis[comSelection]} You won!🏆`;
  } else {
    computerScore++;
    comScoreDisplay.textContent = computerScore;
    return `${emojis[userSelection]} VS ${emojis[comSelection]} You lose!😭`;
  }
}
