import React from 'react'

export default function Button(props) {
  const { status = "primary", title = "Download", outline = false } = props;
  const className = `btn btn-${outline ? 'outline-' : ''}${status} rounded-pill px-3`;

  return (
    <button {...props} className={className}>
      {title}
    </button>
  )
}
