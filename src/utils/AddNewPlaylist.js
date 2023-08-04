
import axios from "axios";
import { toast } from "react-toastify";

export const AddNewPlaylist =  async(playlistName,token,dispatch) => {
    try{
        const response = await axios.post('/api/user/playlists' , 
        {playlist : { title : playlistName }}, 
        {
            headers : { authorization : token }
        });
        dispatch({
            type : "ADD_NEW_PLAYLIST",
            payload : response.data.playlists,
        });
        console.log('response in new  playlist -',response);
        toast.success(` ${playlistName} playlist Created `);
    }catch(err){
        toast.error(" Error in creating Playlists ");
    }
}