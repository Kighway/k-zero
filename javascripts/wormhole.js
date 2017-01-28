const WORMHOLEPULSES = []

var i = 0
breachInterval = 0
currentBreach = 0
lastBreach = 0
gameOver = false

function endGame() {
  clearInterval(counter)
  clearInterval(graphSine)
  var explosion = `<img id="explosion" src="images/explosion.gif" style="bottom: 30px; left: ${$("#ship").css("left")};">`
  $("#ship").remove()
  $("#view").append(explosion)
  setInterval( () => { $("#view").children().remove() } , 250)
  setInterval(() => { $("#view").css('background-image', 'url(./images/vader.jpg)') }, 200)
}

function graphOneSine () {
    wormholePulse(SINE[i++])
    if (i  === SINE.length - 1) {
      i = 0
    }
}

function breachWormhole(wormhole) {
  const top = positionToInteger(wormhole.style.top)
  if (top > 620) {
    const leftWing = positionToInteger(SHIP.style.left)
    const rightWing = leftWing + 68;
    const wormholeLeftEdge = positionToInteger(wormhole.style.left)
    const wormholeRightEdge = wormholeLeftEdge + 200;

    if (lastBreach === 0) {
      lastBreach = (new Date()).getTime()
    }

    if (
      (wormholeLeftEdge <= leftWing && wormholeRightEdge >= leftWing) ||
      (wormholeLeftEdge >= leftWing && wormholeRightEdge <= rightWing) ||
      (wormholeLeftEdge <= rightWing && wormholeRightEdge >= rightWing)
    ) {
         currentBreach = (new Date()).getTime()
         breachInterval = currentBreach - lastBreach

        if (breachInterval > 34)
        {
          return true
        }
      lastBreach = currentBreach
      }
  }
}

function positionToInteger(p) {
  return parseInt(p.split('px')[0]) || 0
}

function wormholePulse(leftPoint) {
  const wormhole = document.createElement('div')

  wormhole.className = 'wormhole'
  wormhole.style.left = `${leftPoint}px`

  var top = wormhole.style.top = 0

  VIEW.appendChild(wormhole)

  function wormHoleFluctuation() {
    wormhole.style.top = `${top += 6}px`;

    if (breachWormhole(wormhole)) {
      gameOver = true
      return endGame()
    }
    if (top < YAXIS) {
      window.requestAnimationFrame(wormHoleFluctuation)
    } else {
      wormhole.remove()
    }
  }
  window.requestAnimationFrame(wormHoleFluctuation)

  WORMHOLEPULSES.push(wormhole)
}
