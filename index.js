let computerSelection = getComputerChoise()
let playerSelection = 'paper'


function getComputerChoise() {
    let arr = ['rock', 'paper', 'scissors']
    return arr[Math.floor(Math.random()*arr.length)]
}

//----------------------------------------------------------------

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win!'
    } else if (playerSelection === computerSelection) {
        return 'Empate!'
    } else {
        return 'You lose!'
    }
}

//----------------------------------------------------------------

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(computerSelection)
        return playRound(playerSelection, computerSelection)
    }
}

//----------------------------------------------------------------



console.log(game())