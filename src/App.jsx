import React from 'react'
import Home from './pages/Home/Home'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Dashboard from './pages/Dashboard/Dashboard';
import GeneralDetails from './pages/GeneralDetails/GeneralDetails';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Home/>,

  },
  {
    path: '/Dashboard',
    element: <Dashboard/>
  },
  {
    path: '/GeneralDetails',
    element: <GeneralDetails/>
  },
]);

function App() {
  

  return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
