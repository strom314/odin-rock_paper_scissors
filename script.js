console.log("cc");
const choices = ["rock", "paper", "scissors"];

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
console.log(getComputerChoice());
console.log(getHumanChoice());