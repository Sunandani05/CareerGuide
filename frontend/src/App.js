import Home from './components/LandingPage/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authentication from './pages/Authentication';
import AdminLogin from './components/auth/AdminLogin';
import React from 'react';
import WeGuide from './pages/weGuide';
import AdminDashboard from './components/Admin/AdminDashboard'



function App() {
  return (
  <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Authentication />} />
        {/*Admin routes*/}
        <Route path="/adminlogin" element={<AdminLogin />}/>
        <Route path="/adminDashboard" element={<AdminDashboard />}/>
        <Route path="/weGuide" element={<WeGuide />} />
        </Routes>
    </BrowserRouter>
  );
}


export default App;
