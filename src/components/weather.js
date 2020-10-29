import React from "react";


const Weather = (props) => (
    <div>{ props.city &&
        <div className='result'>
          <p>Город: {props.city}, {props.country}</p>
          <p>Температура: {Math.round(props.temp - 273) + 'C'}</p>
          <p>Скорость ветра: {props.windSpeed} метров в секунду.</p>
          <p>Закат: {props.sunrise}</p>
      </div>
     
  }
    <p className='error'>{props.error}</p>
   </div>
)
export default Weather;