import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './index.css';
import Home from './components/home/Home'
import Projects from './components/projects/Project'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Error from './components/Error'
import Videos from './components/videos/Videos'
import Work from './components/videos/Work';
import Social from './components/social/social';
import Navbar from './components/navbar/Navbar';
import Terminal from './components/terminal/Terminal';
import { FaEnvelopeOpenText } from 'react-icons/fa';

const Index = ()=>{
  const [toggleTerminal, setToggleTerminal] = useState(false);
  const checkKeyValues = (event)=>{
    if ((event.ctrlKey || event.metaKey) && event.key === '/') {
      setToggleTerminal(!toggleTerminal);
  }}
  useEffect(()=>{
    document.addEventListener('keydown', checkKeyValues);
    return ()=>{
      document.removeEventListener('keydown', checkKeyValues);
    }
  });
  return (
    <React.StrictMode>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Navigate to="/home" />} />
          <Route path='/home' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/videos/:id' element={<Work />} />
          <Route path='/about' element={<About />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Social />
        {toggleTerminal && <Terminal/>}
      </Router>
    </React.StrictMode>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
