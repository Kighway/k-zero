var i = 0

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
