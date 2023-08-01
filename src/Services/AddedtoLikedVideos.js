import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';

const AddedtoLikedVideos = async (video,token,dispatch) => {
   try{
    const response = await axios.post('/api/user/likes' ,
    {video},
    {
         headers : {authorization  : token }
    });
    dispatch({
        type:"LIKED_VIDEOS",
        payload :response.data.likes,
    });
    console.log('response in liked video -',response);
    toast.success(" Added to Liked Videos ")
   }catch(err){
     console.log('Added to Liked Error ',err);
   }
}

export default AddedtoLikedVideos