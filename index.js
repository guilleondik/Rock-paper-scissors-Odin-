let computerSelection = getComputerChoise()
let niceComputerSelection = computerSelection.toLowerCase()


function getComputerChoise() {
    let arr = ['rock', 'paper', 'scissors']
    return arr[Math.floor(Math.random()*arr.length)]
}

//----------------------------------------------------------------

function playRound(playerSelection, niceComputerSelection) {
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
        let playerSelection = prompt('Select your weapon!', 'Rock, paper, scissors').toLowerCase()
        playRound(playerSelection, niceComputerSelection)
        resultado = playRound(playerSelection, computerSelection)
        console.log(`Your picked ${playerSelection} and pc choose ${niceComputerSelection}, ${resultado}`)
    }
}

//----------------------------------------------------------------

game()

