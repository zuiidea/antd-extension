import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withConsole } from '@storybook/addon-console'

import FormPro from '../FormPro'
import * as styles from './FormPro.module.less'
import '../style/'

const columns = [
  {
    type: 'Input',
    name: 'Input',
    label: 'Input',
    required: true,
    formItemProps: {
      placeholder: 'Please input your name',
    },
  },
  {
    type: 'Switch',
    name: 'Switch',
    label: 'Switch',
    required: true,
  },
  {
    type: 'Select',
    name: 'Select',
    label: 'Select',
    required: true,
    formItemProps: {
      placeholder: 'Please select a country',
    },
    extraProps: {
      dataSource: [
        {
          key: 'china',
          value: 'China',
        },
        {
          key: 'usa',
          value: 'U.S.A',
        },
      ],
    },
  },
  {
    type: 'Select',
    name: 'SelectMultiple',
    label: 'Select[multiple]',
    required: true,
    formItemProps: {
      placeholder: 'Please select your favourite colors',
      mode: 'multiple',
    },
    extraProps: {
      dataSource: [
        {
          key: 'Red',
          value: 'Red',
        },
        {
          key: 'Green',
          value: 'Green',
        },
        {
          key: 'Blue',
          value: 'Blue',
        },
      ],
    },
  },
]

storiesOf('FormPro', module)
  .addDecorator((storyFn: any, context: any) => withConsole()(storyFn)(context))
  .add('Standard FormPro', () => (
    <div className={styles.container}>
      <FormPro
        columns={columns}
        formProps={{
          labelCol: { span: 6 },
          wrapperCol: { span: 14 },
        }}
        onChange={(values, changedValues) => {
          console.log(values, changedValues)
        }}
      />
    </div>
  ))
