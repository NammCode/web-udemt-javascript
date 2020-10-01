let min = 1,
  max = 10,
  winningNumber = getRandomNumber(min, max),
  guessesLeft = 3;

  console.log(winningNumber + 's');

const game = document.getElementById('game');
min_num = document.querySelector('.min-num'),
  max_num = document.querySelector('.max-num'),
  guessInput = document.getElementById('guess-input'),
  btnSubmit = document.getElementById('guess-btn'),
  message = document.querySelector('.message');

min_num.textContent = min;
max_num.textContent = max;

game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
})

btnSubmit.addEventListener('click', guess);

function guess() {
  let guess = parseInt(guessInput.value);
  if (isNaN(guess) || guess < min || guess > max) {
    showMessage(`Please input number between ${min} and ${max}`, 'red');
  } else {
    if (guess === winningNumber) {
      guessInput.disabled = true;
      guessInput.style.borderColor = 'green';
      showMessage(`OMG! You Winnnnnnnnnn. Winning number is ${guess}`, 'green');
      btnSubmit.value = 'Play Again';
      btnSubmit.className = 'play-again';
    } else {
      guessesLeft--;
      showMessage(`Wrong, You have ${guessesLeft} time guess remain!`, 'red');
      if (guessesLeft == 0) {
        guessInput.disabled = true;
        guessInput.style.borderColor = 'red';
        showMessage(`GAME OVER! Winning number is ${winningNumber}`, 'red');
        btnSubmit.value = 'Play Again';
        btnSubmit.className = 'play-again';
      }
    }
  }
}

function showMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}