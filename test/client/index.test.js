
import React from 'react'
import test from 'ava'
import { shallow, mount, render } from 'enzyme'
import {Provider} from 'react-redux'

import './setup-dom'

import store from '../../client/store'
import App from '../../client/components/App'
import Home from '../../client/components/Home'
import FormPage from '../../client/containers/FormPage'

App.prototype.componentDidMount = () => {}


test('Home heading renders on /', t => {
  const wrapper = mount(<Provider store={store}><App /></Provider>)
  t.is(wrapper.find('#title').text(), 'SKUXX')
})

test('Form renders on /form', t => {
  const wrapper = mount(<Provider store={store}><FormPage/></Provider>)
  t.is(wrapper.find('#form-title').text(), 'Add A Skuxx')
})
