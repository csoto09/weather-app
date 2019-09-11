import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import WeatherIcon from 'react-icons-weather';

const Main = (props) => {
  if (props.currentWeather) {
    return (
      <section>
        <Jumbotron className='mx-auto'>
          <h2>{props.activeEntry}</h2>
          <h3>
            <WeatherIcon name='darksky' iconId={props.currentWeather.icon} /><span> </span>
            {Math.round(props.currentWeather.temperature) + '\u00B0'}F
          </h3>
          <h4>{props.currentWeather.summary}</h4>
        </Jumbotron>
      </section >
    )
  } else {
    return (
      <section>
        <Jumbotron className='mx-auto'>
          <h2>Weather by Bloc</h2>
        </Jumbotron>
      </section>
    )
  }

}

export default Main
