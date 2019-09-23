import React, { Component } from 'react'
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import SideBar from './Components/SideBar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import Main from './Components/Main'
import ls from 'local-storage'

class App extends Component {
  state = {
    cities: [],
    activeEntry: '',
    currentWeather: '',
    hourly: '',
    daily: '',
    results: [],
    tempC: false,
    milTime: false,
    showModal: false
  }

  componentDidMount() {
    this.setState({
      cities: ls.get('cities') || [],
      tempC: ls.get('tempC') || false,
      milTime: ls.get('milTime') || false
    })

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const local = {
          label: "Current Location",
          name: "Current Location",
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        this.setState({ cities: [...this.state.cities, local] })
      })
    } else { console.log('geolocation is not available'); }
  }

  getResults = (query) => {
    axios.get('/api/geocode', {
      params: { query }
    })
      .then(res => {
        this.setState({
          results: res.data.features
        })
      })
      .catch(err => {
        this.setState({ error: err })
        console.log(err);
      })
  }

  selectCity = (val, item) => {
    //TODO: check if entry exists based on mapbox id

    const coords = item.center || []
    const newCity = {
      label: item.place_name,
      name: item.text,
      lat: coords[1],
      lng: coords[0]
    }

    const cities = [...this.state.cities, newCity]
    this.setState({ cities })
    ls.set('cities', cities)
  }

  setActiveEntry = (activeEntry, currentWeather, hourly, daily) => {
    this.setState({ activeEntry, currentWeather, hourly, daily })
  }

  toggleTemp = (tempC) => {
    this.setState({ tempC })
    ls.set('tempC', tempC)
  }
  formatTemp = (temp) => {
    if (this.state.tempC) {
      return Math.round((temp - 32) * 5 / 9) + '\u00B0' + 'C'
    }
    return Math.round(temp) + '\u00B0' + 'F'
  }
  toggleTime = (milTime) => {
    this.setState({ milTime })
    ls.set('milTime', milTime)
  }
  toggleModal = (showModal) => {
    this.setState({ showModal })
  }

  render() {
    const { activeEntry, currentWeather, hourly, daily, tempC, results, showModal, milTime, cities } = this.state

    return (
      <div className="App h-100 ">
        <Header
          getResults={this.getResults}
          selectCity={this.selectCity}
          results={results}
          toggleModal={this.toggleModal}
          showModal={showModal}
          toggleTemp={this.toggleTemp}
          tempC={tempC}
          toggleTime={this.toggleTime}
          milTime={milTime}
        />
        <section className='mh-100'>
          <Row className='mh-100'>
            <Col md={3} className='border-right'>
              <SideBar
                cities={cities}
                setActiveEntry={this.setActiveEntry}
                formatTemp={this.formatTemp}
              />
            </Col>
            <Col>
              <Main
                activeEntry={activeEntry}
                currentWeather={currentWeather}
                hourly={hourly}
                daily={daily}
                tempC={tempC}
                formatTemp={this.formatTemp}
              />
            </Col>
          </Row>
        </section>
        <Footer className='footer'

        />
      </div>
    )
  }
}

export default App
