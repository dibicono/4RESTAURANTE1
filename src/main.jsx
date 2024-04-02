import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './routes/AppRouter'
import './index.css'
import { HashRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'

//importe AppRouter y lo coloque dentro del BrowserRouter como componente principal
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter >
      <App />
    </HashRouter>

  </React.StrictMode>,

)
