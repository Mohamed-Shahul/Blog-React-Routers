import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserPhoto from './UserPhoto'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const UserInfo = () => {
    const{id}=useParams()
    const[userDet,setUserDet]=useState()

    useEffect(()=>{
        getData()
    },[id])

    let getData=async ()=>{
        let res=await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
        setUserDet([res.data])
    }
    


  return (
    <div className='userInfo'>
      <h1>UserInfo</h1>
      {
        userDet?userDet.map((details)=>(
            <ul key={details.id}>
                <UserPhoto/>
                <span className='userName'>UserName</span>
                <li>{details.name}</li>
                <span className='userEmail'>UserEmail</span>
                <li>{details.email}</li>
            </ul>
        )):<Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open>
        <CircularProgress color="inherit" />
      </Backdrop>
      }
    </div>
  )
}

export default UserInfo
