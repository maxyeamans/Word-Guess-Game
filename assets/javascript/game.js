// Array holding potential list of words for each game
var gameWords = ["overwatch","junkrat","reaper","volskaya","tracer","widowmaker","zenyatta","roadhog","dragonblade","dragonstrike","supercharger","earthshatter","nanoboost","transcendence","doomfist","junkertown","numbani","hanamura"];

// Object to store game properties and functions
var GameData = {
    "Wins": 0,
    "Losses": 0,
    "GuessesLeft": 0,
    "GameOver": true,
    "GameWord": null,
    "CorrectLetters": 0,
    "GuessedLetters": [],
    "WordBuilder": [],
    "WordSoFar": "",


    // Assign the game's word from an array of potential words
    PickWord: function () {

        // Reset game stats
        this.ResetStats();
        // // Clear the message area and make it message invisible
        // var keyStart = document.getElementById("message-area");
        // keyStart.setAttribute("class", "invisible");
        // Show wins
        // console.log("Wins:", this.Wins);
        var divWins = document.getElementById("wins");
        divWins.textContent = "Wins: " + this.Wins;
        // Show losses
        // console.log("Losses:", this.Losses);
        var divLosses = document.getElementById("losses");
        divLosses.textContent = "Losses: " + this.Losses;
        // Show guesses left
        var divGuessesLeft = document.getElementById("guesses-left");
        divGuessesLeft.textContent = "Guesses left: " + this.GuessesLeft;
        // Pick a new word        
        this.GameWord = gameWords[Math.floor(Math.random() * gameWords.length)];
        // Create a string string with underscores equal to length of game's word
        // The array is used later to recreate WordSoFar on successful letter guesses
        // console.log("Game word length:", this.GameWord.length);
        for (i = 0; i < this.GameWord.length - 1; i++) {
            this.WordBuilder.push("_");
        };
        // Display the word so far
        this.DisplayWordSoFar();
        // console.log("The word so far:", this.WordSoFar);
    },

    LetterPicked: function (letter) {
        // Check to see if the letter has already been guessed
        if (this.GuessedLetters.indexOf(letter) >= 0 || this.WordSoFar.indexOf(letter) >= 0) {
            // Do nothing if the letter has already been guessed
            return;
        }
        // Do this if the letter isn't in the word
        else if (this.GameWord.indexOf(letter) < 0) {
            // console.log("That letter isn't in the word!");
            // Push the wrong letter to the GuessedLetters array
            this.GuessedLetters.push(letter);
            // console.log("Guessed letters:", this.GuessedLetters);
            // Display incorrectly guessed letters
            var divGuessedLetters = document.getElementById("guessed-letters");
            divGuessedLetters.textContent = this.GuessedLetters;
            // Decrement guesses left
            this.GuessesLeft--;
            // console.log("Guesses left:", this.GuessesLeft);
            // Update the displayed guesses left
            var divGuessesLeft = document.getElementById("guesses-left");
            divGuessesLeft.textContent = "Guesses left: " + this.GuessesLeft;
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
            // this.WordSoFar = "";    // Have to erase the string before recreating it.
            // for (k = 0; k < this.GameWord.length; k++) {
            //     this.WordSoFar += this.WordBuilder[k];
            // }
            this.DisplayWordSoFar();
            // console.log("The word so far:", this.WordSoFar);
        }

        // console.log("Correctly guessed letters:", this.CorrectLetters);
        this.CheckForWin();
    },

    // Displays the word with the correctly guessed letters so far
    DisplayWordSoFar: function (letter) {
        var divWordSoFar = document.getElementById("word-so-far");
        this.WordSoFar = "";    // Have to erase the string before recreating it.
        for (k = 0; k < this.GameWord.length; k++) {
            this.WordSoFar += this.WordBuilder[k];
        };
        // Display the word so far on the page
        divWordSoFar.textContent = this.WordSoFar;
    },

    CheckForWin: function () {

        // If the number of correctly guessed letters
        // equals the length of the word, user wins.
        if (this.CorrectLetters == this.GameWord.length) {
            // console.log("Congrats! You win!\n\n");
            // Display win message at the top of the page
            var divGameWin = document.getElementById("message-area");
            divGameWin.textContent = "Congrats! The word was " + this.GameWord.toUpperCase() + ".  You win!";
            divGameWin.setAttribute("class", "visible");
            // Play a victory sound
            var victory = document.getElementById("audio-victory");
            function playAudio() {
                victory.load
                victory.play();
            };
            this.Wins++;
            this.GameOver = true;
            
            // console.log("Press any key to start a new game.\n\n");
            this.PickWord();
        }

        // If the user runs out of guesses, they lose.
        else if (this.GuessesLeft <= 0) {
            // console.log("The word was " + this.GameWord + ". You lose! Good day, sir!\n\n");
            // Display loss message at the top of the page.
            var divGameLose = document.getElementById("message-area");
            divGameLose.textContent = "Defeat! The word was " + this.GameWord.toUpperCase() + ".";
            divGameLose.setAttribute("class", "visible");
            // Saving this for later: display a pic on game lose
            // this.DisplayGameOverPic("../images/defeat.png");
            this.Losses++;
            this.GameOver = true;
            // console.log("Press any key to start a new game.\n\n");
            this.PickWord();
        }


    },

    // Saving this for later
    // Show a pic after the game ends
    // DisplayGameOverPic: function (picSrc) {
    //     // Change the pic source
    //     var picGameOver = document.getElementById("pic-game-over");
    //     picGameOver.setAttribute("src", picSrc);
    //     // picGameOver.setAttribute("class", "w-75");
    // },
    
    // Reset game stats and info displayed on the page
    ResetStats: function () {
        this.GuessesLeft = 8;
        this.GameOver = false;
        this.CorrectLetters = 0;
        this.GuessedLetters = [];
        this.WordBuilder = ["_"];
        this.WordSoFar = "";

        document.getElementById("word-so-far").textContent = "";
        document.getElementById("guessed-letters").textContent = " ";
    }

}

// console.log("Press any key to begin.\n\n");


document.onkeyup = function (event) {
    // Clear the message area and make it invisible
    var messageClear = document.getElementById("message-area");
    messageClear.setAttribute("class", "invisible");

    if (GameData.GameOver == false) {
        var userInput = event.key.toLowerCase();
        // console.log("User input:", userInput);
        GameData.LetterPicked(userInput);
    }

    else if (GameData.GameOver == true) {
        // GameData.GameOver = false;
        GameData.PickWord();
    }


}