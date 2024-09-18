'use client'

import { useState } from 'react'

export default function TruncateText({ text, wordLimit }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ')
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...'
    }
    return text
  }

  const displayText = isExpanded ? text : truncateText(text, wordLimit)
  const shouldTruncate = text.split(' ').length > wordLimit

  return (
    <div className="space-y-2">
      <p className="text-base leading-relaxed">
        {displayText}
      </p>
      {shouldTruncate && (
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-controls="full-text"
          className='text-sm underline'
        >
          {isExpanded ? 'See less' : 'See more'}
        </button>
      )}
      {isExpanded && (
        <div id="full-text" className="sr-only">
          {text}
        </div>
      )}
    </div>
  )
}