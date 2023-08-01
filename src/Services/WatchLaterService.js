import axios from 'axios';
import React from 'react'
import IsVideoPresent from '../utils/IsVideoPresent';
import RemovefromWatchLater from './RemovefromWatchLater';
import AddtoWatchLater from './AddtoWatchLater';

const WatchLaterService = async(watchlater,auth,video,dispatch,navigate) => {
    
    if(auth.isLoggedIn){
        IsVideoPresent(watchlater,video._id) 
        ? RemovefromWatchLater(video._id,auth.token,dispatch) 
        : AddtoWatchLater(video,auth.token,dispatch);
    }else{  
        navigate("/login")
    }

}

export default WatchLaterService