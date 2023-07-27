import React from 'react'
import { Link } from 'react-router-dom'

const NavMenu = () => {
  return (
    <>
      <div className="navmenu-container">
            <div className="main-logo">
                <span> AssestPlay </span>
            </div>
            <div className="all-tabs">  
              <Link to = "/home"> Home </Link>
              <Link to = "/search"> Search </Link>
              <Link to = "/playlist"> Playlist </Link>
              <Link to = "/liked"> Liked Videos </Link>
              <Link to = "/history"> History </Link>
              <Link to = "/watchlater"> Watch Later </Link>
              <Link to = "/home"> Light Mode </Link>
              <Link to = "/profile"> Profile </Link>
            </div>
      </div>
    </>
  )
}

export default NavMenu