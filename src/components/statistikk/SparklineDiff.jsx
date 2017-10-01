import React from 'react'
import {
  Sparklines,
  SparklinesNormalBand,
  SparklinesReferenceLine,
  SparklinesLine,
  SparklinesBars
} from 'react-sparklines'

const SparkLineDiff = ({ data, color }) => (
  <div style={{ width: 200 }}>
    <Sparklines data={data} width={100} height={30} margin={2}>
      <SparklinesLine color={color} />
      <SparklinesReferenceLine type="mean" />
      <SparklinesBars style={{ fill: 'slategray', fillOpacity: '.5' }} />
      <SparklinesNormalBand />
    </Sparklines>
  </div>
)

export default SparkLineDiff
