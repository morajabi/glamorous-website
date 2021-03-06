import React from 'react'
import {mount} from 'enzyme'
import {matcher, serializer} from 'jest-glamor-react'
import Index from '../pages/index'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

global.docsearch = jest.fn(() => {})

test('renders', () => {
  expect(() => mount(<Index />)).not.toThrow()
})
