## FormPro

- Generate forms with configuration, No need to use `import` cumbersome form controls.
- Use the `React.lazy` API to support loading most of the `Ant Design` data input components on demand.
- Flexible design, support for custom, preset form controls.
- Written in `TypeScript` with complete defined types.

## When To Use

Can completely replace Ant Design's [Form](https://ant.design/components/form/#Form) component, dealing with complex forms, pop-up windows, etc.  


## API

### FormPro

| Property | Description | Type | Default | 
| --- | --- | --- | --- | --- |
| columns | Columns of table | ColumnProps [] | - |
| formProps | Consistent with the Ant Design [Form] (https://ant.design/components/form-cn/#Form) configuration | FormProps | -   |
| onChange | Triggered when the form value changes | (allValues, changedValues) => void |  -  | 
| onSubmit | Triggered when the submit button is clicked | (values) => void |  -  | 
| showSubmit | Whether to show the submit button | boolean |  `true`  | 
| submitText | Submit button text | React.ReactNode |  `Submit`  | 
| footer | Bottom of the form | React.ReactNode |  -  | 

### Column

Form control configuration data object, which is an item in columns, Column uses the same API.

| Property | Description | Type | Default | 
| --- | --- | --- | --- | --- |
| type | Form control type | string | - |
| render | Custom form controls, when used with the `type` field, use `render` first. | React.ReactNode | - |
| name | Field name within the form field | string | - |
| options | Consistent with the [options](https://ant.design/components/form/#getFieldDecorator(id,-options)-parameters) parameter of getFieldDecorator(id, options) | object | - |
| extraProps | Additional custom parameters for form controls, different control parameters, corresponding to `type` | object | - |
| formItemProps | The parameters of the form control, different control parameters, corresponding to `type` | object  | - |


### FormPro.create(options)

Use the `FormPro.create` function to create a new `FormPro` component. The new `FormPro` component built in `type` will be determined by `options`.

| Property | Description | Type | Default | 
| --- | --- | --- | --- | --- |
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
