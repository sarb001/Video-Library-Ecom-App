import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Routes , Route } from 'react-router-dom';
import VideoListing from './VideoListing';
import Login from './Login';
import Signup from './Signup';
import UserProfile from './UserProfile';
import Search from './Search';
import LikedVideos from './LikedVideos';
import History from './History';
import WatchLater from './WatchLater';
import Playlist from './Playlist';

const MenuRoute = () => {
  return (
    <>
      <ToastContainer  autoClose = {1000} />
      <Routes>
              <Route path = "/"         element = {<VideoListing />}>  </Route>
              {/* <Route path = "/singlevideo/:videoId"    element = {<dd  />}>  </Route> */}

              <Route path = "/login"    element = {<Login />}>  </Route>
              <Route path = "/signup"   element = {<Signup />}>  </Route>
              <Route path = "/profile"  element = {<UserProfile  />}>  </Route>
              
              <Route path = "/search"  element = {<Search  />}>  </Route>
              <Route path = "/likedvideos"  element = {<LikedVideos  />}>  </Route>
              <Route path = "/history"  element = {<History  />}>  </Route>
              <Route path = "/watchlater"  element = {<WatchLater />}>  </Route>
              <Route path = "/playlist"  element = {<Playlist  />}>  </Route>
      </Routes>
    </>
  )
}

export default MenuRoute