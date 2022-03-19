var computerTxt = document.getElementById("computer");
var userTxt = document.getElementById("user");
var resultTxt = document.getElementById("result");
var rockBtn = document.getElementById("rock");
var paperBtn = document.getElementById("paper");
var scissorsBtn = document.getElementById("scissors");

var choices = ["rock", "paper", "scissors"];

let computerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
}

rockBtn.addEventListener("click", () => {
    let computerPick = computerChoice()
    computerTxt.innerHTML = computerPick
    let userPick = "rock"
    userTxt.innerHTML = userPick
    if (computerPick === userPick) {
        resultTxt.innerHTML = "It's a tie!"
    }
    else {
        resultTxt.innerHTML = "You lose!"
    }
})

paperBtn.addEventListener("click", () => {
    let computerPick = computerChoice()
    computerTxt.innerHTML = computerPick
    let userPick = "paper"
    userTxt.innerHTML = userPick
    if (computerPick === userPick) {
        resultTxt.innerHTML = "It's a tie!"
    }
    else {
        resultTxt.innerHTML = "You lose!"
    }
})

scissorsBtn.addEventListener("click", () => {
    let computerPick = computerChoice()
    computerTxt.innerHTML = computerPick
    let userPick = "scissors"
    userTxt.innerHTML = userPick
    if (computerPick === userPick) {
        resultTxt.innerHTML = "It's a tie!"
    }
    else {
        resultTxt.innerHTML = "You lose!"
    }
})
