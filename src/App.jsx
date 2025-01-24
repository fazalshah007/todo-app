import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import TextField from './components/TextField'
import Todo from './components/Todo'
import EditableTask from './components/EditableTask'
import './tailwind.css'

const App = () => {

  const [todos, setTodos] = useState([])

  const getTodoValue = (value) => {
    setTodos([...todos, {id: uuidv4(), todo: value, editable: false}])
    
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const editTask = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, editable:!todo.editable} : todo))
    console.log("eidt",id);
    
  }

  const editTodo = (value, id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, todo: value, editable:!todo.editable} : todo))    
  }

  return (
   <>
    <div className='bg-[#697565] w-screen min-h-screen flex justify-center items-center'>
      {/* main container  */}
    <div className='w-xl min-h-[32rem] overflow-y-auto bg-[#3C3D37] flex flex-col items-center'>
      {/* wrapper container  */}
    <h1 className='text-3xl font-bold text-[#ECDFCC] mt-4'>Todo App</h1>

    <TextField getTodoValue={getTodoValue}/>

    {
      todos.map((element)=> element.editable ? (
        <EditableTask
         key={element.id}
         editTodo={editTodo}
         task={element}
           />
      ) : (
      <Todo
         key={element.id}
          todoData={element} 
          deleteTodo={deleteTodo}
          editTask={editTask}
          />)
      )
    }
 

    </div>
    </div>
   </>
  )
}

export default App
