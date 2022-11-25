

var timeoutID;


// time
var minutes = 0;
var seconds   = 0;

// buttons
var btn_start =  document.getElementById("start")
var btn_stop = document.getElementById("stop");
var btn_reset = document.getElementById("reset");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var Interval;


//Actions

btn_start.onclick = ()=> {
    console.log("start")
    clearInterval(Interval);
    Interval = setInterval(startTimer, 1000);
}

btn_stop.onclick = ()=>{
    console.log("stop")
    clearInterval(Interval);
}

btn_reset.onclick = ()=>{
    clearInterval(Interval);
  	seconds = 0;
    minutes = 0;
    sec.innerHTML = "00";
  	min.innerHTML = "00";
}


function startTimer(){
    console.log("startTimer()")

    seconds++;

    if(seconds <= 9){
        sec.innerHTML = "0" + seconds;
    }else{
        sec.innerHTML = seconds;
    }

    if(seconds >59){
        console.log("minutes");
        minutes++;
        seconds = 0;
        sec.innerHTML = "0" + seconds;
        min.innerHTML = "0" + minutes;
    }

}