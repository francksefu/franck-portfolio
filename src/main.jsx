import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Project from './components/foots/Project.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Foot from './components/homes/Foot.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/project',
    element: <Project />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
    <Foot />
  </React.StrictMode>,
)
