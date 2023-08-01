import React, { useEffect, useState } from 'react'
import NavMenu from './NavMenu'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AiFillLike , AiOutlineLike } from 'react-icons/ai';
import { MdPlaylistAdd , MdWatchLater , MdOutlineWatchLater } from 'react-icons/md';
import IsVideoPresent from '../utils/IsVideoPresent';
import { useUserData } from '../Context/UserDataContext';

const SingleVideos = () => {

   const [singlevideo,setsinglevideo] = useState({});
   const [Loader,setLoader] =  useState(true);

   const {userState,userDispatch} = useUserData();
   const params = useParams();
   
   const {title ,creator ,views ,date} = singlevideo;

   useEffect(() => {
     (async () => {
      try{
        const response = await axios.get(`/api/video/${params.videoId}`);
        setLoader(false);
        setsinglevideo(response.data.video);
      }catch(error){
         setLoader(false);
      }
     })();
   },[params.videoId]);

  return (
    <>
      <div className = "singlevideo-container" style = {{display:'grid',gridTemplateColumns:'1fr 4fr'}}>
              
              <div className = "singlevideo-navbar">
                  <NavMenu />
               </div>

               <div className = "singlevideo-bar">
                  <iframe
                      width="100%"
                      height="80%"
                      src={`https://www.youtube.com/embed/${params.videoId}?autoplay=1`}
                      title="YouTube video player" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                  ></iframe>

                  <div className="singlevideo-details" style = {{margin:'2%'}}>
                          <div className="buttons-section" style = {{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',justifyContent:'space-evenly'}}>
                              <button style = {{padding:'2% 1%',width:'30%'}}> 
                              {IsVideoPresent(userState.likedVideos , singlevideo._id) 
                                  ?   <AiFillLike /> 
                                  :   <AiOutlineLike /> }
                                  Like 
                              </button>
                              <button style = {{padding:'1% 2%',width:'30%'}}>  <MdPlaylistAdd /> Save </button>
                              <button style = {{padding:'1% 2%',width:'50%'}}>  
                              {IsVideoPresent(userState.watchlater, singlevideo._id) 
                                ? <MdWatchLater /> 
                                : <MdOutlineWatchLater /> }
                                 Watch Later 
                             </button>
                          </div>
                          <div className="title-section">
                           <span style = {{fontSize:'24px'}}> {title} by {creator} </span>
                          </div>
                          <div className="views-section">
                              <span style = {{fontSize:'20px'}}> {views} by {date} </span>
                          </div>
                          
                  </div>
               </div>

               
      </div>
    </>
  )
}

export default SingleVideos