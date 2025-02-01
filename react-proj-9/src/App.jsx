import { useEffect, useState } from "react"
import Suggesstions from "./components/Suggesstions.JSX"
import ItemBar from "./components/ItemBar"
import { useDebounce } from "./hooks/useDebounce"
import './App.css'
const App = () => {
  const [newItem, setNewItem] = useState("")
  const debouncedNewItem = useDebounce(newItem, 1000)
  const [items, setItems] = useState([{id:2323, name: "Panner", isDone: false}, {id:2123, name: "Egg", isDone: true}])
  const [sugg, setSugg] = useState([])

  const addItemHandler = () => {
    if(!newItem){
      alert("Enter Item Name First!")
      return
    }
    setItems(prev => [...prev, {id: Date.now(), name: newItem, isDone: false}])
    setNewItem("")
  }
const changeDoneStatus = (id, newStatus) => {

  setItems(prev=> {
    return prev.map(p => {
      
      if(p.id === id){
        
        p.isDone = newStatus
      }
      return p
    })
  })
}

const deleteAction = (id, ) => {

  setItems(prev=> {
    return prev.filter(p => p.id !== id)
  })
}

const getSuggestions = async (inp) => {
  console.log("CALLING SUGGESTION API ==> ", inp)
  const raw = await fetch(`https://api.frontendeval.com/fake/food/${inp}`)
  const data = await raw.json()
  console.log(data)
  setSugg(data)
}
useEffect(()=>{
  if(newItem.length >= 2){
    getSuggestions(debouncedNewItem)
    
  }
  else{
    setSugg([])
  }
}, [debouncedNewItem])

return (<>

<h1><u>Shopping List</u></h1>
  <div className="item-list">

  </div>
  <div className="item-add">
    {items.length ? items.map(itm => <ItemBar name={itm.name} isDone={itm.isDone} key={itm.id} id={itm.id} deleteAction={deleteAction} changeDoneStatus={changeDoneStatus}/>) :null}

    <input id="inputBox" type="text" placeholder="Add New Item..." value={newItem} onChange={e=> setNewItem(e.target.value)}/>
    <button onClick={addItemHandler}>Add</button>
    <Suggesstions sugg={sugg} setNewItem={setNewItem}/>
  </div>

</>)

}

export default App