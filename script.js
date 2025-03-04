console.log("cc");
const choices = ["rock", "paper", "scissors"];
let computerWins = 0;
let playerWins = 0;
let ties = 0;

let roundsPlayed = 0;

const computerChoiceText = document.querySelector("#computer-choice");
const playerWinsText = document.querySelector("#player-wins");
const computerWinsText = document.querySelector("#computer-wins");
const tiesText = document.querySelector("#ties");

const gameEndDiv = document.querySelector("#game-end");
const resultsText = document.createElement("p");
const restartButton = document.createElement("button");
restartButton.textContent = "restart";
restartButton.addEventListener("click", () => restartGame() );

function getComputerChoice() {
    return choices[randomIntFromInterval(0, 2)];
}
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function restartGame(){
    gameEndDiv.removeChild(restartButton);
    gameEndDiv.removeChild(resultsText);
    roundsPlayed = 0;
    computerWins = 0;
    playerWins = 0;
    ties = 0;
    computerChoiceText.textContent = "computer chose: ";
    playerWinsText.textContent = "player wins: ";
    computerWinsText.textContent = "computer wins: ";
    tiesText.textContent = "ties: ";
}

function playRound(humanChoice) {
    if(roundsPlayed >=5){
        resultsText.textContent = `**game over** player won ${playerWins} rounds and computer won ${computerWins} rounds`;
        gameEndDiv.appendChild(resultsText);
        gameEndDiv.appendChild(restartButton);
        return;
    }
    let computerChoice = getComputerChoice();
    computerChoiceText.textContent = "computer chose: " + computerChoice;

    if (humanChoice == computerChoice) {
        ties ++;
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        computerWins++;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        playerWins++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        playerWins++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerWins++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerWins++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        playerWins++;
    }

    playerWinsText.textContent = "player wins: " + playerWins.toString();
    computerWinsText.textContent = "computer wins: " + computerWins.toString();
    tiesText.textContent = "ties: " +  ties.toString();
    roundsPlayed++;
}

let choiceButtons = document.querySelectorAll(".choice-button");

choiceButtons.forEach(button => {
    button.addEventListener("click", () => playRound(button.textContent));
    console.log("listener inicialized");
});
