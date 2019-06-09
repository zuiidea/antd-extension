import * as React from 'react'
import 'antd/es/form/style'
import Form, { FormItemProps } from 'antd/es/form'

const FormItem = Form.Item
const { PureComponent, Suspense } = React

export interface IColumn {
  type: string
  extraProps?: any
  formItemProps?: FormItemProps
}

export interface IFormProBaseProps {
  columns: Array<IColumn>
}

export interface IFormProBaseState {}

const create = (config: Array<any>) =>
  class extends PureComponent<IFormProBaseProps, IFormProBaseState> {
    renderFormItem = (item: IColumn, index: number) => {
      const { type, extraProps = {}, formItemProps = {} } = item
      const { addonBefore, addonAfter } = extraProps
      const itemConfig = config.find(_ => type === _.type)
      if (!itemConfig) {
        return null
      }

      const MyFormItem = itemConfig.component

      return (
        <FormItem key={index}>
          {addonBefore}
          <Suspense fallback={null}>
            <MyFormItem {...formItemProps} />
          </Suspense>
          {addonAfter}
        </FormItem>
      )
    }

    render() {
      const { columns } = this.props
      return <Form>{columns.map(this.renderFormItem)}</Form>
    }
  }

export default create
