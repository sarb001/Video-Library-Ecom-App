import React, { useEffect } from 'react'
import NavMenu from './NavMenu'
import { useUserData } from '../Context/UserDataContext';
import axios from 'axios';
import ProductCard from './ProductCard';
import DeletePlaylist from '../utils/DeletePlaylist';
import { useAuth } from '../Context/authContext';

const Playlist = () => {

  const { userState ,userDispatch } = useUserData();
  const { auth }  = useAuth();
  const { playlist } = userState;

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
       <div className="playlist-container" style = {{display:'grid',gridTemplateColumns:'1fr 4fr' ,color:'black'}}>
              <div className="navbar-container" style = {{backgroundColor:'black',color:'white'}}>
                <NavMenu />
              </div>
              
             <div className="sidebar-container" style = {{backgroundColor:'#dee2e6'}}>

                        <h2>  Your Playlist here  </h2>
                    <div className="top-categories" style = {{paddingTop:'2%',cursor:'pointer',textAlign:'center'}}>
                        {playlist?.length === 0 && (
                          <h4> You have no Playlist  </h4>
                        )}
                     </div>
                          {playlist?.map((item) => {
                            return (
                              <div className="main">
                                <h3>  Playlist Name -  {item.title} </h3>

                                    <button 
                                      style = {{padding:'1% 3%',backgroundColor:'royalblue'}} 
                                      onClick={() =>
                                      DeletePlaylist(item._id, userDispatch, auth.token)}>
                                      Delete  Playlist 
                                    </button>

                                    <div className="videos-ctn">
                                    {item?.videos?.map((video) => (
                                      <ProductCard  maindata={video} key={video._id} />
                                    ))}
                                  </div>
                              </div>
                            )})
                          }
            </div>
         </div>
    </>
  )
}

export default Playlist