import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import RegisterPage from './UserPages/RegisterPage'
import LogInPage from './UserPages/LogInPage'
import Navbar from './components/NavBar'


function App() {
 

  return (
    <>
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/LogIn" element={<LogInPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
