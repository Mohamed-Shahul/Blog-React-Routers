import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostList from './PostList';

const Posts = () => {

    const[postData,setPostData]=useState()
    const[searchTerm,setSearchTerm]=useState('')
    
    useEffect(()=>{
      fetchData()
    },[])

    let fetchData=async ()=>{
      let res=await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPostData(res.data)
    }

  return (
    <>
    <div className="searchBar">
      <input value={searchTerm} type="text" placeholder='Search...' onChange={(e)=>{setSearchTerm(e.target.value)}}/>
      <label htmlFor="">🔍</label>
    </div>

    <div className='postsList'>
      <PostList postData={postData} searchTerm={searchTerm}/>
    </div>
    </>   
  )
}
export default Posts