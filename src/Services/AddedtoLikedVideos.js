import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';

const AddedtoLikedVideos = async (video,token,userDispatch) => {
   try{
    const response = await axios.post('/api/user/likes' , {
         headers : {authorization  : token }
    });
    dispatch({
        type:"LIKED_VIDEO_ACTION",
        payload :response.data.likes,
    });
    toast.success(" Added to Liked Videos ")
   }catch(err){
     console.log('Added to Liked Error ',err);
   }
}

export default AddedtoLikedVideos