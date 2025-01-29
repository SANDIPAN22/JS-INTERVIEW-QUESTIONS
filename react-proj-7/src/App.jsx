
import './App.css'
import QA from './data'
import Block from './Block'
function App() {


  return (
    <>
     <h1>CAT FnQ Section</h1>
     {QA.map((e, ind) => <h3><Block question={e.question} answer={e.answer} ind={ind}/></h3>)}
      
    </>
  )
}

export default App
