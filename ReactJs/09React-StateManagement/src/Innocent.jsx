import React, { memo,useRef } from 'react'

function Innocent(props) {
    const renderTime = useRef(1);
  return (
    <div>
      <p>Render {props.title} {renderTime.current++} times</p>
    </div>
  )
}

export default memo(Innocent)
