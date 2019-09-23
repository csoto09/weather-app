import React from 'react'
import moment from 'moment';
import Card from 'react-bootstrap/Card';
import WeatherIcon from 'react-icons-weather';

const Daily = (props) => {
  const { time, temperatureHigh, temperatureLow, summary, icon } = props.day
  const formatTemp = props.formatTemp
  return (
    <Card bg="light">
      <Card.Header>{moment.unix(time).format('dddd Do')}</Card.Header>
      <Card.Body>
        <Card.Title>
          <WeatherIcon name='darksky' iconId={icon} />{formatTemp(temperatureHigh)}
        </Card.Title>
        <Card.Subtitle>Lo: {formatTemp(temperatureLow)}</Card.Subtitle>
        <Card.Text>{summary}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Daily