'use strict';

/******************************************
Treehouse Techdegree:
FSJS project 4 - OOP Game Show App
Reinhard Liess, 2019
******************************************/

class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
    this.guessed = false;
  }
  
  /** 
  * 
  * @return {DOMelement} Returns element displaying phrase
  */ 
  // get ulPhrase() {
    // return document.querySelector('#phrase > ul');
  // }
  
  /** 
  * Display phrase on game board 
  */ 
  addPhraseToDisplay() {
    /* HTML to create dynamically
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
  * Checks if passed letter is in phrase 
  * @param (string) letter - Letter to check 
  */ 
  checkLetter(letter) {
  
  }

  /**  
  * Displays passed letter on screen after a match is found 
  * @param (string) letter - Letter to display 
  */ 
  showMatchedLetter() {
  
  }
  
  
}

