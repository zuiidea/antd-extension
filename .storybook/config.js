import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

const req = require.context('../src', true, /.stories.tsx$/)

const loadStories = () => {
  require('../src/Welcome.stories')
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)

setOptions({
  name: 'Antd Extension',
})
