import "./App.css"
import TaskCard from "./components/TaskCard"
import {tasks} from "./Data/tasks.json"
const App = () => {
  
  return (<>
  
    <div id="heading">
      <h1>Task Board</h1>
    </div>
    <div id="tasks-container">
      
      {tasks.map(t => <TaskCard key={t.id} id={t.id} content={t.content} />)}
    </div>
  
  </>)
}

export default App