import React, { Component } from 'react';
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import WeatherIcon from 'react-icons-weather';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


class Entry extends Component {
  state = {
    currentWeather: '',
    daily: '',
    hourly: '',
    temp: '',
    summary: '',
    icon: ''
  }

  componentDidMount() {
    axios.get('/api/darksky', {
      params: {
        lat: this.props.lat,
        lng: this.props.lng
      }
    })
      .then(res => {
        const weather = res.data
        this.setState({
          currentWeather: { ...weather.currently },
          daily: weather.daily,
          hourly: weather.hourly,
          temp: weather.currently.temperature,
          summary: weather.currently.summary,
          icon: weather.currently.icon
        })
      }).catch(e => {
        this.setState({ error: e })
        console.log(e)
      })
  }

  handleClick = () => {
    this.props.setActiveEntry(this.props.label, this.state.currentWeather, this.state.hourly, this.state.daily)
  }

  handleDelete = () => {
    this.props.deleteCity(this.props.entryId)
  }

  render() {
    const { name, label, formatTemp } = this.props
    const { icon, temp, summary } = this.state
    return (
      <Container>
        <Card onClick={this.handleClick}>
          <Row className='entryCard'>
            <Col>

              <Card.Body>
                <div>{name ? name : label}: {icon ? (<WeatherIcon name='darksky' iconId={icon} />) : ''} {formatTemp(temp)}</div>
                <div>{summary}</div>
              </Card.Body>

            </Col>
            {this.props.entryId !== null ? (<Col xs={1} className='deleteButton'><Button variant='link' onClick={this.handleDelete}>X</Button></Col>) : ''}
          </Row>
        </Card>
      </Container>
    )
  }
}

export default (Entry);