import React from 'react';
import './Navbar.css';
import logo from '../assets/Logo.png';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="container">
                <div className="navbar-content">
                    <div className="logo">
                        <img src={logo} alt="" draggable="false" />
                    </div>
                    <div className='first-list'>
                        <ul className="items-list">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">Help</a></li>
                        </ul>
                    </div>
                    <div className='second-list'>
                        <ul className='register'>
                            <li><a className='sign-in' href='#'>Sign In</a></li>
                            <li><button className='sign-up' href='#'>Sign Up</button></li>
                        </ul>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;