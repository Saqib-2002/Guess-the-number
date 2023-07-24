let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const loworHi = document.querySelector('.loworHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessfield = document.querySelector('.guessfield');

let guessCount = 1;
let resetButton;

function checkGuess() {
    const userGuess = Number(guessfield.value);
    if (guessCount === 1)
        guesses.textContent = 'Previous Guesses = ';
    guesses.textContent += `${userGuess} `;

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right.';
        lastResult.style.backgroundColor = 'green';
        loworHi.textContent = ' ';
        setGameOver();
    }

    else if (guessCount === 10) {
        lastResult.textContent = 'Game Over.'
        loworHi.textContent = ' ';
        setGameOver();
    }
    else {
        lastResult.textContent = 'Wrong';
        lastResult.style.backgroundColor = "red";

        if (userGuess < randomNumber)
            loworHi.textContent = 'Last Guess was too low.';
        else if (userGuess > randomNumber)
            loworHi.textContent = 'Last Guess was too High.';
    }
    guessCount++;
    guessfield.value = ' ';
    guessfield.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessfield.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start New Game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame());
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultparas p');

    for (const resetPara of resetParas) {
        resetPara.textContent = ' ';
    }

    resetButton.parentNode.removechild(resetButton);

    guessfield.disabled = false;
    guessSubmit.disabled = false;
    guessfield, value = ' ';
    guessfield.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.floor() * 100) + 1;
}