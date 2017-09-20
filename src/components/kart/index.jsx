import React from 'react'
import mockup from './mockup.png'

const Kart = ({ history, match }) => {
  return (
    <div>
      <h2>{match.params.taxon}</h2>
      <img src={mockup} onClick={() => history.push('/')} />
    </div>
  )
}
export default Kart
