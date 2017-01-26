const GAME_HEIGHT = 750
// const DODGER = document.getElementById('dodger')
const GAME = document.getElementById('game')
const ROADSLICES = []

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    goLeft()
  }
  else if (e.which === 39) {
    goRight()
  }
})

function goLeft() {
  var leftNumbers = racer.style.left.replace('px', '')
  var left = parseInt(leftNumbers)

  if (left > 0) {
    racer.style.left = `${left - 30}px`
  }
}

function goRight() {
  var leftNumbers = racer.style.left.replace('px', '')
  var left = parseInt(leftNumbers)

  if (left < 390) {
    racer.style.left = `${left + 30}px`
  }
}

function createRoadDx(leftPoint) {
  const road = document.createElement('div')

  road.className = 'road'
  road.style.left = `${leftPoint}px`

  var top = road.style.top = 0

  GAME.appendChild(road)

  function moveRoad() {
    road.style.top = `${top += 2}px`;

    // if (checkCollision(road)) {
    //   return endGame()
    // }

    if (top < GAME_HEIGHT) {
      window.requestAnimationFrame(moveRoad)
    } else {
      road.remove()
    }
  }
  window.requestAnimationFrame(moveRoad)

  ROADSLICES.push(road)

// return road

}
