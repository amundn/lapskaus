import React from 'react'
import Paper from 'material-ui/Paper'
import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import TaxonGrid from './TaxonGrid'
import SparkLine from './Sparkline'
import SparkLineDiff from './SparklineDiff'
import config from '../../config'
import PropTypes from 'prop-types'

class Artshjul extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.taxonId = 1285
  }
  render() {
    const tree = this.state.tree
    if (!tree) return null
    const style = {
      width: 700,
      height: '100%'
    }
    return (
      <div style={{ margin: '24px' }}>
        <Paper style={style}>
          {tree.breadcrumb && (
            <Breadcrumb
              onGotoTaxon={this.handleGotoTaxon}
              source={tree.breadcrumb}
            />
          )}

          <TaxonGrid
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
        </Paper>
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
      style={{
        marginLeft: Math.max(0, rankNo - 2) * 10
      }}
      id={node.id}
      leftAvatar={
        node.id > 0 ? (
          <Avatar src={config.apiUrl + 'taxonPhoto/' + node.s + '.jpg'} />
        ) : (
          <div />
        )
      }
      primaryText={
        <span
          style={{
            textTransform: 'capitalize'
          }}
        >
          {text}
        </span>
      }
      onClick={() => onGotoTaxon(node.id)}
      nestedItems={[<TaxonGrid key={1} taxonId={node.id} />]}
    />
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