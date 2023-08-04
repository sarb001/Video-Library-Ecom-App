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
                console.log('reponse of playlist -',response);
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
                        {userState.playlists?.length === 0 && (
                          <h4> You have no Playlist  </h4>
                        )}
                     </div>
                          {userState.playlists?.map((item) => (
                               <div className="pd-bottom-lg" key={item._id}>
                               <div className="playlist-title-ctn pd-bottom-lg">
                                 <h3 className="playlist-title">{item.title}</h3>
                                    <button 
                                      style = {{padding:'3%',backgroundColor:'royalblue'}} 
                                      onClick={() =>
                                      DeletePlaylist(item._id, userDispatch, auth.token)}>
                                      Delete 
                                    </button>
                               <div className="videos-ctn">
                                 {item?.videos?.map((video) => (
                                   <ProductCard  maindata={video} key={video.id} />
                                 ))}
                               </div>
                             </div>
                               </div>
                          ))}
            </div>
    </div>
    </>
  )
}

export default Playlist