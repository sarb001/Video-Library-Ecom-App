

export const userDataReducer = (state,action) => {
    switch(action.type){
        case "INITIAL_PLAYLIST"  :
            return {
                    
            }
        
        case  "LIKED_VIDEOS"  :
            return {
                ...state,
                likedVideos : [...action.payload]
            }
        
        case "WATCH_LATER_ACTIONS"  :
            return {

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