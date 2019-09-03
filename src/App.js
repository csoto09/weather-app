import React, { Component } from 'react'
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import SideBar from './Components/SideBar'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
const appId = 'xC6hMe06E2DQgu96GwYz'
const appCode = 'xY0cgxHjRBvenfTSFF_y2A'

class App extends Component {
  state = {
    cities: []
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
  render() {
    return (
      <div className="App">
        <Header selectCity={this.selectCity} />
        <section className='h-100'>
          <Row className='h-100'>
            <Col md={3} className='border-right'>
              <SideBar
                cities={this.state.cities}
              />
            </Col>
            <Col>
              <Jumbotron className='mx-auto'>
                <h2>Pawtucket</h2>
                <p>Placeholder stuff</p>
              </Jumbotron>
            </Col>
          </Row>
        </section>
        <Footer />
      </div>
    )
  }


}

export default App
