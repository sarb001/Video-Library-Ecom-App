import React, { useEffect } from 'react'
import NavMenu from './NavMenu'
import axios from 'axios'
import { useUserData } from '../Context/UserDataContext';

const WatchLater = () => {

  const token  = localStorage.getItem('token');
  const { userDispatch } = useUserData();

   useEffect(() => {
      (async () => {
        try{
            const response = await axios.get('/api/user/watchlater' , {
                headers : { authorization : token },
            });
            userDispatch({
                type : "WATCH_LATER_ACTIONS",
                payload : response.data.watchlater,
            });
        }catch(err){
            console.log('get watch later  Error',err);
        }
    })();
   },[])


  return (
    <>
      <div className="watchlater-container" style = {{display:'grid',gridTemplateColumns:'1fr 4fr'}}>
              <div className="navbar-container" style = {{backgroundColor:'black',color:'white'}}>
                <NavMenu />
              </div>
              
             <div className="sidebar-container" style = {{backgroundColor:'#dee2e6'}}>

                    <div className="top-categories" style = {{paddingTop:'2%',cursor:'pointer',color:'black',textAlign:'center'}}>
                        <h2>  Watch Later </h2>
                        <h4> You have no watch later videos </h4>
                    </div>

                    <div className="videos-section">
                          
                    </div>
             </div>
        </div>
    </>
  )
}

export default WatchLater