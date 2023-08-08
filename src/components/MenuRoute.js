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
import SingleVideos from './SingleVideos';
import  RequireAuth  from './RequireAuth';



const MenuRoute = () => {
  return (
    <>
      <ToastContainer  autoClose = {1000} />
      <Routes>
              <Route path = "/"         element = {<VideoListing />}>  </Route>
              <Route path = "/singlevideo/:videoId"    element = {<SingleVideos  />}>  </Route>
              <Route path = "/login"    element = {<Login />}>  </Route>
              <Route path = "/signup"   element = {<Signup />}>  </Route>
              <Route path = "/search"  element = {<Search  />}>  </Route>
              
              <Route path = "/profile"  element = {
                <RequireAuth>
                  <UserProfile  />
                </RequireAuth>
              }>  </Route>

              <Route path = "/likedvideos"  element = {
                <RequireAuth>
                  <LikedVideos  />
                </RequireAuth>
              }>  </Route>
              <Route path = "/history"  element = {
                <RequireAuth>
                   <History  />
                </RequireAuth>
              }>  </Route>
              <Route path = "/watchlater"  element = {
                <RequireAuth>
                  <WatchLater />
                </RequireAuth>
              }>  </Route>
              <Route path = "/playlist"  element = {
                <RequireAuth>
                   <Playlist  />
                </RequireAuth>
              }>  </Route>
      </Routes>
    </>
  )
}

export default MenuRoute