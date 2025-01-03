import React, {useState} from 'react'
import Files from './Files'

const Folders = ({data}) => {

  const [open, setOpen] = useState(false)
  const handleFolderClick = (folderID) => {
    setOpen(prev => !prev)
  }

  return (
    <>
    <div id="folder" className={` p-2 w-60 m-4 ${open ? 'bg-slate-600' : 'bg-slate-400'}`}  onClick={e=>handleFolderClick(data.id)}>📁 {data.name}</div>
    
    
    {open &&
    <div id="children" className='relative left-10'>
      {data.items.map(cat => {
      
      if(cat.isFolder){
        return <Folders  data={cat}/>
      }
      return <Files data={cat}/>
    })}
    </div>}
    
    </>
  )
}

export default Folders