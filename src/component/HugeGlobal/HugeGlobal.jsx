import react from "react";
import huge from '../assets/HugeGlobal.png';
import sponsored from '../assets/Sponsored.png';
import netflex from '../assets/netflex.png';
import reddit from '../assets/reddit.png';
import amazon from '../assets/amazon.png';
import discord from '../assets/discord.png';
import spotify from '../assets/spotify.png';



//style
import './HugeGlobal.css';

const HugeGlobal = () =>{
    return(
        <div className="section-two">
            <h1 className="title">Huge Global Network of Fast VPN</h1>
            <p className="disc">
            See LaslesVPN everywhere to make it easier for you when you move locations.
            </p>

             <img src={huge} className="image-map"/>

            <img src={sponsored} className="brand" /> 

            {/* <div className="brandone">
            <img src={netflex} className="brandd" />
            <img src={reddit} className="brandd" />
            <img src={amazon} className="brandd" />
            <img src={discord} className="brandd" />
            <img src={spotify} className="brandd" />
            </div> */}

           


        </div>
    );
}

export default HugeGlobal;