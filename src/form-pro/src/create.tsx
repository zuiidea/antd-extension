import * as React from 'react'
import 'antd/es/form/style'
import Form, { FormItemProps } from 'antd/es/form'
import { GetFieldDecoratorOptions } from 'antd/es/form/Form'

const FormItem = Form.Item
const { PureComponent, Suspense } = React

export interface IColumn {
  type: string
  name?: string
  options?: GetFieldDecoratorOptions
  extraProps?: any
  formItemProps?: FormItemProps
  formItemRender?: (itemConfig: any, Component: any) => JSX.Element
}

export interface IFormProBaseProps {
  columns: Array<IColumn>
  form: any
}

export interface IFormProBaseState {}

const create = (config: Array<any>) => {
  class FormProBase extends PureComponent<
    IFormProBaseProps,
    IFormProBaseState
  > {
    renderFormItem = (item: IColumn, index: number) => {
      const { getFieldDecorator } = this.props.form
      const { type, name, options, extraProps = {}, formItemProps = {} } = item
      const { addonBefore, addonAfter } = extraProps
      const itemConfig = config.find(_ => type === _.type)
      if (!itemConfig) {
        return null
      }

      const { formItemRender } = itemConfig
      const FormItemComponent = itemConfig.component
      const formItemContent = formItemRender ? (
        React.cloneElement(
          formItemRender(item, FormItemComponent),
          formItemProps
        )
      ) : (
        <FormItemComponent {...formItemProps} />
      )

      return (
        <FormItem key={index}>
          {addonBefore}
          <Suspense fallback={null}>
            {getFieldDecorator(name, options)(formItemContent)}
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

  return Form.create()(FormProBase)
}

export default create
