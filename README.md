# Word-Guess-Game

## What it does

This is a basic hangman style game, themed after my current favorite videogame: Overwatch. All of the mystery words are taken from the game, so you could be guessing a character name, a special ability, or a map location.

After pressing any key to start the game, you'll see an area with blank spaces for all of the letters in the mystery word. There's an area that keeps track of your wins, losses, and how many guesses you have left for the current word. This will display on the right side for medium-width and larger screens, and towards the top for smallers screens.

You guess letters by pressing keys on the keyboard. As you press keys, they'll be displayed on the screen somehow. Correct letters will fill into the mystery word. Incorrectly guessed letters will show up in the appropriate section. You have 8 guesses per word. I added some code so that you won't be penalized for guessing the same incorrect letter twice. Aren't I nice?

The game is over when the user correctly guesses the word or runs out of guesses. The message area at the top will let them know whether they won or lost, and what the game's word was. A new game is automatically started after winning or losing.

## Stuff left to do

- [ ] Add code to display an image at the bottom when the user wins or loses the game.
    - This image should disappear after the user guesses their first letter on a new game.
- [ ] Add code to play a sound when the user wins or loses the game.
- [ ] Add some kind of validation for key presses so keys like Tab or numbers aren't counted.
    - I probably could have done this by adding an array of all the letters of the alphabet and checking against that, but there's probably some built in JS method that I don't know about yet that can do that for me.
- [ ] Stylize the text more.
    - Ideally I'd like the header text to have a black outline and have the inside be some kind of gradient, fading down from gold to a lighter shade.
- [ ] Add buttons to select a difficulty
    - The buttons will be for Easy, Normal, and Hard mode. The difficulty will change the number of guesses you get. Easy is 10 guess, Normal is 8, Hard is 6.