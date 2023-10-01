import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Signup from './Signup';
import Login from './Login';
import Home from './Home';


function App() {
  return (
<div className='body'>

    <BrowserRouter>
    <span className='header'>Task-Wallet-Notes Traker </span>
  
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
      <h1 className='footer'>Created by Rupali Verma</h1>

    </BrowserRouter>
    </div>
  );
}

export default App;
