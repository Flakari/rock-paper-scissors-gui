const play = document.querySelector('.play');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const display = document.querySelector('#game-display');
const playerWinsDiv = document.querySelector('#player-wins').firstChild;
const computerWinsDiv = document.querySelector('#computer-wins').firstChild;
let p = document.createElement('p');
let playing = false;

play.addEventListener('click', function(e) {
    if (playing) return;

    while (display.firstChild) {
        display.removeChild(display.firstChild);
    }
    playing = true;
    playerWinsDiv.textContent = 0;
    computerWinsDiv.textContent = 0;
    p.textContent = 'Hey, first to five!';
    display.appendChild(p);
    
});
let playerWins = 0;
let computerWins = 0;
let round;

rock.addEventListener('click',function(e) {
    if (!playing) return;
    let computerSelection = computerPlay();
    round = playRound('rock', computerSelection);
    roundResult('rock', computerSelection);
    game();
});

paper.addEventListener('click', function(e) {
    if (!playing) return;
    let computerSelection = computerPlay();
    round = playRound('paper', computerSelection);
    roundResult('paper', computerSelection);
    game();
});

scissors.addEventListener('click', function(e) {
    if(!playing) return;
    let computerSelection = computerPlay();
    round = playRound('scissors', computerSelection);
    roundResult('scissors', computerSelection);
    game();
});

function game() {
    if (playerWins == 5 || computerWins == 5) {
        let result = document.createElement('p');
        result.classList.add('result');
        if (playerWins > computerWins) {
            result.textContent = 'Congratulations! You beat the computer ' + playerWins + ' to ' + computerWins + '!'
        } else {
            result.textContent = 'Ouch! You lost to the computer ' + playerWins + ' to ' + computerWins + '.';
        }
        display.appendChild(result);
        playing = false;
        playerWins = 0;
        computerWins = 0;
        return playing;
    }
    if (!playing) return;
}

function roundResult(playerSelection, computerSelection) {
    if (round == 'wins') {
        p.textContent = 'You won this round, ' + playerSelection + ' beats ' + computerSelection + '.';
        playerWins++;
        playerWinsDiv.textContent = playerWins;
    } else if (round == 'loses') {
        p.textContent = 'You lost this round, ' + playerSelection + ' loses to ' + computerSelection + '.';
        computerWins++;
        computerWinsDiv.textContent = computerWins;
    } else {
        p.textContent = 'You tied, ' + playerSelection + ' ties with ' + computerSelection + '.';
    }
    display.appendChild(p);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            return 'wins';
        } else if (computerSelection == 'paper') {
            return 'loses';
        } else {
            return 'ties';
        }
    }

    if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return 'wins';
        } else if (computerSelection == 'scissors') {
            return 'loses';
        } else {
            return 'ties';
        }
    }

    if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            return 'wins';
        } else if (computerSelection == 'rock') {
            return 'loses'
        } else {
            return 'ties';
        }
    }
}

function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3);
    let compPlay = ['rock', 'paper', 'scissors'];
    return compPlay[computerSelection];
}
