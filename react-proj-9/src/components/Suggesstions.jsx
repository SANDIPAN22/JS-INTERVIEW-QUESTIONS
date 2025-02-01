import React from 'react'

const Suggesstions = ({sugg, setNewItem}) => {

  return (
    <>
    <div id="options">
    {sugg.length ? sugg.map(s => ( 
        <p onClick={e=>setNewItem(s)}>{s}</p>
    
      )) : null}
      </div>
    </>
    
  )
}

export default Suggesstions