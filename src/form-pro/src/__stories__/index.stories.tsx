import { withConsole } from '@storybook/addon-console'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import StandardFormPro from './FormPro.stories'
import WithModal from './WithModal.stories'
import CustomizedFormControls from './CustomizedFormControls.stories'
import Markdown from '../../../Markdown'
import ReadMe from '../../README.md'
import ReadMeZHCN from '../../README.zh-CN.md'

storiesOf('COMPONENTS|FormPro', module)
  .addDecorator((storyFn: any, context: any) => withConsole()(storyFn)(context))
  .add('Read Me', () => <Markdown api source={ReadMe} />)
  .add('Read Me (zh-CN)', () => <Markdown api source={ReadMeZHCN} />)
  .add('Standard FormPro', () => <StandardFormPro />)
  .add('With Modal', () => <WithModal />)
  .add('Customized Form Controls', () => <CustomizedFormControls />)
