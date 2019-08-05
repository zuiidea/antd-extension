<p align=center>
  <a href="https://form-pro.now.sh/?path=/story/components-formpro--read-me">
    <img width="160" src="https://image.zuiidea.com/Form-Pro__Logo.svg">
  </a>
</p>

简体中文 | [English](./README.md)

## FormPro

- 采用配置式生成表单，无需 `import` 繁琐的表单控件。
- 使用 `React.lazy` API，支持按需加载大部分 `Ant Design` 数据输入组件。
- 设计灵活，支持自定义、预置表单控件。
- 使用 `TypeScript` 构建，提供完整的类型定义文件。

[在线演示](https://codesandbox.io/s/standard-formpro-18usg?fontsize=14)

## 何时使用

可完全替代 `Ant Design` 的 [Form]((https://ant.design/components/form-cn/#Form)) 组件，可应对复杂表单，弹窗表单等场景。

## 如何使用

### 安装

推荐使用 npm 或 yarn 的方式进行开发。

```bash
$ npm install form-pro --save 
# 或者
$ yarn add form-pro --save
```

> 如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。

### 使用

```js
import FormPro from 'form-pro'
import 'form-pro/lib/style'  // 如果项目支持 Less
// 如果项目不支持 Less，请使用
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

### 例子

- [Standard FormPro](https://form-pro.now.sh/?path=/story/components-formpro--standard-formpro) 
  [![Edit Standard FormPro](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/standard-formpro-18usg?fontsize=14)

- [With Modal](https://form-pro.now.sh/?path=/?path=/story/components-formpro--with-modal) 
- [Customized Form Controls](https://form-pro.now.sh/?path=/story/components-formpro--customized-form-controls) 

### 支持环境

- React version is greater than 16.6。

## API

### FormPro

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columns | 表单控件的配置描述，具体项见下表 | ColumnProps [] | - |
| formProps | 与 [Ant Design Form](https://ant.design/components/form-cn/#Form) 配置项保持一致 | FormProps | -   |
| onChange | 表单值发生变化时触发 | (allValues, changedValues) => void |  -  | 
| onSubmit | 点击提交按钮时触发 | (values) => void |  -  | 
| showSubmit | 是否展示提交按钮 | boolean |  `true`  | 
| submitText | 提交按钮文字 | React.ReactNode |  `Submit`  | 
| footer | 表单底部内容 | React.ReactNode |  -  | 
| loading | 所有表单控件加载时Loading | React.ReactNode |  -  | 

### Column

表单控件配置数据对象，是 columns 中的一项，Column 使用相同的 API。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 表单控件类型 | string | - |
| render | 自定义表单控件，与 `type` 字段同时存在时，优先使用 `render` | React.ReactNode | - |
| name | 表单域内字段名称 | string | - |
| options | 与 getFieldDecorator(id, options) 的 [options](https://ant.design/components/form-cn/#getFieldDecorator(id,-options)-%E5%8F%82%E6%95%B0) 参数保持一致 | object | - |
| extraProps | 表单控件的额外自定义参数，不同控件参数不同，与 `type` 对应 | object | - |
| formItemProps | 表单控件的参数，不同控件参数不同，与 `type` 对应 | object  | - |
| loading | 当前表单控件加载时Loading | React.ReactNode |  -  | 


### FormPro.create(options)

使用 `FormPro.create`函数可以创建一个新的 `FormPro` 组件，新的 `FormPro` 组件内置 `type` 将由 `options` 决定。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 表单控件类型 | string | - |
| component | 表单控件对应的组件 | any | - |
| formItemRender | 自定义渲染FormItem |  (itemOptions: any, Component: any) => JSX.Element | - |

创建一个内置`Checkbox`类型的 `FormPro` 组件

```javascript
const NewFormPro = create([{
    type: 'Checkbox',
    component: React.lazy(() => import('antd/lib/checkbox')),
}])  

...

<NewFormPro columns={[type: 'Checkbox', name: 'checkbox']} />
```

## Document and examples

[https://form-pro.now.sh](https://form-pro.now.sh/?path=/story/components-formpro--read-me-zh-cn)