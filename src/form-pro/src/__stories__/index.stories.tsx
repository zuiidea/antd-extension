import { withConsole } from '@storybook/addon-console'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import StandardFormPro from './FormPro.stories'
import WithModal from './WithModal.stories'
import CustomizedFormControls from './CustomizedFormControls.stories'

storiesOf('COMPONENTS|FormPro', module)
  .addDecorator((storyFn: any, context: any) => withConsole()(storyFn)(context))
  .add('Standard FormPro', () => <StandardFormPro />)
  .add('With Modal', () => <WithModal />)
  .add('Customized Form Controls', () => <CustomizedFormControls />)
