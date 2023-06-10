import React, { useContext } from "react";
import './App.css';

import Homepage from './Homepage';
import LoginPage from './LoginPage';

import Register from './Register'


import { BrowserRouter } from "react-router-dom";
import {Routes as Router, Route, Navigate, Outlet} from 'react-router-dom'
import { AuthContext, AuthProvider } from "./context/AuthContext";
import PageNotFound from "./PageNotFound";

const PrivateRoutes = () => {
  const { authenticated } = useContext(AuthContext)

  if(!authenticated) return <Navigate to='/login' replace />

  return <Outlet />
}

function App() {
  const { authenticated } = useContext(AuthContext)
  // console.log(authenticated);
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
<Router>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/' element={<Homepage />}/>
      <Route path='/register' element={<Register />} />
        

      <Route element={<PrivateRoutes />}>
        <Route path='/home' element={<Homepage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Router>
        </AuthProvider>
        
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
