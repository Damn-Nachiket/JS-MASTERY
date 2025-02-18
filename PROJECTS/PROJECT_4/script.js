let randomNumber = parseInt(Math.random() * 100 + 1)

const userInput = document.querySelector('#guessNum')
const submit = document.querySelector('#sub')
const previous = document.querySelector('.pguess')
const remain = document.querySelector('.rguess')
const LowHigh = document.querySelector('.LowOrHigh')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value);
        validateGuess(guess)
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter valid number")
    } else if (guess < 1) {
        alert(" Please Enter a Number More than 1")
    } else if (guess > 100) {
        alert(" Please Enter a Number Less than 100")
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over . Number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(" You Guessed It right")
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(" Guess Number is Toooo Low")
    } else if (guess > randomNumber) {
        displayMessage(" Guess Number is Tooo High")
    }
}

function displayGuess(guess) {
    userInput.value = ""
    previous.innerHTML += `${guess} , `
    numGuess++
    remain.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    LowHigh.innerHTML = `<h2> ${message} </h2>`
}

function endGame() {
    userInput.value = "";
    userInput.setAttribute('disabled' , '');
    p.classList.add('button')
    p.innerHTML = '<h2 id="newGame"> Start New Game</h2>'
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.getElementById("newGame")
    newGameButton.addEventListener('click' , function(e){
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        previous.innerHTML = ''
        remain.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled' , '')
        startOver.removeChild(p)

        playGame = true
    })
}