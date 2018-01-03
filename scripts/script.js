const play = document.querySelector('.play');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
let playing = false;

play.addEventListener('click', function(e) {
    if (playing) return;

    playing = true;
    console.log(playing);
    console.log("Hey, first to five!");
    
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
        if (playerWins > computerWins) {
            console.log('');
            console.log('Congratulations! You beat the computer ' + playerWins + ' to ' + computerWins + '!');
        } else {
            console.log('');
            console.log('Ouch! You lost to the computer ' + playerWins + ' to ' + computerWins + '.');
        }
        playing = false;
        playerWins = 0;
        computerWins = 0;
        return playing;
    }
    if (!playing) return;
}

function roundResult(playerSelection, computerSelection) {
    if (round == 'wins') {
        console.log('You won this round, ' + playerSelection + ' beats ' + computerSelection + '.');
        playerWins++;
    } else if (round == 'loses') {
        console.log('You lost this round, ' + playerSelection + ' loses to ' + computerSelection + '.');
        computerWins++;
    } else {
        console.log('You tied, ' + playerSelection + ' ties with ' + computerSelection + '.');
    }
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
