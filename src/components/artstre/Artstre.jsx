import React from 'react'
import PropTypes from 'prop-types'

import List from 'material-ui/List'
import { withStyles } from 'material-ui/styles'

import TaxonList from './TaxonList'
import SparkLine from './Sparkline'
import SparkLineDiff from './SparklineDiff'
import TaxonListItem from './TaxonListItem'

const styles = {
  '@media (min-width: 1024px)': {
    root: {
//      width: 200
    }
  }
}

class Artstre extends React.Component {
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
              onGotoTaxon={this.handleGotoTaxon}
              source={[...tree.breadcrumb, tree.me]}
            />
          )}

          <TaxonList
            headerText={label(tree.me)}
            tilesData={tree.children}
            onGotoTaxon={this.handleGotoTaxon}
          />

          {false && (
            <div style={{ display: 'flex' }}>
              {tree.breadcrumb &&
                tree.breadcrumb.map(
                  pt =>
                    pt.id === 0 ? null : (
                      <div
                        key={pt.id}
                        style={{ float: 'left', margin: '20px' }}
                      >
                        <SparkLineDiff
                          color="green"
                          taxonId={tree.me.id}
                          taxonIdParent={pt.id}
                        />
                        <div>{label(pt)}</div>
                      </div>
                    )
                )}
            </div>
          )}
          {false &&
            tree.breadcrumb &&
            tree.breadcrumb.length >= 2 && (
              <div style={{ display: 'block' }}>
                <SparkLine color="blue" taxonId={tree.breadcrumb[1].id} />
                <SparkLineDiff
                  color="green"
                  taxonId={tree.me.id}
                  taxonIdParent={tree.breadcrumb[1].id}
                />
                <SparkLine color="red" taxonId={tree.me.id} />
              </div>
            )}
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

const label = node => (node.p ? node.p + ' (' + node.s + ')' : node.s)

const Breadcrumb = ({ source, onGotoTaxon }) => (
  <div>
    {source.map((s, idx) => (
      <TaxonListItem tile={s} onGotoTaxon={onGotoTaxon} key={s.id} />
    ))}
  </div>
)

Artstre.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Artstre)
