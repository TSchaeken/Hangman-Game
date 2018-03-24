var gameData = {
    list: ["orion", "scorpius", "cassiopeia", "taurus", "leo", "gemini", "sagittarius", "centaurus", "virgo", "libra"],
    
    randomizer() {
        var rndm = Math.floor(Math.random() * gameData.list.length);
        this.selection = gameData.list[rndm].split("");
    },
    regEx: /^[A-Za-z]+$/,

    blankArray() {
        var blankArray = [];
        this.selection.forEach(selection => {
            var dick = document.createElement("div");
            document.getElementById("answer-space").appendChild(dick);
        });
        this.gameArray = blankArray.split("");
    },
    scanner(pressKey) {
        var array = [];
        for (var i = 0; i < this.selection.length; i++) {
            if (this.selection[i] === pressKey) {
                this.gameArray[i] = this.selection[i]
            }}
            document.getElementById("answer-space").innerHTML = this.gameArray;
    },

    // scanner(pressKey) {
    //     this.selection.forEach(function(element){
    //         if (element === pressKey) {
    //             console.log(element);
    //         }
    //     })}
    }


document.getElementById("start-button").onclick = function () {
    document.getElementById("start-body").style.display = "none";
    gameData.randomizer();
    gameData.blankArray();


};

document.onkeyup = function (event) {
    var pressKey = event.key;

    // if (result === -1){
    //     alert("incorrect!");
    // }
    // else {
    //     alert("correct!");
    //     gameData.swapper(result);
    // }

}

// var answerArray = [];
//  for (var i = 0; i < word.length; i++) {
//  answerArray[i] = "_";
// }
// var remainingLetters = word.length;