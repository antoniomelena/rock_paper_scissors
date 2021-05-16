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

const computerSelection = computerPlay();

function computerPlay() {
   const choices = ['rock', 'paper', 'scissors'];
   const idx = Math.floor(Math.random() * choices.length);
   return choices[idx];
}

function game() {
   for (i = 0; i < 5; i++) {
      const playerSelection = prompt('Rock, paper, or scissors?');
      round = playRound(playerSelection, computerSelection);
   }
   
   if (playerPoints > computerPoints) {
      return ('You win!')
   } else if (playerPoints < computerPoints) {
      return ('You Lose!')
   } else if (playerPoints === computerPoints) {
      return ('Tie!')
   }
}

function playRound(playerSelection, computerSelection) {
   if (
      (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') ||
      (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') ||
      (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper')
   ) {
      playerPoints += 1;
      console.log(playerPoints, computerPoints);
      console.log(`You Win! :) ${playerSelection.toUpperCase()} Beats ${computerSelection.toUpperCase()}`);
   } else if (
      (computerSelection == 'rock' && playerSelection.toLowerCase() == 'scissors') ||
      (computerSelection == 'paper' && playerSelection.toLowerCase() == 'rock') ||
      (computerSelection == 'scissors' && playerSelection.toLowerCase() == 'paper')
   ){
      computerPoints += 1;
      console.log(playerPoints, computerPoints);
      console.log(`You Lose! :( ${playerSelection.toUpperCase()} Loses To ${computerSelection.toUpperCase()}`);
   } else if (computerSelection === playerSelection.toLowerCase()) {
      console.log(playerPoints, computerPoints);
      console.log(`Draw! :| ${playerSelection.toUpperCase()} Equals ${computerSelection.toUpperCase()}`);
   }
}



