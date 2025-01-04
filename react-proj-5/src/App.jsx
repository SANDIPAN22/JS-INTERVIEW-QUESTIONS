import { useState, useEffect } from 'react'
import UserCard from './components/UserCard'


function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(()=>{
    const fetchData = async () => {
      setLoading(true)
      const rawData = await fetch(`https://randomuser.me/api/?gender=female&page=${page}&results=12`)
      const data = await rawData.json()
      setUsers(prev => [...prev, ...data.results])
      setLoading(false)
    }
    fetchData()
  }, [page])

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll)
  }, [])
  
  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight
    const alreadyScrolled = document.documentElement.scrollTop
    const currentHeight = window.innerHeight
    if (currentHeight + alreadyScrolled + 4 >= totalHeight){
      setPage(prev => prev+1)
    }
  }

  return (
    <>
     <div className='text-xl bg-black min-h-screen text-white'>
      <div className='flex justify-center text-4xl font-bold mb-10'>
        <p className="">Infinite Scrolling</p>
      </div>
      <div id="users" className='grid grid-cols-3 p-4 '>
        
      {users.length ? users.map(user => {
            return <UserCard data={user}/>
          }) : null}

      {loading && <img src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif" alt="" /> }
      </div>
          

     </div>
    </>
  )
}

export default App
