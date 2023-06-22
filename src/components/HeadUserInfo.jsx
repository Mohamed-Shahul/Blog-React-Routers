import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const HeadUserInfo = () => {
    const{id}=useParams()
    const[data,setData]=useState()
    useEffect(()=>{
        getData()
    },[id])

    let getData=async ()=>{
        let res=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        setData([res.data])
    }

  return (
    <div className='headUserInfo'>
      {
        data&&data.map((userData)=>(
            <ul key={userData.id}>
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
