import './app.css'
import {useState, useEffect, useRef} from 'react'
const App = () =>{
  const [timer, setTimer] = useState({
    "H": 0,
    "M": 0,
    "S": 0
  })
  const [running, SetRunning] = useState(false)
  const [isPaused, SetIsPaused] = useState(false)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const counterIntervalRef = useRef(null)
  
  const timeChangeHandler = (e) => {
    let {name, value} = e.target
    value = parseInt(value)
    setTimer(prev => ({...prev, [name]:value}))
    setTouched(prev=>({...prev, [name]:true}))
  }

  const touchHandler = (e) => {
    const {name, value} = e.target
    setTouched(prev=>({...prev, [name]:true}))
  }

  useEffect(()=>{
    
    setErrors({})
    if(timer.M> 60 && touched.M) setErrors(prev => ({...prev, "M": "Minute entry can not be more than 60."}))
    if(timer.S> 60 && touched.S) setErrors(prev => ({...prev, "S": "Second entry can not be more than 60."}))

    if(timer.M<= 0 && touched.M && !running) {
      setErrors(prev => ({...prev, "M": "Minute entry can not be less than or equal to 0."}))
      if(timer.S<= 0 && touched.S && !running) setErrors(prev => ({...prev, "S": "Second entry can not be less than or equal to 0."}))
    }
  else if (!touched.M && !running){
    if(timer.S<= 0 && touched.S && !running) setErrors(prev => ({...prev, "S": "Second entry can not be less than or equal to 0."}))
  }
    
    
  }, [timer,touched])

  const onSetTimer = () => {
    SetRunning(true)
    SetIsPaused(false)
    // write timer beginning code
    const TS = Date.now() + (timer.S+timer.M*60 + timer.H*3600)*1000 + 1000
    
    counterIntervalRef.current = setInterval(()=>{
      const gap = (TS - Date.now()) / 1000
      const newSecond = parseInt((gap ) % 60, 10)
      const toMin = parseInt((gap ) / 60, 10)
      const newHr = parseInt((toMin ) / 60, 10)
      const newMin = parseInt((toMin ) % 60, 10)
      console.log("new data", newHr, newMin, newSecond)
      
      setTimer({
        "H": newHr,
        "M": newMin,
        "S": newSecond
      })

      if(newHr === 0 && newMin === 0 && newSecond === 0){
        clearInterval(counterIntervalRef.current)
        SetRunning(false)
        setTouched({})
      }


    }, 1000)
  }

  const onPauseTimer = () => {
    
    if(counterIntervalRef.current){
      clearInterval(counterIntervalRef.current)
      SetIsPaused(true)
    }
  }

  const onResetTimer = () => {
    SetRunning(false)
    SetIsPaused(false)
    if(counterIntervalRef.current){
      clearInterval(counterIntervalRef.current)
    }
    setTimer({
      "H": 0,
      "M": 0,
      "S": 0
    })
    setTouched({})
  }
  console.log(timer, errors, touched)
  return (
    <>
    <div className='container'>
      <div className="name">
        <h1>COUNTDOWN APP</h1>
      </div>
      <div className="inputs">
        <input type="number" name='H' readOnly={running} onChange={timeChangeHandler} onBlur={touchHandler} value={timer.H}/>
        <input type="number" name='M' readOnly={running} onChange={timeChangeHandler} onBlur={touchHandler} value={timer.M}/>
        <input type="number" name='S' readOnly={running} onChange={timeChangeHandler} onBlur={touchHandler} value={timer.S}/>
      </div>
      <div className="buttons">
       
        { !running && <button onClick={onSetTimer} disabled={Object.values(touched).length == 0 || Object.values(errors).length != 0}> SET </button>}
        {running && !isPaused && <button onClick={onPauseTimer}> PAUSE </button>}
        {running && isPaused && <button onClick={onSetTimer}> RESUME </button>}
        {running && <button onClick={onResetTimer}> RESET </button>}
      </div>
      <ul className="errors">
        {Object.values(errors).length != 0 && Object.values(errors).map(err => {
          return <li>{err}</li>
        })}
      </ul>
    </div>
    
    </>
  )
}

export default App