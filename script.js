const winners = [];
const choices = ["rock", "paper", "scissors"];


function game() {
    
        playRound(i);
    
    setWins();
    
}

function playRound(round) {
    
    const computerChoice = computerSelect();
    
    const winner = checkWinner(playerChoice, computerChoice);
   
    winners.push(winner);
    
}


function computerSelect() {
    //update the DOM with computer selection
    return choices[Math.floor(Math.random() * choices.length)]
}


function checkWinner(choice1, choice2){
    if (choice1 === choice2) {
        return "Tie";
    } else if ((choice1 === "rock" && choice2 === "scissors") || (choice1 === "paper" && choice2 === "rock") || (choice1 === "scissors" && choice2 === "paper")) {
        return "Player";
    } else {
        return "Computer";
    }
}

function setWins() {
    let pWinCount = winners.filter((item) => item == "Player").length;
    let cWinCount = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
}