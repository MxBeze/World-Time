function updateTime(){
let makurdiDateElement = document.querySelector("#makurdidate");
let makurdiTimeElement = document.querySelector("#makurditime");
let makurdiTime = moment().tz("Africa/Lagos");

makurdiDateElement.innerHTML = makurdiTime.format("dddd, D MMMM YYYY");
makurdiTimeElement.innerHTML = makurdiTime.format("H:mm:ss");

let calgaryDateElement = document.querySelector("#calgarydate");
let calgaryTimeElement = document.querySelector("#calgarytime");
let calgaryTime = moment().tz("Canada/Mountain");

calgaryDateElement.innerHTML = calgaryTime.format("dddd, D MMMM YYYY");
calgaryTimeElement.innerHTML = calgaryTime.format("H:mm:ss");


let londonDateElement = document.querySelector("#londondate");
let londonTimeElement = document.querySelector("#londontime");
let londonTime = moment().tz("GB");

londonDateElement.innerHTML = londonTime.format("dddd, D MMMM YYYY");
londonTimeElement.innerHTML = londonTime.format("H:mm:ss");
}

updateTime();
setInterval(updateTime, 1000);


