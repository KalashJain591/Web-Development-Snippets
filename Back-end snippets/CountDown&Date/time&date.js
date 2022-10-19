


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today =  dd + '/' + mm + '/' + yyyy;
document.write(today);
document.write("<br />");


const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = weekday[d.getDay()];
document.write(day);


// time count down
const startingMinutes=5;
let time=startingMinutes*60;

const countdownID=document.getElementById('countdown');

setInterval(CountDownfunc,1000);

function  CountDownfunc(){
    const minutes =Math.floor(time/60);
    let secs=time%60;
    secs=secs <10 ? '0'+secs :secs;
    countdownID.innerHTML=`${minutes}: ${secs} `;
    time--;

}