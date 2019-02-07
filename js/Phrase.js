'use strict';

/******************************************
Treehouse Techdegree:
FSJS project 4 - OOP Game Show App
Reinhard Liess, 2019
******************************************/

// class to manage the displayed phrase
class Phrase {
  constructor(phrase) {
    // filter out anything that isn't an a-z char or a space
    this.phrase = [...phrase.toLowerCase()]
        .filter(letter => (letter >= 'a' && letter <= 'z') || letter === ' ')
        .join('');
    this.guessed = false;
  }
  
  /** 
  * Display phrase on game board 
  */ 
  addPhraseToDisplay() {
    /* HTML to create dynamically example
    <li class="hide letter w">w</li>
    <li class="space"> </li>
    */  
    
    const list = document.querySelector('#phrase > ul');
    const dom = new DOMhelper;
    [...this.phrase].forEach(letter => {
      const strClass = letter === ' ' ? 'space' : `hide letter ${letter}`;
      dom.appendChildEx('li', list, { className: strClass, textContent: letter });
    });
  }
  
  /** 
  * Removes phrase from game board when the game is reset
  */ 
  removePhraseFromDisplay() {
    const listItems = document.querySelectorAll('#phrase > ul li');
    listItems.forEach( listItem => listItem.remove() ); 
  }
  
  /** 
  * Checks if passed letter is in phrase 
  * @param (string) letter - Letter to check 
  */ 
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }

  /**  
  * Displays passed letter on screen after a match is found 
  * @param (string) letter - Letter to display 
  */ 
  showMatchedLetter(letter) {
    const letters = document.querySelectorAll(`#phrase > ul > li[class="hide letter ${letter}"]`);
    letters.forEach( element => element.classList.replace('hide', 'show') );
  }
  
  
}








