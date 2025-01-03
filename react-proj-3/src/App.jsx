import { useEffect, useState } from "react"
import Card from "./components/Card"


function App() {
  const [pokemon, setPokemon] = useState([])
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(12)


  useEffect(()=>{
    (async () => {
      console.log("URL is ==> ", `https://pokeapi.co/api/v2/pokemon?offset=${page*limit}&limit=${limit}`)
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page*limit}&limit=${limit}`)
      const result = await data.json()
      setPokemon(result.results)
    })()
  }, [page])

  return (
    <div id="container" className="bg-black h-screen text-white">
        <nav className="bg-slate-500 h-16 flex justify-between items-center px-4">
          <div id="title" className="font-bold md:text-4xl">
            Pokemon Pedia
          </div>
          
        </nav>
        <div id="cards" className="grid grid-cols-4 p-4">
            {pokemon.length ? pokemon.map(pok => {
              return <Card data={pok} />
            }) : null}
        </div>

        <div id="pagination" className="flex justify-center gap-4 text-2xl mt-6">
          <button className=" bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" hidden={page===0} onClick={e=>setPage(prev=> prev-1)}>prev</button>
          <button disabled>{page+1}</button>
          <button className=" bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={e=>setPage(prev=> prev+1)}>next</button>
        </div>
        
    </div>
  )
}

export default App
