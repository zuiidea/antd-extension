import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withConsole } from '@storybook/addon-console'

import FormPro from '../FormPro'

const columns = [
  { type: 'Input' },
  {
    type: 'Switch',
  },
]

storiesOf('FormPro', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('Standard FormPro', () => <FormPro columns={columns} />)
