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

let kelownaDateElement = document.querySelector("#kelownadate");
let kelownaTimeElement = document.querySelector("#kelownatime");
let kelownaTime = moment().tz("Canada/Pacific");

kelownaDateElement.innerHTML = kelownaTime.format("dddd, D MMMM YYYY");
kelownaTimeElement.innerHTML = kelownaTime.format("H:mm:ss");
}


function updateCity(event) {
let cityTimeZone = event.target.value;
let cityName = cityTimeZone.replace("_", " ").split("/")[1];
let cityTime = moment().tz(cityTimeZone);
let citiesElement = document.querySelector("#cities");
citiesElement.innerHTML = `<div class="city" id="makurdi">
<div>
<h2>${cityName}</h2>
<div class="date">${cityTime.format("dddd, D MMMM YYYY")}</div>
</div>
<div class="time">${cityTime.format("H:mm:ss")}</div>
</div>`;
}

updateTime();
setInterval(updateTime, 1000);



let selectElement = document.querySelector("#selectcity");

selectElement.addEventListener("change", updateCity);