import { useState } from "react"
import data from "./data/dirData"
import Folders from "./components/Folders"

function App() {
  const [openFolder, setOpenFolder] = useState(false)
  const handleFolderClick = (folderId) => {
    console.log(folderId)
  }

  return (
    <>
    <div id="container" className="bg-black h-screen overflow-hidden text-white p-16">
    
     <Folders data={data} />
    

    </div>
      
    </>
  )
}

export default App
