class Weather {
  constructor(city, state){
    this.api = '32408b6062f0c0d591d8c72674109798';
    this.city = city;
    this.state = state;
  }

  async get(){
    const resWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.api}`);
    const weather = await resWeather.json();
    return weather;
  }

  changeLocation(city, state){
    this.city = city;
    this.state = state;
  }

}