const choices = ["rock", "paper", "scissors"];
const matches = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
}

let computerWins = 0;
let playerWins = 0;
let ties = 0;
let roundsPlayed = 0;

let computerChoice = "";


const playerWinsText = document.querySelector("#player-wins");
const computerWinsText = document.querySelector("#computer-wins");
const tiesText = document.querySelector("#ties");
const round = document.querySelector("#round");

const restartButton = document.querySelector("#restart");
const gameOver = document.querySelector("#game-over");
restartButton.addEventListener("click", () => restartGame() );

function getComputerChoice() {
    return choices[randomIntFromInterval(0, 2)];
}
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function restartGame(){
    roundsPlayed = 0;
    computerWins = 0;
    playerWins = 0;
    ties = 0;
    playerWinsText.textContent = "player wins: 0";
    computerWinsText.textContent = "computer wins: 0";
    tiesText.textContent = "ties: 0";
    gameOver.textContent = "";
}



function playRound(winner) {
    if(roundsPlayed >= 5){
        gameOver.textContent = "Game over!";
        return;
    }
    
    if(winner == "human"){
        playerWins++;
    }
    else if(winner == "computer"){
        computerWins++;
    }
    else{
        ties++;
    }

    updateText();
    roundsPlayed++;
}

function updateText(){
    playerWinsText.textContent = "player wins: " + playerWins.toString();
    computerWinsText.textContent = "computer wins: " + computerWins.toString();
    tiesText.textContent = "ties: " +  ties.toString();
}

function determineWinner(humanChoice, computerChoice){
    if(humanChoice === computerChoice) return "tie";
    if(matches[humanChoice] === computerChoice){
        return "human";
    }
    else{
        return "computer";
    }
}

let choiceButtons = document.querySelectorAll(".choice-button");
let computerButtons = document.querySelectorAll(".computer-button");

choiceButtons.forEach(button => {
    button.addEventListener("click", () => {
        computerChoice = getComputerChoice();
        playRound(determineWinner(button.id, computerChoice));
        
        colorHumanButton(button);
        colorComputerButton(computerChoice);
    });
    console.log("listener inicialized");
});

function colorHumanButton(button){
    button.style.backgroundColor = "#04838e";
        setTimeout(() => {
            button.style.backgroundColor = "lightBlue";
        }, 300);
}
function colorComputerButton(computerChoice){
    computerButtons.forEach(button => {
        if(button.id == computerChoice){
            button.style.backgroundColor = "#04838e";
            setTimeout(() => {
                button.style.backgroundColor = "lightBlue";
            }, 300);
        }
    });
}
