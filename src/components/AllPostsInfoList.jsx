import React from 'react'
import { Link } from 'react-router-dom'

const AllPostsInfoList = ({data}) => {
  return (
    <>
       {
            data&&data.map((comments)=>(
                <ul key={comments.id}>
                    <span className='comm'>Comment</span>
                    <li>{comments.body}</li>
                    <span className='user'>userName</span>
                    <Link className='viewUser' to={`userInfo/${comments.id}`}><li>{comments.name}👈</li></Link>
                </ul>
            ))
        }
    </>
  )
}

export default AllPostsInfoList
