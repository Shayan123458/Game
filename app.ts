import inquirer from "inquirer";
async function playGame() {
    let answer = await inquirer.prompt([
        {
            type: "list",
            name: "gamePlayers",
            message: "Choose your player",
            choices: ["player1", "player2"]
        },
        {
            type: "list",
            name: "player1",
            message: "Player 1 choose",
            choices: ["rock", "scissor", "paper"]
        },
        {
            type: "list",
            name: "player2",
            message: "Player 2 choose",
            choices: ["rock", "scissor", "paper"]
        },
    ]);
    if (answer.gamePlayers === "player1") {
        if (((answer.player1 === "rock") && (answer.player2 === "scissor"))
            || ((answer.player1 === "scissor") && (answer.player2 === "paper"))
            || ((answer.player1 === "paper") && (answer.player2 === "rock"))) {
            console.log("Player 1 wins the game");
        }
        else if (answer.player1 === answer.player2) {
            console.log("It's a tie!");
        }
        else {
            console.log("Player 2 wins the game");
        }
    }
    else if (answer.gamePlayers === "player2") {
        if (((answer.player2 === "rock") && (answer.player1 === "scissor"))
            || ((answer.player2 === "scissor") && (answer.player1 === "paper"))
            || ((answer.player2 === "paper") && (answer.player1 === "rock"))) {
            console.log("Player 2 wins the game");
        }
        else if (answer.player1 === answer.player2) {
            console.log("It's a tie!");
        }
        else {
            console.log("Player 1 wins the game");
        }
    }
    let startgame = await inquirer.prompt({
        type: "confirm",
        name: "end",
        message: "do you want to continue",
    });
    if (startgame.end) {
        playGame();
    }
}
playGame();
