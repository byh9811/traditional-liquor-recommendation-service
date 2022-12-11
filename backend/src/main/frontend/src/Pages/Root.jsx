import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import root from './Root.module.css';

export default function Root() {
  return (
    <div className={ root.container }>
        <Navbar /> 
        <Outlet />
        {/* navbar는 고정이고 outlet안에서 이제 변하는
        컴포넌트를 만들어 나갈거야!  */}
    </div> 
  )
}
