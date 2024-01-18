import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

function Todo({id,input}) {

    const [todos,setTodos] = useContext(TodoContext)

    const completeTodo = (e) => {
       const  filterTodos = todos.map((item)=>{
        if(item.id === e.target.value){
            item.completed = false
            if(e.target.checked){
                item.completed = true
            }
        }

        return item;
       })
       setTodos(filterTodos);
    }

    const deleteTodo = (e) => {
       e.preventDefault();
       const filteredTodos = todos.filter((item) => {
        return item.id !== e.target.id
       })

       setTodos(filteredTodos)
    }

  return (
    <>
    <div className='todo-item'>
        <input value={id} id={id} type='checkbox' onChange={e => completeTodo(e)}/>
        <label htmlFor={id}>{input}</label>
        <button id={id} onClick={e => deleteTodo(e)} type='button' className='delete-btn'>Delete</button>
    </div>

    </>
  )
}

export default Todo