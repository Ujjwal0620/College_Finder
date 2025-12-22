import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import ExploreProgramPage from './pages/ExploreProgramPage'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/more' element={<ExploreProgramPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
