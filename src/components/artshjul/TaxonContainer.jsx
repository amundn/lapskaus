import React from 'react'
import TaxonGrid from './TaxonGrid'
import config from '../../config'

class TaxonContainer extends React.Component {
  render() {
    if (!this.state.tilesData) return null
    return (
      <TaxonGrid
        tilesData={this.state.tilesData}
        onClick={this.props.onClick}
      />
    )
  }

  loadTree(taxonId) {
    const url = config.apiUrl+'taxontree/' + taxonId + '.json'
    console.log('fetch: ' + url)
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({ tilesData: json }))
  }
  componentDidMount() {
    this.loadTree(this.props.taxonId)
  }
}

export default TaxonContainer
