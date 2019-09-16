import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import axios from 'axios'
import Autocomplete from 'react-autocomplete'
const appId = process.env.REACT_APP_hereAppId
const appCode = process.env.REACT_APP_hereAppCode


class Header extends Component {
  state = {
    query: '',
    error: null,
    label: '',
    results: []
  }

  getInfo = () => {
    // axios.get('https://autocomplete.geocoder.api.here.com/6.2/suggest.json', {
    //   params: {
    //     app_id: appId,
    //     app_code: appCode,
    //     query: this.state.query,
    //     maxresults: '10',
    //     resultType: 'areas'
    //   }
    // })
    axios.get('/api/geocode', {
      params: { query: this.state.query }
    })

      .then(res => {
        // console.log(res.data.features)
        this.setState({
          results: res.data.features
        })

        // 
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
      label: item.text,
      locationId: value
    })
    this.props.selectCity(value, item)
  }
  render() {
    return (
      <Navbar sticky="top" bg="dark" variant="dark" >
        <Navbar.Brand>Weather by Bloc</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Autocomplete
            getItemValue={(item) => item.id}
            items={this.state.results}
            renderItem={(item, isHighlighted) =>
              <div style={{ background: isHighlighted ? 'lightgray' : 'white' }} key={item.id}>{item.place_name}</div>}
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
