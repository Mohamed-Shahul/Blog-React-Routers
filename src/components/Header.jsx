import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
     <div className='header'>
      <ul>
        <Link to='/' className='link'><li>Home</li></Link>
        <Link to='/posts' className='link'><li>Posts</li></Link>
      </ul>
    </div>
    </> 
  )
}
export default Header
