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
const game = new Game; 

game.disableOnScreenKeyboard();
document.querySelector('#btn__reset').addEventListener('click', () => game.startGame() );




