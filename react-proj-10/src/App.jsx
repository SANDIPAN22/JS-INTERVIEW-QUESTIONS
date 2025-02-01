import React from 'react'
import OTP from './components/OTP'
import './App.css'
import {useState} from 'react'
const App = () => {
  const [otp, setOtp] = useState(Array(4).fill(''))
  const handleSubmit = () => {
    const strOTP = otp.join('')
    if(strOTP.length < 4){
      alert("Fill the OTP boxes !")
    }
    else{
      alert(strOTP)
    }
  }
  return (
    <div id="container">
      <div id="title"> 
        Please Enter the OTP
      </div>
      <OTP otp={otp} setOtp={setOtp}/>
      <div id="btnHolder">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default App