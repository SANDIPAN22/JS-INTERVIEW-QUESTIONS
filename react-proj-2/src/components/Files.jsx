import React from 'react'

const Files = ({data}) => {
  return (
    <div id="file" className=" w-60 m-4"  >📄 {data.name}</div>
  )
}

export default Files