import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
//import Header from './components/header/Header.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './components/layout/root.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/about/About.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import Contact from './components/contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'gallery',
        element:<Gallery/>
      },
      {
        path:'contact',
        element:<Contact/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
