import React from 'react'
import Entry from './SideBar/Entry'

const SideBar = (props) => {
  return (
    <div>
      {props.cities.map((city, index) =>
        <Entry
          key={index}
          name={city.name}
          label={city.label}
          lat={city.lat}
          lng={city.lng}
          setActiveEntry={props.setActiveEntry}
          formatTemp={props.formatTemp}
        />
      )}
    </div>
  )
}

export default SideBar