/* Things I want to track in this game:
    user score
    user attempts
    guessed letters
    key presses
    random word choice (not just referring to the array because fuck that)
    will fill in more as I remember them
    regex to validate key input
    */

var gameData = {
    //used to store user score
    userScore: 0,
    //used to store attempts
    userAttempts: 5,
    //used to store letters guessed so far
    guessedLetters: [],
    //stores dashes and letters
    blankArray: [],
    //this regex checks for alphabetical characters and only allows them to pass as true
    regEx: /[a-z]/,
    //bank to choose words from, specifically avoided ones with spaces because I don't know what to do with that
    wordBank: ["aquarius", "aquila", "aries", "auriga", "cancer", "capricornus", "cassiopeia", "cygnus", "gemini", "orion", "pegasus", "perseus", "pisces", "sagittarius", "scorpius", "taurus", "virgo"],
    //randomly chooses a word from the above bank and splits it in to an array
    chooseWord() {
        var splitWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
        this.word = splitWord.split('');
    },

    fillBlank() {
        for (var i = 0; i < this.word.length; i++) {
            this.blankArray.push('_');
            document.getElementById("word-array").innerHTML = this.blankArray.join(' ');
        }
    },

    updateScore() {
        document.getElementById("user-score").innerHTML = "Your current score is: " + this.userScore;
        document.getElementById("attempts-remaining").innerHTML = "You have: " + this.userAttempts + " attempts remaining, keep going!"
    },

    updateArray() {
        document.getElementById("word-array").innerHTML = this.blankArray.join(' ');
    },

    compareAll(keyPress) {
        if (this.regEx.test(keyPress) === true) {
            console.log("actually fucking working for once");
            console.log(this.regEx.test(keyPress))
            if (this.word.indexOf(keyPress) !== -1) {
                console.log("step ????")
                for (var i = 0; i < this.word.length; i++) {
                    console.log("made it this far");
                    if (this.word[i] === keyPress) {
                        let swap =
                            this.blankArray[i] = this.word[i];
                    }
                }
            }
            else {
                gameData.userAttempts--
            }
            this.updateArray();
            this.updateScore();
        }

        else {
            alert("That's not a letter in the alphabet. Try again!");
        }

        /*Victory condition: for ( iterate through blankArray ) if ( blankArray[i].indexOf('_'))*/

    },

    game() {
        gameData.userAttempts = 5;
        gameData.chooseWord();
        gameData.fillBlank();
        gameData.updateScore();
    },

}

gameData.game();

document.getElementById("hard-reset").onclick = function () {
    window.location.reload(true)
}

document.getElementById("soft-reset").onclick = function () {
    gameData.game();
}

document.onkeyup = function (event) {
    var keyPress = event.key.toLowerCase();
    gameData.compareAll(keyPress)
}