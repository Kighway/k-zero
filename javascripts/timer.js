var count = 0;

var counter = setInterval(timer, 1000)

function timer() {
  count++

var minutes = Math.floor(count/60)
var seconds =  Math.floor(count - minutes*60)

var minutesString = minutes.toString()
if (minutesString.length === 1) {
  minutesString = "0" + minutesString
}
var secondsString = seconds.toString()
if (secondsString.length === 1){
  secondsString = "0" + secondsString
}

debugger


  if (gameOver)
  {
     clearInterval(counter)
     return
  }
  document.getElementById("timer").innerHTML = minutesString + ":" + secondsString
}
