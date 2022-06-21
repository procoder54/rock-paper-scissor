// console.log('ha bhai!!!!!!!!!!')
chance = ['rock','paper','scissor']
function computerPlay(){
   return chance[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection){
  if((playerSelection === 'rock' && computerSelection === 'rock') || (playerSelection === 'paper'  && computerSelection === 'paper') || (playerSelection === 'scissor' && computerSelection === 'scissor')){
    return 'tie'
  }else if(playerSelection === 'rock'){
    if(computerSelection === 'scissor'){
      return 'You won! Rock broke the Scissor..........'
    }else{
      return 'You lost! Paper covered the Rock..........'
    }
  }else if(playerSelection === 'paper'){
    if(computerSelection === 'rock'){
      return 'You won! Paper covered the Rock..........'
    }else{
      return 'You lost! Scissor cut the Paper..........'
    }
  }else if(playerSelection === 'scissor'){
    if(computerSelection === 'rock'){
      return 'You lost! Rock broke the scissor...........'
    }else{
      return 'You won! Scissor cut the Paper...........'
    }
  }
}

function game(){
  let playerScore=0;
  let computerScore=0;
  for(let i=0; i<5; i++){
    let playerSelection = prompt('Enter your change');
    let some = playRound(playerSelection, computerPlay());
    console.log(some);
    if(some.charAt(4) === 'w'){
      playerScore++;
    }else{
      computerScore++;
    }
  }
  if(playerScore>computerScore){
    console.log('You won the match..............');
  }else if(playerScore<computerScore){
    console.log('You lost the match..............');
  }else{
    console.log('Game tie......................');
  }
}

game();


// computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
// console.log(computerPlay());