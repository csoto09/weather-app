import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Autocomplete from 'react-autocomplete'


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

      if (query && query.length > 3) {
        if (query.length % 2 === 0) {
          this.props.getResults(query)
        }
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
        <Navbar.Collapse className="justify-content-end">
          <Autocomplete
            getItemValue={item => item.id}
            items={this.props.results}
            renderItem={(item, isHighlighted) =>
              <div style={{ background: isHighlighted ? 'lightgray' : 'white' }} key={item.id}>{item.place_name}</div>}
            value={this.state.query}
            onChange={e => this.handleChange(e)}
            onSelect={(val, item) => this.handleSelect(val, item)}
          />
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header
