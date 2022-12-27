import React from 'react'
import { useState } from 'react';
import app from './App.module.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import Test from './pages/Test';
import Shop from './pages/Shop';
import DrinkResult from './pages/DrinkResult'; 
import DrinkDetail from './pages/DrinkDetail';
import ShopDetail from './components/Shops/ShopDetail';

const router = createBrowserRouter([

  {
    path : '/',
    element : <Root />, // root안에 outlet이 있구나 생각! 
    children : [ // children은 무조건 Outlet안으로 들어간다고 생각하자!!
      {
        index : true, element : <Home />
      },
      {
        path : '/test/index' , element : <Test />
      },
      {
        path : '/all/index' , element : <DrinkResult/>
      },
      {
        path : '/stores/index' , element : <Shop />
      },
      {
        path : '/stores', element : <ShopDetail />
      },
      {
        path : '/drinks/:id', element : <DrinkDetail />
      },
      {
        path : `/drinks`, element : <DrinkResult/>
      }
    ]
  },

])
export default function App() {
  return <RouterProvider router={router} />
}
