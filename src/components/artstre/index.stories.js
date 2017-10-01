import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
//import { muiTheme } from 'storybook-addon-material-ui'
import FetchContainer from '../../FetchContainer'

import { Paper } from 'material-ui'
import Artstre from './Artstre'

const tree = {
  me: {
    id: 1281,
    s: 'Magnoliophyta',
    p: 'dekkfroete blomsterplanter'
  },
  children: [
    {
      id: 1282,
      s: 'Monocots',
      p: 'enfrobladete blomsterplanter'
    },
    {
      id: 1295,
      s: 'Eudicots',
      p: 'tofrobladete blomsterplanter'
    }
  ],
  parent: {
    id: 1131,
    s: 'Plantae',
    p: 'planteriket'
  },
  breadcrumb: [
    {
      id: 0,
      s: 'Life',
      p: 'Life'
    },
    {
      id: 1131,
      s: 'Plantae',
      p: 'planteriket'
    }
  ]
}
function mock(description, url, callback)  {
  console.log(description, url)
  callback(tree)
}

storiesOf('Artstre', module)
 // .addDecorator(muiTheme())
  .add('med avatar', () => (
    <FetchContainer fetchJson={mock}>
      <Artstre taxonId={59764} />
    </FetchContainer>
  ))
