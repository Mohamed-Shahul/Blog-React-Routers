import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
            userPhoto&&userPhoto.map((photo)=>(
                <div key={photo.id}>
                    <img className='photo' src={photo.url}/>
                </div>
            ))
        }
      <img src="" alt="" />
    </div>
  )
}

export default UserPhoto
