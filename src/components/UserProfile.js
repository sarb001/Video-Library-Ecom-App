import React, { useEffect, useState } from 'react'
import NavMenu from './NavMenu'
import { Link, useNavigate } from 'react-router-dom';
import jhonimg from '../assests/jhon.jpg';
import { useAuth } from '../Context/authContext';
import '../styles/UserProfile.css';

const UserProfile = () => {

   const [userData,setUserData] = useState({});
    const {setAuth} =  useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      setUserData(JSON.parse(localStorage.getItem("userData")));
    },[])

    const handleLogout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('userData')  
      setAuth({token :"",isLoggedIn : false });
      navigate("/");
    }

  return (
  <>
      <div className="userprofile-container" style = {{display:'grid',gridTemplateColumns:'1fr 4fr'}}>
      <div className="navbar-container" style = {{backgroundColor:'black',color:'white'}}>
        <NavMenu />
      </div>
      
        <div className="section-ctn">
           <h2 className='text-center'> Profile </h2>
           <div className='profile-ctn br-sm pd-lg'>
           <div className="profile-img br-full">
            <img src={jhonimg} alt="user-profile" className="img-responsive" />
          </div>
          <div className="pd-bottom-lg">
            <p>Name</p>
            <p className="para-lg">
              {/* {userData.firstName + " " + userData.lastName} */}
            </p>
          </div>
          <div className="pd-bottom-lg">
            <p>Email</p>
            {/* <p className="para-lg">{userData.email}</p> */}
          </div>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </div>
           </div>
        </div>
    </>
  )
}

export default UserProfile