const resultText = document.querySelector(".resultText")
const winnerText = document.querySelector(".winnerText")

const userScore = document.querySelector('.user-score');
const computerScore = document.querySelector('.computer-score');

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resetButton = document.querySelector('.resetButton')

let playerPoints = 0,
    computerPoints = 0,
    roundsPlayed = 0;

function refreshPage() {
   window.location.reload();
}


function computerPlay() {
   const choices = ['rock', 'paper', 'scissors'];
   const idx = Math.floor(Math.random() * choices.length);
   return choices[idx];
}

function game() {
   if (roundsPlayed === 5) {
      if (playerPoints > computerPoints) {
         winnerText.textContent = 'You Won!';
      } else if (playerPoints < computerPoints) {
         winnerText.textContent = 'You Lost!';
      } else if (playerPoints === computerPoints) {
         winnerText.textContent = 'Tie!';
      }
   }
}

function won(playerSelection, computerSelection) {
   playerPoints++;
   userScore.textContent = `${playerPoints}`;
   resultText.textContent = `You Win! :) ${playerSelection.toUpperCase()} Beats ${computerSelection.toUpperCase()}`;
   document.getElementById(playerSelection).classList.add('blue-glow');
   document.getElementById(computerSelection).classList.add('yellow-glow');
   setTimeout(function () { document.getElementById(playerSelection).classList.remove('blue-glow') }, 500);
   setTimeout(function () { document.getElementById(computerSelection).classList.remove('yellow-glow') }, 500);
}

function lost(playerSelection, computerSelection) {
   computerPoints++;
   computerScore.textContent = `${computerPoints}`;
   resultText.textContent = `You Lose! :( ${playerSelection.toUpperCase()} Loses To ${computerSelection.toUpperCase()}`;
   document.getElementById(playerSelection).classList.add('blue-glow');
   document.getElementById(computerSelection).classList.add('yellow-glow');
   setTimeout(function () { document.getElementById(playerSelection).classList.remove('blue-glow') }, 500);
   setTimeout(function () { document.getElementById(computerSelection).classList.remove('yellow-glow') }, 500);
}

function draw(playerSelection, computerSelection) {
   resultText.textContent = `Draw! :| ${playerSelection.toUpperCase()} Equals ${computerSelection.toUpperCase()}`;
   document.getElementById(playerSelection).classList.add('green-glow');
   setTimeout(function () { document.getElementById(playerSelection).classList.remove('green-glow') }, 500);
}

function playRound(playerSelection) {
   const computerSelection = computerPlay();
   if (
      (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') ||
      (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') ||
      (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper')
   ) {
      won(playerSelection, computerSelection);
   } else if (
      (computerSelection == 'rock' && playerSelection.toLowerCase() == 'scissors') ||
      (computerSelection == 'paper' && playerSelection.toLowerCase() == 'rock') ||
      (computerSelection == 'scissors' && playerSelection.toLowerCase() == 'paper')
   ){
      lost(playerSelection, computerSelection);
   } else if (computerSelection === playerSelection.toLowerCase()) {
      draw(playerSelection, computerSelection);
   }
}

rockButton.addEventListener('click', () => {
   playRound('rock');
});
paperButton.addEventListener('click', () => {
   playRound('paper');
});
scissorsButton.addEventListener('click', () => {
   playRound('scissors');
});

resetButton.addEventListener('click', refreshPage);