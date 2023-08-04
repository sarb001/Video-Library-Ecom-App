import React from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';


const DeletePlaylist = async(playlistId,dispatch,token) => {
    try {
        const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
          headers: {authorization: token},
        });
        dispatch({
        type: "DELETE_PLAYLIST", 
        payload: response.data.playlists
      });
        toast.success("Playlist deleted");
      } catch (err) {
        toast.error("Error in deleting playlist");
        console.error("delete playlist", err);
      }
}

export default DeletePlaylist