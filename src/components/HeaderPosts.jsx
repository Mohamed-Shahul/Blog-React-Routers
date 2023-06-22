import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HeadPostList from './HeadPostList'

const HeaderPosts = () => {
    const[postData,setPostData]=useState()

    useEffect(()=>{
        getData()
    },[])

    let getData=async ()=>{
        let res=await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPostData(res.data.slice(0, 10))
    }
  return (
    <div className='HeadPostsList'>
      <HeadPostList postData={postData}/>
    </div>
  )
}
export default HeaderPosts
