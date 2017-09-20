import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { muiTheme } from 'storybook-addon-material-ui'

import { Paper } from 'material-ui'
import Artshjul from './index'

storiesOf('Artshjul', module)
  .addDecorator(muiTheme())
  .add('mockup', () => <Artshjul />)
