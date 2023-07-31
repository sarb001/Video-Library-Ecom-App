import React, { useEffect } from 'react'
import NavMenu from './NavMenu'
import axios from 'axios';
import { useUserData } from '../Context/UserDataContext';

const History = () => {
  
   const token  = localStorage.getItem('token');
   const {userDispatch} = useUserData();

  useEffect(() => {
    (async () => {
      try{
          const response = await axios.get('/api/user/history' , {
               headers : { authorization : token },
          });
          userDispatch({
              type : "HISTORY_ACTIONS",
              payload : response.data.history,
          });
      }catch(err){
          console.log('get history Error',err);
      }
   })();
  },[])

  return (
    <>
       <div className="history-container" style = {{display:'grid',gridTemplateColumns:'1fr 4fr'}}>
              <div className="navbar-container" style = {{backgroundColor:'black',color:'white'}}>
                <NavMenu />
              </div>
              
             <div className="sidebar-container" style = {{backgroundColor:'#dee2e6'}}>

                    <div className="top-categories" style = {{paddingTop:'2%',cursor:'pointer',color:'black',textAlign:'center'}}>
                        <h2>  Your History </h2>
                        <h4> Your history is empty! </h4>
                    </div>

                    <div className="videos-section">
                          
                    </div>
             </div>
        </div>
    </>
  )
}

export default History