import React from 'react';
import {  About, Contact, Home } from "./index"
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Applayout from './Components/Applayout';
import ErrorPage from './Components/ErrorPage';
// import { getMovieData } from './Components/ApiData.js';
// import Movie from './Components/Movie';

//errorElement:<ErrorPage />,
// {
//   path:"/movie",
//   element:<Movie />,
//   loader: getMovieData,
// },

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Applayout/>,
      
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/about",
          element:<About/>,
        },
        {
          path:"/contact",
          element:<Contact/>,
          
        },
        
        {
          path:"*",
          element:<ErrorPage />
        }
      ]
    },
    
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
