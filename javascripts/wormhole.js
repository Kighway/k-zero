var i = 0

var graphSine = setInterval(graphOneSine, 0.0001)

function endGame() {
  clearInterval(graphSine)
  $("#view").children().remove()
  $("#view").css('background-image', 'url(./images/vader.jpg)')
}

////function = make new sine piece
function graphOneSine () {
    wormholePulse(SINE[i++])
    if (i  === SINE.length - 1) {
      i = 0
    }
}
