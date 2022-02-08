import React from "react";
import iconVectors from "../assets/footer.png";
import Insta from "../assets/Instagram.png";
import twitter from "../assets/Twitter.png";
import facbook from "../assets/Facebook.png";

import "./Footer.css";

function Footer() {
  return (
    <div className="container-Footer">
      <div className="footer">
        <div className="fisrt-div">
          <div className="imag-logo">
            <img src={iconVectors} className="footerLogo" alt="icon" />
            
          </div>
          <span className="lasles">
            LaslesVPN is a private virtual network that has unique features and
            has high security.
          </span>
          <div className="social-media">
            
            <img src={facbook} alt="facbook" />
            <img src={twitter} alt="twitter" />
            <img src={Insta} alt="Insta" />
            
          </div>
          <span className="copy-write">©2020LaslesVPN</span>
        </div>

        <div className="list-div">
          <div className="first-list">
            <h3 className="FooterDisc">Product</h3>
          </div>
          <div className="list-footer">
            <li>Download </li>
            <li>Pricing</li>
            <li>Locations</li>
            <li>Server</li>
            <li>Countries</li>
            <li>Blog</li>
          </div>

          <div className="first-list">
            <h3 className="FooterDisc">Engage</h3>
          </div>
          <div className="list-footer">
            <li>LaslesVPN ?</li>
            <li>FAQ</li>
            <li>Tutorials</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </div>

          <div className="first-list">
            <h3 className="FooterDisc">Engage</h3>
          </div>
          <div className="list-footer">
            <li>Affiliate</li>
            <li>Become Partner</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;