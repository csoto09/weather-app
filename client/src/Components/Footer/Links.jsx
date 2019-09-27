import React from 'react'
import Feedback from './Feedback'
import Button from 'react-bootstrap/Button'

const Links = (props) => {
  return (
    <div>
      <Button variant="primary" onClick={props.toggleFeedback}>Contact Us</Button>
      <Feedback
        showFeedback={props.showFeedback}
        toggleFeedback={props.toggleFeedback}
      />
    </div>
  )
}

export default Links
