import React from 'react'
import mockup from './mockup.png'

const Statistikk = ({ history, match }) => {
  return (
    <div>
      <h2>{match.params.taxon}</h2>
      <img
        src={mockup}
        alt="mockup"
        onClick={() => history.push('/Rødrev/kart')}
      />
    </div>
  )
}

export default Statistikk
