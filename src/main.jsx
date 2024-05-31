import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginPage from './Pages/login'
import RegisterPage from './Pages/register'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ErrorPage from './Pages/404'


const router = createBrowserRouter([
  {
    path: "/",
    element: <div><h1>Hello</h1></div>,
    errorElement:<ErrorPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
