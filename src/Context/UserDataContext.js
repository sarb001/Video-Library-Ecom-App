import { createContext, useContext, useEffect, useReducer } from 'react';
import { userDataReducer } from '../Reducer/UserDataReducer';
import axios from 'axios';

const UserDataContext = createContext(null);

const initialState = {
    playlist: [],
    likedVideos : [],
    watchlater : [],
    history : [],
}

const token  = localStorage.getItem('token');

const UserDataProvider = ({ children }) => {

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