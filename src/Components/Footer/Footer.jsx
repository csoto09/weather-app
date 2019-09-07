import React, { Component } from 'react';
import Links from './Links'
// import Container from 'react-bootstrap/Container'
class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <Links />
      </footer>
    );
  }
}

export default Footer;