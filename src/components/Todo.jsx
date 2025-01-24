import React from 'react'

import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = ({todoData, deleteTodo, editTask}) => {
  return (
    <div className='flex w-[70%] bg-[#181C14] p-2 mt-2 text-[#ECDFCC] justify-between items-center'>
        <p>{todoData.todo}</p>
        <div>
        <button onClick={()=>{ editTask(todoData.id) }} className='cursor-pointer bg-[#03C988] ml-2 p-1 text-[#ECDFCC]'><EditNoteIcon /></button>
        <button onClick={()=> deleteTodo(todoData.id)} className='cursor-pointer bg-[#FF2929] ml-2 p-1 text-[#ECDFCC]'><DeleteIcon /></button>
        </div>
    </div>
  )
}

export default Todo