import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withConsole } from '@storybook/addon-console'

import FormPro from '../FormPro'

const columns = [
  { type: 'Input', name: 'name' },
  {
    type: 'Switch',
    name: 'isMale',
  },
  {
    type: 'Select',
    name: 'hobby',
    extraProps: {
      dataSource: [
        {
          key: 'book',
          value: 'book',
        },
        {
          key: 'music',
          value: 'music',
        },
      ],
    },
  },
]

storiesOf('FormPro', module)
  .addDecorator((storyFn: any, context: any) => withConsole()(storyFn)(context))
  .add('Standard FormPro', () => (
    <div style={{ padding: 30 }}>
      <FormPro
        columns={columns}
        formProps={{
          layout: 'vertical',
        }}
      />
    </div>
  ))
