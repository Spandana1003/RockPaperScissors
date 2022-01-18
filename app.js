const startGameBtn = document.getElementById('start-game-btn');

const ROCK='ROCK';
const PAPER='PAPER';
const SCISSORS='SCISSORS';
const DEFAULT_SELECTION='ROCK';
const RESULT_DRAW= 'DRAW';
const RESULT_PLAYER_WINS='PLAYER_WINS';
const RESULT_COMPUTER_WINS='COMPUTER_WINS';

let gameIsRunning = false;

const getComputerChoice = function(){
    const randomNumber = Math.random();
    if(randomNumber<0.34){
        return ROCK;
    }
    else if(randomNumber<0.67){
        return PAPER;
    }
    else {
        return SCISSORS;
    }
}

function getPlayerSelection(){
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`,'').toUpperCase();
    if(selection!== ROCK && selection!==PAPER && selection!==SCISSORS){
        alert(`Invalid selection. We chose ${DEFAULT_SELECTION} for you.`);
        return DEFAULT_SELECTION;
    }
    return selection;
}

const getWinner= function(cChoice, pChoice){
    if (cChoice===pChoice){
        return RESULT_DRAW;}
    else if(cChoice=== ROCK && pChoice=== PAPER || cChoice=== PAPER && pChoice=== SCISSORS || cChoice=== SCISSORS && pChoice=== ROCK ){
        return RESULT_PLAYER_WINS;
    }  
    else{
        return RESULT_COMPUTER_WINS;
    }
    }


startGameBtn.addEventListener('click',function() {
    if(gameIsRunning){
        return;
    }
    gameIsRunning= true;
    console.log("Let's go!!!");
    const playerSelection = getPlayerSelection();
    const computerSelection = getComputerChoice();
    const winner = getWinner(computerSelection, playerSelection);
    let message=`You picked ${playerSelection}, computer picked ${computerSelection}, therefore `;
    if(winner===RESULT_DRAW){
        message= message+'it is a draw';
    }
    else if(winner===RESULT_PLAYER_WINS){
        message= message+'you win';
    }
    else {
        message= message+'you lost';
    }
    alert(message);
    gameIsRunning=false;
});