import React from 'react'
import renderer from 'react-test-renderer'
import Sparkline from './Sparkline'
import SparklineDiff from './SparklineDiff'

test('Sparkline', () => {
  const component = renderer.create(<Sparkline color='red' data={[1, 2, 3]} taxonId={4} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Sparkline diff', () => {
  const component = renderer.create(<SparklineDiff color='red' data={[1, 2, 3]} taxonId={4} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
