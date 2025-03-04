console.log("cc");
const choices = ["rock", "paper", "scissors"];
let computerWins = 0;
let playerWins = 0;
let ties = 0;

const computerChoiceText = document.querySelector("#computer-choice");
const playerWinsText = document.querySelector("#player-wins");
const computerWinsText = document.querySelector("#computer-wins");
const tiesText = document.querySelector("#ties");

function getComputerChoice() {
    return choices[randomIntFromInterval(0, 2)];
}
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();

    if (humanChoice == computerChoice) {
        console.log(`both players chose ${humanChoice}, it's a draw`);
        ties ++;
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("paper beats rock, computer wins");
        computerWins++;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("rocks beats scissors, player wins");
        playerWins++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("paper beats rock, player wins");
        playerWins++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("scissors beat paper, computer wins");
        computerWins++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("rock beats scissors, computer wins");
        computerWins++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("scissors beat paper, player wins");
        playerWins++;
    }

    playerWinsText.textContent = playerWins.toString();
    computerWinsText.textContent = computerWins.toString();
    tiesText.textContent = ties.toString();
}

let choiceButtons = document.querySelectorAll(".choice-button");

choiceButtons.forEach(button => {
    button.addEventListener("click", playRound(button.textContent));
});


console.log(`game over \n player won ${playerWins} rounds \n computer won ${computerWins} rounds`);