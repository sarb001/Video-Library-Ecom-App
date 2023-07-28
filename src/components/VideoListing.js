import React, { useEffect, useState } from 'react'
import NavMenu from './NavMenu'
import axios from 'axios';
import ProductCard from './ProductCard';

const VideoListing = () => {

   const [videos,setvideos]= useState([]);
   const [categoryvideos,setcategoryvideos]= useState([]);
   const [loader,setloader] = useState(true);

   const videoCategory = [
    "Stock Investing",
    "Real Estate",
    "Basic Finance",
    "Self Help",
  ];

   useEffect(() => {
        (async () => {
          try{
            const response = await axios.get('/api/videos');
            console.log('Fetching Videos -',response.data.videos);
            setloader(false);
            setvideos(response.data.videos);
            setcategoryvideos(response.data.videos);
          }catch(err){  
             setloader(false);
             console.log(' Video Listing Error ',err);
          } 
          })();
   },[])  


  return (
    <>
        <div className="video-container" style = {{display:'grid',gridTemplateColumns:'1fr 4fr'}}>
              <div className="navbar-container" style = {{backgroundColor:'black',color:'white'}}>
                <NavMenu />
              </div>
              
             <div className="sidebar-container" style = {{backgroundColor:'#dee2e6'}}>

                    <div className="top-categories" style = {{paddingTop:'2%',cursor:'pointer',paddingBottom:'2%'}}>
                      <span style = {{padding:'1% 4%',backgroundColor:'royalblue',borderRadius:'50px'}}> All </span>
                        {videoCategory.map((item) => (
                          <span style = {{padding:'1% 4%',backgroundColor:'royalblue',borderRadius:'50px'}}> {item} 
                      </span>
                        ))}
                    </div>

                    <div className="videos-section" style = {{margin:'3%',color:'black',display:'grid',gridTemplateColumns:'1fr 1fr'}}>
                       {categoryvideos.map((item) => (
                          <ProductCard   maindata = {item} key = {item.id} />
                       ))}
                    </div>
             </div>
        </div>
    </>
  )
}

export default VideoListing