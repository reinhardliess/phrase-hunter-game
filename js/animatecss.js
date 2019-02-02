'use strict';

/******************************************
Treehouse Techdegree:
FSJS project 4 - OOP Game Show App
Reinhard Liess, 2019
******************************************/

// wrapper class to use animate.css
// adapted from https://github.com/daneden/animate.css
class AnimateCss {
  constructor() {
  
  }
  // TODO: jsdoc
  // TODO: maybe use rest parameter 
  animateNode(node, animationName, callback) {
    node.classList.add('animated', animationName);
    
    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') {
          callback();
        }
    }

    node.addEventListener('animationend', handleAnimationEnd)
  }
  
  animateElement(selector, animationName, callback) {
    const node = document.querySelector(selector);
    this.animateNode(node, animationName, callback);
  }
}