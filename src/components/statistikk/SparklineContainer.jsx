import React from 'react'
import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines'

class SparkLineContainer extends React.Component {
  constructor() {
    super()
    this.state = { data: [] }
  }
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.taxonId !== this.props.taxonId)
      this.loadData(nextProps.taxonId)
  }

  loadData(taxonId) {
    const url = 'http://localhost:8888/stat/' + taxonId + '.json'
    console.log(url)
    //    this.setState({ data: [] })
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({ data: json.distribution }))
      .catch(err => console.error(err))
  }

  componentWillMount() {
    this.loadData(this.props.taxonId)
  }

  render() {
    return <SparkLine data={this.state.data} {...this.props} />
  }
}

export default SparkLineContainer
