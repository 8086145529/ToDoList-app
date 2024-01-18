import React, { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../context/TodoContext'
import { v4 as uuidv4 } from 'uuid';

function AddTodo() {

    const [input,setInput] = useState("")
    const [todos,setTodos] = useContext(TodoContext)
    const handleAddTodo = (e) => {
        e.preventDefault();

        if("" === input || undefined === input) {
            alert("Field Cannot be blank")
            return;
        }
        const newTodos = [...todos,{ id:uuidv4(),input:input,completed: false}];
        setTodos(newTodos)
        setInput("")
    }

    useEffect( () => {
      localStorage.setItem( 'todos', JSON.stringify( todos ) );
  }, [todos] );
  return (
    <>
       <div className='container-input'>
        <input value={input}  onChange={e => setInput(e.target.value)} className='input-box' placeholder='Add item ..'/>
        <button onClick={handleAddTodo} type='button' className='add-btn'>Add</button>
     
       </div>
    </>
  )
}

export default AddTodo