import React from 'react'
import { Link } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const HeadPostList = ({postData}) => {
  return (
    <>
      {
        postData?postData.map((data)=>(
            <ul key={data.id}>
              <Link to={`/HeadPostInfo/${data.id}`} className='link'>
                <span className='title'>Title</span>
                <li>{data.title}</li>
              </Link>
            </ul>
        )):<Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open>
        <CircularProgress color="inherit" />
      </Backdrop>
      }
    </>
  )
}

export default HeadPostList
