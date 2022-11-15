import React from 'react'
import Navbar from './Navbar'
import './style.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import Home from './Home'
import Projects from '../3-tabs/App'
import Error from '../../Error'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App