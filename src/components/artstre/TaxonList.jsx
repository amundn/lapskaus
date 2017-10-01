import React from 'react'
import PropTypes from 'prop-types'

import TaxonListItem from './TaxonListItem'

class TaxonList extends React.Component {
  render() {
    return (
      <div>
        {this.props.tilesData.map(tile => (
          <TaxonListItem
            tile={tile}
            onGotoTaxon={this.props.onGotoTaxon}
            key={tile.id}
          />
        ))}
      </div>
    )
  }
}

TaxonList.propTypes = {
  tilesData: PropTypes.array,
  onGotoTaxon: PropTypes.func
}

export default TaxonList
