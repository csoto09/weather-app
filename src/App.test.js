import React from 'react';
import { shallow, mount } from 'enzyme'
import App from './App'

const newCity = {
  label: 'test',
  name: 'test',
  lat: '1',
  lng: '2'
}


describe('Examine basic functionality of component', () => {

  it('render App component without crashing', () => {
    shallow(<App />)
  })

  it('renders all components without crashing', () => {
    mount(<App />)
  })

  it('should return 0 when no cities have been entered', () => {
    const app = shallow(<App />)
    expect(app.state().cities.length).toBe(0)
  })

  it('should update cities array when adding a new city', () => {
    const app = shallow(<App />)
    app.setState({ cities: [...app.state().cities, newCity] })
    expect(app.state().cities.length).toBe(1)
  })
});