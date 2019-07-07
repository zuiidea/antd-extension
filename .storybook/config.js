import { configure, addParameters } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { themes } from '@storybook/theming'

setOptions({
  name: 'Antd Extension',
  showNav: true,
  showPanel: false,
  showAddonPanel: false,
  isToolshown: false,
})

const req = require.context('../src', true, /.stories.tsx$/)

const loadStories = () => {
  require('../src/Welcome.stories')
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
