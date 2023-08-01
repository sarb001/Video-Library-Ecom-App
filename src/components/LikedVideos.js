import React, { useEffect } from 'react'
import NavMenu from './NavMenu'
import { useUserData } from '../Context/UserDataContext';
import axios from 'axios';
import ProductCard from './ProductCard';

const LikedVideos = () => {

  const token  = localStorage.getItem('token');
  const { userState,userDispatch } = useUserData();

  useEffect(() => {
      (async () => {
        try{
            const response = await axios.get('/api/user/likes' , {
                headers : { authorization : token },
            });
            console.log('respone  in  likes -',response);
            userDispatch({
                type : "LIKED_VIDEOS",
                payload : response.data.likes,
            });
        }catch(err){
            console.log('get Likes Error',err);
        }
    })()
},[])

  return (
    <>
       <div className="likedvideos-container" style = {{display:'grid',gridTemplateColumns:'1fr 4fr'}}>
              <div className="navbar-container" style = {{backgroundColor:'black',color:'white'}}>
                <NavMenu />
              </div>
              
             
             <div className="sidebar-container" style = {{backgroundColor:'#dee2e6'}}>
                    <div className="top-categories" style = {{paddingTop:'2%',cursor:'pointer',color:'black',textAlign:'center'}}>
                        <h2>  Your Liked Videos  </h2>
                        {userState?.likedVideos?.length === 0 && (
                            <h4> You have no liked videos </h4>
                         )}
                    </div>
                    <div className="videos-ctn">
                      {userState.likedVideos?.map((item) => (
                         <ProductCard  maindata = {item}  key = {item._id} />
                      ))}
                    </div>
             </div>
        </div>
    </>
  )
}

export default LikedVideos