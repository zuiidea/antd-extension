import { Input, Select } from 'antd'
import * as React from 'react'
import * as styles from './FormPro.module.less'
import FormPro from '../FormPro'
import '../style/'

const { PureComponent } = React
const { Option } = Select

class PriceInput extends PureComponent<any, any> {
  static getDerivedStateFromProps(nextProps: any) {
    // Should be a controlled component.
    if ('value' in nextProps) {
      return {
        ...(nextProps.value || {}),
      }
    }
    return null
  }

  constructor(props: any) {
    super(props)

    const value = props.value || {}
    this.state = {
      number: value.number || 0,
      currency: value.currency || 'rmb',
    }
  }

  handleNumberChange = (e: any) => {
    const number = parseInt(e.target.value || 0, 10)
    if (Number.isNaN(number)) {
      return
    }
    if (!('value' in this.props)) {
      this.setState({ number })
    }
    this.triggerChange({ number })
  }

  handleCurrencyChange = (currency: any) => {
    if (!('value' in this.props)) {
      this.setState({ currency })
    }
    this.triggerChange({ currency })
  }

  triggerChange = (changedValue: any) => {
    // Should provide an event to pass value to Form.
    const { onChange } = this.props
    if (onChange) {
      onChange(Object.assign({}, this.state, changedValue))
    }
  }

  render() {
    const { size } = this.props
    const { state } = this
    return (
      <span>
        <Input
          type="text"
          size={size}
          value={state.number}
          onChange={this.handleNumberChange}
          style={{ width: '65%', marginRight: '3%' }}
        />
        <Select
          value={state.currency}
          size={size}
          style={{ width: '32%' }}
          onChange={this.handleCurrencyChange}
        >
          <Option value="rmb">RMB</Option>
          <Option value="dollar">Dollar</Option>
        </Select>
      </span>
    )
  }
}

const columns = [
  <div className={styles.title}>Examples</div>,
  {
    name: 'price',
    required: true,
    render: <PriceInput />,
  },
]

class CustomizedFormControls extends PureComponent<any, any> {
  render() {
    const formProps = {
      wrapperCol: { span: 14 },
    }

    return (
      <div className={styles.container}>
        <FormPro
          columns={columns}
          formProps={formProps}
          onChange={(values: any) => {
            console.log(values)
          }}
          onSubmit={(values: any) => {
            console.log(values)
          }}
        />
      </div>
    )
  }
}

export default CustomizedFormControls
