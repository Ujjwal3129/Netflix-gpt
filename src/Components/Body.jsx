import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


import { useDispatch } from 'react-redux';



function Body() {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        }
    ])

    
  return (
    <div>
      <RouterProvider router={appRouter}/>
      
    </div>
  )
}

export default Body
