import React from 'react'
import imgtxt from './images/NAME  AND TAG LINE.png'
import logotxt from './images/ICON WITH TEXT.png'
import gototopimg from './images/TOP ICON.png'
import { Link } from 'react-router-dom'
import './Footer2.css'

const Footer1 = () => {
    return (
        <>
            <div>
                <div style={{ marginBottom: "48px", marginTop: "38px" }}>
                    <div className='d-flex' style={{ justifyContent: "space-around", alignItems: "center" }}>
                        <img src={imgtxt} style={{ height: "32px" }} alt='imgtxt' />
                        <img src={logotxt} style={{mixBlendMode: "multiply"}} alt='imgtxt' />
                        <div className='d-flex gap-5 align-items-center'>
                            <div className='d-flex gap-2 align-items-center'>
                                <div style={{background: "#343434", width: "1px", height: "140px"}} />
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textDecoration: "none" }}>
                                    <Link className='footer2txt' to='/'>Home</Link>
                                    <Link className='footer2txt'>Dashboard</Link>
                                    <Link className='footer2txt'>Logout</Link>
                                </div>
                            </div>

                            <img src={gototopimg} style={{ height: "40px" }} alt='imgtxt' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer1