import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import './Markdown.less'

interface MarkdownProps {
  source?: string
}

const Markdown: React.FC<MarkdownProps> = ({ source, api }) => {
  return (
    <div className={`markdown ${api ? 'api-container' : ''}`}>
      <ReactMarkdown escapeHtml={false} source={source} />
    </div>
  )
}

export default Markdown
