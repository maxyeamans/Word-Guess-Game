var GameData = {
    "Wins": 0,
    "Losses": 0,
    "GuessesLeft": 10,
    "GameWon": false,
    "GameWord": null,

    // Assign the game's word from an array of potential words
    PickWord: function(words) {
        this.GameWord = gameWords[Math.floor(Math.random() * words.length)];
        console.log("This game's word:", this.GameWord);
    }

}

// Array holding potential list of words for each game
var gameWords = ["hangman", "programming", "parameter", "argument", "stylesheet"];

// Choose the game's word
GameData.PickWord(gameWords);