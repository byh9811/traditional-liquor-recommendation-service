// 고정되는 root page! => navbar가 고정되고 그 밑을 Outlet으로 꾸며줌. 
// root에서 첫 세팅을 싹 다 해주자! 

import React from 'react'
// css연결! 
import root from './Root.module.css';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header.jsx';
import Navbar from '../components/Navbar';
// import Navbar from '../components/Navbar'

export default function Root() {
  return (

    <div className={ root.container }>
      <header>
        <Header />
      </header>
      <Navbar />
      <main>
          <Outlet />
          {/* 얘의  */}
          {/* Outlet즉, 여기에 이제 다른 컨텐츠가 온다는 의미. 
          main에서 계속 다른 컨텐츠가 오기때문에, 다른데는 똑같아. 
          */}
      </main>
      
    </div>
  )
}
// >= <= 
