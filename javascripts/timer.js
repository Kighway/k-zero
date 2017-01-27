var count = 0;

var counter = setInterval(timer, 1000)

function timer() {
  count++
  if ( gameOver )
  {
     clearInterval(counter)
     return
  }
  //show the number of seconds here
  document.getElementById("timer").innerHTML = count
}
