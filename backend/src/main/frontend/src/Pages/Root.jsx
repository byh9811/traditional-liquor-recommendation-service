import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Root() {
  return (
    <nav>
        <Navbar />
        <Outlet />         
        {/* Outlet위에 1개만 고정하고싶을 때! 
        그럼 옆에 sidebar도 같이 고정하고싶으면 어떡할까..?
        혼자 해보자.
        */}
    </nav>
  )
}
