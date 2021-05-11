let wordParagraph = document.getElementById(`wordParagraph`)
let startButton = document.getElementById(`startButton`)
let colorButtons = document.getElementsByClassName(`color`)

let count = 0
let startTime

startButton.addEventListener(`click`, start)

for (let button of colorButtons) {
  button.addEventListener(`click`, selectColor)
}

function start() {
  startButton.style.display = `none`

  for (let button of colorButtons) {
    button.style.display = `inline`
  }

  count = 0
  startTime = Date.now()
  pickRandomColor()
}

function pickRandomColor() {
  let randomNumber = Math.floor(Math.random() * colorButtons.length)
  wordParagraph.innerHTML = colorButtons[randomNumber].innerHTML

  randomNumber = Math.floor(Math.random() * colorButtons.length)
  wordParagraph.style.color = colorButtons[randomNumber].innerHTML

  count = count + 1
}

function selectColor() {
  if (this.innerHTML == wordParagraph.style.color) {
    if (count < 5) {
      pickRandomColor()
    } else {
      let time = (Date.now() - startTime) / 1000
      wordParagraph.innerHTML = `Time: ${time} seconds`
      gameOver()
    }
  } else {
    wordParagraph.innerHTML = `You lose`
    gameOver()
  }
}

function gameOver() {
  wordParagraph.style.color = `black`
  startButton.style.display = `inline`

  for (let button of colorButtons) {
    button.style.display = `none`
  }
}
