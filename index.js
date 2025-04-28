
let api_key = '1709c9e37240d686e3ff7678dde4d81e'


let cityInput = document.querySelector("#city")
let card = document.querySelector("#weatherCard")
let list = document.querySelector("#weatherList")


fetch(`https://pro.openweathermap.org/data/2.5/forecast/?q=paris&appid=1709c9e37240d686e3ff7678dde4d81e`)
.then((res) => res.json())
.then((res) => console.log(res))


cityInput.addEventListener("change",function(e){
    let city = e.target.value
    console.log(city)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
    .then((res) => res.json())
    .then((res) => {
        // console.log(res)
        showWeather(res)
    })

    fetch(`https://pro.openweathermap.org/data/2.5/forecast/?q=${city}&appid=1709c9e37240d686e3ff7678dde4d81e`)
    .then((res) => res.json())
    .then((res) => {console.log(res)
        showWeatherList(res)
    })

})



function showWeather(data){

    card.innerHTML = `
                    <h4>${data.name}</h4>
                    <p>${data.weather[0].main}</p>
                    <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" />
                    <div class="row g-2">
                        <div class="col-6">
                            <div class="shadow p-2 ">
                                <i class="ri-temp-hot-line"></i>
                                <br/>
                                Temp : ${(data.main.temp - 273.15).toFixed(2)} &deg;c
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="shadow p-2">
                                <i class="ri-windy-line"></i>
                                <br/>
                                wind : ${data.wind.speed} m/s
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="shadow p-2">
                                <i class="ri-water-percent-line"></i>
                                <br/>
                                Humidity : ${data.main.humidity} %
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="shadow p-2">
                                <i class="ri-water-percent-line"></i>
                                <br/> 
                                pressure : ${data.main.pressure} hPa
                        </div>
                    </div>
    `
}


function showWeatherList(ele){
    list.innerHTML = ""
    
       
    ele.list.map((data)=>{
        
        list.innerHTML += `

             <div class="row row-cols-1  my-2 shadow-md rounded bg2  " style="margin-left: 10px; margin-right: 10px;" >
                          <div class="col ">
                              <p>${data.dt_txt}</p>
                          </div>
                          <div class="col">
                              <b>${data.weather[0].main}</b>
                              <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="">
                          </div>
                          
                          <div class="col">
                              <i class="ri-temp-hot-line"></i>
                              Temp : ${(data.main.temp - 273.15).toFixed(2)} &deg;c
                          </div>
                          <div class="col">
                              <i class="ri-windy-line"></i>
                                      wind : ${data.wind.speed} m/s
                          </div>
                          <div class="col">
                              <div class="shadow p-2">
                                  <i class="ri-water-percent-line"></i>
                                  <br/>
                                  Humidity : ${data.main.humidity} %
                              </div>
                          </div>
                        </div>

        `
    })



}
