import Info from "./components/Info"
import WorkEx from "./components/WorkEx"
import Skills from "./components/Skills"
import { useState } from "react"
import './App.css'
const App = () => {
  const [currentTab, setCurrentTab] = useState(0)
  const TABS = [
    {
      name: "Info",
      component: Info,
      validate: ()=>{
        let _errors = {}

        if(!data.name || data.name.length < 2) _errors.name = "Please enter name"
        if(!data.email || data.email.length < 2) _errors.email = "Please enter email"
        if(!data.age || data.age < 22) _errors.age = "Please enter age more than 21"
        setErrors(prev => ({ ..._errors}))
        
          if(Object.values(_errors).length) return false
        return true
      }
    },
    {
      name: "Work Experience",
      component: WorkEx,
      validate: ()=>{
        let _errors = {}

        if(!data['work-exp']) _errors['work-exp'] = "Please choose work experience range."
        setErrors(prev => ({ ..._errors}))
        
          if(Object.values(_errors).length) return false
        return true
      }
    },
    {
      name: "Skills",
      component: Skills,
      validate: ()=>{
        let _errors = {}

        if(!data.skills || data.skills.length < 1) _errors.name = "Please select atleast one skill"
        setErrors(prev => ({ ..._errors}))
        
          if(Object.values(_errors).length) return false
        return true
      }
    }
  ]
  const [data, setData] = useState({})
  const [errors, setErrors] = useState({})

  const handleDataChange = (e) => {
    const {name, value} = e.target
    setData(prev => ({...prev, [name]: value}))
  }

  const ActiveTab = TABS[currentTab].component
  const currentValidator = TABS[currentTab].validate
  
  const switchToDifferentTab = (tabId) => {
    if(tabId != 0){
      const lastValidator = TABS[tabId-1].validate
      if(lastValidator()) setCurrentTab(tabId)
      else setCurrentTab(tabId-1)
    }
    else{
      setCurrentTab(tabId)
    }
      
  }

  const submitHandler = () => {
    if(currentValidator())  alert("FORM is Submitted")
  }
  console.log("DATA==>", data, errors)
  return (<>
  <div id="tabs">
    {TABS.map((tab, ind) => (
        <div key={ind} 
        className={ind === currentTab ?`tab-active`: 'tab'} 
        onClick={()=>switchToDifferentTab(ind)}>
          {tab.name}
          </div>
      ))}
    
  </div>
  <div id="current-tab">
    <ActiveTab data={data} handleDataChange={handleDataChange} setData={setData}/>
    <div id="action-btns">
      {currentTab > 0 && <button onClick={()=> switchToDifferentTab(currentTab-1)}> ◀️ </button>}
      {currentTab < TABS.length -1 && <button onClick={()=> switchToDifferentTab(currentTab+1)}> ▶️ </button>}
      {currentTab === TABS.length -1 && <button onClick={submitHandler}>SUBMIT </button>}
    </div>
    <div id="errors-section">
      {Object.values(errors).length ? <h2 style={{color: "red"}}><u>Errors</u></h2> : null}
      {Object.values(errors).map(err => (
        <div className="error-msg">{err}</div>
      ))}
    </div>
  </div>
  
    
  </>)
}

export default App