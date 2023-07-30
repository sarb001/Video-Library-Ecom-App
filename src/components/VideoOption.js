import React from 'react'
import {IoAddCircleSharp} from 'react-icons/io5';
import IsVideoPresent from '../utils/IsVideoPresent';
import { useLocation } from 'react-router-dom';

const VideoOption = ({isOptionActive ,video}) => {
     const location = useLocation();

     const handlewatchlater =   () => {}
     const handlesaveplaylist = () => {}
     const handlelikevideo =    () => {}
     const handleRemoveVideo =  () => {
        
     }

  return (
    <>
        <div className="videooption-container">
            <button onClick = {handlewatchlater}> 
              {IsVideoPresent() ?  " Remove from Watch Later " 
              : " Save to watch later "}
             </button>
            <button onClick = {handlesaveplaylist}> 
                <span> <IoAddCircleSharp /> Save to PlayList </span>
             </button>
            <button onClick = {handlelikevideo}> 
            {IsVideoPresent() ?  " Remove from Liked Video " 
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