var gameData = {
    list: ["orion", "ursa major", "scorpius", "cassiopeia", "ursa minor",
        "canis major", "taurus", "leo", "gemini", "sagittarius",
        "canis minor", "centaurus", "virgo", "libra"],
    chooseConst() {
        return gameData.list[Math.floor(Math.random() * this.list.length)];
    },

}

document.getElementById('start-button').onclick = function () {
    document.getElementById('intro-body').style.display = "none";
    document.getElementById('game-body').style.display= "inline";
    game();
}

function keypress () {
    var press;
    document.onkeyup = function (event) {
        press =  event.key;
    }
    return press
}

function game() {
    var constellation = gameData.chooseConst().split('');
    for (var i = 0; i < constellation.length;) {
        value = constellation[i];
        press = keypress();
        console.log(press)
            if (press === value) {
                alert("the same!");
                console.log("finally", constellation[i]);
                i++;
            }

            else {
                alert("different!");
            }
        }

        i++;
    }

