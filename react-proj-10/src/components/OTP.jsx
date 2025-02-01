import React from 'react'

const OTP = ({otp, setOtp}) => {
    

    const otpChangeHandler = (elem, index) => {
        // update the state
        setOtp(prev =>{
            return prev.map((p, i) => {
                if(i === index){
                    return elem.value
                }
                return p
            })
        })

        // proceed to next box if this is not the last one
        if(index < otp.length-1 && elem.value){
            elem.nextSibling.focus()
        }

    }

    const handleKeyDown = (key, elem, index) =>{
        // if not backspace do nothing
        if(key!=="Backspace"){
            return
        }
        // if backspace then  delete the element
        setOtp(prev =>{
            return prev.map((p, i) => {
                if(i === index){
                    return ""
                }
                return p
            })
        })

        // if not last index then focus to previous
        if(index > 0 ){
            elem.previousSibling.focus()
        }
    }
        


  return (
    <div id="otpHolder">
    {otp.map((val, index)=>{
        return (
            <input className='input-box' maxLength={1} type="text" value={val} onChange={e=>otpChangeHandler(e.target, index)} onKeyDown={e=> handleKeyDown(e.key, e.target, index)}/>
        )
    })}
  </div>  
  )
}

export default OTP