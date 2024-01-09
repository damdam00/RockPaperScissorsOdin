
const options = ["rock", "paper", "scissors"];

function getComputerChoice()
{
    const choice = options[Math.floor(Math.random() * options.length)];

    console.log(choice);
}

function checkWinner(playerSelection, computerSelection)
{
    if(playerSelection == computerSelection)
    {
        return "Tie";
    }
    else if((playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") || 
    (playerSelection == "scissors" && computerSelection == "paper"))
    {
        return "Player";
    }
    else
    {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection)
{
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Player")
    {
        return `Player wins, ${playerSelection} beats ${computerSelection}`
    }
    else if(result == "Computer")
    {
        return `Computer wins, ${computerSelection} beats ${playerSelection}`
    }
}

getComputerChoice();