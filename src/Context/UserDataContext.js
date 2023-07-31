import { createContext, useContext, useEffect, useReducer } from 'react';
import { userDataReducer } from '../Reducer/UserDataReducer';

const UserDataContext = createContext(null);

const initialState = {
    playlist: [],
    likedVideos : [],
    watchlater : [],
    history : [],
}

const token  = localStorage.getItem('token');

const UserDataProvider = ({ children }) => {
    
    token && useEffect(() => {

        (async () => {
            const token  = localStorage.getItem('token');
            try{
                const response = await axios.get('/api/user/playlists' , {
                     headers : { authorization : token },
                });
                userDispatch({
                    type : "INITIAL_PLAYLIST",
                    payload : response.data.playlists,
                });
            }catch(err){
                console.log('get playlist Error',err);
            }
         })();

         (async () => {
            try{
                const response = await axios.get('/api/user/likes' , {
                     headers : { authorization : token },
                });
                userDispatch({
                    type : "LIKED_VIDEOS",
                    payload : response.data.likes,
                });
            }catch(err){
                console.log('get Likes Error',err);
            }
         })();

         (async () => {

            try{
                const response = await axios.get('/api/user/watchlater' , {
                     headers : { authorization : token },
                });
                userDispatch({
                    type : "WATCH_LATER_ACTIONS",
                    payload : response.data.watchlater,
                });
            }catch(err){
                console.log('get watch later  Error',err);
            }
         })();

         (async () => {
            try{
                const response = await axios.get('/api/user/history' , {
                     headers : { authorization : token },
                });
                userDispatch({
                    type : "HISTORY_ACTIONS",
                    payload : response.data.history,
                });
            }catch(err){
                console.log('get history Error',err);
            }
         })();
         
    },[])

    const [userState,userDispatch] = useReducer(
        userDataReducer,
        initialState
    );

    return (
        <UserDataContext.Provider value = {{ userState , userDispatch }}> 
            {children}
        </UserDataContext.Provider>
    )
}

const useUserData = () => useContext(UserDataContext);

export { useUserData  ,  UserDataProvider };