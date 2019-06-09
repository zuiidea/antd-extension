import * as React from 'react'
import { shallow } from 'enzyme'
import FormPro from '../FormPro'

describe('FormPro', () => {
  it('renders', () => {
    const wrapper = shallow(<FormPro>OK</FormPro>)
    expect(wrapper).toMatchInlineSnapshot('ShallowWrapper {}')
  })
})
