import React from 'react'
import NavMenu from './NavMenu'

const UserProfile = () => {
  return (
  <>
      <div className="userprofile-container" style = {{display:'grid',gridTemplateColumns:'1fr 4fr'}}>
      <div className="navbar-container" style = {{backgroundColor:'black',color:'white'}}>
        <NavMenu />
      </div>
      
    <div className="sidebar-container" style = {{backgroundColor:'#dee2e6'}}>

            <div className="top-categories" style = {{paddingTop:'2%',cursor:'pointer'}}>
                <span style = {{padding:'1% 4%',backgroundColor:'royalblue',borderRadius:'50px'}}> All </span>
                <span style = {{padding:'1% 4%',backgroundColor:'royalblue',borderRadius:'50px'}}> Stock2  </span>
                <span style = {{padding:'1% 4%',backgroundColor:'royalblue',borderRadius:'50px'}}> Real3  </span>
                <span style = {{padding:'1% 4%',backgroundColor:'royalblue',borderRadius:'50px'}}> Real4  </span>
                <span style = {{padding:'1% 4%',backgroundColor:'royalblue',borderRadius:'50px'}}> Real5  </span>
            </div>

            <div className="videos-section">
                  
            </div>
    </div>
      </div>
    </>
  )
}

export default UserProfile