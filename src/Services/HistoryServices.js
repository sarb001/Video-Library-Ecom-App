import axios from "axios";


export const addtoHistory = async (video,token,userDispatch) => {
    try{
        const response = await axios.post('/api/user/history' , 
        {video},
        {
            headers : { authorization : token },
        })
        userDispatch({
            type : "HISTORY_ACTIONS",
            payload : response.data.history,
        });
    }catch(err){
        console.log('add to History Error ',err);
    }
}