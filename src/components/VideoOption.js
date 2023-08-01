import React from 'react'
import {IoAddCircleSharp} from 'react-icons/io5';
import IsVideoPresent from '../utils/IsVideoPresent';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../Context/authContext';
import AddedtoLikedVideos from '../Services/AddedtoLikedVideos';
import { useUserData } from '../Context/UserDataContext';
import RemovefromLikedVideo from '../Services/RemovefromLikedVideo';

const VideoOption = ({isOptionActive ,video}) => {

     const { userState,userDispatch } = useUserData();

     const location = useLocation();
     const { auth } = useAuth();

     const handlewatchlater =   () => {}
     const handlesaveplaylist = () => {}

     const handlelikevideo =  () => {
          if(auth.token){
            IsVideoPresent(userState.likedVideos,video._id)
             ? RemovefromLikedVideo(video._id,auth.token,userDispatch)  
             : AddedtoLikedVideos(video._id,auth.token,userDispatch);     
     }
    }
     const handleRemoveVideo =  () => {
        
     }

  return (
    <>
        <div className="videooption-container">
            <button onClick = {handlewatchlater}> 
              {IsVideoPresent(userState.watchlater, video._id) 
              ?  " Remove from Watch Later " 
              : " Save to watch later "}
             </button>
            <button onClick = {handlesaveplaylist}> 
                <span> <IoAddCircleSharp /> Save to PlayList </span>
             </button>
            <button onClick = {handlelikevideo}> 
            {IsVideoPresent(userState.likedVideos , video._id) 
              ?  " Remove from Liked Video " 
              : " Add to Liked Videos "}
             </button>
             {location.pathname === "/history" && (
                 <button onClick = {handleRemoveVideo}>
                    Remove Video
                 </button>
             )}
        </div>
    </>
  )
}


export default VideoOption