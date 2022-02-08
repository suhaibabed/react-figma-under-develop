import React from 'react';
import img from '../assets/Illustration.png';
import user from '../assets/user.png';
import users from '../assets/users.png';
import location from '../assets/location.png';
import locations from '../assets/locations.png';
import Server from '../assets/Server.png';
import Servers from '../assets/Servers.png';
import './About.css';

const About = () => {
    return (
        <div className='about'>
            <div className='about-content'>
                <div className='description'>
                    <h2>
                        Want anything to be easy with
                        <h1>LaslesVPN</h1>
                    </h2>
                    <p>
                        Provide a network for all your needs with ease and fun using 
                        <span> LaslesVPN </span> discover interesting features from us.
                    </p>
                    <button>Get Started</button>
                </div>
                <div className='image'>
                    <img className='img' src={img} alt="" draggable="false" />
                </div>
            </div>

            <div className='rating'>

                <div>

                    <img src ={user}  width = "60px" />
                    
                    <div>
                        <img src = {users} />
                    </div>

                </div>

                <div>
                        <img src={location} />
                    <div>
                        <img src={locations} />
                    </div>
                </div>

                <div>
                    <img src={Server}/>
                    <div>
                        <img src={Servers}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;