'use strict';

/******************************************
  Treehouse Techdegree:
  FSJS project 4 - OOP Game Show App
  Reinhard Liess, 2019
******************************************/

const NUM_LIVES = 5;

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
    return this.phrases.findIndex(phrase => phrase.phrase === this.activePhrase.phrase);
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
    
    /*    return [ new Phrase('cut somebody some slack'),
      new Phrase('it is not rocket science'),
      new Phrase('your guess is as good as mine'),
      new Phrase('ball') 
    ]; */
    return [ new Phrase('ball') ];
  }
  
  /** 
    * Creates key array for translation of a pressed key to a button element of the on-screen keyboard 
    * The y:x index of a key can be used as the nth-child - 1 respectively to target the button  
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
      const x = this.keys[y].indexOf(key);
      if (x > -1) {
        const button = document.querySelector(`#qwerty > div:nth-child(${y + 1}) > button:nth-child(${x + 1})`);
        console.log('Key: %s, textContent: %s', key, button.textContent);
        return button;
      }
    }
    return null;
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
    * Shows help message below the on-screen keyboard but only once
  */ 
  displayHelp() {
    
    if (this.helpDisplayed) {
      return;
    }
    
    this.helpDisplayed = true;
  }
  
  /** 
    * Handles events from physical or on-screen keyboard 
    * @param (HTMLButtonElement) button - The clicked button element 
  */ 
  handleInteraction(button) {
    console.log(button);
    // necessary if the player used the physical keyboard to choose a key 
    if (button.disabled) {
      return
    }
    const key = button.textContent
    button.disabled = true;
    if ( this.activePhrase.checkLetter(key) ) {
      button.classList.add('chosen');
      this.activePhrase.showMatchedLetter(key);
      if ( this.checkForWin() ) {
        this.gameOver(true);
      }
      } else {
      button.classList.add('wrong');
      this.removeLife();
    }
    
  }
  
  /** 
    * Begins game by selecting a random phrase and displaying it to user 
  */
  startGame() {
    
    document.querySelector('#overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }
  
  
  /** 
    * Checks for winning move 
    * @return {boolean} True if game has been won, false if game wasn't won  
  */ 
  checkForWin() {
    const letters = document.querySelectorAll('#phrase > ul li.letter');
    return [...letters].every(node => node.classList.contains("show") );
  }
  
  /** 
    * Increases the value of the missed property 
    * Removes a life from the scoreboard 
    * Checks if player has remaining lives and ends game if player is out 
  */ 
  removeLife() {
    if (++this.missed === NUM_LIVES) {
      this.gameOver(false);
    } else {
      const heart = document.querySelector(`#scoreboard > ol > li:nth-child(${this.missed})`);
      const css = new AnimateCss;
      css.animateNode(heart, 'fadeOutDown', () => {
        heart.style.display = 'none';
      });
      // TODO: animation
    }
  }
  
  /** 
    * Displays game over message 
    * @param {boolean} gameWon - Whether or not the user won the game 
  */ 
  gameOver(gameWon) {
    
    const overlay = document.querySelector('#overlay');
    const h1 = document.querySelector('#game-over-message');
    overlay.classList.replace('start', gameWon ? 'win' : 'lose');
    // overlay.style.display = '';
    if (gameWon) {
      this.phrases[this.activePhraseIndex].guessed = true;
      if (!this.phrasesToGuess) {
        h1.textContent = '🎉 Congratulations! You guessed all phrases. 🎉';
        let css = new AnimateCss();
        css.animateNode(h1, 'tada');
        // TODO: disable start button
      } else {
          h1.textContent = 'You won!';
      }
        
    } else {
        h1.textContent = 'You lost.';
    }
    if (this.phrasesToGuess) {
      h1.textContent += ` There are still ${this.phrasesToGuess} phrase(s) to guess.`;
    }
    overlay.style.display = '';
      
    }
    
    /** 
      * Resets the game 
    */ 
    reset() {
      /* Remove all li elements from the Phrase ul element.
        Enable all of the onscreen keyboard buttons and update each to use the key CSS class, and not use the chosen or wrong CSS classes.
      Reset all of the heart images (i.e. the player's lives) in the scoreboard at the bottom of the gameboard to display the liveHeart.png image. */
      /* 
        // remove listitems when resetting the game
        
      */
      this.activePhrase.removePhraseFromDisplay();
      
      
    }
    
  }
  
  
  
  
