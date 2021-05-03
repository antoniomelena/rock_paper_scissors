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



function playRound(playerSelection, computerSelection) {
   if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
      return ('You win! Rock beats Scissors');
   } else if (computerSelection == 'rock' && playerSelection.toLowerCase() == 'scissors') {
      return ('You Lose! Rock beats Scissors');
   } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
      return ('You win! Paper beats Rock')
   } else if (computerSelection == 'paper' && playerSelection.toLowerCase() == 'rock') {
      return ('You Lose! Paper beats Rock')
   } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
      return ('You win! Scissors beats Paper')
   } else if (computerSelection == 'scissors' && playerSelection.toLowerCase() == 'paper') {
      return ('You Lose! Scissors beats Paper')
   } else if (computerSelection === playerSelection.toLowerCase()) {
      return ('Tie!');
   }
}

function game() {
   for (i = 0; i < 5; i++) {
      const playerSelection = prompt('Rock, paper, or scissors?');
      console.log(playRound(playerSelection, computerSelection.shift()));
   }
   
}

console.log(game())

