import React from 'react'
import Container from 'react-bootstrap/Container';
import styled from 'styled-components'

// const Container = styled.div`
// display:flex;
// width: auto
// `


const Attribution = () => {
  return (
    <div className='justify-content-end pr-2'>
      <img className='mh-100 ' src="https://darksky.net/dev/img/attribution/poweredby-oneline.png" alt="Powered by Dark Sky" />
    </div>

  )
}

export default Attribution

