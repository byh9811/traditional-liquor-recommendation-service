import React from 'react'
import { useState } from 'react';
import app from './App.module.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';


const router = createBrowserRouter([

  {
    path : '/',
    element : <Root />,
    children : [
      {
        index : true, element : <h2>MAIN</h2>
      },
      {
        path : '/test/index' , element : <h2>TEST</h2>
      },
      {
        path : '/all/index' , element : <h2>ALL</h2>
      },
      {
        path : '/shops' , element : <h2>SHOPS</h2>
      },
    ]
  },

])
export default function App() {
  return <RouterProvider router={router} />
}
