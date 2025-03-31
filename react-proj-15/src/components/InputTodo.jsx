import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../slices/todo.slice'

const InputTodo = () => {
    const [inp, setInp] = useState()
    const dispatch = useDispatch()
    const addNewTodo = () =>{
        if(!inp){
          alert("Enter something first!")
          return
        }
        dispatch(addTodo(inp))
        setInp("")
    }
  return (
    <>
    <div id="todo-flex">
        <input id="todo-inp" type="text" placeholder='Enter New Task' value={inp} onChange={e=> setInp(e.target.value)}/>
        <button id="todo-btn" onClick={addNewTodo}>Add</button>     
    </div>
    <p>No Slang Word Please! We are screening 🔍</p>
    </>
  )
}

export default InputTodo