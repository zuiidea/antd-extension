/* eslint-disable */
import * as React from 'react'
import { Button, Icon, Modal } from 'antd'
import { storiesOf } from '@storybook/react'
import { withConsole } from '@storybook/addon-console'
import { countryList, colorList, cityList, fruitList, treeData } from './data'
import FormPro from '../FormPro'
import '../style/'

const { useState, useEffect, Fragment, PureComponent } = React

const columns = [
  {
    name: 'username',
    type: 'Input',
    required: true,
    formItemProps: {
      prefix: <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />,
      placeholder: 'UserName',
    },
    options: {
      rules: [
        {
          type: 'string',
          required: true,
        },
      ],
    },
  },
  {
    name: 'password',
    type: 'Input',
    required: true,
    formItemProps: {
      prefix: <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />,
      placeholder: 'Password',
    },
    options: {
      rules: [
        {
          type: 'string',
          required: true,
        },
      ],
    },
  },
]

class WithModal extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      visble: true,
    }
  }

  handleSubmit = () => {
    this.formPro.submit((errors, values) => {
      console.log(errors, values)
    })
  }

  render() {
    const formProps = {
      wrapperCol: { span: 14 },
    }

    return (
      <Fragment>
        <Button
          style={{ margin: 32 }}
          type="primary"
          onClick={() => {
            this.setState({
              visible: true,
            })
          }}
        >
          Open Login Modal
        </Button>
        <Modal
          visible={this.state.visible}
          centered
          onOk={this.handleSubmit}
          title="User Login"
          onCancel={() => {
            this.setState({
              visible: false,
            })
          }}
        >
          <FormPro
            showSubmit={false}
            columns={columns}
            formProps={formProps}
            wrappedComponentRef={(ref: any) => {
              this.formPro = ref
            }}
          />
        </Modal>
      </Fragment>
    )
  }
}

storiesOf('FormPro', module)
  .addDecorator((storyFn: any, context: any) => withConsole()(storyFn)(context))
  .add('With Modal', () => <WithModal />)
