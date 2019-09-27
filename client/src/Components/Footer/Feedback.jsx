
import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import sgGrid from '@sendgrid/mail'

sgGrid.setApiKey(process.env.REACT_APP_sendGridKey)
export default class Feedback extends Component {
  state = {
    email: '',
    comment: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const msg = {
      to: 'csoto09@gmail.com',
      from: this.state.email,
      subject: 'Weather app feedback',
      text: this.state.comment,
      html: `<strong>${this.state.comment}</strong>`,
    };
    sgGrid.send(msg)
    this.setState({ comment: '', email: '' })
    this.props.toggleFeedback()
  }
  handleComment = (e) => {
    this.setState({ comment: e.target.value })
  }
  handleEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  render() {
    return (
      <Modal show={this.props.showFeedback} onHide={this.props.toggleFeedback}>
        <Modal.Header closeButton>
          <Modal.Title>Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name='email' onChange={this.handleEmail} />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            <Form.Group controlId="formTextArea">
              <Form.Label>Comments</Form.Label>
              <Form.Control as='textarea' name='comments' onChange={(e) => this.handleComment(e)} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>
    )
  }
}

