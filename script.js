const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
    //play the game
    //console based
    //play 5 rounds
    for(let i = 1; i<= 5; i++) {
        playRound(i);
    }
    logWins();
    
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    //console.log(computerSelection);
    const winner = checkWinner(playerSelection, computerSelection);
    //console.log(winner);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
    //gets input from player
    let input = prompt("Type rock, paper, or scissors");
    while (input == null) {
        input = prompt("Type rock, paper, or scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt("Type rock, paper, or scissors. Spelling needs to be exact but capitalization doesn't matter.");
        while (input == null) {
            input = prompt("Type rock, paper, or scissors");
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;


    //console.log(input);
}

function computerChoice() {
    //gets random input for computer
    return choices[Math.floor(Math.random() * choices.length)]
}

function validateInput(choice) {
    if (choices.includes(choice)) {
        return true;
    } else {
        return false;
    }
}

function checkWinner(choiceP, choiceC){
    if (choiceP === choiceC) {
        return "Tie";
    } else if ((choiceP === "rock" && choiceC === "scissors") || (choiceP === "paper" && choiceC === "rock") || (choiceP === "scissors" && choiceC === "paper")) {
        return "Player";
    } else {
        return "Computer";
    }
}

function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results:");
    console.log("Player Wins: ", playerWins);
    console.log("Computer Wins: ", computerWins);
    console.log("Ties: ", ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log("Round: ", round);
    console.log("Player Chose: ", playerChoice);
    console.log("Computer Chose: ", computerChoice);
    console.log(winner, "won the Round");
    console.log("----------------------------------");
}

