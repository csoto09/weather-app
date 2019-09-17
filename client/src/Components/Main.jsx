import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import WeatherIcon from 'react-icons-weather';
import moment from 'moment'
import Daily from './Entry/Daily';


const Main = (props) => {
  const items = []
  const days = props.daily.data
  console.log(days);

  // for (let i = 0; i <= 4; i++) {
  //   items.push(<Daily i={i} forecast={`day`} />)
  // }
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
          <p>data current as of {moment.unix(props.currentWeather.time).format()}</p>

          {days.map((day, index) =>
            <Daily key={index} forecast={day} />
          )}

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
