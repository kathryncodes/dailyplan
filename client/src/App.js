import './App.css';
import { Routes, Route } from 'react-router-dom';
import  HomePage  from './pages/home';
import  Dashboard  from './pages/dashboard'
import SignupComponent from './components/signup';
import LoginComponent from './components/login';
import { URLModal } from 'react-url-modal';
import React from 'react';


function App() {

  return (
    <div className="App h-screen">
      <Routes>
        {/* Direct to Home Page (define login/logout/signup routes in home component?) */}
        <Route path="/" element={ <HomePage /> } />
        <Route path="/signup" element={ <SignupComponent />} />
        <Route path="/login" element={ <LoginComponent />} />
        {/* Direct to Dashboard Component (with dashboard routes & Modules routes defined there) */}
        <Route path="/dashboard" element={ <Dashboard /> }/>

      </Routes>
    </div>
  );
}

export default App;
