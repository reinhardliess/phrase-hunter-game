'use strict';

/******************************************
  Treehouse Techdegree:
  FSJS project 4 - OOP Game Show App
  Reinhard Liess, 2019
******************************************/

/* Some additional conventions
  
  * constants are all uppercase, spaced out with underscores for readability
  * In for loop conditions, the length of DOM collections is cached in a variable
  * Additional spaces around nested function calls 
  
*/ 

// Global declarations

// symbolic constants

let game; 

document.querySelector('#btn__reset').addEventListener('click', event => {
  game = new Game;
  game.startGame();
  
  const qwerty = document.querySelector('#qwerty');
  qwerty.addEventListener('click', event => {
    console.log('button event', event);
    if (event.target.tagName === 'BUTTON') {
      game.handleInteraction(event.target);
    }
  });
  
  document.addEventListener('keydown', event => {
    const button = game.translateKey(event.key);
    if (button) {
      game.handleInteraction(button);
    }
  });
});

// document.addEventListener('keypress', event => {
// game.handleInteraction( game.translateKey(event.key) );
// });



