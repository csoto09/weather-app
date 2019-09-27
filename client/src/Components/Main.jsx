import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import WeatherIcon from 'react-icons-weather';
import Daily from './Entry/Daily';
import CardGroup from 'react-bootstrap/CardGroup'

const Main = (props) => {
  const { icon, temperature, summary } = props.currentWeather
  const formatTemp = props.formatTemp
  const days = props.daily.data

  if (props.currentWeather) {
    return (
      <Jumbotron className='mx-auto'>
        <h2>{props.activeEntry}</h2>
        <h3>
          <WeatherIcon name='darksky' iconId={icon} /><span> </span>
          {formatTemp(temperature)}
        </h3>
        <h4>{summary}</h4>
        <CardGroup>
          {days.slice(1, 6).map((day, index) =>
            <Daily
              key={index}
              day={day}
              formatTemp={formatTemp}
            />
          )}
        </CardGroup>
      </Jumbotron>
    )
  } else {
    return (
      <Jumbotron className='mx-auto'>
        <h2>Weather by Bloc</h2>
      </Jumbotron>
    )
  }

}

export default Main
