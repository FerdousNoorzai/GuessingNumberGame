'use strict';
let resetButton = document.querySelector('.again')
let scoreD = document.querySelector('.number')
let input = document.querySelector('.guess')
let checkB = document.querySelector('.check')
let displayMessage = document.querySelector('.message')
let displayScore = document.querySelector('.score')
let displayHighScore = document.querySelector('.highscore')

let randomScore = Math.floor(Math.random() * 21);
let chances = 20;

checkB.addEventListener('click', function() {
    let s = Number(input.value)
    displayScore.textContent = --chances;
    if (s > randomScore) {
        displayMessage.textContent = "The number is too high"
    } else if (s < randomScore) {
        displayMessage.textContent = "The number is too Low"
    } else if (s == randomScore) {
        displayMessage.textContent = "Congratulations! You won!"
        scoreD.textContent = displayHighScore.textContent = s
        checkB.disabled = true
    }
})

resetButton.addEventListener('click', function() {
    //Reset the overall game
    location.reload();
    randomScore = Math.floor(Math.random() * 21);
})