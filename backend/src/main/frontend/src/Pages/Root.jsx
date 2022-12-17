import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Root() {
  return (
    <nav>
        <Navbar />
        <Outlet />         
        {
// 리엑트 여기다가 지금 옮기기

        }
    </nav>
  )
}
