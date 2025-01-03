import { useState, useEffect } from 'react'


function App() {
  const [pass, setPass] = useState("")
  const [isTouched, setIsTouched] = useState(false)
  const [errors, setErrors] = useState([])
  const [strength, setStrength] = useState(0)

  useEffect(()=> {
    if(!isTouched){
      return
    }
    // begin with validation
    console.log("Starting validation....", pass, isTouched, pass.length)
    // clearing the error array for a fresh start
    setErrors([])
    // case 1 
    if(pass.length < 8){
      console.log("It should be here")
      setErrors(prev=> [...prev, "a"])
    }
    let numPresent = false
    let capPresent = false
    let specialPresent = false
    let smallPresent = false

    pass.split("").forEach(c => {
      if (!isNaN(c)){
        numPresent = true
      }
      if (/^[A-Z]$/.test(c)){
        capPresent = true
      }
      if (/^[a-z]$/.test(c)){
        smallPresent = true
      }
      if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(c)){
        specialPresent = true
      }
      
    })

    if(!capPresent){
      setErrors(prev=> [...prev,"d"])
    }
    if(!specialPresent){
      setErrors(prev=> [...prev,"c"])
    }
    if(!smallPresent){
      setErrors(prev=> [...prev,"e"])
    }
    if(!numPresent){
      setErrors(prev=> [...prev,"b"])
    }
  }, [isTouched, pass])

  useEffect(()=>{
    if(!isTouched){
      return
    }
    console.log("Setting strength", errors)
    setStrength(5-errors.length)
  }, [errors])

  return (
    <>
      <div id="container" className=' w-screen h-screen bg-black flex justify-center items-center'>
          <div className='text-white w-[450px]  border-2 border-white shadow-slate-300 shadow-lg'>
            
            <div id="heading" className="text-3xl text-slate-300 text-center my-2 font-bold">
              Password Validator
            </div>

            <div id="input" className='text-center my-8' >
              <input type="text"  placeholder='write password...' className='px-5 py-2 bg-slate-600 text-white' 
              value={pass} onChange={e=>setPass(e.target.value)} onBlur={e=> setIsTouched(true)} />
            </div>

            {/* <div id="underline" className="border-b-2 border-gray-400 mb-4"></div> */}
            {isTouched && <>
              <div id="progress-bar" className='text-center my-5'>
                <div className='progress-bar-completed' style={{width: `${(strength/5)*100}%`, opacity: `${(strength/5)}`}}></div>
              </div>

              <div id="cases" className='ml-6'>
                <ul>
                  <li className={`my-4 text-xl ${errors.includes("a") ? 'text-red-500' : 'text-green-500'}`}> <span className="text-xl mr-4">{`${errors.includes("a") ? '❌' : '✅'}`}</span> Must need minimum 8 characters.</li>
                  <li className={`my-4 text-xl ${errors.includes("b") ? 'text-red-500' : 'text-green-500'}`}> <span className="text-xl mr-4">{`${errors.includes("b") ? '❌' : '✅'}`}</span> Must need atleast 1 numeric.</li>
                  <li className={`my-4 text-xl ${errors.includes("c") ? 'text-red-500' : 'text-green-500'}`}> <span className="text-xl mr-4">{`${errors.includes("c") ? '❌' : '✅'}`}</span> Must need atleast 1 special char.</li>
                  <li className={`my-4 text-xl ${errors.includes("d") ? 'text-red-500' : 'text-green-500'}`}> <span className="text-xl mr-4">{`${errors.includes("d") ? '❌' : '✅'}`}</span> Must need atleast 1 uppercase letter.</li>
                  <li className={`my-4 text-xl ${errors.includes("e") ? 'text-red-500' : 'text-green-500'}`}> <span className="text-xl mr-4">{`${errors.includes("e") ? '❌' : '✅'}`}</span> Must need atleast 1 lowercase letter.</li>
                </ul>
              </div>
            </>}

          </div>
      </div>
    </>
  )
}

export default App
