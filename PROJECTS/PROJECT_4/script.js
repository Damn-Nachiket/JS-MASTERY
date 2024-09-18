const randomNumber = parseInt(Math.random()*100+1)

const userInput = document.querySelector('#guessNum')
const submit = document.querySelector('#sub')
const previous = document.querySelector('.pguess')
const remain = document.querySelector('.rguess')
const LowHigh = document.querySelector('.LowOrHigh')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')
