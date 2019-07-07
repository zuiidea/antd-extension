import * as React from 'react'
import ReactMarkdown from 'react-markdown'

interface MarkdownProps {
  source?: string
}

const Markdown: React.FC<MarkdownProps> = ({ source }) => {
  return (
    <div style={{ padding: 24 }}>
      <ReactMarkdown escapeHtml={false} source={source} />
    </div>
  )
}

export default Markdown
