'use strict';

/******************************************
  Treehouse Techdegree:
  FSJS project 4 - OOP Game Show App
  Reinhard Liess, 2019
******************************************/

/* Some additional conventions for the complete project
  
  * constants are all uppercase, spaced out with underscores for readability
  * Additional spaces around nested function calls 
  
*/ 

// Global declarations
let game; 

document.querySelector('#btn__reset').addEventListener('click', event => {
  game = new Game;
  game.startGame();
  
  // handle events for on-screen keyboard
  const qwerty = document.querySelector('#qwerty');
  qwerty.addEventListener('click', event => {
    // console.log('button event', event);
    if (event.target.tagName === 'BUTTON') {
      game.handleInteraction(event.target);
    }
  });
  
  // handle events for physical keyboard
  document.addEventListener('keydown', event => {
    const button = game.translateKey(event.key);
    if (button) {
      game.handleInteraction(button);
    }
  });
});



