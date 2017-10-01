import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
//import { muiTheme } from 'storybook-addon-material-ui'

import { Paper } from 'material-ui'
import Statistikk from './index'

storiesOf('Statistikk', module)
//  .addDecorator(muiTheme())
  .add('mockup', () => <Statistikk match={{ params: { taxon: 'Rødrev' } }} />)
