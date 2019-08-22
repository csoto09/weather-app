import React from 'react'
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Entry from './Components/Entry/Entry';

const App = () => {
  return (
    <div>
      <div className="App">
        <Header />
        <Entry />
        <Footer />
      </div>
    </div>
  )
}

export default App
