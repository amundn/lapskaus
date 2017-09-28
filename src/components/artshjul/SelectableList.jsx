import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MobileTearSheet from '../../../MobileTearSheet'
import { List, ListItem, makeSelectable } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Subheader from 'material-ui/Subheader'

let SelectableList = makeSelectable(List)

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired
    }

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue
      })
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index
      })
    }

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      )
    }
  }
}
