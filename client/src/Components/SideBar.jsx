import React from 'react'
import Entry from './SideBar/Entry'
import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import DragObject from './DragObject';

const Container = styled.div``

const SideBar = (props) => {
  const { local, cities } = props
  return (
    <Container className='border-right'>
      {local ? (
        <Entry
          key='123'
          name={local.name}
          label={local.label}
          entryId={null}
          lat={local.lat}
          lng={local.lng}
          setActiveEntry={props.setActiveEntry}
          formatTemp={props.formatTemp}
          deleteCity={props.deleteCity}
        />
      ) : ''}

      <Droppable droppableId='1'>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {cities.map((city, index) =>
              <DragObject
                city={city}
                key={city.entryId}
                index={index}
                setActiveEntry={props.setActiveEntry}
                formatTemp={props.formatTemp}
                deleteCity={props.deleteCity}
              />
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Container>
  )
}

export default SideBar