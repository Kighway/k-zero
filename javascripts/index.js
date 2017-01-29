function start() {
  document.addEventListener('keydown', moveShip)
  $("#starwars").remove()
  moveShip()
  graphSine = setInterval(graphOneSine, 44)
  $("audio")[0].play()
  counter = setInterval(timer, 1000)
  setTimeout( () => {$("#timer").css("font-size", "100px")}, 1000)

}

function endGame() {
  clearInterval(counter)
  clearInterval(graphSine)
  var explosion = `<img id="explosion" src="images/explosion.gif" style="bottom: 30px; left: ${$("#ship").css("left")};">`
  $("#ship").remove()
  $("#view").append(explosion)
  setTimeout( () => { $("#view").children().remove() } , 250)
  setTimeout(() => { $("#view").css('background-image', 'url(./images/vader.jpg)') }, 200)
  $("audio")[1].play()
  $("audio")[2].play()
}
