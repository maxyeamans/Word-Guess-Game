var GameData = {
    "Wins": 0,
    "Losses": 0,
    "GuessesLeft": 0,
    "GameOver": true,
    "GameWord": null,
    "CorrectLetters": 0,
    "GuessedLetters": [],
    "WordBuilder": ["_"],
    "WordSoFar": "",

    // Assign the game's word from an array of potential words
    PickWord: function () {
        
        // Reset game stats
        this.ResetStats();
        // Show stats
        console.log("Wins:", this.Wins);
        console.log("Losses:", this.Losses);
        // Pick a new word        
        this.GameWord = gameWords[Math.floor(Math.random() * gameWords.length)];
        console.log("Type a letter and see if it works!");
        // console.log("Game has been won:", this.GameWon);
        // Create a string with underscores equal to length of game's word
        for (i = 0; i < this.GameWord.length - 1; i++) {
            this.WordBuilder.push("_");
        };
    },

    LetterPicked: function (letter) {
        // Set the letter to lowercase justincase, might not be needed
        // letter = letter.toLowerCase();
        // Check to see if the letter has already been guessed
        if (this.GuessedLetters.indexOf(letter) >= 0 || this.WordSoFar.indexOf(letter) >= 0) {
            // Do nothing if the letter has already been guessed, correctly or incorrectly
            return;
        }
        // Do this if the letter isn't in the word
        else if (this.GameWord.indexOf(letter) < 0) {
            console.log("That letter isn't in the word!");
            // Push the wrong letter to the GuessedLetters array
            this.GuessedLetters.push(letter);
            console.log("Guessed letters:", this.GuessedLetters);
            // Decrement guesses left
            this.GuessesLeft--;
            console.log("Guesses left:", this.GuessesLeft);
        }
        // Do this if the letter is in the word
        else {
            // Add the letter to the correct letters array
            for (j = 0; j < this.GameWord.length; j++) {
                if (this.GameWord.charAt(j) === letter) {
                    this.WordBuilder[j] = letter;
                    this.CorrectLetters++;
                }
            }
            // Create a string from the correct letters array.
            // Probably won't need this once I'm displaying it on a web page.
            this.WordSoFar = "";    // Have to erase the string before recreating it.
            for (k = 0; k < this.GameWord.length; k++) {
                this.WordSoFar += this.WordBuilder[k];
            }
            console.log("The word so far:", this.WordSoFar);
        }

        console.log("Correctly guessed letters:", this.CorrectLetters);
        this.CheckForWin();
    },

    CheckForWin: function () {

        // If the number of correctly guessed letters
        // equals the length of the word, user wins.
        if (this.CorrectLetters == this.GameWord.length) {
            console.log("Congrats! You win!\n\n");
            this.Wins++;
            this.GameOver = true;
            console.log("Press any key to start a new game.\n\n");
            return;
        }

        else if (this.GuessesLeft == 0) {
            console.log("You lose! Good day, sir!");
            console.log("");
            this.Losses++;
            this.GameOver = true;
            console.log("Press any key to start a new game.\n\n");
            return;
        }

        
    },

    // Reset game stats
    ResetStats: function () {
        this.GuessesLeft = 6;
        this.GameWon = false;
        this.CorrectLetters = 0;
        this.GuessedLetters = [];
        this.WordBuilder = ["_"];
        this.WordSoFar = "";
    }

}

// Array holding potential list of words for each game
var gameWords = ["hangman", "programming", "parameter", "argument", "stylesheet","galavant","basketball","cookies","sausage"];

// Choose the game's word
// GameData.PickWord();
console.log("Press any key to begin.\n\n");


document.onkeyup = function (event) {

    if (GameData.GameOver == false) {
    var userInput = event.key.toLowerCase();
    console.log("User input:", userInput);
    GameData.LetterPicked(userInput);
    }
    
    else if (GameData.GameOver == true) {
        GameData.GameOver = false;
        GameData.PickWord();
    }

    
}