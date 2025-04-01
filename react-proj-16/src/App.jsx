import React, { useState } from 'react'
import { useGetTodosQuery, useAddTodosMutation } from './apiSlice'

const App = () => {
  const {data: TODOS, error, isLoading, refetch}  = useGetTodosQuery()
  const [addTodos] =useAddTodosMutation()
  const [inp, setInp] = useState("")
  console.log(TODOS)
  const addNewToDo = () =>{
    if(!inp){
      alert("ADD SOMETHING !")
      return
    }
    else{
      // write mutation code here
      const body = {
        id: Date.now(),
        value: inp,
        completed: true
      }
      addTodos(body)
      setInp("")
    }
  }
  return (
    <div id="container">
      <input type="text" onChange={e=>{setInp(e.target.value)}}/>
      <button onClick={addNewToDo}>Add</button>
      {isLoading && <h2>LOADDDIIINNGG...........</h2>}
      {error && <h3>{error.error}</h3>}
      {TODOS?.map(t => <h1>{t.value}</h1>)}
    </div>
  )
}

export default App