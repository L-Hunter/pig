let totalScores, currentScore, activePlayer;
let diceImg = document.querySelector('.dice');
document.querySelector('.btn-new').addEventListener('click', init);

init();

// Roll Die
document.querySelector('.btn-roll').addEventListener('click', function() {
  let diceNum = Math.floor(Math.random() * 6) + 1;
  diceImg.style.display = 'block';
  diceImg.src = `assets/dice-${diceNum}.png`;
  if (diceNum !== 1) {
    currentScore += diceNum;
    document.querySelector(`#current-${activePlayer}`).textContent = currentScore;
  } else {
    switchPlayer();
  }
});

// Hold current round's score and assess for winner
document.querySelector('.btn-hold').addEventListener('click', function() {
  totalScores[activePlayer] += currentScore;
  document.getElementById(`score-${activePlayer}`).textContent = totalScores[activePlayer];
  if (totalScores[activePlayer] >= 25) {
    document.querySelector(`#name-${activePlayer}`).textContent = 'WINNER';
    diceImg.style.display = 'none';
    document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
    document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
    document.querySelector('.btn-roll').style.display = 'none';
    document.querySelector('.btn-hold').style.display = 'none';

  } else {
    switchPlayer();
  }
});

// Switch to other player
function switchPlayer() {
  currentScore = 0;
  document.querySelector(`#current-${activePlayer}`).textContent = currentScore;
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  diceImg.style.display = 'none';
};


// Initiate new game
function init() {
  totalScores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  diceImg.style.display = 'none';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.querySelector('#name-0').textContent = 'Player 1';
  document.querySelector('#name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.btn-roll').style.display = 'block';
  document.querySelector('.btn-hold').style.display = 'block';

}

// Modal operation
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}