var wordDisplay = document.getElementById("word");
var startButton = document.getElementById("start");
var colorButtons = document.querySelectorAll(".color");

var numPicks = 0;
var startTime = null;

startButton.addEventListener("click", start);

for (var i = 0; i < colorButtons.length; i++) {
    colorButtons[i].addEventListener("click", selectColor);
}

function start() {
    numPicks = 0;
    startTime = Date.now();

    pickRandomColor();
    startButton.style.display = "none";

    for (var i = 0; i < colorButtons.length; i++) {
        colorButtons[i].style.display = "initial";
    }
}

function selectColor() {
    if (this.innerHTML == wordDisplay.style.color) {
        if (numPicks < 5) {
            pickRandomColor();
        }
        else {
            var time = (Date.now() - startTime) / 1000;
            wordDisplay.innerHTML = "Time: " + time + " seconds";
            wordDisplay.style.color = "black";
            startButton.style.display = "initial";

            for (var i = 0; i < colorButtons.length; i++) {
                colorButtons[i].style.display = "none";
            }
        }
    }
    else {
        wordDisplay.innerHTML = "You lose";
        wordDisplay.style.color = "black";
        startButton.style.display = "initial";

        for (var i = 0; i < colorButtons.length; i++) {
            colorButtons[i].style.display = "none";
        }
    }
}

function pickRandomColor() {
    var randomNumber = Math.floor(Math.random() * colorButtons.length);
    wordDisplay.innerHTML = colorButtons[randomNumber].innerHTML;

    randomNumber = Math.floor(Math.random() * colorButtons.length);
    wordDisplay.style.color = colorButtons[randomNumber].innerHTML;

    numPicks++;
}
