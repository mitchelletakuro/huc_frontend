import React from 'react';
import './components-styles/Home.css';
import Footer from './Footer.js';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div>
      <div className="Home">
        <div>
          <img alt="map" src="images/Welcome-District-6-Logo-Final.png" height="20%" width='20%' />
          <div className="Map">
            <img alt="map" src="images/District_6_map.png" height="100%" width="100%"></img>
          </div>
          <div className="Button">
            <h4>Select A Guide</h4>
            <div className="character-card">
              <Link to='/OomCharacterIntro'>
                <img src="images/Oom_Saki.png" alt="Oom Saki" />
              </Link>
              <Link to='/PhunmlaCharacterIntro'>
                <img src="images/Phumla.png" alt="Phumla" />
              </Link>
            </div>


          </div>
        </div>
      </div>
      <div className="footer-container">
        <Footer /></div>

    </div>
  );


}

export default Home;
