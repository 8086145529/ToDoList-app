import React, { useContext } from 'react'
import Todo from './Todo'
import { TodoContext } from '../context/TodoContext'


function TodoList() {
    const [todos,setTodos] = useContext(TodoContext)
  return (
    <>
    
        {
        todos?.length>0?todos.map((item)=> {
            return(
                <Todo key={item.id} id={item.id} input={item.input} completed={item.completed}/>

            )
        }):<h4> You are done!</h4>
    }

    
    
    </>
        
    
    
  )
}

export default TodoList