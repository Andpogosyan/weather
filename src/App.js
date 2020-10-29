import React from "react";
import Form from "./components/form";
import Weather from "./components/weather";
import './App.css'
const urlApiKey = '4081a3c9bdf4007196039daf1b272947';



class App extends React.Component {

  state = {
    temp: '',
    city: '',
    country: '',
    sunrise: '',
    senset: '',
    error: ''
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    
    
    if(city){
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${urlApiKey}`);
      const promise = await response.json();
      console.log(promise);
      
      
      if(!(promise.message === 'city not found')){
      
      let sunrise = promise.sys.sunrise;
      let dateSunrise = new Date();
      dateSunrise.setTime(sunrise);
      let sunriseDate = dateSunrise.getHours()+ ':' + dateSunrise.getMinutes();
      

      
     
      this.setState({
        temp: promise.main.temp,
        city: promise.name,
        country: promise.sys.country,
        sunrise: sunriseDate,
        windSpeed: promise.wind.speed,
        error: ''
      });}else{
        this.setState ({
          temp: '',
          city: '',
          country: '',
          sunrise: '',
          senset: '',
          error: 'Введите корректное название города'
        })
      }
    } else{
      this.setState ({
        temp: '',
        city: '',
        country: '',
        sunrise: '',
        senset: '',
        error: 'Введите название города'
      })
    }

   
  }
  render() {
    return(
      <div className = 'weather'>
        <Form showWeather={this.getWeather}/>
        <Weather
        temp={this.state.temp}
        city={this.state.city}
        country={this.state.country}
        sunrise={this.state.sunrise}
        windSpeed={this.state.windSpeed}
        error={this.state.error}/>
      </div>
    );
  }
}

// App.getWeather();

export default App;