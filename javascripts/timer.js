var count = 0;

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
  if (gameOver)
  {
    return count
    count = 0
    clearInterval(counter)
  }
  document.getElementById("timer").innerHTML = minutesString + ":" + secondsString
}
