
import React from 'react'
import test from 'ava'
import { shallow, mount, render } from 'enzyme'
import {Provider} from 'react-redux'

import './setup-dom'

import store from '../../client/store'
import App from '../../client/components/App'
// import Home from '../../client/components/Home'

App.prototype.componentDidMount = () => {}


test('Heading renders on Home', t => {
  const wrapper = mount(<Provider store={store}><App /></Provider>)
  t.is(wrapper.find('#title').text(), 'SKUXX')
})
