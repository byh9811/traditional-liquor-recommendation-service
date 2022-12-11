import React from 'react'
import { Children } from 'react';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import app from './App.module.css';
import Navbar from './Component/Navbar';
import Detail from './Pages/Detail';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Root from './Pages/Root';

const router = createBrowserRouter([
    {
        path : '/', 
        element : <Root />,
        errorElement : <Error />,
        children : [
            // 여기안에다가 변하는 자식요소들을 정해준다! 
            {
                index : true, // 최상위 경로는 /가 맞음! 
                element : <Home />,
            },
            {
                path : '/Login', // path가 /니까 거기 아래 /login이 돼! 
                element : <Login />,
            },
            {
                // detail page만들거야!! 
                path : '/login/:id',
                element : <Detail />
            }
        ]
    },
    {
        path : '/login', 
        element : <Root />, 
        errorElement : <Error />,
        children : [
            // 여기안에다가 변하는 자식요소들을 정해준다! 
            {
                index : true,
                element : <Login />,
            }
        ]
    }
]);
export default function App() {
    
  return (
    <RouterProvider router = {router}/>
        
  )
}

// 1. 자식 state가 변하면, 즉 자식이 재랜더링 되면, 부모의 state도 변한다. 
// ==> 를 구현해보자.

// 자식의 버튼에게 onclick을 전달을 해보자!! => 그럼 자식이 onclick되면, 부모의 값도 변함. 
// 어디까지 공통 data를 갖고있으며,
// 어디까지 자식 개개인만의 state를 갖는지 파악해줘야돼! 

// 자 공통 data는 부모에게 두고, 자식도 필요하면 props로 전달해주면 돼! 

// 자식에서 전체 클릭된 data는 부모가 전달해줘야 하는 data이기 때문이다!! 
// total이 계속 증가할거야 그럼!! 

// 그럼 부모가 전달해줘야 할 state는 버튼 눌렀을 때 공통 state가 증가하는 함수. 
// 계속 증가하는 total state값! 


// 정리 
// 공통 data가 있고, 자식만 갖고있는 data가 있다. 
// 만약 공통 data를 자식도 쓰고싶다면 props로 전달해준다! => 자식에게 선언하고, component할 때 초기화만 해주면 돼! 

// 자식만 쓰고싶은 data가 있다면 부모에게 전달받지 않아도 돼! 

// 라우팅이란? 우리가 url을 입력하면 서버상에서 새로운 data를 보내준다.!! 
// 새로운 url을 요청하면 그에 맞는 data를 받아온다! 
// CSR 라우팅이란? 
// -> 필요한 부분만 업데이트 됨.
// -> 새로운 경로를 입력했을 때 서버에게 새로운 페이지를 요청하는 것이 아니라.
// => 필요한 data만 부분적으로 요청해서 받아온다! 

