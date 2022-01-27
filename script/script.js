document.getElementById("rules").addEventListener("click", () => {
    document.getElementById("rules_container").classList.toggle("show");
});

let playerWins = 1;
let computerWins = 1;

function computerPlay(){
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    return choices[Math.floor(Math.random()*choices.length)];
}

const rockButton = document.getElementById("rock");
rockButton.addEventListener("click", function () {
    computerPlay();
    const computerSelection = computerPlay();
    playRound("rock", computerSelection);
});

const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", function () {
    computerPlay();
    const computerSelection = computerPlay();
    playRound("paper", computerSelection);
});

const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", function () {
    computerPlay();
    const computerSelection = computerPlay();
    playRound("scissors", computerSelection);
});

const lizardButton = document.getElementById("lizard");
lizardButton.addEventListener("click", function () {
    computerPlay();
    const computerSelection = computerPlay();
    playRound("lizard", computerSelection);
});

const spockButton = document.getElementById("spock");
spockButton.addEventListener("click", function () {
    computerPlay();
    const computerSelection = computerPlay();
    playRound("spock", computerSelection);
});

const playerScore = document.getElementById("playerPoints");
const computerScore = document.getElementById("computerPoints");
const winnerAnnouncer = document.getElementById("winner_announcer");

function playRound(playerSelection, computerSelection) {
    switch(playerSelection){
        case "rock":
            if (computerSelection == "rock") {
                winnerAnnouncer.textContent = "IT'S A TIE";
            } else if (computerSelection == "paper") {
                winnerAnnouncer.textContent = "COMPUTER WINS, PAPER COVERS ROCK";
                computerScore.textContent = computerWins++;
            } else if (computerSelection == "scissors") {
                winnerAnnouncer.textContent = "PLAYER WINS, ROCK CRUSHES SCISSORS";
                playerScore.textContent = playerWins++;
            } else if (computerSelection == "lizard") {
                winnerAnnouncer.textContent = "PLAYER WINS, ROCK CRUSHES LIZARD";
                playerScore.textContent = playerWins++;
            } else if (computerSelection == "spock") {
                winnerAnnouncer.textContent = "COMPUTER WINS, SPOCK VAPORIZES ROCK";
                computerScore.textContent = computerWins++;
            }
        break;

        case "paper":
            if (computerSelection == "rock") {
                winnerAnnouncer.textContent = "PLAYER WINS, PAPER COVERS ROCK";
                playerScore.textContent = playerWins++;
            } else if (computerSelection == "paper") {
                winnerAnnouncer.textContent = "IT'S A TIE";
            } else if (computerSelection == "scissors") {
                winnerAnnouncer.textContent = "COMPUTER WINS, SCISSORS CUTS PAPER";
                computerScore.textContent = computerWins++;
            } else if (computerSelection == "lizard") {
                winnerAnnouncer.textContent = "COMPUTER WINS, LIZARD EATS PAPER";
                computerScore.textContent = computerWins++;
            } else if (computerSelection == "spock") {
                winnerAnnouncer.textContent = "PLAYER WINS, PAPER DISPROVES SPOCK";
                playerScore.textContent = playerWins++;
            }
        break;

        case "scissors":
            if (computerSelection == "rock") {
                winnerAnnouncer.textContent = "COMPUTER WINS, ROCK CRUSHES SCISSORS";
                computerScore.textContent = computerWins++;
            } else if (computerSelection == "paper") {
                winnerAnnouncer.textContent = "PLAYER WINS, SCISSORS CUTS PAPER";
                playerScore.textContent = playerWins++;
            } else if (computerSelection == "scissors") {
                winnerAnnouncer.textContent = "IT'S A TIE";
            } else if (computerSelection == "lizard") {
                winnerAnnouncer.textContent = "PLAYER WINS, SCISSORS DECAPITATES LIZARD";
                playerScore.textContent = playerWins++;
            } else if (computerSelection == "spock") {
                winnerAnnouncer.textContent = "COMPUTER WINS, SPOCK SMASHES SCISSORS";
                computerScore.textContent = computerWins++;
            }
        break;

        case "lizard":
            if (computerSelection == "rock") {
                winnerAnnouncer.textContent = "COMPUTER WINS, ROCK CRUSHES LIZARD";
                computerScore.textContent = computerWins++;
            } else if (computerSelection == "paper") {
                winnerAnnouncer.textContent = "PLAYER WINS, LIZARD EATS PAPER";
                playerScore.textContent = playerWins++;
            } else if (computerSelection == "scissors") {
                winnerAnnouncer.textContent = "COMPUTER WINS, SCISSORS DECAPITATES LIZARD";
                computerScore.textContent = computerWins++;
            } else if (computerSelection == "lizard") {
                winnerAnnouncer.textContent = "IT'S A TIE";
            } else if (computerSelection == "spock") {
                winnerAnnouncer.textContent = "PLAYER WINS, LIZARD POISONS SPOCK";
                playerScore.textContent = playerWins++;
            }
        break;

        case "spock":
            if (computerSelection == "rock") {
                winnerAnnouncer.textContent = "PLAYER WINS, SPOCK VAPORIZES ROCK";
                playerScore.textContent = playerWins++;
            } else if (computerSelection == "paper") {
                winnerAnnouncer.textContent = "COMPUTER WINS, PAPER DISPROVES SPOCK";
                computerScore.textContent = computerWins++;
            } else if (computerSelection == "scissors") {
                winnerAnnouncer.textContent = "PLAYER WINS, SPOCK SMASHES SCISSORS";
                playerScore.textContent = playerWins++;
            } else if (computerSelection == "lizard") {
                winnerAnnouncer.textContent = "COMPUTER WINS, LIZARD POISONS SPOCK";
                computerScore.textContent = computerWins++;
            } else if (computerSelection == "spock") {
                winnerAnnouncer.textContent = "IT'S A TIE";
            }
        break;
    }
}
