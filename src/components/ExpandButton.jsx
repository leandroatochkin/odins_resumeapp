import React from 'react'

export const ExpandButton = ({expanded, handleExpanded}) => {
  return (
    <button onClick={handleExpanded} className="expand-button">
      {expanded ? '-' : '+'}
    </button>
  )
}
