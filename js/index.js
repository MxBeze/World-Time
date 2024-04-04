function updateTime(){
let lagosElement = document.querySelector("#lagos");
let lagosDateElement = document.querySelector("#lagosdate");
let lagosTimeElement = document.querySelector("#lagostime");
let lagosTime = moment().tz("Africa/Lagos");

lagosDateElement.innerHTML = lagosTime.format("dddd, D MMMM YYYY");
lagosTimeElement.innerHTML = lagosTime.format("H:mm:ss");

let calgaryElement = document.querySelector("#calgary");
let calgaryDateElement = document.querySelector("#calgarydate");
let calgaryTimeElement = document.querySelector("#calgarytime");
let calgaryTime = moment().tz("Canada/Mountain");

calgaryDateElement.innerHTML = calgaryTime.format("dddd, D MMMM YYYY");
calgaryTimeElement.innerHTML = calgaryTime.format("H:mm:ss");


let londonElement = document.querySelector("#london");
let londonDateElement = document.querySelector("#londondate");
let londonTimeElement = document.querySelector("#londontime");
let londonTime = moment().tz("GB");

londonDateElement.innerHTML = londonTime.format("dddd, D MMMM YYYY");
londonTimeElement.innerHTML = londonTime.format("H:mm:ss");
}

updateTime();
setInterval(updateTime, 1000);