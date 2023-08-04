import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { makeServer } from './server';
import { AuthProvider } from './Context/authContext';
import { UserDataProvider } from './Context/UserDataContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

makeServer();

root.render(
  <React.StrictMode>
      <Router>  
            {/* For Authorizing Signup/Login */}
        <AuthProvider>     
            {/* For Using Likes,playlists and all  */}
          <UserDataProvider>

                <App />

          </UserDataProvider>
        </AuthProvider>
      </Router>
  </React.StrictMode>
);
