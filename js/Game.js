'use strict';

/******************************************
Treehouse Techdegree:
FSJS project 4 - OOP Game Show App
Reinhard Liess, 2019
******************************************/
 
class Game {
  constructor() {
    this.missed = 0;
    this.keys = this.createKeys();
    this.phrases = this.createPhrases();
    this.activePhrase = null;
    this.helpDisplayed = false;
  }
  
  /** 
  * 
  * @return {number} Returns the index of this.activePhrase in this.phrases 
  */ 
  get activePhraseIndex() {
    return this.phrases.findIndex(phrase => phrase.phrase = this.activePhrase.phrase);
  }
  
  /** 
  * 
  * @return {number} Returns number of phrases that are still to guess
  */ 
  get phrasesToGuess() {
    return this.phrases.filter(phrase => !phrase.guessed).length;
  }
  
  /** 
  * Creates phrases for use in game 
  * @return {array} An array of phrases that are used in the game 
  */ 
  createPhrases() {
    
  }
  
  /** 
  * Creates key array for translation of a pressed key to a button element of the on-screen keyboard 
  * The y:x index of a key can be used as the nth-child - 1 respectively to target the button in this.translateKey  
  * @return {array} A 2D array of keys representing the on-screen keyboard
  */ 
  createKeys() {
    
    const keys = [];
    const numRows = document.querySelectorAll('#qwerty > .keyrow').length;
    for(let y = 0; y < numRows; y++) {
      const buttons = document.querySelectorAll(`#qwerty > div:nth-child(${y + 1}) button`);
      const row = [...buttons].map(button => button.textContent);
      keys.push(row);
    }
    console.table(keys);
    return keys;
  }
  
  /** 
  * Translates key of a keypress event to a button element of the on-screen keyboard
  * @param  {string} key
  * @return {HTMLButtonElement} 
  */
  translateKey(key) {
    for(let y = 0; y < this.keys.length; y++) {
      for(let x = 0; x < this.keys[y].length; x++) {
        if (this.keys[y][x] = key) {
          const button = document.querySelector(`#qwerty > div:nth-child(${y + 1}) > button:nth-child(${x + 1})`)
          console.log('Key: %s, textContent: %s', key, button.textContent);
          return button;
        }
      }
    }
  }
  
  /** 
  * Selects random phrase from phrases property that wasn't already guessed  
  * @return {Object} Phrase object chosen to be used 
  */ 
  getRandomPhrase() {
    const phrases = this.phrases.filter(phrase => !phrase.guessed);
    const index   = Math.floor(Math.random() * phrases.length);
    return phrases[index];
  }
  
  /** 
  * Shows help message  
  */ 
  showHelp() {
  
  }
  
  /** 
  * Handles on-screen keyboard button clicks 
  * @param (HTMLButtonElement) button - The clicked button element 
  */ 
  handleInteraction(button) {
  
  }
  
  /** 
  * Begins game by selecting a random phrase and displaying it to user 
  */
  startGame() {
  
  }
  
  
 /** 
 * Checks for winning move 
 * @return {boolean} True if game has been won, false if game wasn't won  
 */ 
  checkForWin() {
  
  }
  
  /** 
  * Increases the value of the missed property 
  * Removes a life from the scoreboard 
  * Checks if player has remaining lives and ends game if player is out 
  */ 
  removeLife() {
  
  }
  
  /** 
  * Displays game over message 
  * @param {boolean} gameWon - Whether or not the user won the game 
  */ 
  gameOver(gameWon) {
 
  }
  
  /** 
  * Resets the game 
  */ 
  reset() {
  /* 
  // remove listitems when resetting the game
  listItems = document.querySelector('#phrase > ul li');
  [...listItems].forEach( (listItem) => {
  
  })
  */
  
  }
  
}


 

