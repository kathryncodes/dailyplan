import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar';

const Dashboard = () => {
    
    
    return(
        <div>
            <div id="dashboard" className="dashboard">
            {/* Navbar component */}
            <Navbar />
            <div id="gridArea">
            {/* dashboard modules */}
            </div>

            </div>

            <Routes>
                {/* do i need separate routes for backend functions??? or do I just create event handler functions??? */}
                <Route />
            </Routes>
        </div>
    )
}

export default Dashboard