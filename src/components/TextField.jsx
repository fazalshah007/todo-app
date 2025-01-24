import React, { useState } from 'react'

const TextField = ({getTodoValue}) => {

    const [value, setValue] = useState("")

    const inputValidate = () => {
        if(value){

            getTodoValue(value)
            setValue("")
        }else{
            alert("please add the value")
        }
    }
    
  return (
    <div className='mt-6 mb-6'>
        <input type="text"
        value={value}
        onChange={(e) => { setValue(e.target.value)
         }}
        className='text-[#ECDFCC] outline-0 border-b p-2 focus:outline-0 w-2xs border-[#ECDFCC]'
        placeholder='Create your task here...'
        />
        <button onClick={inputValidate} className='cursor-pointer bg-[#7A1CAC] p-3 m-2 text-[#ECDFCC] text-[12px] font-bold'>Add Task</button>
    </div>
  )
}

export default TextField