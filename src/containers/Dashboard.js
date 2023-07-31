import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import './Dashboard.css'
import Navbar2 from './Navbar2'
function Dashboard() {
  return (
    <div className='main'
      style={{ width: "100vw",}}
    >
      <Navbar2 />
      <Home />
    </div>
  )
}

export default Dashboard