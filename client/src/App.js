import './App.css';
import { Routes, Route } from 'react-router-dom';
import  HomePage  from './pages/home';
import  Dashboard  from './pages/dashboard'

function App() {


  return (
    <div className="App">

      <h1>This is the App.js file</h1>

      <Routes>
        {/* Direct to Home Page (define login/logout/signup routes in home component?) */}
        <Route path="/*" element={ <HomePage /> } />
      
        {/* Direct to Dashboard Component (with dashboard routes & Modules routes defined there) */}
        <Route path="/dashboard/*" element={ <Dashboard /> }/>
       
        <Route />
      </Routes>
    </div>
  );
}

export default App;
