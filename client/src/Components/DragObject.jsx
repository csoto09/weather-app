import React from 'react'
import Entry from './SideBar/Entry'
import styled from 'styled-components'

import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div``

const DragObject = (props) => {
  const { name, label, entryId, lat, lng } = props.city

  return (
    <Draggable draggableId={entryId} index={props.index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Entry
            name={name}
            label={label}
            entryId={entryId}
            lat={lat}
            lng={lng}
            setActiveEntry={props.setActiveEntry}
            formatTemp={props.formatTemp}
            deleteCity={props.deleteCity}
          />
        </Container>
      )}
    </Draggable>
  )
}

export default DragObject
