
import axios from "axios";
import { toast } from "react-toastify";


export const AddNewPlaylist =  async(playlist,token,dispatch) => {
    try{
        const response = await axios.post('/api/user/playlist' , {playlist}, 
        {
            headers : { authorization : token }
        });
        dispatch({
            type : "",
            payload : "",
        });
        toast.success(" New Playlist Created ");
    }catch(err){

    }
}