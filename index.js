let computerSelection = getComputerChoise()
let niceComputerSelection = computerSelection.toLowerCase()
let pcPoints = 0
let userPoints = 0


function getComputerChoise() {
    let arr = ['rock', 'paper', 'scissors']
    return arr[Math.floor(Math.random()*arr.length)]
}

//----------------------------------------------------------------

function playRound(playerSelection, niceComputerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        userPoints += 1
        return 'You win!'
    } else if (playerSelection === computerSelection) {
        return 'Empate!'
    } else {
        pcPoints += 1
        return 'You lose!'
    }
}


//----------------------------------------------------------------

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Select your weapon!', 'Rock, paper, scissors').toLowerCase()
        playRound(playerSelection, niceComputerSelection)
        let result = playRound(playerSelection, computerSelection)
        console.log(`Your picked ${playerSelection} and pc choose ${niceComputerSelection}, ${result}`)
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