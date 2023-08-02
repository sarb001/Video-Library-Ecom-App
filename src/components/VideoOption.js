import React from 'react'
import {IoAddCircleSharp} from 'react-icons/io5';
import IsVideoPresent from '../utils/IsVideoPresent';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../Context/authContext';
import { useUserData } from '../Context/UserDataContext';
import { LikeService } from '../Services/LikeService';
import { useNavigate } from 'react-router-dom' ;
import Removefromhistory from '../Services/Removefromhistory';
import WatchLaterService from '../Services/WatchLaterService';
import PlayListModal from './PlayListModal';

const VideoOption = ({isOptionActive ,video}) => {

     const { userState,userDispatch } = useUserData();
     const navigate  = useNavigate();
     const location = useLocation();
     const { auth } = useAuth();
     console.log('auth in Video option is -',auth);

     const handlewatchlater =   () => {
        WatchLaterService(
            userState.watchlater,
            auth,
            video,
            userDispatch,
            navigate
        )
     }
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
                <span>
                 <PlayListModal  
                  maindata = {video}
                 >
                   <IoAddCircleSharp /> 
                 </PlayListModal>
                 </span>
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