'use strict';

const reset = document.querySelector('.again');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const bodyColor = document.querySelector('body');
const guessValue = document.querySelector('.guess');
const highScoreTxt = document.querySelector('.highscore');
let currentScore = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);

const checkBtn = function () {
  let guess = +document.querySelector('.guess').value;

  if (!guess) {
    message.textContent = 'No Number!';
  } else if (guess === secretNumber) {
    message.textContent = 'Correct Number';
    number.textContent = secretNumber;
    bodyColor.style.backgroundColor = 'green';
    number.style.width = '30rem';
    guessValue.disabled = true;

    if (currentScore > highScore) {
      highScore = currentScore;
      highScoreTxt.textContent = highScore;
    }
  } else {
    if (currentScore > 1) {
      message.textContent = guess > secretNumber ? 'Too High' : 'Too low';
      currentScore--;
      score.textContent = currentScore;
    } else {
      message.textContent = 'You lost the game!';
      score.textContent = 0;

      // Disable input and button
      guessValue.disabled = true;
      check.disabled = true;
    }
  }
};
check.addEventListener('click', checkBtn);

// **********game reset button************
const resetBtn = function () {
  currentScore = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score.textContent = currentScore;
  message.textContent = 'Start guessing';
  number.textContent = '?';
  bodyColor.style.backgroundColor = '#222';
  number.style.width = '15rem';
  guessValue.value = '';
  guessValue.disabled = false;
  check.disabled = false;
};

reset.addEventListener('click', resetBtn);
