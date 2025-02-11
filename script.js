console.log("cc");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[randomIntFromInterval(0, 2)];
}
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getComputerChoice());