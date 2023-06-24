import React from 'react'
import { Link } from 'react-router-dom'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const AllPostsInfoList = ({data,title}) => {
  return (
    <>
      <div className="titleBox">
            <h1>Title</h1>
            <p>{title&&title.body}</p>
        </div>
      <div className="commentBox">
        <h1 className='comm'>Comments</h1>
        {
            data?data.map((comments)=>(
                <ul className='commBoxUl' key={comments.id}>
                    <li>{comments.body}</li>
                    <span className='user'>viewUser</span>
                    <Link className='viewUser' to={`userInfo/${comments.id}`}><li>{comments.name}👈</li></Link>
                </ul>
            )):<Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open>
            <CircularProgress color="inherit" />
          </Backdrop>
        }
        </div>
        
    </>
  )
}

export default AllPostsInfoList
