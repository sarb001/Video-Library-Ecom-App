import IsVideoPresent from "../utils/IsVideoPresent";
import AddedtoLikedVideos from "./AddedtoLikedVideos";
import RemovefromLikedVideo from "./RemovefromLikedVideo";


export const LikeService = ({likedVideos,auth,video,userDispatch, navigate}) => {
    if(auth.isLoggedIn){
        IsVideoPresent(likedVideos,video._id)
         ? RemovefromLikedVideo(video._id,auth.token,userDispatch)  
         : AddedtoLikedVideos(video._id,auth.token,userDispatch);     
    }else{
        navigate('/login');
    }
}
