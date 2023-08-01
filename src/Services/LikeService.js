import IsVideoPresent from "../utils/IsVideoPresent";
import AddedtoLikedVideos from "./AddedtoLikedVideos";
import RemovefromLikedVideo from "./RemovefromLikedVideo";

export const LikeService = (likedVideos,auth,video,userDispatch, navigate) => {
    
    console.log('like Service with auth -',auth);

    if(auth.isLoggedIn){
        IsVideoPresent(likedVideos,video._id)
         ? RemovefromLikedVideo(video._id,auth.token,userDispatch)  
         : AddedtoLikedVideos(video,auth.token,userDispatch);     
    }else{
        navigate('/login');
    }
}
