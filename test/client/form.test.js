import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'

import Form from '../../client/components/Form'
import './setup-dom'

test('form class exists', t => {
  const wrapper = mount(<Form />)
  t.is(wrapper.find('.form').exists(), true)
})
