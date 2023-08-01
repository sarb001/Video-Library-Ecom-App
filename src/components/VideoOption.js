import React from 'react'
import {IoAddCircleSharp} from 'react-icons/io5';
import IsVideoPresent from '../utils/IsVideoPresent';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../Context/authContext';
import AddedtoLikedVideos from '../Services/AddedtoLikedVideos';
import { useUserData } from '../Context/UserDataContext';
import RemovefromLikedVideo from '../Services/RemovefromLikedVideo';
import { LikeService } from '../Services/LikeService';
import { useNavigate } from 'react-router-dom' ;
import Removefromhistory from '../Services/Removefromhistory';

const VideoOption = ({isOptionActive ,video}) => {

     const { userState,userDispatch } = useUserData();
     const navigate  = useNavigate();
     const location = useLocation();
     const { auth } = useAuth();
     console.log('auth in Video option is -',auth);

     const handlewatchlater =   () => {}
     const handlesaveplaylist = () => {}

     const handlelikevideo =  () => {
          LikeService(
            userState.likedVideos,
            auth,
            video,
            userDispatch,
            navigate
          )
    }
     const handleRemoveVideo =  () => {
        Removefromhistory(video._id,auth.token,userDispatch)
     }

  return (
    <>
        <div className="videooption-container">
            <button onClick = {handlewatchlater}> 
              {IsVideoPresent(userState.watchlater, video._id) 
              ?  " Remove from Watch Later " 
              : "  Save to watch later "}
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