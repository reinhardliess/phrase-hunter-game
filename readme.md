# JavaScript Techdegree Project #4: OOP Game Show App

A live version of this project can be found [here](https://rliess.github.io/js-techdegree-project4/).

Installation: Just download and open `index.html` with your favorite web browser.

The goal of this project was to create a browser-based, word guessing game "Phrase Hunter" using JavaScript and OOP (Object-Oriented Programming).

## Basic Project requirements

* Use object-oriented JavaScript(OOJS) to create two classes(game.js and phrase.js) with specific methods and properties to manage the game.
* Select a random, hidden phrase, which a player tries to guess, by clicking letters on an on-screen keyboard.
* Your code will choose a random phrase of a collection of five phrases, split the phrase into letters, and put those letters onto the game board.
* Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase. If the letter is in the phrase at least once, the game board displays the chosen letters on the screen.
* A player continues to select letters until they guess the phrase (and win), or make five incorrect guesses (and lose). 
* If the selected letter is not in the phrase, one of the player's hearts in the scoreboard is changed from a "live" heart to a "lost" heart.
* If the player completes the phrase before they run out of guesses, a winning screen appears. If the player guesses incorrectly five times, a losing screen appears.
* A player can guess a letter only once. After they've guessed a letter, the letter must be disabled on the on-screen keyboard.


## Exceeds Grade Project Requirements

* Let players use their physical computer keyboard to enter guesses.
* The general layout should remain the same, but feel free to make the project your own by experimenting with things like color, background color, font, borders, shadows, transitions, animations, filters, etc.


### Some Additional remarks

* Added functionality
    * The game tracks which phrases were guessed correctly and lets the player continue until all phrases are guessed
    * If all phrases were guessed a message is displayed, the _Start Game_ button is hidden and the game is over
    * Because of these additions some game logic, as laid out in the project's instructions, had to be changed (see app.js and game.js)
* Created two extra classes
    * AnimateCss: wrapper class for access to animate.css
    * DOMhelper: For an easier way to create/append elements in the DOM.
* I used the `keydown` event to implement physical keyboard support because `keypress`is deprecated in the current [W3C specifications](https://www.w3.org/TR/uievents/#event-type-keypress)  

#### Design changes / CSS

* Color
    * Background color showing matched letters of phrase is matched with background color of hearts (slightly different shade)
    * Background color showing a chosen letter on the on-screen keyboard is matched with the win color (slightly different shade)
    * Background color showing a wrong letter on the on-screen keyboard is matched with the lose color (slightly different shade)
* Animations
    * Created help message with fade-in/fade-out letting the player know that both the physical and on-screen keyboard can be used to select a letter
    * If selecting a wrong letter, a heart is faded out down and the remaining hearts are moved to the left - reminiscent of some old-school video games (instead of changing the background image to `lostHeart.png`).
    * If all phrases are guessed correctly a congratulation message is zoomed in
* Styles
    * Added glow to the _Start Game_ button

#### Some additional coding conventions

* I tried to write the code as clear as possible; all class methods are commented, additional comments only when they seemed necessary
* Constants are all uppercase, spaced out with underscores for readability
* Additional spaces around nested function calls


