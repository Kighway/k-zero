$(document).ready(function(){
  $('.choose-millennium-falcon').click(function(){
    $("#ship").attr("src", "./images/millennium-falcon.jpg")
    $("#ship").css("opacity", "1.0")
  })

  $('.choose-x-wing').click(function(){
    $("#ship").attr("src", "./images/x-wing.jpg")
    $("#ship").css("opacity", "1.0")
  })
})

function start() {
  document.addEventListener('keydown', moveShip)
  $("#starwars").remove()
  moveShip()
  graphSine = setInterval(graphOneSine, 44)
  counter = setInterval(timer, 1000)
  setTimeout( () => {$("#timer").css("font-size", "100px")}, 1000)
  $("audio")[0].pause()
  $("audio")[1].play()
  setTimeout(function(){ $("audio")[2].play() }, 4200)
  setTimeout(function(){ $("audio")[3].play() }, 20000)
}

function endGame() {
  clearInterval(counter)
  clearInterval(graphSine)
  var explosion = `<img id="explosion" src="images/explosion.gif" style="bottom: 70px; left: ${$("#ship").css("left")};">`
  $("#ship").remove()
  $("#view").append(explosion)
  setTimeout( () => { $("#view").children().remove() } , 250)
  setTimeout(() => { $("#view").css('background-image', 'url(./images/vader.jpg)') }, 200)
  $("audio")[4].play()
  $("audio")[5].play()
  $("audio")[6].play()
}
