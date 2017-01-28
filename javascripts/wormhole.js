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
      endGame()
    }
    if (top < YAXIS) {
      window.requestAnimationFrame(wormHoleFluctuation)
    } else {
      wormhole.remove()
    }
  }
  window.requestAnimationFrame(wormHoleFluctuation)
}
