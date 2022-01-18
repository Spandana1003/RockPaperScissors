const startGameBtn = document.getElementById('start-game-btn');

const ROCK='ROCK';
const PAPER='PAPER';
const SCISSORS='SCISSORS';
const DEFAULT_SELECTION='ROCK';

let gameIsRunning = false;

function getPlayerSelection(){
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`,'').toUpperCase();
    if(selection!== ROCK && selection!==PAPER && selection!==SCISSORS){
        alert(`Invalid selection. We chose ${DEFAULT_SELECTION} for you.`);
        return DEFAULT_SELECTION;
    }
    return selection;
}


startGameBtn.addEventListener('click',function() {
    if(gameIsRunning){
        return;
    }
    gameIsRunning= true;
    console.log("Let's go!!!");
    const playerSelection = getPlayerSelection();
    console.log(playerSelection);
});