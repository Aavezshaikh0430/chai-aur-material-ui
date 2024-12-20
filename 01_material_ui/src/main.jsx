import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Containers from './pages/Containers.jsx'
import Containers2 from './pages/Containers2.jsx'




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path:'',
        element: <Home />
      },

      {
        path:'About',
        element: <About />
      },

      {
        path:'Contact',
        element: <Contact />
      },

      {
        path : 'Containers',
        element : <Containers />
      },

     {
      path : 'Containers2',
      element : <Containers2 />
     }

    

     

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
