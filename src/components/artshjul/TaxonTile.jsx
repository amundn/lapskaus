import React from 'react'
import { GridListTile, GridListTileBar } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import OpenInBrowser from 'material-ui-icons/OpenInBrowser'
import config from '../../config'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
  title: {},
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  img: {
    transition: 'opacity 0.3s',
    maxWidth: '100%',
    maxHeight: '100%',
    verticalAlign: 'middle',
    margin: 'auto',
    display: 'block'
  }
})

class TaxonTile extends React.Component {
  constructor() {
    super()
    this.state = { opacity: 0 }
  }
  render() {
    const { tile, classes } = this.props
    return (
      <GridListTile
        cols={1}
        rows={1}
        onClick={() => this.props.onGotoTaxon(tile.id)}
        style={{
          margin: '2px'
        }}
      >
        <div
          style={{
            height: '379px',
            width: '379px',
            backgroundImage:
              'url(' + config.apiUrl + 'taxonphoto/' + tile.s + '.jpg)',
            position: 'relative',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
          }}
        />
        <GridListTileBar
          title={<span style={{ textTransform: 'capitalize' }}>{tile.p}</span>}
          subtitle={<b>{tile.s}</b>}
          titlePosition="top"
          classes={{
            root: classes.titleBar,
            title: classes.title
          }}
          actionIcon={
            <IconButton
              onClick={e => {
                alert(this.props.tile.s)
                e.stopPropagation()
              }}
            >
              <OpenInBrowser color="white" />
            </IconButton>
          }
        />
      </GridListTile>
    )
  }
}

TaxonTile.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(TaxonTile)
