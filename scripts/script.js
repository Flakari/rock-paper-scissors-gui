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
    game();
});

function game() {
    const winsNeeded = 5;
    let playerWins = 0;
    let computerWins = 0;
    let round = '';

    rock.addEventListener('click',function(e) {
        let computerSelection = computerPlay();
        round = playRound('rock', computerSelection);
        roundResult('rock', computerSelection);
    });

    paper.addEventListener('click', function(e) {
        let computerSelection = computerPlay();
        round = playRound('paper', computerSelection);
        roundResult('paper', computerSelection);
    });

    scissors.addEventListener('click', function(e) {
        let computerSelection = computerPlay();
        round = playRound('scissors', computerSelection);
        roundResult('scissors', computerSelection);
    });

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
    
}

/*function game() {
    const winsNeeded = 5;
    let playerWins = 0;
    let computerWins = 0;

    while (playerWins != 5 && computerWins != 5) {
        let round = playRound(playerSelection, computerSelection);
        const playerSelection = userPlay();
        const computerSelection = computerPlay();
        const choice = document.querySelectorAll('.choice');

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
    
    /*for (let i = 0; i < games; i++) {
        const playerSelection = userPlay();
        const computerSelection = computerPlay();
        const choice = document.querySelectorAll('.choice');

        let round = playRound(playerSelection, computerSelection);
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
    if (playerWins > computerWins) {
        console.log('');
        console.log('Congratulations! You beat the computer ' + playerWins + ' to ' + computerWins + '!');
    } else if (playerWins < computerWins) {
        console.log('');
        console.log('Ouch! You lost to the computer ' + playerWins + ' to ' + computerWins + '.');
    } else {
        console.log('');
        console.log('Look at that, you and the computer tied at ' + playerWins + ' a piece!');
    }
}*/

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
