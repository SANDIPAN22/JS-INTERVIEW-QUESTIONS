import React from 'react'
import "./App.css"
import InputTodo from './components/InputTodo'
import DisplayTodo from './components/DisplayTodo'
import ModeChanger from './components/ModeChanger'
import { useSelector } from 'react-redux'
useSelector
const App = () => {
  
  const isAutoSaveOn = useSelector(state => state.mode.value)

  return (
    <div id={isAutoSaveOn ? `active-canvas` :`canvas`}>
        <div id="heading">
          To Do App
        </div>
        <div id="subheading">
          Redux Tool Kit Based Sample Project
        </div>
        <div id="mode-changer-section">
          <ModeChanger/>
        </div>
        <div id="input-section">
          <InputTodo/>
        </div>
        <div id="display-section">
          <DisplayTodo/>
        </div>
        
    </div>
  )
}

export default App