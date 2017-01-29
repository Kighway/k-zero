function moveShip () {
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
    var leftNumbers = ship.style.left.replace('px', '')
    var left = parseInt(leftNumbers)
    if (left > 0) {
      ship.style.left = `${left - 1}px`
    }
  }
  function turnRight() {
    var leftNumbers = ship.style.left.replace('px', '')
    var left = parseInt(leftNumbers)
    if (left < 330) {
      ship.style.left = `${left + 1}px`
    }
  }
}

function shipPositionToInteger(position) {
  return parseInt(position.split('px')[0]) || 0
}
