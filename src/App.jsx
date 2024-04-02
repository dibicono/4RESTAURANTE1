
import './App.css'
import React from 'react'
import loding from './components/loding'
import AppRouter from './routes/AppRouter'
import { NavLink } from 'react-router-dom'

// App dejó de ser tu documento principal, dirigete a AppRouter

function App () {
  return (
    <>
        <ul>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Nav className="me-auto">
          <li><NavLink to="/home">Home</NavLink></li>

          <li><NavLink to="/ubicacion">Ubicacion</NavLink></li>
          <li><NavLink to="/contacto">Contacto</NavLink></li>

        </Nav>

      </Navbar>
      <h1>aqui estoy</h1>
      <AppRouter />
      

    </ul>
    
    </>
  )
}

export default App

