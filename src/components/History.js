import React, { useEffect } from 'react'
import NavMenu from './NavMenu'
import axios from 'axios';
import { useUserData } from '../Context/UserDataContext';
import { useAuth } from '../Context/authContext';
import ProductCard from './ProductCard';

const History = () => {
  
   const { auth }  = useAuth();
   const {userState,userDispatch} = useUserData();

    const token  = localStorage.getItem('token');
    console.log('userstate in history  1 -',userState);

   useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/user/history", {
          headers: {authorization: token},
        });
        console.log('response in histpry -',response);
        userDispatch({
          type: "HISTORY_ACTIONS",
          payload: response.data.history,
        });
      } catch (err) {
        console.error("get history", err);
      }
    })();
   },[])

   console.log('userstate in history  2 -',userState);

  return (
    <>
       <div className="history-container" style = {{display:'grid',gridTemplateColumns:'1fr 4fr'}}>
              <div className="navbar-container" style = {{backgroundColor:'black',color:'white'}}>
                <NavMenu />
              </div>
              
             <div className="sidebar-container" style = {{backgroundColor:'#dee2e6'}}>

                    {userState?.history?.length === 0 && (
                        <div className="top-categories" style = {{paddingTop:'2%',cursor:'pointer',color:'black',textAlign:'center'}}>
                            <h2>  Your History </h2>
                            <h4> Your history is empty! </h4>
                        </div>
                    )}

                    {userState?.history?.map((item) => (
                          <ProductCard  maindata={item}  key = {item._id} />
                    ))}
             </div>
        </div>
    </>
  )
}

export default History