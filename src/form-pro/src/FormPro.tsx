import * as React from 'react'
import Select from 'antd/es/select'
import 'antd/es/select/style'
import create from './create'

const { lazy } = React
const { Option } = Select

export interface ISelectDataSourceItem {
  value: string
  key: string
}

const config = [
  {
    type: 'Input',
    component: lazy(() => import('./components/Input')),
  },
  {
    type: 'Switch',
    component: lazy(() => import('./components/Switch')),
  },
  {
    type: 'Select',
    component: Select,
    formItemRender: (itemConfig: any, Select: any) => {
      const { extraProps = {} } = itemConfig
      const { dataSource = [] } = extraProps

      return (
        <Select>
          {dataSource.map((item: ISelectDataSourceItem) => (
            <Option value={item.key} key={item.key}>
              {item.value}
            </Option>
          ))}
        </Select>
      )
    },
  },
]

const FormPro = create(config)

export default FormPro
