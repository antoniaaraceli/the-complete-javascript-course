'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        // When there is not input
        document.querySelector('.message').textContent = '🚫 No number!'

        // When the player wins
    } else if(guess === secretNumber){
       document.querySelector('.message').textContent = '🎉 Correct Number';
       document.querySelector('body').style.backgroundColor = '#60b347';
       document.querySelector('.number').style.width = '30rem';
       document.querySelector('.number').textContent = secretNumber;
       if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
       }

       // When guess is wrong
       } else if(){

       } else if(guess > secretNumber){
        // When guess is too high
        if(score > 1){
            document.querySelector('.message').textContent = '📈 Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😢 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
       
    } else if(guess < secretNumber){
        // When guess is too low
        if(score > 1){
            document.querySelector('.message').textContent = '📉 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😢 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }

    }
    
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
});