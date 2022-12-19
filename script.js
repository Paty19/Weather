const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "e05dffc549cf5b6f6e4caa8b97682d01"
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
  console.log(result);
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