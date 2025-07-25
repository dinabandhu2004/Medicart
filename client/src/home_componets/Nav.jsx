import { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false); // for dropdown

  return (
    <>
      <div className='nav'>
        <span>Medicart</span>

        {/* Hamburger Icon */}
        <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Navigation Routes */}
        <div className={`navRoute ${menuOpen ? 'open' : ''}`}>
          <button className='navbtn'><Link to='/home' >Home</Link></button>
          <button className='navbtn'><Link to='home/cart'>Cart</Link></button>
          <button className='navbtn'><Link to='/appoinment'>Appointments</Link></button>

          {/* Dashboard Dropdown */}
          <div className="dashboard-dropdown">
            <button
              className='navbtn'
              onClick={() => setDashboardOpen(!dashboardOpen)}
            >
              Dashboard ▾
            </button>
            {dashboardOpen && (
              <div className="dropdown-options">
                <button className="dropdown-item"><Link to='/Doctorsregistraion'>Doctor's Dashbord</Link></button>
                <button className="dropdown-item"><Link to='/adminlogin'>Admin</Link></button>
              </div>
            )}
          </div>

          <button className='navbtn logout-design'><Link to='/login'>Logout</Link></button>
        </div>
      </div>
    </>
  );
};

export default Nav;
