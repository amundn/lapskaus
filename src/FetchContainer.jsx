import React from 'react'
import PropTypes from 'prop-types'
import config from './config'

function increment(state) {
  return { loading: state.loading + 1 }
}
function decrement(state) {
  return { loading: state.loading - 1 }
}

function checkStatus(r) {
  if (r.status !== 200) {
    throw new Error(r.statusText + ' (HTTP ' + r.status + ')')
  }
  return r
}

class FetchContainer extends React.Component {
  state = { loading: 0 }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        isLoading: this.state.loading > 0,
        message: this.state.message
      })
    )

    return (
      <div>
        <div>{childrenWithProps}</div>
      </div>
    )
  }

  static propTypes = {
    isLoading: PropTypes.bool,
    message: PropTypes.string
  }
  static childContextTypes = {
    fetchJson: PropTypes.func,
    fetchImage: PropTypes.func
  }

  getChildContext() {
    return {
      fetchJson: this.handleFetchJson,
      fetchImage: this.handleFetchImage
    }
  }

  handleFetchImage = (description, url, callback) => {
    let img = new Image() // TODO: Error handling
    img.onload = function() {
      callback(img)
    }
    img.src = url
  }

  handleFetchJson = (description, url, callback) => {
    if (this.props.fetchJson)
      return this.props.fetchJson(description, url, callback)
    this.handleFetch(description, url, response => {
      response.json().then(json => callback(json))
    })
  }

  handleFetch = (description, url, callback) => {
    console.error(url)
    this.flashMessage(`Loading ${description}...`)
    this.setState(increment)
    url = config.apiUrl + url
    fetch(url)
      .then(checkStatus)
      .then(response => {
        if (!response.ok) throw new Error(response)
        callback(response)
        this.setState(decrement)
      })
      .catch(error => {
        const message = description + ': ' + error.message
        console.error(message)
        this.setState(decrement)
        this.flashMessage(message)
      })
  }

  flashMessage(message) {
    this.setState({ message })
    clearTimeout(this.messageTimer)
    this.messageTimer = window.setTimeout(
      () => this.setState({ message: null }),
      3500
    )
  }
}

export default FetchContainer
