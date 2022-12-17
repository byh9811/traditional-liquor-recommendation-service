import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './pages/Index'
import Root from './pages/Root'
import Test from './pages/Test'
import Shop from './pages/Shop'
import All from './pages/All'
import Error from './pages/Error'
import { Children } from 'react'

const router = createBrowserRouter([
    {
        path : '/',
        element : <Root />,
        errorElement : <Error />,
        // Root는 무조건 띄우고(navbar은 어디든지 고정!
        children : [
            {
                index : true, 
                element : <Index/>, //자식에서 보여주고 싶은 요소는 index야! 
            },
            {
                path : '/shop/index',
                element : <Shop />,
            }
        ]
    }
])
export default function App() {
  return <RouterProvider router = { router }/>
}
