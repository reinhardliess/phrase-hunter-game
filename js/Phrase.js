'use strict';

/******************************************
Treehouse Techdegree:
FSJS project 4 - OOP Game Show App
Reinhard Liess, 2019
******************************************/

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
    this.guessed = false;
    this.isAnimating = false;
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
  
  removePhraseFromDisplay() {
    // const list = document.querySelector('#phrase > ul');
    const listItems = document.querySelectorAll('#phrase > ul li');
    listItems.forEach( listItem => listItem.remove() ); 
  }
  
  /** 
  * Checks if passed letter is in phrase 
  * @param (string) letter - Letter to check 
  */ 
  checkLetter(letter) {
    return this.phrase.indexOf(letter) > -1;
  }

  /**  
  * Displays passed letter on screen after a match is found 
  * @param (string) letter - Letter to display 
  */ 
  // FIX: Animation conflicts with overlay
  showMatchedLetter(letter) {
    const letters = document.querySelectorAll(`#phrase > ul > li[class="hide letter ${letter}"]`);
    letters.forEach(element => {
      element.classList.replace('hide', 'show');
    });
    
  }
  
  
}








