import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import './Markdown.less'

interface MarkdownProps {
  source?: string
}

const Markdown: React.FC<MarkdownProps> = ({ source }) => {
  return (
    <div className="markdown">
      <ReactMarkdown escapeHtml={false} source={source} />
    </div>
  )
}

export default Markdown
