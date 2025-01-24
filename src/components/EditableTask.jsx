import React, { useState } from 'react'

const EditableTask = ({ editTodo, task }) => {

  const [value, setValue] = useState(task.todo)
  return (
    <div className='mt-6 mb-6'>
        <input type="text"
        onChange={(e)=>{setValue(e.target.value)}}
        value={value}
        className='text-[#ECDFCC] outline-0 focus:outline-0 border p-2 w-2xs border-[#ECDFCC]'
        placeholder='Update your todo...'
        />
        <button onClick={()=>{editTodo(value, task.id)}} className='cursor-pointer bg-[#03C988] p-3 m-2 text-[#ECDFCC] text-[12px] font-bold'>update</button>
    </div>
  )
}

export default EditableTask