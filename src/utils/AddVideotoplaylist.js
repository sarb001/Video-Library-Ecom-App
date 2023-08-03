import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify';

const AddVideotoplaylist = async(playlistId,title,video,token,dispatch) => {
  try{
    const response = await axios.post(`/api/user/playlists/${playlistId}`,
    {video}
    ,{
       headers : { authorization : token }
    });
    dispatch({
      type : "ADD_VIDEO_TO_PLAYLIST",
      payload: response.data.playlist,
    });
    toast.success(` Added video to ${title} playlist `);
  }catch(err){
     toast.error(` Error while adding video to ${title} playlist `);
  }
}

export default AddVideotoplaylist