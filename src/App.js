import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.scss'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import EmptyPage from './pages/EmptyPage';
import OurNav from './components/OurNav';
import Footer from './components/Footer';

function App() {
  return (
    <div >
    <BrowserRouter className="appMainContainer">
    <OurNav/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="*" element={<EmptyPage/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
