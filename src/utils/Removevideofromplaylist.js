import React from 'react'

const Removevideofromplaylist = async(playlistId,videoId,token,dispatch) => {
    try{
        const response = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`,
        {
           headers : { authorization : token }
        });
        dispatch({
          type : "REMOVE_VIDEO_FROM_PLAYLIST",
          payload: response.data.playlist,
        });
        toast.success(` Video Removed from  Playlist `);
      }catch(err){
         toast.error(` Error while Removing Video from  playlist `);
      }
}

export default Removevideofromplaylist