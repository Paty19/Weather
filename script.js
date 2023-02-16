const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "e05dffc549cf5b6f6e4caa8b97682d01"
}


getApiGeolocation();

async function getApiGeolocation() { 
    const resGeolocation = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=b1195a0d717b4bb88763fce48faf455a`);
    const resultGeolocation = await resGeolocation.json(); 
    getInfo(resultGeolocation.city);
}


const input = document.querySelector("#input");
input.addEventListener("keypress", enter);

function enter(e) {
    if (e.keyCode === 13) {
      getInfo(input.value);
    }
  }

async function getInfo (data) {
  const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
  const result = await res.json();
  displayResult(result);
  input.value="";
}

function displayResult(result) {
    let city = document.querySelector("#city");
    city.textContent = `${result.name}, ${result.sys.country}`;

    getOurDate();

    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;

    let feelsLike = document.querySelector("#feelsLike");
    feelsLike.innerHTML = `${Math.round(result.main.feels_like)}<span>°</span>`;

    let conditions = document.querySelector("#conditions");
    conditions.textContent = `${result.weather[0].main}`;

    let variation = document.querySelector("#variation");
    variation.innerHTML = "Min: " + `${Math.round(result.main.temp_min)}<span>°</span>` + " " + "Max " + `${Math.round(result.main.temp_max)}<span>°</span>`

}

function getOurDate() {
    const myDate = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let day = days[myDate.getDay()];
  
    let todayDate = myDate.getDate();

    let month = months[myDate.getMonth()];

    let year = myDate.getFullYear();

    let showDate = document.querySelector("#date");
    showDate.textContent = `${day}` + " " + `${todayDate}` + " " + `${month}` + " " + `${year}` 
}

gsap.from("#header", {y:-300, delay:0.2, duration:3, opacity:0.5, ease:"power4.out"});
gsap.from("#city", {y:-300, delay:1.2, duration:3, opacity:0.5, ease:"power4.out"});
gsap.from("#date", {y:-300, delay:2.2, duration:3, opacity:0, ease:"power4.out"});
gsap.from("#temperature", {y:-300, delay:3.2, duration:3, opacity:0, ease:"power4.out"});
gsap.from("#feelsLike", {y:300, delay:4.2, duration:3, opacity:0, ease:"power4.out"});
gsap.from("#conditions", {y:300, delay:5.2, duration:3, opacity:0, ease:"power4.out"});
gsap.from("#variation", {y:300, delay:6.2, duration:3, opacity:0, ease:"power4.out"});
