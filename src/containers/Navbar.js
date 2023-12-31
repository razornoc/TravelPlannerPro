import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import travelContext from '../context/travel/TravelContext';
import logo1 from "./images/travel logo transparent.png";


function Navbar() {
  const context = useContext(travelContext);
  const { showAlert } = context;

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const logout = () => {
    // window.location.reload()
    localStorage.clear();
    showAlert("Logout succesfully", "success");
    navigate("/login");
  }
  return (
    <div className='main-container'>
      <motion.div
        animate={{
          width: isOpen ? '200px' : '45px',
          transition: {
            duration: 0.4,
            type: 'spring',
            damping: 10,
          },
        }}
        // style={{ height: '100vh', background: '#2F4050' }}
        style={{ height: '100vh', background: '#82A8E1' }}
        classname='newsidebar'
      >
        
        <div className='top'>
          {isOpen && (
            <div className='logo '>
              <img className='mx-2' src={logo1} style={{height: "60px", mixBlendMode: "multiply", marginTop: "10px"}} alt='logo' />
              <h5 className='partner my-2' style={{color: "#fff", fontSize: "16px"}}>Travel Planner Pro</h5>
            </div>
          )}
          {
            <button
              onClick={toggle}
              sx={{ mt: 2, ml: 1, color: 'white', cursor: 'pointer' }}
            >X</button>
          }
          {/* <MenuIcon
          onClick={toggle}
          exact='true'
          sx={{ mt: 2, ml: 1, color: 'white', cursor: 'pointer' }}
        /> */}
        </div>
        <section className='routes'>
          <NavLink
            to={'/'}
            key={'Dashboard'}
            activeClassName='active'
            className='link'
          >
            <div className='text'>{isOpen && 'Dashboard'}</div>
          </NavLink>
          <NavLink
            to={'/'}
            key={'dash2'}
            activeClassName='active'
            className='link'
          >
            <div className='text'>{isOpen && 'My destinations'}</div>
          </NavLink>
          <NavLink
            onClick={logout}
            to={'/login'}
            key={'Logout'}
            className='link'
          >
            <div className='text'>{isOpen && 'Logout'}</div>
          </NavLink>
        </section>
      </motion.div>

    </div>
  )
}

export default Navbar