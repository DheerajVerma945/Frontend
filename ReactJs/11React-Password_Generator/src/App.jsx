import { useState,useCallback ,useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pass, setPass] = useState("");
  const[msg,setMsg] = useState("");


  
  /*

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#%^&*-~`+=";

    for (let i = 0; i <= length; i++) {
      let idx = Math.ceil(Math.random() * str.length);
      pass += str.charAt(idx);
    }
    setMsg("");
    setPass(pass);

  }, [length, numAllowed, charAllowed, setPass]);

  */
 const inputRef = useRef(null);

  

  // Without Callback hook
  const passGenerator = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#%^&*-~`+=";

    for (let i = 0; i <= length; i++) {
      let idx = Math.ceil(Math.random() * str.length);
      pass += str.charAt(idx);
    }
    setMsg("");
    setPass(pass);

  };

  // Using UseEffect hook 
  // useEffect( ()=>{
  //   passGenerator();
  // },[])

  const handleCopy = () => {
    navigator.clipboard.writeText(pass)
      .then(() => {
        setMsg('Password copied to clipboard!');
      })
      .catch(() => {
        setMsg('Failed to copy password.');
      });
    
  };
  const focusInput = ( ()=>{
    if(inputRef.current){
      inputRef.current.focus();
    }
  })


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg text-orange-500 px-4 py-3 my-8 bg-gray-700">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={pass}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
          />
          
          <button className='outline-none  hover:px-4 py-1 bg-green-700 text-white px-3  shrink-0'
          onClick={handleCopy}>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={16}
              value={length}
              className='cursor-pointer'
              onChange={(evt) => {
                let newLength = evt.target.value;
                setLength(newLength)
              }}
            />
            <label >Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              value={numAllowed}
              className='cursor-pointer'
              onChange={(evt) => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label >Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              value={charAllowed}
              className='cursor-pointer'
              onChange={(evt) => {
                setCharAllowed((prev) => !prev);;
              }}
            />
            <label >Characters</label>
          </div>
        </div>
        <br />
        <button className='outline-none rounded-md hover:px-4 py-1 bg-orange-700 text-white px-3  shrink-0'
          onClick={passGenerator}>
            Generate
          </button>
      </div>
      <p className='text-white'> {msg}</p>\

  
    </>
  )
}

export default App
