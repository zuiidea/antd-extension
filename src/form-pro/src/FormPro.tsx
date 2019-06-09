import * as React from 'react'
import create from './create'

const { lazy } = React

const config = [
  {
    type: 'Input',
    component: lazy(() => import('./components/Input')),
  },
  {
    type: 'Switch',
    component: lazy(() => import('./components/Switch')),
  },
]

const FormPro = create(config)

export default FormPro
