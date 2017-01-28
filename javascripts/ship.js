const YAXIS = 750
const SHIP = document.getElementById('ship')
const VIEW = document.getElementById('view')

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
      ship.style.left = `${left - 2}px`
    }
  }
  function turnRight() {
    var leftNumbers = ship.style.left.replace('px', '')
    var left = parseInt(leftNumbers)
    if (left < 330) {
      ship.style.left = `${left + 2}px`
    }
  }
}

function start() {
  document.addEventListener('keydown', moveShip)
  $("#starwars").remove()
  moveShip()
  graphSine = setInterval(graphOneSine, 0.0001)
  counter = setInterval(timer, 1000)
  $("audio")[0].play()
}
