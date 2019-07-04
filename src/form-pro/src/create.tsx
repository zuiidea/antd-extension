import * as React from 'react'
import 'antd/es/button/style'
import 'antd/es/form/style'
import Form, { FormItemProps, FormCreateOption, FormProps } from 'antd/es/form'
import { GetFieldDecoratorOptions } from 'antd/es/form/Form'
import Button from 'antd/es/button'

const FormItem = Form.Item
const { PureComponent, Suspense, Fragment } = React

export interface IAnyObject {
  [propName: string]: any
}
export interface IColumnBase extends FormItemProps {
  type?: string
  render?: any
  name?: string
  options?: GetFieldDecoratorOptions
  extraProps?: IAnyObject
  formItemProps?: object
}

export type IColumn = IColumnBase | React.ReactNode
export interface IFormProBaseProps {
  columns: IColumn[]
  formProps?: FormProps
  form: any
  onChange?: any
  onSubmit?: any
  showSubmit?: boolean
  submitText: React.ReactNode
  wrappedComponentRef: any
  footer?: React.ReactNode
}

export interface ICreateFormProItemProps {
  type?: string
  component?: any
  formItemRender?: (itemOptions: any, Component: any) => JSX.Element
}

export interface IFormProBaseState {}

const create = (
  options: ICreateFormProItemProps[],
  createOptions?: FormCreateOption<IFormProBaseProps>,
): any => {
  class FormProBase extends PureComponent<
    IFormProBaseProps,
    IFormProBaseState
  > {
    static get defaultProps() {
      return {
        showSubmit: true,
      }
    }

    isColumn = (
      element: IColumnBase | React.ReactNode,
    ): element is IColumnBase => {
      return !React.isValidElement(element)
    }

    renderFormItem = (item: IColumnBase | React.ReactNode, index: number) => {
      if (!this.isColumn(item)) {
        return <Fragment key={index}>{item}</Fragment>
      }

      const { getFieldDecorator } = this.props.form
      const {
        type,
        name,
        render,
        extraProps = {},
        formItemProps = {},
        ...restProps
      } = item

      const { addonBefore, addonAfter } = extraProps
      const itemOptions = options.find(_ => type === _.type)

      let formItemContent

      if (render) {
        // customized form controls
        formItemContent = React.cloneElement(render, formItemProps)
      } else if (itemOptions) {
        // built-in form controls
        const { formItemRender } = itemOptions
        const FormItemComponent = itemOptions.component
        formItemContent = formItemRender ? (
          React.cloneElement(
            formItemRender(item, FormItemComponent),
            formItemProps,
          )
        ) : (
          <FormItemComponent {...formItemProps} />
        )
      } else {
        return
      }

      return (
        <FormItem key={index} {...restProps}>
          {addonBefore}
          <Suspense fallback={null}>
            {getFieldDecorator(name, item.options)(formItemContent)}
          </Suspense>
          {addonAfter}
        </FormItem>
      )
    }

    renderFooter = () => {
      const {
        submitText = 'Submit',
        showSubmit,
        formProps,
        footer,
      } = this.props
      if (footer) {
        return footer
      }

      if (!showSubmit) {
        return null
      }

      return (
        <Form.Item
          colon={false}
          label={<Fragment />}
          labelCol={formProps!.labelCol}
          wrapperCol={formProps!.wrapperCol}
        >
          <Button onClick={this.handleSubmit} type="primary">
            {submitText}
          </Button>
        </Form.Item>
      )
    }

    handleSubmit = () => {
      const { onSubmit, form } = this.props
      const { validateFieldsAndScroll } = form

      validateFieldsAndScroll((err: any, values: any) => {
        if (!err) {
          onSubmit && onSubmit(values)
        }
      })
    }

    submit = this.props.form.validateFieldsAndScroll

    reset = this.props.form.resetFields

    render() {
      const { columns, formProps } = this.props

      return (
        <Form {...formProps}>
          {columns.map(this.renderFormItem)}
          {this.renderFooter()}
        </Form>
      )
    }
  }

  return Form.create({
    onValuesChange: (props, changedValues, allValues) => {
      props.onChange && props.onChange(allValues, changedValues)
    },
    ...createOptions,
  })(FormProBase)
}

export default create
