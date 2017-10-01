import React from 'react'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import TaxonGrid from './TaxonGrid'
import config from '../../config'
import PropTypes from 'prop-types'

class Artshjul extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.taxonId = 1282
  }

  render() {
    const tree = this.state.tree
    if (!tree) return null
    return (
      <div>
        {tree.breadcrumb && (
          <List>
            <Breadcrumb
              onGotoTaxon={this.handleGotoTaxon}
              source={tree.breadcrumb}
            />
          </List>
        )}

        <TaxonGrid
          headerText={label(tree.me)}
          tilesData={tree.children}
          onGotoTaxon={this.handleGotoTaxon}
        />
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

const Item = ({ node, rankNo, onGotoTaxon }) => {
  const text = label(node)
  return (
    <ListItem
      button
      style={{
        xmarginLeft: Math.max(0, rankNo - 2) * 10
      }}
      id={node.id}
      onClick={() => onGotoTaxon(node.id)}
    >
      {node.id > 0 && (
        <Avatar src={config.apiUrl + 'taxonPhoto/' + node.s + '.jpg'} />
      )}
      <ListItemText
        primary={
          <span
            style={{
              textTransform: 'capitalize'
            }}
          >
            {text}
          </span>
        }
      />
    </ListItem>
  )
}

const Breadcrumb = ({ source, onGotoTaxon }) => (
  <div>
    {source.map((s, idx) => (
      <Item
        rankNo={idx + 1}
        key={s.id}
        node={s}
        onGotoTaxon={() => onGotoTaxon(s.id)}
      />
    ))}
  </div>
)

export default Artshjul
