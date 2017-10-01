import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import FetchContainer from '../../FetchContainer'

import { Paper } from 'material-ui'
import TaxonList from './TaxonList'
import TaxonGallery from './TaxonGallery'
import taxon from './testTaxon'

function mock(description, url, callback) {
  console.log(description, url)
  callback(taxon)
}

storiesOf('Taxon', module)
  .add('List', () => (
    <FetchContainer fetchJson={mock}>
      <TaxonList taxonId={59764} onPickTaxon={action('select')} />
    </FetchContainer>
  ))
  .add('Gallery', () => (
    <FetchContainer fetchJson={mock}>
      <TaxonGallery taxonId={59764} onPickTaxon={action('select')} />
    </FetchContainer>
  ))
