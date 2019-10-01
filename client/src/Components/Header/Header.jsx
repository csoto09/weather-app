import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Autocomplete from 'react-autocomplete'
import Settings from './Settings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'


class Header extends Component {
  state = {
    query: '',
    error: null
  }

  handleChange = (e) => {
    this.setState({
      query: e.target.value
    }, () => {
      const query = this.state.query

      if (query && query.length > 2) {
        this.props.getResults(query)
      }
    })
  }

  handleSelect = (val, item) => {
    this.setState({
      query: '',
    })
    this.props.selectCity(val, item)
  }

  render() {
    return (
      <Navbar sticky="top" bg="dark" variant="dark" >
        <Navbar.Brand>Weather by Bloc</Navbar.Brand>
        <Button variant="primary" onClick={this.props.toggleModal} className="justify-content-end">
          <FontAwesomeIcon icon={faCog} />
        </Button>
        <Navbar.Collapse className="justify-content-end">
          <Autocomplete
            getItemValue={item => item.id}
            items={this.props.results}
            renderItem={(item, isHighlighted) =>
              <div style={{ background: isHighlighted ? 'lightgray' : 'white' }} key={item.id}>{item.place_name}</div>}
            value={this.state.query}
            onChange={e => this.handleChange(e)}
            onSelect={(val, item) => this.handleSelect(val, item)}
            inputProps={{ 'placeholder': 'Search location, city, zip...' }}
          />
        </Navbar.Collapse>
        <Settings
          showModal={this.props.showModal}
          toggleModal={this.props.toggleModal}
          toggleTemp={this.props.toggleTemp}
          tempC={this.props.tempC}
          toggleTime={this.props.toggleTime}
          milTime={this.props.milTime}
        />
      </Navbar>
    )
  }
}

export default Header
