import React, { useEffect, useState } from 'react'
import NavMenu from './NavMenu'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleVideos = () => {

   const [singlevideo,setsinglevideo] = useState({});
   const [Loader,setLoader] =  useState(true);

   const params = useParams();

   useEffect(() => {
     (async () => {
      try{
        const response = await axios.get(`/api/video/${params.videoId}`);
        console.log('reponse in singlevideo -',response);
        setLoader(false);
        setsinglevideo(response.data.video);
      }catch(error){
         setLoader(false);
         console.log('single video -',error);
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
               </div>
      </div>
    </>
  )
}

export default SingleVideos