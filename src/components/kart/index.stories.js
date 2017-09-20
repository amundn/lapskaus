import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { muiTheme } from 'storybook-addon-material-ui'

import { Paper } from 'material-ui'
import Kart from './index'

storiesOf('Kart', module)
  .addDecorator(muiTheme())
  .add('mockup', () => <Kart
   match={{ params: { taxon: 'Rødrev' } }} />)
