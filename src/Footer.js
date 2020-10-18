import React from 'react';
import './Footer.css';

function Footer() {
    return (
      <div className="Footer"id="footer">
          
        <p>Developed by:
            <img src={require('./images/Afikreatives_Logo.png')}  alt="Logo"/> </p>
           
      </div>
    );
  }
  
  export default Footer;
  