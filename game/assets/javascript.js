var gameData = {
    list: ["orion", "ursa major", "scorpius", "cassiopeia", "ursa minor",
        "canis major", "taurus", "leo", "gemini", "sagittarius",
        "canis minor", "centaurus", "virgo", "libra"],
    chooseConst() {
        return gameData.list[Math.floor(Math.random() * this.list.length)];
    },

    createBlankAnswer() {
        for (var i = 0; i < this.constellation.length; i++) {

            this.answerArray[i] = "_";
        }
    },

    constellation: [],
    answerArray: [],


}


document.getElementById('start-button').onclick = function () {
    document.getElementById('intro-body').style.display = "none";
    document.getElementById('game-body').style.display = "inline";
    gameData.constellation = gameData.chooseConst().split('');
    game();

}

// function keypress() {
//     var press;
//     document.onkeyup = function (event) {
//         press = event.key;
//     }
//     return press
// }

function game() {
    var length = gameData.constellation.length;
    while (length > 0 ) {
        
    }
}

