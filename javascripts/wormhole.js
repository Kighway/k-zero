var i = 0
breachInterval = 0
currentBreach = 0
lastBreach = 0
gameOver = false

function graphOneSine () {
    wormholePulse(SINE[i++])
    if (i  === SINE.length - 1) {
      i = 0
    }
}

function breachWormhole(wormhole) {
  const top = shipPositionToInteger(wormhole.style.top)
  if (top > 620) {
    const leftWing = shipPositionToInteger(document.getElementById("ship").style.left)
    const rightWing = leftWing + 68;
    const wormholeLeftEdge = shipPositionToInteger(wormhole.style.left)
    const wormholeRightEdge = wormholeLeftEdge + 150;
    if (lastBreach === 0) {
      lastBreach = (new Date()).getTime()
    }
    if (
      (wormholeLeftEdge <= leftWing && wormholeRightEdge >= leftWing) ||
      (wormholeLeftEdge >= leftWing && wormholeRightEdge <= rightWing) ||
      (wormholeLeftEdge <= rightWing && wormholeRightEdge >= rightWing) )
  {
         currentBreach = (new Date()).getTime()
         breachInterval = currentBreach - lastBreach
        if (breachInterval > 20)
        {
          return true
        }
      lastBreach = currentBreach
      }
  }
}

function wormholePulse(leftPoint) {
  const wormhole = document.createElement('div')
  wormhole.className = 'wormhole'
  wormhole.style.left = `${leftPoint}px`
  var top = wormhole.style.top = 0
  document.getElementById("view").append(wormhole)
  function wormHoleFluctuation() {
    wormhole.style.top = `${top += 6}px`;
    if (breachWormhole(wormhole)) {
      gameOver = true
      return endGame()
    }
    if (top < 750) {
      window.requestAnimationFrame(wormHoleFluctuation)
    } else {
      wormhole.remove()
    }
  }
  window.requestAnimationFrame(wormHoleFluctuation)

}
