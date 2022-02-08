import React from 'react';
import img from '../assets/Illustration2.png';
import GreenCheack from '../assets/GreenCheack.png';
import './Feature.css';

const Feature = () => {
    return (
        <div className='containerOne'>
            <div className='features'>
                <div className='imgFeatures'>
                    <img src={img} alt='' draggable='false' />
                </div>
                <div className='descFeatures'>
                    <h2>
                        We Provide Many Features You Can Use
                    </h2>
                    <p>
                        You can explore the features that we provide with fun and have their own functions each feature.
                    </p>
                    <ul className='list-items'>
                        <li><img src={GreenCheack} className="vector"/> Powerfull online protection.</li>
                        <li><img src={GreenCheack} className="vector"/> Internet without borders.</li>
                        <li><img src={GreenCheack} className="vector"/> Supercharged VPN</li>
                        <li><img src={GreenCheack} className="vector"/> No specific time limits.</li>
                    </ul>
                
                </div>
            </div>
        </div>
    )
};

export default Feature;