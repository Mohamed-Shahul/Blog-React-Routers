import React from 'react'
import { Link } from 'react-router-dom'

const PostList = ({postData,searchTerm}) => {
  return (
    <>
      {
        postData&&postData.filter((val)=>{
          if(searchTerm===""){
            return val
          } 
          else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
             return val
          }
        }
        )
        .map((data)=>(
            <ul key={data.id}>
              <Link to={`posterInfo/${data.id}`} className='link'>
                <span className='title'>Title</span>
                <li>{data.title}</li>
              </Link>
            </ul>
        ))
      }
    </>
  )
}

export default PostList
