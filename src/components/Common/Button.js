import React from 'react'

export default function Button(props) {
  console.log(props);
  const { status } = props;
  return (
    <button className={`btn btn-${status} rounded-pill px-3`}>
      Download
    </button>
  )
}
