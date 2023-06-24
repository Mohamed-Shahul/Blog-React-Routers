import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const HeadUserInfo = () => {
    const{id}=useParams()
    const[data,setData]=useState()
    const[photo,setPhoto]=useState()

    useEffect(()=>{
        getData()
        getPhoto()
    },[id])

    let getData=async ()=>{
      let res=await axios.get("https://jsonplaceholder.typicode.com/comments");
      let val = res.data.filter((datas) =>datas.id===parseInt(id))
      setData(val)
    }

    let getPhoto=async ()=>{
      let res=await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
     
      setPhoto(res.data.url)
      console.log(res.data.url);
    }

  return (
    <div className='headUserInfo'>
      {
        data&&data.map((userData)=>(
            <ul key={userData.id}>
              <span className='userProfile'>UserProfile</span>
              <img src={photo} className='photo' />
                <span className='userName'>UserName</span>
                <li> {userData.name}</li>
                <span className='userEmail'>UserEmail</span>
                <li> {userData.email}</li>
            </ul>
        ))
      }
    </div>
  )
}

export default HeadUserInfo
