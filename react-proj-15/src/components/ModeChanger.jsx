import React, {useState} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { useDispatch, useSelector } from 'react-redux'
import { setMode } from '../slices/mode.slice'

const ModeChanger = () => {
    const dispatch = useDispatch()

    const isAutoSaveOn = useSelector(state => state.mode.value)
    
    const switchMode = (e) =>{
        if(e.target.checked){
            const ans = confirm("Do you want to save the changes?")
            if(!ans){
                window.location.reload()
                return
            }
            
        }
        dispatch(setMode(e.target.checked))
    }
  return (
    <div>
        <input  type="checkbox" name="auto-saver" id="mode-changer-box" onChange={switchMode} checked={isAutoSaveOn}/> Auto Save Mode: {isAutoSaveOn ? "ON 😎": "OFF 🫣"}
    </div>
  )
}

export default ModeChanger