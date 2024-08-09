'use strict';

// set secret number, score and highscore
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (where, message) {
  document.querySelector(where).textContent = message;
};

// get the guess value
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // if guess is invalid, equal or wrong
  if (!guess) {
    displayMessage('.message', '📛 No number!');
  } else if (guess === secretNumber) {
    displayMessage('.message', '🎊 Correct number');
    displayMessage('.number', secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      displayMessage('.highscore', highscore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        '.message',
        guess > secretNumber ? '📈 Too high' : '📉 Too low',
      );
      score--;
      displayMessage('.score', score);
    } else {
      displayMessage('.message', '💣 You lost the game');
      displayMessage('.score', 0);
    }
  }
});

// again button clicked ? reset all of the classes so user can play again; except for the highscore
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('.message', 'Start guessing...');
  displayMessage('.score', score);
  displayMessage('.number', '?');

  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
