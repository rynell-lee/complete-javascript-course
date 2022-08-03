'use strict';

//same functionality but getelement tends to be faster
const player0 = document.querySelector('.player--0');
const score0 = document.querySelector('#score--0');
const current0 = document.getElementById('current--0');
const player1 = document.querySelector('.player--1');
const score1 = document.getElementById('score--1');
const current1 = document.getElementById('current--1');

const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//start condition
let scores, currentScore, activePlayer, playing;
init();

//rolling function
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. generate a random roll
    const diceNum = Math.trunc(Math.random() * 6) + 1;

    //2. display dice
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNum}.png`; //altering which image to show

    //3. check if 1 is rolled'
    if (diceNum !== 1) {
      //add number to current score
      currentScore += diceNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch
      switchPlayer();
    }
  }
});

//holding score
btnHold.addEventListener('click', function () {
  if (playing) {
    //1. add current score to acitve player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    console.log(scores[activePlayer]);

    //2. check if player score >= 100
    if (scores[activePlayer] >= 20) {
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //switch player
      switchPlayer();
    }
  }
});

//swtich player functionß
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0; //current player resets to 0
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  //active player highlight
  player0.classList.toggle('player--active'); //toggle checks if have or dont have and adds/remove accordingly
  player1.classList.toggle('player--active');
}

btnNew.addEventListener('click', init);

function init() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  dice.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
}
