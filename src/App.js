import {Route,Routes} from 'react-router-dom';
import axios from 'axios';
import React from "react";
import Header from './components/Header';
import HeaderPosts from './components/HeaderPosts';
import HeadPostInfo from './components/HeadPostInfo';
import Posts from "./components/Posts";
import AllPosterInfos from './components/AllPosterInfos';
import UserInfo from './components/UserInfo';
import HeadUserInfo from './components/HeadUserInfo';

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
      <Route path="/" element={<HeaderPosts />} />
      <Route path='/HeadPostInfo/:id' element={<HeadPostInfo />} />
      <Route path='/HeadPostInfo/:id/userInfo/:id' element={<HeadUserInfo />} />
      <Route path="/posts" element={<Posts />} />
      <Route path='/posts/posterInfo/:id' element={<AllPosterInfos />} />
      <Route path='/posts/posterInfo/:id/userInfo/:id' element={<UserInfo />} />
     </Routes>  
    </div>
  );
}

export default App;
