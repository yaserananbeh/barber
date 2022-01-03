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

function App() {
  return (
    <div >
    <BrowserRouter className="appMainContainer">
    <OurNav/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="*" element={<EmptyPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
