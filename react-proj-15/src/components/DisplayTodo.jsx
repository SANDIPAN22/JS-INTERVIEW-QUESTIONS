import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo } from '../slices/todo.slice'





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
  const TODOS = useSelector(state=> state.todo.values)
  console.log(TODOS)
  return (
    <div id='todo-display-container'>
        {TODOS?.map(todo => <TodoCard key={todo.id} name={todo.name} id={todo.id}/>)}
    </div>
  )
}

export default DisplayTodo