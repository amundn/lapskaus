import React from 'react'
import mockup from './mockup.png'

const Artshjul = props => {
  return (
    <img
      src={mockup}
      alt="mockup"
      onClick={() => props.history.push('/Rødrev')}
    />
  )
}

export default Artshjul
