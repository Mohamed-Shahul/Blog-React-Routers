import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const HeadPostInfo = () => {
    const [data, setData] = useState(null)
    const {id} = useParams()

    useEffect(()=>{
        getIdData()
    },[id])

    let getIdData=async ()=>{
            let res=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            setData([res.data])
    }


  return (
    <div className='postDetails'>
        <h1>Post Information</h1>
        {
            data&&data.map((data)=>(
                <ul key={data.id}>
                    <li>{data.body}</li>
                    <Link to={`headUserInfo/${data.id}`}><li className='viewPostUser'>View User</li></Link>
                    
                </ul>
            ))
        }
    </div>
  )
}

export default HeadPostInfo
