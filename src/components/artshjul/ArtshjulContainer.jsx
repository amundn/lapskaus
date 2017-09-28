import React from 'react'
import config from '../../config'
import Artshjul from './Artshjul'

class ArtshjulContainer extends React.Component {
  constructor() {
    super()
    this.state = { taxonId: 1 }
  }
  componentWillUpdate(nextProps, nextState) {
    if (nextState.taxonId !== this.state.taxonId)
      this.loadTree(nextState.taxonId)
  }

  loadTree(taxonId) {
    const url = config.apiUrl + 'taxontree/' + taxonId + '.json'
    console.log('fetch: ' + url)
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({ tree: json }))
  }

  componentDidMount() {
    this.loadTree(1281)
  }

  handleGotoTaxon = id => {
    this.setState({ taxonId: id })
  }
  render() {
    return (
      <Artshjul tree={this.state.tree} onGotoTaxon={this.handleGotoTaxon} />
    )
  }
}

export default ArtshjulContainer
