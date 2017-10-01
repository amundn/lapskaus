import React from 'react'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import TaxonGrid from './TaxonGrid'
import config from '../../../config'

class TaxonGallery extends React.Component {
  render() {
    const tree = this.props.tree
    if (!tree) return null
    return (
      <div>
        {tree.breadcrumb && (
          <List>
            <Breadcrumb
              onNavigateToTaxon={this.handleGotoTaxon}
              source={tree.breadcrumb}
            />
          </List>
        )}

        <TaxonGrid
          headerText={label(tree.me)}
          tilesData={tree.children}
          onNavigateToTaxon={this.handleGotoTaxon}
          onPickTaxon={this.props.onPickTaxon}
        />
      </div>
    )
  }
}

const label = node => (node.p ? node.p + ' (' + node.s + ')' : node.s)

const Item = ({ node, rankNo, onNavigateToTaxon }) => {
  const text = label(node)
  return (
    <ListItem
      button
      style={{
        xmarginLeft: Math.max(0, rankNo - 2) * 10
      }}
      id={node.id}
      onClick={() => onNavigateToTaxon(node.id)}
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

const Breadcrumb = ({ source, onNavigateToTaxon }) => (
  <div>
    {source.map((s, idx) => (
      <Item
        rankNo={idx + 1}
        key={s.id}
        node={s}
        onNavigateToTaxon={() => onNavigateToTaxon(s.id)}
      />
    ))}
  </div>
)

export default TaxonGallery
