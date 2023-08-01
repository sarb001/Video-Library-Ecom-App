import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify';

const AddtoWatchLater = async(video,token,dispatch) => {
    try{
      const response = await axios.post('/api/user/watchlater' ,
      {video}
      , {
        headers :  {authorization : token}
      })
      dispatch({
        type :"WATCH_LATER",
        payload : response.data.watchlater,
      });
      toast.success(" Added to Watch Later ");
    }catch(err){
      console.log('err in watchlater - ',err);
    }
}

export default AddtoWatchLater 
