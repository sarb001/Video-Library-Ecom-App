
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavMenu.css';


const NavMenu = () => {
  return (
    <>
      <div className = "navmenu-container" style = {{margin:'1% 1% 5% 8%' ,
    cursor: 'pointer'}}>
            <div className="main-logo" style = {{margin:'4%'}}>
                <span style = {{fontSize:'40px',padding:'9% 9%'}}> AssestPlay </span>
            </div>

            <div className="all-tabs" style = {{display:'grid',gridTemplateRows:'repeat(auto-fill,(8,1fr))',rowGap:'1px'}}>  
                <span className = 'menu-tab'>
                     <Link to = "/" className='menu-link' > Home </Link>
                </span>
                <span className = 'menu-tab'>
                     <Link to = "/search" className='menu-link' > Search </Link>
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
                     <Link to = "/lightmode" className='menu-link' > Light Mode </Link>
                </span>
                <span className = 'menu-tab'>
                     <Link to = "/profile"  className='menu-link' > Profile </Link>
                </span>


                    <section className='menu-footer' style = {{textAlign:'center'}}>
                            <div className="made-by">
                                <span> Made by Arsh  </span>
                            </div>
                            <div className="main-logos">
                                <span> T </span>
                                <span> L </span>
                                <span> G </span>
                            </div>
                    </section>

            </div>
      </div>
    </>
  )
}

export default NavMenu