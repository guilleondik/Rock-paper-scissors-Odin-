let pcPoints = 0
let userPoints = 0



function getComputerChoise() {
    const arr = ['rock', 'paper', 'scissors']
    return arr[Math.floor(Math.random()*arr.length)]
}


//----------------------------------------------------------------

function playRound(playerSelection, computerSelection) {
    getComputerChoise()
    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        userPoints += 1
        return 'You win!'
    } else if (playerSelection === computerSelection) {
        return 'Draw!'
    } else {
        pcPoints += 1
        return 'You lose!'
    }
}


//----------------------------------------------------------------

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Select your weapon!', 'Rock, paper, scissors').toLowerCase()
        let computerSelection = getComputerChoise()
        let result = playRound(playerSelection, computerSelection)
        console.log(`Your picked ${playerSelection} and pc choose ${computerSelection}, ${result}`)
        console.log(pcPoints)
        console.log(userPoints)
    }
    winner()
}

//----------------------------------------------------------------

function winner() {
    if (pcPoints > userPoints) {
        console.log('The winner is PC')
    } else {
        console.log('You win the game!')
    }
}

game()
