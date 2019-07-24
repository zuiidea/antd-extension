import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Markdown from './Markdown'
import ReadMe from '../README.md'
import ReadMeZHCN from '../README.zh-CN.md'
import License from '../LICENSE.md'

storiesOf('Antd Extension|Welcome', module)
  .add('Getting Started', () => <Markdown source={ReadMe} />)
  .add('Getting Started (zh-CN)', () => <Markdown source={ReadMeZHCN} />)
  .add('License', () => <pre>{License}</pre>)
