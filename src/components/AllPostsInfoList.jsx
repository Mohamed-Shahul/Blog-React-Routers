import React from 'react'
import { Link } from 'react-router-dom'

const AllPostsInfoList = ({data,title}) => {
  return (
    <>
      <div className="titleBox">
            <h1>Title</h1>
            <p>{title&&title.body}</p>
        </div>
      <div className="commentBox">
        <h1 className='comm'>Comments</h1>
        {
            data&&data.map((comments)=>(
                <ul className='commBoxUl' key={comments.id}>
                    <li>{comments.body}</li>
                    <span className='user'>viewUser</span>
                    <Link className='viewUser' to={`userInfo/${comments.id}`}><li>{comments.name}👈</li></Link>
                </ul>
            ))
        }
        </div>
    
       {/* {
            data&&data.map((comments)=>(
                <ul key={comments.id}>
                    <span className='comm'>Comment</span>
                    <li>{comments.body}</li>
                    <span className='user'>userName</span>
                    <Link className='viewUser' to={`userInfo/${comments.id}`}><li>{comments.name}👈</li></Link>
                </ul>
            ))
        } */}
        
    </>
  )
}

export default AllPostsInfoList
