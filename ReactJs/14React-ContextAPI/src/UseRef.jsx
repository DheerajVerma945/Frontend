import React,{useRef, useState} from 'react'

function UseRef() {
    const inputRef = useRef(null);
    const prevRef = useRef('');
    const [val,setVal] = useState('');
    const handlefocus = ()=>{
        inputRef.current.focus();
    }
    const handleChange = (e)=>{
        setVal(e.target.value);
        prevRef.current = val;
    }

  return (
    <div>
      <input type="text"onChange={handleChange}  value={val} ref={inputRef} />
      <button onClick={handlefocus}>Focus Input</button>
      <div>
        <p>Current value : {val}</p>
        <p> Previous value :{prevRef.current}</p>
      </div>
    </div>
  )
}

export default UseRef
