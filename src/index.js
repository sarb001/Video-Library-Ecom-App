import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { makeServer } from './server';
import { AuthProvider } from './Context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

makeServer();

root.render(
  <React.StrictMode>
      <Router>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Router>
  </React.StrictMode>
);
