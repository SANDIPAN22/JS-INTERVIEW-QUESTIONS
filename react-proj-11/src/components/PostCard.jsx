import React from 'react'

const PostCard = ({title, like, dislike}) => {
  return (
    <div className='post-card-container'>
        <div className="post-card-title">
            {title}
        </div>
        <div className="break"></div>
        <div className="post-card-reactions">
            <div className="post-card-likes">👍🏻 {like}</div>
            <div className="post-card-dislikes">👎🏻 {dislike}</div>
        </div>

    </div>
  )
}

export default PostCard