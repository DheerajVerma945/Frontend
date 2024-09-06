import { useState } from "react"

function Item(props){
    return (
        <li  onClick ={ 
            () =>{
            props.onClick(props.id);
        }
    } id={props.id}>{props.it}</li>
    )
 }

 export default Item