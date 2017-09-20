import React from 'react'
import mockup from './mockup.png'
import { BrowserRouter, Route } from 'react-router-dom'

const Artshjul = props => {
  return <img src={mockup} onClick={() => props.history.push('/Rødrev')} />
}

export default Artshjul
