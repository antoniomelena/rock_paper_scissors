let playerPoints = 0,
    computerPoints = 0,
    roundsPlayed = 0;

const computerSelection = computerPlay();

function computerPlay() {
   const choices = ['rock', 'paper', 'scissors'];
   let arr = [];
   for (i = 0; i < 5; i++) {
      index = Math.floor(Math.random() * choices.length);
      arr.push(choices[index]);
   }
   return arr;
}

function game() {

   function playRound(playerSelection, computerSelection) {
      if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
         playerPoints += 1;
         console.log(playerPoints, computerPoints);
         console.log('You win! Rock beats Scissors');
      } else if (computerSelection == 'rock' && playerSelection.toLowerCase() == 'scissors') {
         computerPoints += 1;
         console.log(playerPoints, computerPoints);
         console.log('You Lose! Rock beats Scissors');
      } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
         playerPoints += 1;
         console.log(playerPoints, computerPoints);
         console.log('You win! Paper beats Rock')
      } else if (computerSelection == 'paper' && playerSelection.toLowerCase() == 'rock') {
         computerPoints += 1;
         console.log(playerPoints, computerPoints);
         console.log('You Lose! Paper beats Rock')
      } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
         playerPoints += 1;
         console.log(playerPoints, computerPoints);
         console.log('You win! Scissors beats Paper')
      } else if (computerSelection == 'scissors' && playerSelection.toLowerCase() == 'paper') {
         computerPoints += 1;
         console.log(playerPoints, computerPoints);
         console.log('You Lose! Scissors beats Paper')
      } else if (computerSelection === playerSelection.toLowerCase()) {
         console.log(playerPoints, computerPoints);
         console.log('Tie!');
      }
   }


   for (i = 0; i < 5; i++) {
      const playerSelection = prompt('Rock, paper, or scissors?');
      round = playRound(playerSelection, computerSelection.shift());
   }

   if (playerPoints > computerPoints) {
      return ('You win!')
   } else if (playerPoints < computerPoints) {
      return ('You Lose!')
   } else if (playerPoints === computerPoints) {
      return ('Tie!')
   }
}



