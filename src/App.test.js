import React from 'react';
import { shallow, mount } from 'enzyme'
import App from './App'



describe('Examining syntax of Jest tests', () => {

  it('renders without crashing', () => {
    mount(<App />)
  })

});