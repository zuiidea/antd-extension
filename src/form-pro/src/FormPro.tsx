import * as React from 'react'
import DatePicker from 'antd/lib/date-picker'
import Input from 'antd/lib/input'
import Mentions from 'antd/lib/mentions'
import Radio from 'antd/lib/radio'
import Select from 'antd/lib/select'
import create from './create'

const { lazy } = React

export interface IDataSourceItem {
  value: string
  label: string
}

const generateFormItemRender = (FormItem, FormItemOption) => {
  return (itemOptions: any) => {
    const { extraProps = {} } = itemOptions
    const { dataSource = [], optionProps = {} } = extraProps

    return (
      <FormItem>
        {dataSource.map((item: IDataSourceItem) => (
          <FormItemOption value={item.value} key={item.value} {...optionProps}>
            {item.label}
          </FormItemOption>
        ))}
      </FormItem>
    )
  }
}

export const defaultOptions = [
  {
    type: 'AutoComplete',
    component: lazy(() => import('antd/lib/auto-complete')),
  },
  {
    type: 'Checkbox',
    component: lazy(() => import('antd/lib/checkbox')),
  },
  {
    type: 'CheckboxGroup',
    component: lazy(() => import('antd/lib/checkbox/Group')),
  },
  {
    type: 'Cascader',
    component: lazy(() => import('antd/lib/cascader')),
  },
  {
    type: 'DatePicker',
    component: DatePicker,
  },
  {
    type: 'MonthPicker',
    component: DatePicker.MonthPicker,
  },
  {
    type: 'WeekPicker',
    component: DatePicker.WeekPicker,
  },
  {
    type: 'RangePicker',
    component: DatePicker.RangePicker,
  },
  {
    type: 'Input',
    component: Input,
  },
  {
    type: 'InputSearch',
    component: Input.Search,
  },
  {
    type: 'InputGroup',
    component: Input.Group,
  },
  {
    type: 'InputTextArea',
    component: Input.TextArea,
  },
  {
    type: 'InputPassword',
    component: Input.Password,
  },
  {
    type: 'InputNumber',
    component: lazy(() => import('antd/lib/input-number')),
  },
  {
    type: 'Mentions',
    formItemRender: generateFormItemRender(Mentions, Mentions.Option),
  },
  {
    type: 'Rate',
    component: lazy(() => import('antd/lib/rate')),
  },
  {
    type: 'Radio',
    component: Radio,
  },
  {
    type: 'RadioGroup',
    formItemRender: generateFormItemRender(Radio.Group, Radio),
  },
  {
    type: 'RadioButtonGroup',
    formItemRender: generateFormItemRender(Radio.Group, Radio.Button),
  },
  {
    type: 'Switch',
    component: lazy(() => import('antd/lib/switch')),
  },
  {
    type: 'Slider',
    component: lazy(() => import('antd/lib/slider')),
  },
  {
    type: 'Select',
    formItemRender: generateFormItemRender(Select, Select.Option),
  },
  {
    type: 'TreeSelect',
    component: lazy(() => import('antd/lib/tree-select')),
  },
  {
    type: 'TimePicker',
    component: lazy(() => import('antd/lib/time-picker')),
  },
  {
    type: 'Upload',
    component: lazy(() => import('antd/lib/upload')),
  },
  {
    type: 'UploadDragger',
    component: lazy(() => import('antd/lib/upload/Dragger')),
  },
]

const FormPro = create(defaultOptions)

export default FormPro
