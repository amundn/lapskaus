import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {muiTheme} from 'storybook-addon-material-ui'

import {Paper} from 'material-ui'

storiesOf('Sample', module)
    .addDecorator(muiTheme())
    .add('abc', () => (
            <div style={{margin: '20px'}}>
                <Paper>abc</Paper>
                </div>
        ))
  .add('with text', () => (
    <button onClick={action('clicked')}>Hello Button</button>
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  ))
