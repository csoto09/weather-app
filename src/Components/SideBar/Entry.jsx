import React, { Component } from 'react';
import axios from 'axios'
import Card from 'react-bootstrap/Card'
const apiKey = '9f4323d819dc7235993a1267bd398f3c'


class Entry extends Component {
  state = {
    temp: '',
    active: false
  }

  componentDidMount() {
    axios.get(`https://api.darksky.net/forecast/${apiKey}/${this.props.lat},${this.props.lng}?exclude=minutely,flags`)
      .then(res => {
        const weather = res.data
        this.setState({
          currentWeather: { ...weather.currently },
          daily: weather.daily,
          hourly: weather.hourly,
          temp: weather.currently.temperature,
          summary: weather.currently.summary
        })
      }).catch(e => {
        this.setState({ error: e })
        console.log(e)
      })
  }

  handleClick = () => {
    this.setState({ active: true })
  }

  render() {
    return (
      <Card onClick={this.handleClick}>
        <Card.Body className={this.state.active ? 'text-info' : ''}>
          <div>{this.props.name ? this.props.name : this.props.label}: {Math.round(this.state.temp) + '\u00B0'}F</div>
          <div>{this.state.summary}</div>
        </Card.Body>

      </Card>




    )

  }
}

export default (Entry);