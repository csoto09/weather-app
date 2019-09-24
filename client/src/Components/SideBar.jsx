import React from 'react'
import Entry from './SideBar/Entry'

const SideBar = (props) => {
  const { local, cities } = props
  return (
    <div>
      {local ? (<Entry
        name={local.name}
        label={local.label}
        entryId={null}
        lat={local.lat}
        lng={local.lng}
        setActiveEntry={props.setActiveEntry}
        formatTemp={props.formatTemp}
        deleteCity={props.deleteCity}

      />) : ''}
      {cities.map((city, index) =>
        <Entry
          key={index}
          name={city.name}
          label={city.label}
          entryId={city.entryId}
          lat={city.lat}
          lng={city.lng}
          setActiveEntry={props.setActiveEntry}
          formatTemp={props.formatTemp}
          deleteCity={props.deleteCity}
        />
      )}
    </div>
  )
}

export default SideBar