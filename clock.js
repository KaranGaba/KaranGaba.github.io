var span = document.querySelector("#time")



function getTime(){
  var d= new Date();
  var hours=d.getHours()
  var format = (hours>=12)?"PM":"AM"
  hours=(hours>=12)?hours-12:hours
  hours = (hours<10)?"0"+hours:hours
  var minutes = d.getMinutes()
  minutes = (minutes<10)?"0"+minutes:minutes
  var seconds = d.getSeconds()
  seconds = (seconds<10)?"0"+seconds:seconds
  span.textContent = hours + ":" + minutes + ":" + seconds + format;
}

setInterval(getTime,1000)