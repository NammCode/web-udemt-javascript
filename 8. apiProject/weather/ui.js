class UI {
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.feels = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
  }

  plaint(weather){
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = weather.clouds.all;
    //this.icon.textContent = weather.name;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.dewpoint.textContent = `DewPoint: ${weather.main.temp} F`;
    this.feels.textContent =`Feels Like: ${weather.main.feels_like} F`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} km/h`;
  }

}