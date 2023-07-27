import React from 'react'
import NavMenu from './NavMenu'

const VideoListing = () => {

   const videoCategory = [
    "Stock Investing",
    "Real Estate",
    "Basic Finance",
    "Self Help",
  ];

  return (
    <>
        <div className="video-container" style = {{display:'grid',gridTemplateColumns:'1fr 4fr'}}>
              <div className="navbar-container" style = {{backgroundColor:'black',color:'white'}}>
                <NavMenu />
              </div>
              
             <div className="sidebar-container" style = {{backgroundColor:'#dee2e6'}}>


                    <div className="top-categories" style = {{paddingTop:'2%',cursor:'pointer'}}>
                      <span style = {{padding:'1% 4%',backgroundColor:'royalblue',borderRadius:'50px'}}> All </span>
                {videoCategory.map((item) => (
                  <span style = {{padding:'1% 4%',backgroundColor:'royalblue',borderRadius:'50px'}}> {item} </span>
                ))}
                        
                    </div>

                    <div className="videos-section">
                          
                    </div>
             </div>
        </div>
    </>
  )
}

export default VideoListing