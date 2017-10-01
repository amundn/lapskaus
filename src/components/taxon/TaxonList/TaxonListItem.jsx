import React from 'react'
import PropTypes from 'prop-types'

import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import OpenInBrowser from 'material-ui-icons/OpenInBrowser'
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from 'material-ui/List'
import { withStyles } from 'material-ui/styles'

import config from '../../../config'

const styles = theme => ({
  img: {
    height: '100%'
  },
  listitem: {
    textTransform: 'capitalize'
  }
})

class TaxonListItem extends React.Component {
  render() {
    const { tile, onNavigateToTaxon, onPickTaxon, classes } = this.props
    return (
      <ListItem button onClick={() => onNavigateToTaxon(tile.id)}>
        <Avatar
          classes={{
            img: classes.img
          }}
          alt={'avatar'}
          src={`${config.apiUrl}taxonphoto/${tile.s}.jpg`}
        />
        <ListItemText
          className={classes.listitem}
          primary={tile.p}
          secondary={tile.s}
        />
        <ListItemSecondaryAction>
          <IconButton
            onClick={e => {
              onPickTaxon(tile.id)
              e.stopPropagation()
            }}
          >
            <OpenInBrowser />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}

TaxonListItem.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TaxonListItem)
