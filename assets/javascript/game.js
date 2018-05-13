var GameData = {
    "Wins": 0,
    "Losses": 0,
    "GuessesLeft": 10,
    "GameWon": false,
    "GameWord": null,
    "LettersRemaining": null,
    "GuessedLetters": [],
    "WordBuilder": ["_"],
    "WordSoFar": "",

    // Assign the game's word from an array of potential words
    PickWord: function(words) {
        this.GameWord = gameWords[Math.floor(Math.random() * words.length)];
        console.log("This game's word:", this.GameWord);
        this.LettersRemaining = this.GameWord.length;
        console.log("Letters remaining in the word:", this.LettersRemaining);
        // Create a string with underscores equal to length of game's word
        for( i = 0; i < this.GameWord.length - 1; i++) {
            this.WordBuilder.push(" _");
        };
    },

    LetterPicked: function(letter) {
        // Set the letter to lowercase justincase, might not be needed
        // letter = letter.toLowerCase();
        // Check to see if the letter has already been guessed
        if (this.GuessedLetters.indexOf(letter) >= 0) {
            // Do nothing if the letter has already been guessed
            return;
        }
        // Do this if the letter isn't in the word
        else if (this.GameWord.indexOf(letter) < 0) {
            console.log("That letter isn't in the word!");
            this.GuessedLetters.push(letter);
            console.log("Guessed letters:", this.GuessedLetters);
            // Decrement guesses left
            this.GuessesLeft--;
            console.log("Guesses left:", this.GuessesLeft);
        }
        // Do this if the letter is in the word
        else {
            for (j = 0; j < this.GameWord.length; j++) {
                if (this.GameWord.charAt(j) === letter) {
                    this.WordBuilder[j] = letter;
                }
                
            }
            console.log("The word so far:", this.WordBuilder);
        }
    }

}

// Array holding potential list of words for each game
var gameWords = ["hangman", "programming", "parameter", "argument", "stylesheet"];

// Choose the game's word
GameData.PickWord(gameWords);

document.onkeyup = function(event) {

    var userInput = event.key.toLowerCase();
    console.log("User input:", userInput);
    GameData.LetterPicked(userInput);
}