import React from 'react'
import PropTypes from 'prop-types'

import List from 'material-ui/List'
import { withStyles } from 'material-ui/styles'

import TaxonListItem from './TaxonListItem'

const styles = {
  '@media (min-width: 1024px)': {
    root: {
      //      width: 200
    }
  }
}

class TaxonList extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.taxonId = 1282
  }

  render() {
    const tree = this.state.tree
    if (!tree) return null
    return (
      <div className={this.props.classes.root}>
        <List>
          {tree.breadcrumb && (
            <Breadcrumb
              onNavigateToTaxon={this.handleGotoTaxon}
              source={[...tree.breadcrumb, tree.me]}
            />
          )}

          {tree.children.map(tile => (
            <TaxonListItem
              tile={tile}
              onNavigateToTaxon={this.handleGotoTaxon}
              onPickTaxon={this.props.onPickTaxon}
              key={tile.id}
            />
          ))}
        </List>
      </div>
    )
  }

  componentDidMount() {
    if (this.props.taxonId) this.taxonId = this.props.taxonId
    this.handleGotoTaxon(this.taxonId)
  }

  handleGotoTaxon = taxonId => {
    this.context.fetchJson(
      'Laster takson',
      'taxontree/' + taxonId + '.json',
      tilesData => {
        //        tilesData.breadcrumb.push(tilesData.parent) // API HACK temp
        this.setState({ tree: tilesData })
      }
    )
  }

  static contextTypes = {
    fetchJson: PropTypes.func,
    fetchImage: PropTypes.func
  }
}

const Breadcrumb = ({ source, onNavigateToTaxon }) => (
  <div>
    {source.map((s, idx) => (
      <TaxonListItem
        tile={s}
        onNavigateToTaxon={onNavigateToTaxon}
        key={s.id}
      />
    ))}
  </div>
)

export default withStyles(styles)(TaxonList)
