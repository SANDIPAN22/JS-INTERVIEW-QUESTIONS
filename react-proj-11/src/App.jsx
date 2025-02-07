import React, {useState, useEffect} from 'react'
import './App.css'
import PostCard from './components/PostCard'
const App = () => {

  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(0)
  const TOTAL_POST_COUNT = posts.length
  const LIMIT = 8
  const TOTAL_PAGE_COUNT = Math.ceil(TOTAL_POST_COUNT / LIMIT)

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/posts?limit=10")
    const data = await response.json()
    setPosts(data.posts)
  }

  const incPage = () => {
    if(page < TOTAL_PAGE_COUNT-1) setPage(prev => prev+1)
  }

  const decPage = () => {
    if(page > 0) setPage(prev => prev-1)
    
  }

  useEffect(()=>{
    console.log("Page LOADS")
     fetchData()
  }, [])

  return (
    <>
    <div className='heading'>Frontend-Based Pagination</div>
    <div id="container">
      {posts.length ? posts.slice(page*LIMIT, (page*LIMIT)+LIMIT).map(post => <PostCard 
       key={post.id}
       title={post.title} 
       like={post?.reactions?.likes}
       dislike={post?.reactions?.dislikes}
       />) : null}

       
    </div>
    <div id="pagination">
        <span className="page-button" onClick={decPage}> ◀️ </span>
        <span className="page-number"> {page+1} </span>
        <span className="page-button" onClick={incPage}> ▶️ </span>
       </div>
    
    </>

  )
}

export default App