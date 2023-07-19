'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.highscore').textContent = 100;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//EVENT LISTENER//
let secretNumber = Math.trunc(Math.random() * 19) + 1;
// document.querySelector('.number').textContent = secretNumber; //displays the random number for development. would be a ? instead in reality
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No number!';

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct answer!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //replacing highscore with score that won
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber
          ? '😢 That number is too high!'
          : '😢 That number is too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤣 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // UNDRY example below- when guess is too high
    //   } else if (guess > secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent =
    //         '😢 That number is too high!';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = '🤣 You lost the game!';
    //       document.querySelector('.score').textContent = 0;
    //     }
    //     //when guess is too low
    //   } else if (guess < secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent =
    //         '😢 That number is too low!';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = '🤣 You lost the game!';
    //       document.querySelector('.score').textContent = 0;
    //     }
    //   }
    // });

    // Coding Challenge #1

    /*
    Implement a game rest functionality, so that the player can make a new guess!
    1. Select the element with 'again' class and attach a click event handler
    2. In the handler function, restore initial values of the score and secretNumber variables.
    3. Restore the initial conditions of the message, number, score and guess input field.
    4. Also restore the original background color and the number width.
    */

    document.querySelector('.again').addEventListener('click', function () {
      score = 20;
      secretNumber = Math.trunc(Math.random() * 19) + 1;
      let guess = Number(document.querySelector('.guess').value);
      document.querySelector('.message').textContent = 'Start guessing...';
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent = '?';
      document.querySelector('.guess').value = '';
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').style.width = '15rem';
      // document.querySelector('.highscore').textContent = 0;
    });
  }
});
