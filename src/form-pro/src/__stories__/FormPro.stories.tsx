import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withConsole } from '@storybook/addon-console'
import { Button, Icon } from 'antd'
import { countryList, colorList, cityList, fruitList, treeData } from './data'
import FormPro from '../FormPro'
import * as styles from './FormPro.module.less'
import '../style/'

const columns = [
  {
    type: 'AutoComplete',
    formItemProps: {
      dataSource: fruitList,
    },
  },
  {
    type: 'Checkbox',
    formItemProps: {
      children: 'Checkbox',
    },
  },
  {
    type: 'CheckboxGroup',
    formItemProps: {
      options: fruitList,
    },
  },
  {
    type: 'DatePicker',
  },
  {
    type: 'MonthPicker',
  },
  {
    type: 'RangePicker',
  },
  {
    type: 'WeekPicker',
  },
  {
    type: 'Cascader',
    formItemProps: {
      options: cityList,
    },
  },
  {
    type: 'Input',
    formItemProps: {
      placeholder: 'Please input your name',
    },
  },
  {
    type: 'InputSearch',
    formItemProps: {
      placeholder: 'Please input search keywords',
    },
  },
  {
    type: 'InputPassword',
    formItemProps: {
      placeholder: 'Please input password',
    },
  },
  {
    type: 'InputTextArea',
  },
  {
    type: 'InputNumber',
    formItemProps: {
      min: 1,
      max: 10,
    },
  },
  {
    type: 'Mentions',
    extraProps: {
      dataSource: countryList.concat(colorList),
    },
  },
  {
    type: 'Select',
    formItemProps: {
      placeholder: 'Please select a country',
    },
    extraProps: {
      dataSource: countryList,
    },
  },
  {
    type: 'Select',
    name: 'SelectMultiple',
    label: 'Select[multiple]',
    formItemProps: {
      placeholder: 'Please select your favourite colors',
      mode: 'multiple',
    },
    extraProps: {
      dataSource: colorList,
    },
  },
  {
    type: 'Slider',
    formItemProps: {
      marks: {
        0: 'A',
        20: 'B',
        40: 'C',
        60: 'D',
        80: 'E',
        100: 'F',
      },
    },
  },
  {
    type: 'Rate',
  },
  {
    type: 'Radio',
    formItemProps: {
      children: 'Radio',
    },
  },
  {
    type: 'RadioGroup',
    extraProps: {
      dataSource: colorList,
    },
  },
  {
    type: 'RadioButtonGroup',
    extraProps: {
      dataSource: countryList,
    },
  },
  {
    type: 'TreeSelect',
    formItemProps: {
      treeData,
    },
  },
  {
    type: 'TimePicker',
  },
  {
    type: 'Upload',
    formItemProps: {
      name: 'logo',
      action: '/upload.do',
      listType: 'picture',
      children: (
        <Button>
          <Icon type="upload" /> Click to upload
        </Button>
      ),
    },
  },
  {
    type: 'UploadDragger',
    formItemProps: {
      name: 'logo',
      action: '/upload.do',
      listType: 'picture',
      children: <Icon style={{ fontSize: 24 }} type="inbox" />,
    },
  },
  // tslint:disable-next-line:ter-arrow-parens
].map(item => {
  item.label = item.label || item.type
  item.name = item.label || item.type
  return item
})

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
