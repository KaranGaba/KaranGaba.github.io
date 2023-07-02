var time = document.querySelector("#time")
var fullDate = document.querySelector("#date")
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
  var seconds = d.getSeconds()
  minutes = (minutes<10)?"0"+minutes:minutes
  seconds = (seconds<10)?"0"+seconds:seconds
  time.textContent = hours + ":" + minutes + ":" + seconds + format;
  getTodaysDate()
}
function getTodaysDate(){
  var d= new Date();
  var date=d.getDate()
  var month=d.getMonth()
  var year=d.getFullYear()
  var monthArray=["January","Febuary","March","April","May","June","July","August","September","October","November","December"]
  date = (date<10)?"0"+date:date
  fullDate.textContent = monthArray[month] + " " + date + ", " + year;
}

setInterval(getTime,1000)

