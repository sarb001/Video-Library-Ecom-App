import React from 'react'
import NavMenu from './NavMenu'

const LikedVideos = () => {
  return (
    <>
       <div className="likedvideos-container" style = {{display:'grid',gridTemplateColumns:'1fr 4fr'}}>
              <div className="navbar-container" style = {{backgroundColor:'black',color:'white'}}>
                <NavMenu />
              </div>
              
             <div className="sidebar-container" style = {{backgroundColor:'#dee2e6'}}>
                    <div className="top-categories" style = {{paddingTop:'2%',cursor:'pointer',color:'black',textAlign:'center'}}>
                        <h2>  Your Liked Videos  </h2>
                        <h4> You have no liked videos </h4>
                    </div>
             </div>
        </div>
    </>
  )
}

export default LikedVideos