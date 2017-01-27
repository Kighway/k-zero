const YAXIS = 750
const XWING = document.getElementById('xwing')
const VIEW = document.getElementById('view')
const WORMHOLEPULSES = []

 breachInterval = 0
 currentBreach = 0
 lastBreach = 0

function breachWormhole(wormhole) {
  const top = positionToInteger(wormhole.style.top)
  if (top > 620) {
    const leftWing = positionToInteger(XWING.style.left)
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
      if (breachInterval > 34)
      {
        return true
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

function moveXWing () {
  document.addEventListener('keydown', function(event) {
    if (event.which === 37) {
      event.preventDefault()
      event.stopPropagation()
      turnLeft()
    }
    else if (event.which === 39) {
      event.preventDefault()
      event.stopPropagation()
      turnRight()
    }
  })
  function turnLeft() {
    var leftNumbers = xwing.style.left.replace('px', '')
    var left = parseInt(leftNumbers)
    if (left > 0) {
      xwing.style.left = `${left - 5}px`
    }
  }

  function turnRight() {
    var leftNumbers = xwing.style.left.replace('px', '')
    var left = parseInt(leftNumbers)

    if (left < 330) {
      xwing.style.left = `${left + 5}px`
    }
  }
}






function start() {
  document.addEventListener('keydown', moveXWing)
  $("#starwars").remove()

  moveXWing()

  graphSine = setInterval(graphOneSine, 0.0001)

}
