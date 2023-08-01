import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';


const RemovefromLikedVideo = async(videoId,token,dispatch) => {
  try{
    const response = await axios.delete(`/api/user/likes/${videoId}` , {
        headers : { authorization  : token }
    });
    dispatch({
        type:"LLIKED_VIDEOS",
        payload : response.data.likes,  
    });
    toast.success("  Removed  from LikedVideos ");
  }catch(err){
    console.log('remove  from liked video - ',err);
  }
}

export default RemovefromLikedVideo