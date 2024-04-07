import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
// import { HashRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
 
import Home from './paginas/Home';
import Contacto from './paginas/Contacto';
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/contacto",
    element: <Contacto/>
  }
])
//importe AppRouter y lo coloque dentro del BrowserRouter como componente principal
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
 
)