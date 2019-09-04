import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
// import Weather from './Entry/Weather'
import WeatherIcon from 'react-icons-weather';

const Main = (props) => {
  // console.log();

  return (
    <section>
      <Jumbotron className='mx-auto'>
        <h2>{props.activeEntry}</h2>
        <h3>{props.currentWeather ? <WeatherIcon name='darksky' iconId={props.currentWeather.icon} /> : ''}{props.currentWeather ? Math.round(props.currentWeather.temperature) + '\u00B0' : ''}</h3>
        <h4>{props.currentWeather.summary}</h4>
        {/* <p>Placeholder stuff</p> */}

      </Jumbotron>
    </section>

  )
}

export default Main
