const hourHand = document.getElementById("hour-hand");
const minHand = document.getElementById("min-hand");
const secHand = document.getElementById("sec-hand");

// the clock getting the actual time
 let date = new Date();
 console.log(date);
let seconds = 0;
let hours = 0;
let minutes = 0;

setInterval (function(){
    date = new Date();
    hours = date.getHours()*30 + minutes/12;
    minutes = date.getMinutes() *6;
    seconds = date.getSeconds() *6;
    console.log(hours,minutes,seconds);
    secHand.style.transform = `rotate(${seconds}deg)`
    minHand.style.transform = `rotate(${minutes}deg)`
    hourHand.style.transform = `rotate(${hours}deg)`
},1000)




// The clock here not getting the actual time 

let secdegrees = 0;
let mindegrees = 0;
setInterval(function(){
    secdegrees +=6;
    secHand.style.transform = `rotate(${secdegrees}deg)`;
    if (secdegrees == 360){
        mindegrees +=6;
        minHand.style.transform = `rotate(${mindegrees}deg)`
        secdegrees = 0;
    }
},1000)


