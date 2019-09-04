import React, { Component } from 'react'
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import SideBar from './Components/SideBar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import Main from './Components/Main'
const appId = 'xC6hMe06E2DQgu96GwYz'
const appCode = 'xY0cgxHjRBvenfTSFF_y2A'

class App extends Component {
  state = {
    cities: [],
    activeEntry: '',
    currentWeather: '',
    hourly: '',
    daily: ''
  }

  selectCity = (val) => {
    axios.get(`http://geocoder.api.here.com/6.2/geocode.json`, {
      params: {
        locationid: val,
        app_id: appId,
        app_code: appCode,
        jsonattributes: '1'
      }
    })
      .then((result) => {
        const entry = result.data.response.view[0].result[0].location
        const address = entry.address
        const coords = entry.displayPosition
        const newCity = {
          label: address.label,
          name: address.city,
          lat: coords.latitude,
          lng: coords.longitude,
        }
        this.setState({
          cities: [...this.state.cities, newCity]
        })
      }).catch((err) => {
        console.log(err);
      });
  }

  setActiveEntry = (city, current, hourly, daily) => {
    this.setState({ log: 'entry set', activeEntry: city, currentWeather: current, hourly, daily })
  }

  render() {
    const { activeEntry, currentWeather, hourly, daily } = this.state

    return (
      <div className="App">
        <Header selectCity={this.selectCity} />
        <section className='h-100'>
          <Row className='h-100'>
            <Col md={3} className='border-right'>
              <SideBar
                cities={this.state.cities}
                setActiveEntry={this.setActiveEntry}
              />
            </Col>
            <Col>
              <Main
                activeEntry={activeEntry}
                currentWeather={currentWeather}
                hourly={hourly}
                daily={daily}
              />
            </Col>
          </Row>
        </section>
        <Footer />
      </div>
    )
  }


}

export default App
