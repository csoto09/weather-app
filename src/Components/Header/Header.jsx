import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import axios from 'axios'
import Autocomplete from 'react-autocomplete'
const appId = 'xC6hMe06E2DQgu96GwYz'
const appCode = 'xY0cgxHjRBvenfTSFF_y2A'

class Header extends Component {
  state = {
    query: '',
    locationId: '',
    results: [],
    label: ''
  }

  getInfo = () => {
    axios.get('http://autocomplete.geocoder.api.here.com/6.2/suggest.json', {
      params: {
        app_id: appId,
        app_code: appCode,
        query: this.state.query,
        maxresults: '10',
        resultType: 'areas'
      }
    })
      .then(res => {
        this.setState({
          results: res.data.suggestions
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
  handleChange = (e) => {
    this.setState({
      label: e.target.value,
      query: this.state.label
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      }
    })
  }

  handleSelect = (value, item) => {
    this.setState({
      label: item.label,
      locationId: value
    })
    this.props.selectCity(value)
  }
  render() {
    return (
      <Navbar sticky="top" bg="dark" variant="dark" >
        <Navbar.Brand>Weather by Bloc</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Autocomplete
            getItemValue={(item) => item.locationId}
            items={this.state.results}
            renderItem={(item, isHighlighted) =>
              <div style={{ background: isHighlighted ? 'lightgray' : 'white' }} key={item.locationId}>{item.label}</div>}
            value={this.state.label}
            onChange={e => this.handleChange(e)}
            onSelect={(value, item) => this.handleSelect(value, item)}
          />
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header
