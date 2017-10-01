import React from 'react'
import SparkLine from './Sparkline'
import SparkLineDiff from './SparklineDiff'
import TaxonListItem from './TaxonListItem'

const Sparks = () => {
  return (
    <div style={{ display: 'flex' }}>
      {tree.breadcrumb &&
        tree.breadcrumb.map(
          pt =>
            pt.id === 0 ? null : (
              <div key={pt.id} style={{ float: 'left', margin: '20px' }}>
                <SparkLineDiff
                  color="green"
                  taxonId={tree.me.id}
                  taxonIdParent={pt.id}
                />
                <div>{label(pt)}</div>
              </div>
            )
        )}
      {tree.breadcrumb &&
        tree.breadcrumb.length >= 2 && (
          <div style={{ display: 'block' }}>
            <SparkLine color="blue" taxonId={tree.breadcrumb[1].id} />
            <SparkLineDiff
              color="green"
              taxonId={tree.me.id}
              taxonIdParent={tree.breadcrumb[1].id}
            />
            <SparkLine color="red" taxonId={tree.me.id} />
          </div>
        )}
    </div>
  )
}

export default Sparks
