import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import EmptyPage from "./pages/EmptyPage";
import OurNav from "./components/OurNav";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div>
      <BrowserRouter className="appMainContainer">
        <OurNav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/account"> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* </Route> */}
          <Route path="*" element={<EmptyPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
