import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

function RTE({name,control,label,defaultVal=""}) {
  return (
    <div className='w-full'>
        {label && 
        <label className='inline-block mb-1 pl-1'>
            {label}    
        </label>}
        <Controller 
        name={name || ""}
        control = {control}
        render = { ({feild:{onChange}})=>{
            <Editor />
            //Editor values
            onEditorChange = {onChange}
        }}
        />
    </div>
  )
}

export default RTE
