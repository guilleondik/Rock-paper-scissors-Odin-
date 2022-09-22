let computerSelection = getComputerChoise()
let playerSelection = 'paper'


function getComputerChoise() {
    let arr = ['rock', 'paper', 'scissors']
    return arr[Math.floor(Math.random()*arr.length)]
}

//---------------------------------------------------------------

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You win!')
    } else if (playerSelection === computerSelection) {
        console.log('Empate!')
    } else {
        console.log('You lose!')
    }
}

//----------------------------------------------------------------

console.log(computerSelection)
playRound(playerSelection, computerSelection)
