import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const UserPhoto = () => {

    const{id}=useParams()
    const[userPhoto,setUserPhoto]=useState()

    useEffect(()=>{
        getPhoto()
    },[id])
    let getPhoto=async ()=>{
        let res=await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
        setUserPhoto([res.data])
    }
  return (
    <div>
        {
            userPhoto?userPhoto.map((photo)=>(
                <div key={photo.id}>
                    <img className='photo' src={photo.url}/>
                </div>
            )):<Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open>
            <CircularProgress color="inherit" />
          </Backdrop>
        }
    </div>
  )
}

export default UserPhoto
