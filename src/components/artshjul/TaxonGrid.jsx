import React from 'react'
import { GridList, GridListTile } from 'material-ui/GridList'
//import OpenInBrowser from 'material-ui-icons/OpenInBrowser'
import Subheader from 'material-ui/List/ListSubheader'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import TaxonTile from './TaxonTile'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper
  },
  gridList: {
    width: '100%',
    height: '100%'
  }
})

class TaxonGrid extends React.Component {
  render() {
    const classes = this.props.classes
    return (
      <div className={classes.container}>
        <GridList cellHeight={180} className={classes.gridList} cols={3}>
          <GridListTile cols={3} style={{ height: 'auto' }}>
            <Subheader>{this.props.headerText}</Subheader>
          </GridListTile>
          {this.props.tilesData.map(tile => (
            <TaxonTile
              classes
              onGotoTaxon={this.props.onGotoTaxon}
              tile={tile}
              key={tile.id}
            />
          ))}
        </GridList>
      </div>
    )
  }
}

TaxonGrid.propTypes = {
  headerText: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  onGotoTaxon: PropTypes.func
}

export default withStyles(styles)(TaxonGrid)
