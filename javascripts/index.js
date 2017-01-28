function start() {
  document.addEventListener('keydown', moveShip)
  $("#starwars").remove()
  moveShip()
  graphSine = setInterval(graphOneSine, 0.0001)
  counter = setInterval(timer, 1000)
  $("audio")[0].play()
}

function endGame() {
  clearInterval(counter)
  clearInterval(graphSine)
  var explosion = `<img id="explosion" src="images/explosion.gif" style="bottom: 30px; left: ${$("#ship").css("left")};">`
  $("#ship").remove()
  $("#view").append(explosion)
  setInterval( () => { $("#view").children().remove() } , 250)
  setInterval(() => { $("#view").css('background-image', 'url(./images/vader.jpg)') }, 200)
}
