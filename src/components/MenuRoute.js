import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Routes , Route } from 'react-router-dom';
import VideoListing from './VideoListing';
import Login from './Login';
import Signup from './Signup';
import UserProfile from './UserProfile';

const MenuRoute = () => {
  return (
    <>
      <ToastContainer  autoClose = {1000} />
      <Routes>
            <Route path = "/"         element = {<VideoListing />}>  </Route>
            <Route path = "/login"    element = {<Login />}>  </Route>
            <Route path = "/signup"   element = {<Signup />}>  </Route>
            <Route path = "/profile"  element = {<UserProfile  />}>  </Route>
      </Routes>
    </>
  )
}

export default MenuRoute