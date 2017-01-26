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
