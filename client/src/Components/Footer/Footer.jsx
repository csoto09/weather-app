import React from 'react'
import Links from './Links'
import Attribution from './Attribution'


const Footer = (props) => {
  return (
    <footer className='footer'>
      <Links
        toggleFeedback={props.toggleFeedback}
        showFeedback={props.showFeedback}
      />
      <Attribution />
    </footer>
  )
}

export default Footer
