import { Navigate , useLocation } from "react-router-dom";
import { useAuth } from "../Context/authContext";


const RequireAuth = ({children}) => {
     const { auth } = useAuth();
     const location = useLocation();
     return auth.token ? (
        children
     ) : (
        <Navigate to = "/login" state = {{from : location}} />
     )
}

export default RequireAuth