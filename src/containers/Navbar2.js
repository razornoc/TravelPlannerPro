import React, { useEffect, useState } from 'react'
import minilogo from './images/travelminilogo.png'
import dashboardlogomini from './images/dashboardlogomini.png'
import logoutmini from './images/logoutmini.png'
import './Navbar2.css';
import navalter from './images/navalter.png'
import logobig from './images/travellogo2nav.png'
import logoutbig from './images/logoutbig.png'
import navalterclose from './images/navalterclose2.png'
import { useContext } from 'react';
import travelContext from '../context/travel/TravelContext';

const Navbar2 = () => {
    const context = useContext(travelContext);
    const { showAlert } = context;

    const [open, setOpen] = useState(false);
    // const [navwidth, setNavwidth] = useState("6vw")

    const navchangehandler = () => {
        setOpen(!open);
    }

    const logout = () => {
        // window.location.reload()
        localStorage.clear();
        showAlert("Logout succesfully", "success");
        // navigate("/login");
    }
    return (
        <>
            <div
                className='nav2'
                // {open && style={{ width: `${navwidth}`, background: "black", height: "100vh" }}}
                // element={loggedIn ? [<Dashboard />] : <Login />}
                style={open ? { width: "12vw", background: "black", height: "100vh" } : { width: "6vw", background: "black", height: "100vh" }}
            >
                <div>
                    {!open &&
                        <div className='navnclose'>
                            <img className='logomininav' src={minilogo} alt='logo' />
                            <div className='navnclosemid'>
                                <img src={dashboardlogomini} alt='logo' />
                                <img src={dashboardlogomini} alt='logo' />
                                <img src={dashboardlogomini} alt='logo' />
                            </div>
                            <img onClick={logout} className='navncloselogout' src={logoutmini} alt='logout' />
                        </div>
                    }

                    {open &&

                        <div className='navnopen'>
                            <img className='logonavbig' src={logobig} alt='logo' />
                            <div className='navnopenemid'>
                                <div className='navopenitem'>
                                    <img src={dashboardlogomini} alt='logo' />
                                    <p className='navtxt1'>Dashboard</p>
                                </div>
                                <div className='navopenitem'>
                                    <img src={dashboardlogomini} alt='logo' />
                                    <p className='navtxt1'>Dashboard</p>
                                </div>
                                <div className='navopenitem'>
                                    <img src={dashboardlogomini} alt='logo' />
                                    <p className='navtxt1'>Dashboard</p>
                                </div>
                            </div>
                            <img onClick={logout} className='navnopenlogout' src={logoutbig} alt='logo' />
                        </div>



                    }
                </div>

                <div>
                    {open && <img className='navalterclose' src={navalterclose} onClick={navchangehandler} alt='logo' />}
                    {!open && <img className='navalter' src={navalter} onClick={navchangehandler} alt='logo' />}
                    {/* <img className='navalter' src={navalter} onClick={navchangehandler} alt='logo' /> */}
                </div>

            </div>
        </>
    )
}

export default Navbar2