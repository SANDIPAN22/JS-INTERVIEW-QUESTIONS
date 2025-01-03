import { useState } from 'react'
import useDebounce from './hooks/useDebounce'



function App() {
  const [search,setSearch] = useState("")
  const ultimateSearch = useDebounce(search)
 return (
  <>
  <div className='bg-black h-screen flex items-center justify-center text-white flex-col'>
  <p className='text-3xl m-2'> Debounced Searching</p>
  <input className='p-4 text-black m-4 text-2xl' type="text" value={search} onChange={e=> setSearch(e.target.value)} placeholder='Search Country by Name... '/>
  <p>Searching: <b>{ultimateSearch}</b> </p>
  </div>

  </>
 )
}

export default App
