const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runTheClock() {
    var date = new Date();
    // console.log(date);
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    // console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

    let hrPosition = (hr*360/12)+(min*(360/60)/12);
    let minPosition = (min*360/60)+(sec*(360/60)/60);
    let secPosition = sec*360/60;

    let a="";
    let b="";
    let c="";
    if (hr< 10){
      a = "0";
    }else {
      a= "";
    }
    if (min< 10){
      b = "0";
    }else {
      b= "";
    }
    if (sec< 10){
      c = "0";
    }else {
      c= "";
    }
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

    document.getElementById("digi-text").innerHTML= a + hr +":"+ b + min +":"+ c +sec;

}

function runTheDigiClock(){
  var date = new Date();
  let weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  let mon = months[date.getMonth()];
  let wday = weekday[date.getDay()];
  let d = date.getUTCDate();
  document.getElementById("date-text").innerHTML= wday +" "+ d +" "+ mon ;
}

setInterval(runTheClock, 1000);
setInterval(runTheDigiClock, 1000);
