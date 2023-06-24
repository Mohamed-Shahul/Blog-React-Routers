import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const HeadPostInfo = () => {
    const [data, setData] = useState(null)
    const[title,setTitle]=useState('')
    const {id} = useParams()

    useEffect(()=>{
        getIdData()
        getTitle()
    },[id])

    let getIdData=async ()=>{
            let res=await axios.get(`https://jsonplaceholder.typicode.com/comments`);
            let val = res.data.filter((datas) =>datas.postId===parseInt(id))
            setData(val)
    }

    let getTitle=async ()=>{
        let res=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setTitle(res.data)
    }


  return (
    <div className='postDetails'>
        <h2>Post Information</h2>

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
        
    </div>
  )
}

export default HeadPostInfo
