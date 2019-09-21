import React from 'react'
import Switch from "react-switch";
import Modal from 'react-bootstrap/Modal'

const Settings = (props) => {
  return (
    <Modal show={props.showModal} onHide={props.toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label>
          <span>Celsius?</span>
          <Switch onChange={props.toggleTemp} checked={props.tempC} />
        </label><br />

        <label>
          <span>24-hr?</span>
          <Switch onChange={props.toggleTime} checked={props.milTime} />
        </label>
      </Modal.Body>

    </Modal>
  )
}

export default Settings
