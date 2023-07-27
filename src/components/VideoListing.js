import React from 'react'
import NavMenu from './NavMenu'

const VideoListing = () => {
  return (
    <>
        <div className="video-container" style = {{display:'grid',gridTemplateColumns:'1fr 4fr'}}>
              <div className="navbar-container" style = {{backgroundColor:'black',color:'white'}}>
                <NavMenu />
              </div>
             <div className="sidebar-container" style = {{backgroundColor:'#dee2e6'}}>
                <span> All1 </span>
                <span> Stock2  </span>
                <span> Real3  </span>
                <span> Real4  </span>
                <span> Real5  </span>
             </div>
        </div>
    </>
  )
}

export default VideoListing