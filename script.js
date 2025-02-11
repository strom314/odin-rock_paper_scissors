console.log("cc");
const choices = ["rock", "paper", "scissors"];
let computerWins = 0;
let playerWind = 0;

function getComputerChoice() {
    return choices[randomIntFromInterval(0, 2)];
}
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function getHumanChoice() {
    let choice = Number(prompt("choose: rock(1) paper(2) scissors(3)"));
    return choices[choice - 1];

}
function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`both players chose ${humanChoice}, it's a draw`);
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("paper beats rock, computer wins");
        computerWins++;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("rocks beats scissors, player wins");
        playerWind++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("paper beats rock, player wins");
        playerWind++;
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
        playerWind++;
    }
}
for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    // console.log(`player wins: ${playerWind}`);
    // console.log(`computer wins: ${computerWins}`);
    // console.log(`round ${i + 1}`);
}

console.log(`game over \n player won ${playerWind} rounds \n computer won ${computerWins} rounds`);