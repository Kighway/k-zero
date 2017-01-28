
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
