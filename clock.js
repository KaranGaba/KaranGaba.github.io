var span = document.querySelector("#time")
var div=document.querySelector("div")
document.addEventListener("dblclick",()=>{
  document.documentElement.requestFullscreen();
})
function getTime(){
  var d= new Date();
  var hours=d.getHours()
  var format = (hours>=12)?"PM":"AM"
  hours=(hours>12)?hours-12:hours
  hours = (hours<10)?"0"+hours:hours
  var minutes = d.getMinutes()
  minutes = (minutes<10)?"0"+minutes:minutes
  span.textContent = hours + ":" + minutes + format;
}

setInterval(getTime,1000)