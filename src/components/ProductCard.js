import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import VideoOption from './VideoOption';
import { useUserData } from '../Context/UserDataContext';
import { useAuth } from '../Context/authContext';
import IsVideoPresent from '../utils/IsVideoPresent';
import { addtoHistory } from '../Services/HistoryServices';

const ProductCard = ({maindata}) => {
     const {thumbnail ,creator ,title , views ,profile , date  } = maindata;
     const navigate = useNavigate();
     const [isOptionActive,setisOptionActive] = useState(false);
     const {userState,userDispatch} = useUserData();
     const { auth } = useAuth();

     const handlevideoplayer = () => {
            if(auth.token && !IsVideoPresent(userState.history,maindata._id)){
                addtoHistory(maindata,auth.token,userDispatch);
            }
          navigate(`/singlevideo/${maindata._id}`);
     };

  return (
    <>
        <div className="productcard-container" style = {{width:'90%',margin:'1%',cursor:'pointer'}}>
                    <div className = "img-container"  onClick = {handlevideoplayer} >
                       <img src = {thumbnail}  style = {{width:'100%'}} />
                    </div>

                    <div className  = "bottom-container" style = {{display:'grid',gridTemplateColumns:'0.5fr 2fr 1fr'}}>
                          
                            <div className = "bottom-first-container">
                                <span>  
                                    <img src = {profile} style = {{width:'60%',borderRadius:'50%'}} /> 
                                </span>

                            </div>

                            <div className = "bottom-second-section">
                                <b>
                                {/* <span>   {title?.slice(0,22)} </span> */}
                                <div>    {creator} </div>
                                <span>   {views?.slice(0,2)}M  </span>
                                <span> {date} </span>
                                </b>
                            </div>

                            <div className="bottom-third-section">
                                <VideoOption 
                                 isOptionActive= {isOptionActive}
                                 video = {maindata}
                                />
                             </div>
                    </div>
            
        </div>
    </>
  )
}

export default ProductCard