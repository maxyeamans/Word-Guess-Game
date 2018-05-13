var userInfo = {
    "Wins" : 0,
    "Losses" : 0,
    "GuessesLeft" : 0,
    "GameWon" : false,
    "GameWord" : null,
}

var gameWords = ["hangman","programming","parameter","argument","stylesheet"];

// Picks a word from the word array at random
function PickWord(words) {
    this.GameWord = gameWords[ Math.floor( Math.random() * words.length) ];
}

