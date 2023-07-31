import React, { useEffect } from 'react'
import NavMenu from './NavMenu'
import { useUserData } from '../Context/UserDataContext';
import axios from 'axios';

const Playlist = () => {

  const token  = localStorage.getItem('token');
  const { userDispatch } = useUserData();

     useEffect(() => {
          (async () => {
            const token  = localStorage.getItem('token');
            try{
                const response = await axios.get('/api/user/playlists' , {
                    headers : { authorization : token },
                });
                userDispatch({
                    type : "INITIAL_PLAYLIST",
                    payload : response.data.playlists,
                });
            }catch(err){
                console.log('get playlist Error',err);
            }
        })();
     },[])

  return (
    <>
       <div className="playlist-container" style = {{display:'grid',gridTemplateColumns:'1fr 4fr'}}>
              <div className="navbar-container" style = {{backgroundColor:'black',color:'white'}}>
                <NavMenu />
              </div>
              
             <div className="sidebar-container" style = {{backgroundColor:'#dee2e6'}}>

                    <div className="top-categories" style = {{paddingTop:'2%',cursor:'pointer',color:'black',textAlign:'center'}}>
                        <h2>  Your Playlist  </h2>
                        <h4> You have no Playlist  </h4>
                     </div>

                    <div className="videos-section">
                          
                    </div>
             </div>
        </div>
    </>
  )
}

export default Playlist