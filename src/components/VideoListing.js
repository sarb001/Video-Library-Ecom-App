import React from 'react'
import NavMenu from './NavMenu'

const VideoListing = () => {
  return (
    <>
        <div className="video-container" style = {{display:'grid',gridTemplateColumns:'1fr 2fr'}}>
              <div className="navbar-container" style = {{backgroundColor:'lightsalmon'}}>
                <NavMenu />
              </div>
             <div className="sidebar-container" style = {{backgroundColor:'lightcoral'}}>
                <span> All </span>
                <span> Stock  </span>
                <span> Real  </span>
             </div>
        </div>
    </>
  )
}

export default VideoListing