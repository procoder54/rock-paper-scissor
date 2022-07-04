// console.log('ha bhai!!!!!!!!!!')
chance = ['rock', 'paper', 'scissor']


function computerPlay() {
  return chance[Math.floor(Math.random() * 3)];
}


function playRound(playerSelection, computerSelection) {
  if ((playerSelection === 'rock' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'paper') || (playerSelection === 'scissor' && computerSelection === 'scissor')) {
    return 'tie'
  } else if (playerSelection === 'rock') {
    if (computerSelection === 'scissor') {
      return 'You won! Rock broke the Scissor..........'
    } else {
      return 'You lost! Paper covered the Rock..........'
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      return 'You won! Paper covered the Rock..........'
    } else {
      return 'You lost! Scissor cut the Paper..........'
    }
  } else if (playerSelection === 'scissor') {
    if (computerSelection === 'rock') {
      return 'You lost! Rock broke the scissor...........'
    } else {
      return 'You won! Scissor cut the Paper...........'
    }
  }
}


let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');
const div = document.createElement('div');
let score = document.createElement('div')
const result = document.createElement('div');
buttons.forEach((button) => {
  game: button.addEventListener('click', () => {
    let playerSelection = button.id;
    let some = playRound(playerSelection, computerPlay());
    div.textContent = some;
    if (some.charAt(4) === 'w') {
      playerScore++;
    } else if (some.charAt(4) === 'l') {
      computerScore++;
    }
    score.textContent = `${playerScore.toString()}    ${computerScore.toString()}`;
    body.appendChild(div);
    body.appendChild(score);
    if (playerScore == 5) {
      result.textContent = 'You won the match..............';
      body.appendChild(result);
    } else if (computerScore == 5) {
      result.textContent = 'You lost the match..............';
      body.appendChild(result);
    }
  });
});