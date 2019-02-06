'use strict';

/******************************************
Treehouse Techdegree:
FSJS project 4 - OOP Game Show App
Reinhard Liess, 2019
******************************************/

// class for easier creating/appending of elements
class DOMhelper {
  constructor() {}
  
  /** 
  * Creates DOM element with options
  * @param (string) elementName - element to create
  * @param (object) oProps - HTML attributes as key/value pairs
  * @return {DOMelement} element - returns created element
  */ 
  createElementEx(elementName, oProps) {
    const element = document.createElement(elementName);
    
    for (const prop in oProps) {
        if ( oProps.hasOwnProperty(prop) ) {
          element[prop] = oProps[prop];
        }
    }
    return element;
  }
  
  /** 
  * Appends child to node with options
  * @param (string) elementName - element to append
  * @param (DOMelement) target - element to append to
  * @param (object) oProps - HTML attributes as key/value pairs
  * @return {DOMelement} element - returns appended element
  */ 
  // adds tag to target element as a child, sets HTML attributes in oProps
  appendChildEx(elementName, target, oProps) {
    const element = this.createElementEx(elementName, oProps);
    
    target.appendChild(element);
    return element;
  } 


}