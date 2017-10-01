import React from 'react'
import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines'

const SparkLine = ({ taxonId, data, color }) => {
  return (
    <div style={{ width: 200 }}>
      <Sparklines data={data} width={100} height={20} margin={2}>
        <SparklinesLine color={color} />
        <SparklinesBars style={{ fill: 'slategray', fillOpacity: '.5' }} />
      </Sparklines>
{false &&      <div>{taxonId}_{data.join(',')}</div>}
    </div>
  )
}

export default SparkLine
