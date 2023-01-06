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
// 재클롡
const router = createBrowserRouter([

  {
    path : '/',
    element : <Root />, // root안에 outlet이 있구나 생각! 
    children : [ // children은 무조건 Outlet안으로 들어간다고 생각하자!!
    // 만약 다른데도 바꾸고 싶다면 Root children밖으로 새로운 자식을 만들어줘야 해! 
      {
        index : true, element : <Home />
        //  GET / => index true home이라는 component를 outlet대신 넣는다. 
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
  // 저 children들은 무조건적으로 navbar header가 맨날 똑같이 고정이 됨. 
  // 그럼 navbar header바꾸고 싶으면... children에서 빠져서 다른 자식을 또 만들어줘야함.

])
export default function App() {
  return <RouterProvider router={router} />
}
