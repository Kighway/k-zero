var i = 0

var graphSine = setInterval(graphOneSine, 0.0001)

function stopGraph() {
  clearInterval(graphSine)
  $("#view").children().remove()
  // debugger
}

////function = make new sine piece
function graphOneSine () {
    wormholePulse(SINE[i++])
    if (i  === SINE.length - 1) {
      i = 0
    }
}
