// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

// TABLE GRID SELECTION //

let grid = document.getElementsByTagName('TD')

// BOING SOUND EFFECT //

let boing = new Audio(`./whack-audio.wav`)
function playBoing() {
  boing.currentTime = 0
  boing.play()
}

// MOLE PLACEMENT //

let mole
function moleSpawn() {
  grid[
    getRandomInt(0, grid.length - 1)
  ].innerHTML = `<img src='./mole.PNG' id='mole-pic'>`
  mole = document.getElementById('mole-pic')
  moleWhacker()
}
moleSpawn()

// LISTEN FOR MOLE AND WHACK //

let score = 0
function scoreTracker() {
  score++
  document.getElementById('score').innerText = `SCORE: ${score}`
}

function moleWhacker() {
  for (let i = 0; i < grid.length; i++) {
    mole.onclick = () => {
      playBoing()
      mole.parentNode.innerHTML = ``
      moleSpawn()
      scoreTracker()
    }
  }
}

// RANDOM NUMBER GENERATOR //

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
