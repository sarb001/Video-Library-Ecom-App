import React from 'react'
import NavMenu from './NavMenu'

const Search = () => {
  return (
    <>
     <div className="search-container" style = {{display:'grid',gridTemplateColumns:'1fr 4fr'}}>
              <div className="navbar-container" style = {{backgroundColor:'black',color:'white'}}>
                <NavMenu />
              </div>
              
             <div className="sidebar-container" style = {{backgroundColor:'#dee2e6'}}>

                    <div className="top-categories" style = {{paddingTop:'2%',cursor:'pointer'}}>
                       <span style = {{padding:'2%',textAlign:'center'}}> 
                         <input  type = "search" placeholder='Search here...'  style = {{width:'60%',padding:'1%'}} /> 
                       </span>
                    </div>

                    <div className="videos-section">
                          
                    </div>
             </div>
        </div>
    </>
  )
}

export default Search