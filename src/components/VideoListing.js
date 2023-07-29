import React, { useEffect, useState } from 'react'
import NavMenu from './NavMenu'
import axios from 'axios';
import ProductCard from './ProductCard';

const VideoListing = () => {

   const [videos,setvideos]= useState([]);
   const [categoryvideos,setcategoryvideos]= useState([]);
   const [currentcategory,setcurrentcategory]= useState("All");
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
            // console.log('Fetching Videos -',response.data.videos);
            setloader(false);
            setvideos(response.data.videos);
            setcategoryvideos(response.data.videos);
          }catch(err){  
             setloader(false);
            //  console.log(' Video Listing Error ',err);
          } 
          })();
   },[])  

   const handlefiltercategory = (category) => {
     setcurrentcategory(category);
     const filterdata = videos.filter((item) =>  item.category.toLowerCase() === category.toLowerCase());
     setcategoryvideos(filterdata);
    }

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
                          <span 
                           key = {item}
                            onClick={() => handlefiltercategory(item)}
                           style = {{padding:'1% 4%',backgroundColor:'royalblue',borderRadius:'50px'}}> 
                          {item} 
                          </span>
                        ))}
                    </div>

                    <div className="videos-section" style = {{margin:'3%',color:'black',display:'grid',gridTemplateColumns:'1fr 1fr'}}>
                       {categoryvideos.map((item) => (
                          <ProductCard   maindata = {item} key = {item._id} />
                       ))}
                    </div>
             </div>
        </div>
    </>
  )
}

export default VideoListing