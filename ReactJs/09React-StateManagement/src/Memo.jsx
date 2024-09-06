import React, { useMemo, useState } from 'react'
import Innocent from './Innocent';

function Memo() {
  const [state, SetState] = useState(0);
  function handleClick() {
    SetState(state + 1);
  }
  const bioData = useMemo(() => {
    return {
      name: "Dheeraj",
      age: 20
    }
  }, [])
  return (
    <div>
      <h2>{state}</h2>
      <button onClick={handleClick}>Increment</button>

      <Innocent data={ bioData } />
    </div>

  )
}

export default Memo
