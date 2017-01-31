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
  graphSine = setInterval(graphOneSine, 25)
  counter = setInterval(timer, 1000)
  setTimeout( () => {$("#timer").css("font-size", "100px")}, 1000)
  $("audio")[0].pause() //star wars intro music ends
  $("audio")[1].play() //admiral ackbar hyperspace
  setTimeout(function(){ $("audio")[2].play() }, 4200) //full rogue squadron voice over
  setTimeout(function(){ $("audio")[3].play() }, 20000) //endor music
}

function endGame() {
  clearInterval(counter)
  clearInterval(graphSine)
  if ( $("#ship").attr("src").includes("x-wing") ) {
    $("audio")[4].play() //r2-d2 screaming
  }
  else {  //if ( $("#ship").attr("src").includes("millennium-falcon") )
    $("audio")[5].play() //chewie screaming
  }
  var explosion = `<img id="explosion" src="images/explosion.gif" style="bottom: 70px; left: ${$("#ship").css("left")};">`
  $("#ship").remove()
  $("#view").append(explosion)
  setTimeout( () => { $("#view").children().remove() } , 250)
  setTimeout(() => { $("#view").css('background-image', 'url(./images/vader.jpg)') }, 200)
  $("audio")[6].play() //explosion
  $("audio")[7].play() //imperial march
  $("audio")[8].play() //dark side
  $("audio")[9].play() //vader breathing
}
