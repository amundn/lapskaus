import React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import OpenInBrowser from 'material-ui/svg-icons/action/open-in-browser'
import config from '../../config'

class TaxonGrid extends React.Component {
  render() {
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      },
      gridList: {
        width: 800,
        //      height: 650
        overflowY: 'none'
      }
    }

    return (
      <div style={styles.root}>
        <GridList cols={3} cellHeight={180} style={styles.gridList}>
          {this.props.tilesData.map(tile => (
            <Tile onGotoTaxon={this.props.onGotoTaxon} tile={tile} key={tile.id} />
          ))}
        </GridList>
      </div>
    )
  }
}

class Tile extends React.Component {
  constructor() {
    super()
    this.state = { opacity: 0 }
  }
  render() {
    const tile = this.props.tile
    console.log('tile', tile)
    return (
      <GridTile
        key={tile.id}
        title={<span style={{ textTransform: 'capitalize' }}>{tile.p}</span>}
        subtitle={
          <span>
            <b>{tile.s}</b>
          </span>
        }
        onClick={() => this.props.onGotoTaxon(tile.id)}
        actionIcon={
          <IconButton
            onClick={e => {
              alert('.')
              e.stopPropagation()
            }}
          >
            <OpenInBrowser color="white" />
          </IconButton>
        }
      >
        <img
          onLoad={() => this.setState({ opacity: 1 })}
          style={{
            opacity: this.state.opacity,
            transition: 'opacity 0.3s'
          }}
          alt="taxon"
          src={config.apiUrl + 'taxonphoto/' + tile.s + '.jpg'}
        />
      </GridTile>
    )
  }
}

export default TaxonGrid
