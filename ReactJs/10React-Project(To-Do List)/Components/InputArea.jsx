import { useState } from 'react';

function InputArea(props){
    const[task,setTask] = useState("");
    
    function handleChange(evt){
        const val = evt.target.value;
        setTask(val);
    }
    return( 
        <>
            <input type="text" value = {task} onChange ={handleChange} />
            <button onClick={ ()=>{
                props.onClick(task);
                setTask("");
            }}>
                <span>
                    Add
                </span>
            </button>
        </>
    )
}
export default InputArea