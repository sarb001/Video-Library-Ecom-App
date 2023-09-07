import React, { useEffect, useState } from 'react'
import NavMenu from './NavMenu'
import axios from 'axios';
import ProductCard from './ProductCard';
import '../styles/VideoListing.css';

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
              setloader(false);
              setvideos(response.data.videos);
              setcategoryvideos(response.data.videos);
            }catch(err){  
              setloader(false);
            } 
            })();
    },[])  

    const handlefiltercategory = (category) => {
      setcurrentcategory(category);
      const filterdata = videos.filter((item) =>  item.category.toLowerCase() === category.toLowerCase());
      setcategoryvideos(filterdata);
      }

     const isChipActive = (item) => {
        return currentcategory.toLowerCase() === item.toLowerCase() ? 'chip-active' : null;
     }

     const handleAllCategory = () => {
         setcurrentcategory("All");
         setcategoryvideos(videos);
     }

  return (
    <>
        <div className="video-container" >
            
              <div className="navbar-container" >
                <NavMenu />
              </div>
              
             <div className="sidebar-container" >

                    <div className="top-categories" >
                      <span
                       onClick={handleAllCategory}
                       className={`chip ${isChipActive("All")}`}>
                        All 
                      </span>
                        {videoCategory.map((item) => (
                          <span 
                            className={`chip ${isChipActive(item)}`}
                            key = {item}
                            onClick={() => handlefiltercategory(item)}
                           > 
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