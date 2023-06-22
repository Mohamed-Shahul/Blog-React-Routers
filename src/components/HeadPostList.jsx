import React from 'react'
import { Link } from 'react-router-dom'

const HeadPostList = ({postData}) => {
  return (
    <>
      {
        postData&&postData.map((data)=>(
            <ul key={data.id}>
              <Link to={`/HeadPostInfo/${data.id}`} className='link'>
                <span className='title'>Title</span>
                <li>{data.title}</li>
              </Link>
            </ul>
        ))
      }
    </>
  )
}

export default HeadPostList
