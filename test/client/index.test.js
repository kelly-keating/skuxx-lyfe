
import React from 'react'
import test from 'ava'
import { shallow, mount, render } from 'enzyme'

import App from '../../client/components/App'
import Home from '../../client/components/Home'
import './setup-dom'

App.prototype.componentDidMount = () => {}


test('Heading renders on Home', t => {
  const wrapper = shallow(<Home />)
  t.is(wrapper.contains('SKUXX'), true)
})
