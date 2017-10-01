import React from 'react'
import renderer from 'react-test-renderer'
import TaxonGallery from './TaxonGallery'
import TaxonGrid from './TaxonGrid'
import TaxonTile from './TaxonTile'
import FetchContainer from '../../../FetchContainer'
import taxon from '../testTaxon'

test('Taxon gallery', () => {
  const component = renderer.create(<TaxonGallery tree={taxon} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
