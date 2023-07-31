import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Navbar2 from './Navbar2';

import Footer2 from './Footer2';
import Footer1 from './Footer1';
import logotxt2 from './images/homelogotxt.png'

const Destination = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        webiste: ""
    });

    const { id } = useParams();

    // useEffect(() => {
    //     loadUser();
    // }, []);

    // const loadUser = async () => {
    //     const res = await axios.get(`http://localhost:3003/users/${id}`);
    //     setUser(res.data);
    // };

    return (
        <>
            <div className='main'
                style={{ width: "100vw", }}
            >
                <Navbar2 />
                <div className='Home'
                    style={{ width: "86vw", marginLeft: "12vw" }}
                >
                    <img style={{ marginTop: "20px", marginBottom: "30px" }} src={logotxt2} alt='logo' />


                    
                    <h1 className="display-4">User Id: {id}</h1>
                    <hr />
                    <ul className="list-group w-50">
                        <li className="list-group-item">name: {user.name}</li>
                        <li className="list-group-item">user name: {user.username}</li>
                        <li className="list-group-item">email: {user.email}</li>
                        <li className="list-group-item">phone: {user.phone}</li>
                        <li className="list-group-item">website: {user.website}</li>
                    </ul>


                    <Footer1 />
                    <Footer2 />
                </div>
            </div>



            {/* <div className="home">
                <Link className="btn btn-primary" to="/">
                    back to Home
                </Link>
                <h1 className="display-4">User Id: {id}</h1>
                <hr />
                <ul className="list-group w-50">
                    <li className="list-group-item">name: {user.name}</li>
                    <li className="list-group-item">user name: {user.username}</li>
                    <li className="list-group-item">email: {user.email}</li>
                    <li className="list-group-item">phone: {user.phone}</li>
                    <li className="list-group-item">website: {user.website}</li>
                </ul>
            </div> */}
        </>
    )
}

export default Destination