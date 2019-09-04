import React from 'react'
import Entry from './SideBar/Entry'


class SideBar extends React.Component {
  state = {
    cities: []
  }

  componentDidUpdate(prevProps) {
    if (this.props.cities !== prevProps.cities) {
      this.setState({ cities: [...this.props.cities] })
    }
  }

  render() {
    return (
      <div>
        {this.state.cities.map((city, index) =>
          <Entry
            key={index}
            name={city.name}
            label={city.label}
            lat={city.lat}
            lng={city.lng}
            setActiveEntry={this.props.setActiveEntry}
          />
        )}
      </div>
    )
  }
}

export default (SideBar)