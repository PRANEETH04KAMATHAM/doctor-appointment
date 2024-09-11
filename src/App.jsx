import React from 'react'
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout from './RootLayout'
import Home from './components/home/Home'
import Login from './components/login/Login'
import DocRegister from './components/doc-registration/D_reg'
import PatRegister from './components/patient-registration/P_reg'
import RoutingErrors from './components/RoutingErrors'


function App() {

  const browersing_object = createBrowserRouter([
    {
      path:'',
      element:<RootLayout />,
      errorElement:<RoutingErrors />,
      children:[
        {
          path:'',
          element:<Home />
        },

        {
          path:'loginpath',
          element:<Login />
        },

        {
          path:'Docregisterpath',
          element:<DocRegister />
        },

        {
          path:'Patregisterpath',
          element:<PatRegister />
        },
      ]
    }
  ])



  return (
    <div>
      <h1 className='text-danger'>     
        {/* classname is bootstarp - this we installed (npm install bootstrap) and imported in the main.jsx */}
        MY DOC-APP
      </h1>

      <p className='text-warning'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, debitis!</p>

      <h2 className="h2obj">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, maiores.
      </h2>

      <RouterProvider router={browersing_object} />
    </div>
    
  )
}

export default App