'use strict';

/******************************************
  Treehouse Techdegree:
  FSJS project 4 - OOP Game Show App
  Reinhard Liess, 2019
******************************************/

const NUM_LIVES = 5;

// class to manage the game
class Game {
  constructor() {
    this.missed = 0;
    this.keys = this.createKeys();
    this.phrases = this.createPhrases();
    this.activePhrase = null;
    this.helpDisplayed = false;
    this.eventListenersEnabled = false;
  }

  /**
    * @return {number} Returns number of phrases that are still to guess
  */
  get phrasesToGuess() {
    return this.phrases.filter(phrase => !phrase.guessed).length;
  }
  
  /**
    * @return {DOMColletion} Returns a DOM collection of buttons of the on-screen keyboard
  */
  get qwertyButtons() {
    return document.querySelectorAll('#qwerty > .keyrow button');
  }

  /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that are used in the game
  */
  createPhrases() {

    return [ 
      new Phrase('cut a long story short'),
      new Phrase('it is not rocket science'),
      new Phrase('get bent out of shape'),
      new Phrase('let someone off the hook'),
      new Phrase('to go from rags to riches')
    ];

  }

  /**
    * Disables on-screen keyboard. In rare cases it could happen to 'tab' to an on-screen
    * keyboard button and activate it with the physical keyboard while the overlay is active
    * This also improves keyboard control: The player can now easily tab between the address bar
    * and the 'Start Game/Continue' button
  */
  disableOnScreenKeyboard() {
    this.qwertyButtons.forEach(button => button.disabled = true);
  }
  
  /**
    * Enables on-screen keyboard. 
  */
  enableOnScreenKeyboard() {
    this.qwertyButtons.forEach(button => button.disabled = false);
  }
  
 
  /**
    * Creates key array for translation of a pressed key to a button element of the on-screen keyboard
    * The y:x index of a key can be used to create a CSS selector to target the button
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
    // console.table(keys);
    return keys;
  }

  /**
    * Translates key of a keydown event to a button element of the on-screen keyboard
    * @param  {string} key
    * @return {HTMLButtonElement} found button or null
  */
  translateKey(key) {
    
    for(let y = 0; y < this.keys.length; y++) {
      const x = this.keys[y].indexOf(key);
      if (x > -1) {
        const button = document.querySelector(`#qwerty > div:nth-child(${y + 1}) > button:nth-child(${x + 1})`);
        // console.log('Key: %s, textContent: %s', key, button.textContent);
        return button;
      }
    }
    return null;
  }

  /**
    * Selects random phrase that wasn't already guessed
    * @return {Object} Phrase object chosen to be used
  */
  getRandomPhrase() {
    const phrasesFiltered = this.phrases.filter(phrase => !phrase.guessed);
    const index = Math.floor(Math.random() * phrasesFiltered.length);
    // return valid object reference in this.phrases[], so the guessed property can be updated later
    return this.phrases.find(phrase => phrase.phrase === phrasesFiltered[index].phrase);
  }

  /**
    * Shows help message below the on-screen keyboard but only once
  */
  displayHelp() {

    if (this.helpDisplayed) {
      return;
    }
    this.helpDisplayed = true;

    const help = document.querySelector('#helpmsg');
    // set the help message in the <p> element
    help.children[0].textContent = 'You can select keys by mouse or keyboard';

    // fade in/out of help message
    const css = new AnimateCss;
    css.animateNode(help, 'fadeIn', () => setTimeout( () => css.animateNode(help, 'fadeOut', () => help.style.visibility = 'hidden')
    , 3000) );

  }

  /**
    * Handles events from physical or on-screen keyboard
    * @param (HTMLButtonElement) button - The clicked button element
  */
  handleInteraction(button) {
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
    * Displays help message if necessary
    * Registers event listeners if necessary
    * Might be called multiple times until the player has guessed all phrases
  */
  startGame() {

    document.querySelector('#overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
    // console.log(this.activePhrase);
    this.displayHelp();
    this.enableEventListeners();
    this.enableOnScreenKeyboard();
  }


  /**
    * Enable event listeners for on-screen and physical keyboard
  */
  enableEventListeners() {

    if (this.eventListenersEnabled) {
      return
    }
    this.eventListenersEnabled = true;

    // handle events for on-screen keyboard
    document.querySelector('#qwerty').addEventListener('click', event => {
      if (event.target.tagName === 'BUTTON') {
        // console.log('button event', event);
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
  }


  /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
  */
  checkForWin() {
    const letters = document.querySelectorAll('#phrase > ul li.letter');
    return [...letters].every(node => node.classList.contains("show") );
  }

  /**
    * Increases the value of the missed property
    * Removes a life/heart from the scoreboard by fading it out down
    * Checks if player has remaining lives and ends game if player is out
  */
  removeLife() {
    if (++this.missed === NUM_LIVES) {
      this.gameOver(false);
    } else {
      const heart = document.querySelector(`#scoreboard > ol > li:nth-child(${this.missed})`);
      const css = new AnimateCss;
      css.animateNode(heart, 'fadeOutDown', () => heart.style.display = 'none');
    }
  }

  /**
    * Displays game over message (win/lose)
    * Checks whether all phrases were guessed and displays congratulation message
    * @param {boolean} gameWon - Whether or not the user won the game
  */
  gameOver(gameWon) {

    const overlay = document.querySelector('#overlay');
    const h1 = document.querySelector('#game-over-message');
    const btnReset = document.querySelector('#btn__reset');

    // reset styles for overlay
    overlay.classList.remove('start', 'win', 'lose');
    if (gameWon) {
      overlay.classList.add('win');
      this.activePhrase.guessed = true;
      if (!this.phrasesToGuess) {
        h1.textContent = '🎉 Congratulations! You guessed all the phrases. 🎉';
        let css = new AnimateCss();
        css.animateNode(h1, 'zoomIn');
        btnReset.disabled = true;
        btnReset.style.display = 'none';
      } else {
        h1.textContent = 'You won!';
      }
    } else {
      overlay.classList.add('lose');
      h1.textContent = 'You lost.';
    }
    // console.table(game.phrases)
    if (this.phrasesToGuess) {
      h1.textContent += ` There are still ${this.phrasesToGuess} phrase(s) to guess.`;
      btnReset.textContent = 'Continue';
    }
    overlay.style.display = '';
    this.reset();

  }

  /**
    * Resets the game, so that the player can continue until all phrases are guessed
  */
  reset() {

    this.missed = 0;
    this.activePhrase.removePhraseFromDisplay();
    // display all hearts again
    const hearts = document.querySelectorAll('#scoreboard > ol > li');
    hearts.forEach(heart => heart.style.display = '');
    // reset on-screen keyboard buttons
    this.qwertyButtons.forEach( button => button.classList.remove('chosen', 'wrong') );
    this.disableOnScreenKeyboard();

  }

}




