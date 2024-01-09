
const options = ["rock", "paper", "scissors"];

function getComputerChoice()
{
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function getPlayerChoice()
{
    let inputvalid = false;
    while(inputvalid == false)
    {
        const choice = prompt("Rock, paper, scissors?");
        if(choice == null)
        {
            continue;
        }
        const choiceLowerCase = choice.toLowerCase();
        if(options.includes(choiceLowerCase))
        {
            inputvalid = true;
            return choiceLowerCase;
        }
    }
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
        return `Player wins, ${playerSelection} beats ${computerSelection}`;
    }
    else if(result == "Computer")
    {
        return `Computer wins, ${computerSelection} beats ${playerSelection}`;
    }
    else{
        return "It is tie";
    }
}

function game()
{
    let scorePlayer = 0;
    let scoreComputer = 0;
    
    for(let i = 0; i<5; i++)
    {
        const player = getPlayerChoice();
        const computer = getComputerChoice();
        console.log(playRound(player, computer));

        if(checkWinner(player, computer) == "Player")
        {
            scorePlayer++;
        }
        else if(checkWinner(player, computer) == "Computer")
        {
            scoreComputer++;
        }
    }

    if(scorePlayer == scoreComputer)
    {
        console.log("No one wins!");
    }
    else if(scorePlayer > scoreComputer)
    {
        console.log("Player wins!");
    }
    else
    {
        console.log("Computer wins!");
    }
}

game();