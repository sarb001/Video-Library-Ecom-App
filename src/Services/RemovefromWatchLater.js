import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';

const RemovefromWatchLater = async(videoId,token,dispatch)   => {
  try{
    const response = await axios.delete(`/api/user/watchlater/${videoId}`,
    {
       headers :  { authorization : token }
    });
    dispatch({
      type :"WATCH_LATER",
      payload : response.data.watchlater,
    })
    toast.success(" Removed from watch later ");
  }catch(err){
    console.log('Error in Remove fromwatchlater -',err);
  }
}

export default RemovefromWatchLater