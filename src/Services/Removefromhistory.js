import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';

 const Removefromhistory = async(videoId,token,dispatch) => {
    try{
        const response = await axios.delete(`/api/user/history/${videoId}` , {
            headers : { authorization : token }
        });
        dispatch({
            type: "HISTORY_ACTIONS",
            payload : response.data.history
        });
        toast.success(" Removed from History ");
    }catch(err){
        console.log('Remove from history Error -',err);
    }
}

export default Removefromhistory