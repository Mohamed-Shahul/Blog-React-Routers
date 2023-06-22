import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import AllPostsInfoList from './AllPostsInfoList'

const AllPosterInfos = () => {
    const [data, setData] = useState()
    const {id} = useParams()

    useEffect(()=>{
        getIdData()
    },[id])

    let getIdData=async ()=>{
            let res=await axios.get("https://jsonplaceholder.typicode.com/comments");
            let val = res.data.filter((datas) =>datas.postId===parseInt(id))
            setData(val)
    }

  return (
    <div className='posterInfos'>
       <h1>Post Information</h1>
       <AllPostsInfoList data={data}/>
    </div>
  )
}

export default AllPosterInfos
