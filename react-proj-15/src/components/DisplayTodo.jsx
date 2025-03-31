import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo, fetchTodos } from '../slices/todo.slice'





const TodoCard = ({name, id}) => {
  const dispatch = useDispatch()
  const onDelete = (id) =>{
    dispatch(deleteTodo(id))
  }
    return (<>
    <div id='card'>
        <div id="todo-name">
          {name}
        </div>
        <div >
          <button id="todo-btn" onClick={e=> onDelete(id)}>Delete</button>
        </div>
    </div>
    
    
    </>)
}



const DisplayTodo = () => {
  const {values : TODOS, isLoading, error} = useSelector(state=> state.todo)
  const dispatch = useDispatch()
  const fetchDummyTodos = () => {
    if(confirm("Do you want us to populate dummy to-do from web ?")){
      console.log("Fetching... To Do ........")
      dispatch(fetchTodos())
    }
    return 
  }
  console.log(TODOS, error)
  return (
    <>
      <div id='todo-display-container'>
          {TODOS?.map(todo => <TodoCard key={todo.id} name={todo.todo} id={todo.id}/>)}
      </div>
      {isLoading && <h2>LOADING !!</h2>}
      {error && <h4 style={{color: "red"}}>{error}</h4>}
      {TODOS?.length === 0 &&  <div id="web-icon" onClick={fetchDummyTodos}> 🌐 </div>}
     </>
  )
}

export default DisplayTodo