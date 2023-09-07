
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavMenu.css';


const NavMenu = () => {
  return (
    <>
      <div className = "navmenu-container">
            <div className="main-logo" >
                <span className = 'main-logo' > AssestPlay </span>
            </div>

            <div className="all-tabs" >  
                <span className = 'menu-tab'>
                     <Link to = "/" className='menu-link' > Home </Link>
                </span>
                <span className = 'menu-tab'>
                     <Link to = "/playlist" className='menu-link' > Playlist </Link>
                </span>
                <span className = 'menu-tab'>
                     <Link to = "/likedvideos" className='menu-link' > Liked Videos </Link>
                </span>
                <span className = 'menu-tab'>
                     <Link to = "/history" className='menu-link' > History </Link>
                </span>
                <span className = 'menu-tab'>
                     <Link to = "/watchlater" className='menu-link' > Watch Later </Link>
                </span>

                <span className = 'menu-tab'>
                     <Link to = "/profile"  className='menu-link' > Profile </Link>
                </span>


                    <section className='menu-footer' style = {{textAlign:'center'}}>
                            <div className="made-by">
                                <span> Made by Sarb  </span>
                            </div>
                            <div className="main-logos">
                                <span>  <a href = "https://twitter.com/iamsarb_001">  Twitter  </a>  </span>
                                <span>  <a href = "https://www.linkedin.com/in/sarbkalyan-singh-399158159/"> Linkedin  </a>  </span>
                                <span>  <a href = "https://github.com/sarb001"> Github </a>   </span>
                            </div>
                    </section>

            </div>
      </div>
    </>
  )
}

export default NavMenu