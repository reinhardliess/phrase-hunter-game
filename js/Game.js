
/******************************************
Treehouse Techdegree:
FSJS project 4 - OOP Game Show App
Reinhard Liess, 2019
******************************************/
 
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
    this.keys = this.createKeys();
    this.helpDisplayed = false;
  }
  
  /** 
  * 
  * @return {number} Returns the index of this.activePhrase in this.phrases 
  */ 
  get activePhraseIndex() {
  
  }
  
  /** 
  * 
  * @return {number} Returns number of phrases that are still to guess
  */ 
  get phrasesToGuess() {
  
  }
  
  /** 
  * Creates phrases for use in game 
  * @return {array} An array of phrases that are used in the game 
  */ 
  createPhrases() {
  
  }
  
  /** 
  * Creates key array for translation of a pressed key to a button element 
  * @return {array} A 2D array of keys representing the on-screen keyboard
  */ 
  createKeys() {
    // get buttons
    // document.querySelectorAll('#qwerty > div:nth-child(n) button')

  }
  
  /** 
  * Translates key of a keypress event to a button element of the on-screen keyboard
  * @param  {string} key
  * @return {HTMLButtonElement} 
  */
  translateKey(key) {
  // document.querySelector('#qwerty > div:nth-child(2) > button:nth-child(3)')
  }
  
  /** 
  * Selects random phrase from phrases property that wasn't already guessed  
  * @return {Object} Phrase object chosen to be used 
  */ 
  getRandomPhrase() {
  // Take into account phrases.guessed prop and .filter array first.
  
  }
  
  /** 
  * Shows help message  
  */ 
  showHelp() {
  
  }
  
  /** 
  * Handles onscreen keyboard button clicks 
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
  
  
}


 

/* 
 // remove listitems when resetting the game
listItems = document.querySelector('#phrase > ul li');
[...listItems].forEach( (listItem) => {
  
})
 */