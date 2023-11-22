const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const playerScore = document.querySelector('.player_score')
const botScore = document.querySelector('.bot_score')
const tiedScore = document.querySelector('.ties')
const plays = document.querySelector('.plays');
const choice = ['rock', 'paper', 'scissors'];
let wins_player = 0;
let wins_bot = 0;
let ties = 0;

const choice_bot = () => {
    let play_bot = choice[Math.floor(Math.random()*3)];
    plays.innerText = `Bot chose ${play_bot}`
    return play_bot;
}

const playRound = (choice_player, choice_bot) => {
    if(
    choice_player === 'rock' && choice_bot === 'rock' || 
    choice_player === 'paper' && choice_bot === 'paper' || 
    choice_player === 'scissors' && choice_bot === 'scissors'
    ){
        plays.innerText += ', that makes it a tie'
        return 'tie'
    } else if (
        choice_player === 'rock' && choice_bot === 'paper' ||
        choice_player === 'paper' && choice_bot === 'scissors' ||
        choice_player === 'scissors' && choice_bot === 'rock'
    ) {
        plays.innerText += ', bot wins this round'
        return 'loss'
    } else {
        plays.innerText += ', that a win for you!'
        return 'win'
    }
}

const countWins = (playRound) => {
    if(playRound === 'win'){
        wins_player++
        playerScore.innerText = `Player Wins: ${wins_player}`
    } else if(playRound === 'loss'){
        wins_bot++
        botScore.innerText = `Bot Wins: ${wins_bot}`
    } else {
        ties++
        tiedScore.innerText = `Tied rounds: ${ties}`
    }
}

const checkWin = () => {
    if(wins_player == 5){
        alert('YOU WIN!');
        reset();
    }else{
        alert('BOT WINS!');
        reset();
    }
}

const reset = () => {
    [wins_bot, wins_player, ties] = 0;
    playerScore.innerText = `Player Wins: 0`
    botScore.innerText = `Bot Wins: 0`
    tiedScore.innerText = 'Tied rounds: 0'
    plays.innerText = ''
}

const fullGame = (choice_player) => {
    let play = playRound(choice_player, choice_bot());
    countWins(play);
    if(wins_bot == 5 || wins_player == 5){
        checkWin();
    }
}

rockBtn.addEventListener('click', () => {
    fullGame('rock');
})
paperBtn.addEventListener('click', () => {
    fullGame('paper');
})
scissorsBtn.addEventListener('click', () => {
    fullGame('scissors');
})

