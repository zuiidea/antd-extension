import * as React from 'react'
import Select from 'antd/lib/select'
import create from './create'

const { lazy } = React
const { Option } = Select

export interface ISelectDataSourceItem {
  value: string
  key: string
}

const options = [
  {
    type: 'Input',
    component: lazy(() => import('antd/lib/input')),
  },
  {
    type: 'Switch',
    component: lazy(() => import('antd/lib/switch')),
  },
  {
    type: 'Select',
    component: Select,
    formItemRender: (itemOptions: any, Select: any) => {
      const { extraProps = {} } = itemOptions
      const { dataSource = [], optionProps = {} } = extraProps

      return (
        <Select>
          {dataSource.map((item: ISelectDataSourceItem) => (
            <Option value={item.key} key={item.key} {...optionProps}>
              {item.value}
            </Option>
          ))}
        </Select>
      )
    },
  },
]

const FormPro = create(options)

export default FormPro
