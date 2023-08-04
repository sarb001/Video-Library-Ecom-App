

export const userDataReducer = (state,action) => {
    switch(action.type){
        case "INITIAL_PLAYLIST"  :
         return { ...state,  playlist : [...action.payload]}
        
         case "DELETE_PLAYLIST" : 
         return { ...state , playlist : [...action.payload]}

        case "REMOVE_VIDEO_FROM_PLAYLIST" : 
        const updatePlaylist = state.playlist.filter(
            (video) => video.id !== action.payload);

        return {
            ...state,
            playlist : updatePlaylist, 
        }

        case  "LIKED_VIDEOS"  :
            return {
                ...state,likedVideos : [...action.payload]
            }
        
        case "WATCH_LATER"  :
            return {
                ...state, watchlater : [...action.payload]
            }
        
        case "HISTORY_ACTIONS" :
            return {
                ...state,
                history : [...action.payload]
            }
        default :
        return {state};
    }
}