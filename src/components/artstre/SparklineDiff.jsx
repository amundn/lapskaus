import React from 'react'
import {
  Sparklines,
  SparklinesNormalBand,
  SparklinesReferenceLine,
  SparklinesLine,
  SparklinesBars
} from 'react-sparklines'
import config from '../../config'

class SparkLineContainer extends React.Component {
  constructor() {
    super()
    this.state = { data: [] }
  }
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.taxonId !== this.props.taxonId)
      this.loadData(nextProps.taxonId, 'data')
    if (nextProps.taxonIdParent !== this.props.taxonIdParent)
      this.loadData(nextProps.taxonIdParent, 'parentData')
  }

  loadData(taxonId, target) {
    const url = config.apiUrl + 'stat/' + taxonId + '.json'

    console.error('===')
    this.context.fetchJson('Statistikk', url, json => {
      var ns = {}
      ns[target] = json.distribution
      this.setState(ns)
    })
    console.error('===')
    /*

    fetch(url)
      .then(response => response.json())
      .then(json => {
        var ns = {}
        ns[target] = json.distribution
        this.setState(ns)
      })
      .catch(err => console.error(err))*/
  }

  componentWillMount() {
    this.loadData(this.props.taxonId, 'data')
    this.loadData(this.props.taxonIdParent, 'parentData')
  }

  render() {
    if (!this.state.data || !this.state.parentData) return null
    const data = this.calculate(this.state.data, this.state.parentData)
    return <SparkLine data={data} {...this.props} />
  }

  calculate(child, parent) {
    const p = this.normalize(parent)
    const c = this.normalize(child)
    //    for (var i = 0; i < c.length; i++) c[i] = (c[i] - p[i]) / p[i]
    for (var i = 0; i < c.length; i++) c[i] = c[i] - p[i]

    return c
  }

  normalize(dist) {
    let count = 0
    let r = dist.slice(0)
    for (var i = 0; i < dist.length; i++) count += r[i]
    for (i = 0; i < dist.length; i++) r[i] /= count
    return r
  }
}

const SparkLine = ({ data, color }) => (
  <div style={{ width: 200 }}>
    <Sparklines data={data} width={100} height={30} margin={2}>
      <SparklinesLine color={color} />
      <SparklinesReferenceLine type="mean" />
      <SparklinesBars style={{ fill: 'slategray', fillOpacity: '.5' }} />
      <SparklinesNormalBand />
    </Sparklines>
  </div>
)

export default SparkLineContainer
