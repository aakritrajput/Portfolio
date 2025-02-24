import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './components/layout/Root.jsx'
import About from './components/about/About.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import Contact from './components/contact/Contact.jsx'
import EnlargedPhoto from './components/enlargePhoto/EnlargedPhoto.jsx'
import Home from './components/Home/Home.jsx'
import ProjectsSlider from './components/projects/Projects.jsx'

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
      },
      {
        path: 'projects',
        element: <ProjectsSlider/>
      }
    ]
  },{
    path:"/gallery/:photoId",
    element:  <EnlargedPhoto/>
  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
