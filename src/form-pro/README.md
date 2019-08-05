<p align=center>
  <a href="https://form-pro.now.sh/?path=/story/components-formpro--read-me">
    <img width="160" src="https://image.zuiidea.com/Form-Pro__Logo.svg">
  </a>
</p>

English | [简体中文](./README.zh-CN.md)

## FormPro

- Generate forms with configuration, No need to use `import` cumbersome form controls.
- Use the `React.lazy` API to support loading most of the `Ant Design` data input components on demand.
- Flexible design, support for custom, preset form controls.
- Written in `TypeScript` with complete defined types.

[Live demo](https://codesandbox.io/s/standard-formpro-18usg?fontsize=14)

## When To Use

Can completely replace Ant Design's [Form](https://ant.design/components/form/#Form) component, dealing with complex forms, pop-up windows, etc.  

## How To Use

### Installation

We recommend using npm or yarn to install.

```bash
$ npm install form-pro --save 
# or
$ yarn add form-pro --save
```

> If you are in a bad network environment, you can try other registries and tools like  [cnpm](https://github.com/cnpm/cnpm).

### Usage

```js
import FormPro from 'form-pro'
import 'form-pro/lib/style'  // If the development environment supports Less
// If the development environment does not support Less, please use
// import 'form-pro/lib/style/index.css'

<FormPro
  columns={[
    {
      type: 'Input',
      name: 'name'
    },
    {
      type: 'DatePicker',
      name: 'birthday'
    }
  ]}
/>
```

### Examples

- [Standard FormPro](https://form-pro.now.sh/?path=/story/components-formpro--standard-formpro) 
  [![Edit Standard FormPro](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/standard-formpro-18usg?fontsize=14)

- [With Modal](https://form-pro.now.sh/?path=/?path=/story/components-formpro--with-modal) 
- [Customized Form Controls](https://form-pro.now.sh/?path=/story/components-formpro--customized-form-controls) 

### Environment Support

- React version is greater than 16.6.

## API

### FormPro

| Property | Description | Type | Default | 
| --- | --- | --- | --- |
| columns | Columns of table | ColumnProps [] | - |
| formProps | Consistent with the Ant Design [Form](https://ant.design/components/form-cn/#Form) configuration | FormProps | -   |
| onChange | Triggered when the form value changes | (allValues, changedValues) => void |  -  | 
| onSubmit | Triggered when the submit button is clicked | (values) => void |  -  | 
| showSubmit | Whether to show the submit button | boolean |  `true`  | 
| submitText | Submit button text | React.ReactNode |  `Submit`  | 
| footer | Bottom of the form | React.ReactNode |  -  | 
| loading | Loading when all form controls are loaded | React.ReactNode |  -  | 

### Column

Form control configuration data object, which is an item in columns, Column uses the same API.

| Property | Description | Type | Default | 
| --- | --- | --- | --- |
| type | Form control type | string | - |
| render | Custom form controls, when used with the `type` field, use `render` first. | React.ReactNode | - |
| name | Field name within the form field | string | - |
| options | Consistent with the [options](https://ant.design/components/form/#getFieldDecorator(id,-options)-parameters) parameter of getFieldDecorator(id, options) | object | - |
| extraProps | Additional custom parameters for form controls, different control parameters, corresponding to `type` | object | - |
| formItemProps | The parameters of the form control, different control parameters, corresponding to `type` | object  | - |
| loading | Loading when the current form control loads | React.ReactNode | - |

### FormPro.create(options)

Use the `FormPro.create` function to create a new `FormPro` component. The new `FormPro` component built in `type` will be determined by `options`.

| Property | Description | Type | Default | 
| --- | --- | --- | --- |
| type | Form control type | string | - |
| component | The component corresponding to the form control | any | - |
| formItemRender | Custom rendering of FormItem |  (itemOptions: any, Component: any) => JSX.Element | - |

Create a `FormPro` component with a built-in `Checkbox` type.

```javascript
const NewFormPro = create([{
    type: 'Checkbox',
    component: React.lazy(() => import('antd/lib/checkbox')),
}])  

...

<NewFormPro columns={[type: 'Checkbox', name: 'checkbox']} />
```

## Document and examples

[https://form-pro.now.sh](https://form-pro.now.sh/?path=/story/components-formpro--read-me)