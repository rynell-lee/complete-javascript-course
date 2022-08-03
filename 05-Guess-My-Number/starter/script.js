'use strict';
// selecting element/class/id via js
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'hehe';
console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.score').textContent);
document.querySelector('.number').textContent = 40;

console.log(document.querySelector('.guess').textContent);*/

//click events
document.querySelector('.guess').value = 0;
const secret = 12;
let randomSecret = Math.trunc(Math.random() * 20) + 1;
const originalColor = document.querySelector('body').style.backgroundColor;
document.querySelector('.number').textContent = '?';
console.log(randomSecret);
let currentScore = 20; //decalre here and dont tkae from html

// console.log(document.querySelector('.check').textContent);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (currentScore > 1) {
    if (!guess) {
      document.querySelector('.message').textContent = 'False value! 😅';
    } else if (guess === randomSecret) {
      document.querySelector('.number').textContent = randomSecret;

      document.querySelector('.message').textContent = 'Correct!';
      //css needs to be specified in strings
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '30rem';
      let hscore = document.querySelector('.highscore').textContent;
      console.log('current high score: ', hscore);
      highScore(currentScore, hscore);
    } else {
      document.querySelector('.message').textContent = 'Wrong!';
      currentScore--;
      document.querySelector('.score').textContent = currentScore;
    }
  } else {
    document.querySelector('.message').textContent = 'you lost!';
    document.querySelector('.score').textContent = 0;
  }
});
// the above we add an event listener to the button and executes the function upon click

//again function
//reset each value to original
document.querySelector('.again').addEventListener('click', function () {
  console.log('Resetting!');
  randomSecret = Math.trunc(Math.random() * 20) + 1;
  currentScore = 20;
  document.querySelector('.number').textContent = '?';
  console.log(randomSecret);
  document.querySelector('.guess').value = 0;
  document.querySelector('.message').textContent = 'Start guessing...!';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = currentScore;
  document.querySelector('body').style.backgroundColor = originalColor;
});

//define highscore function

const highScore = (score, hscore) => {
  if (score >= hscore) {
    document.querySelector('.highscore').textContent = score;
  }
};
