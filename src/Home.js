import React from 'react';
import './Home.css';
import Footer from './Footer.js';

function Home() {
  
  return (
    <div>
      <div className="Home">
        <div>
        <img alt="map" src={require('./images/Welcome-District-6-Logo-Final.png')}  height="20%" width='20%'/>
        <div className="Map">
          <img alt="map" src={require('./images/District_6_map.png')} height="100%" width="100%"></img>
        </div>
        <div className="Button">
          <h4>Select A Guide</h4>
          <div className="character-card">

             <a href="./CharacterIntro"><img src={require('./images/Oom_Saki.png')} alt="Oom Saki" onClick="./CharacterIntro"  target='_blank'/></a>
              <a href="./CharacterIntro"><img src={require('./images/Phumla.png')} alt="Phumla" onClick="./CharacterIntro"  target='_blank'/></a>
    
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
