import React from "react";
import './App.css';

import Homepage from './Homepage';
import LoginPage from './LoginPage';

import Register from './Register'


import { createBrowserRouter,RouterProvider } from "react-router-dom";


//Create a route
const router = createBrowserRouter([
  {
    path:'/login',
    element:<div><LoginPage/></div>
  },
  {
    path:'/register',
    element:<div><Register/></div>
  },
  {
    path:'/',
    element:<div><Homepage/></div>
  },
  
])

function App() {
  return (
    <div className="App">

    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
