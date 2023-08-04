import axios from 'axios';
import { toast } from 'react-toastify';

const Removevideofromplaylist = async(playlistId,videoId,token,dispatch) => {
    try{
        const response = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`,
        {
           headers : { authorization : token }
        });
        dispatch({
          type : "REMOVE_VIDEO_FROM_PLAYLIST",
          payload: videoId,
        });
        console.log('response from removing - ',response);
        toast.success(` Video Removed from  Playlist `);
      }catch(err){
         console.log('response from removing  err- ',err);
         toast.error(` Error while Removing Video from  playlist 44 s`);
      }
}

export default Removevideofromplaylist