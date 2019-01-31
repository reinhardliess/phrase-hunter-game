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
  * Display phrase on game board 
  */ 
  addPhraseToDisplay() {
    let string = '';
    [...this.phrase].forEach(letter => {
      string += `<li class=${letter === ' ' ? "space" : "hide letter ${letter}}">${letter}</li>`;
    });
    document.querySelector('#phrase > ul').innerHTML = string;
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

