import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Markdown from './Markdown'
import ReadMe from '../README.md'
import License from '../LICENSE.md'

storiesOf('Antd Extension|Welcome', module)
  .add('Getting Started', () => <Markdown source={ReadMe} />)
  .add('License', () => <pre style={{ padding: 24 }}>{License}</pre>)
