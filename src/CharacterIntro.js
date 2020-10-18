import React from 'react';
import './CharacterIntro.css';
import Footer from './Footer.js';


function CharacterIntro(props){

    return (
        <div>
          <div className="CharacterIntro">
            <div className="character-box">
                <h3>Hi there! My name is</h3>
                <h1>{props.characterName}</h1>
            <div className="Map">
              <img alt="map" src={require('./images/District_6_map.png')} height="100%" width="100%"></img>
            </div>
                <div className="characterImg">
                <a href="./CharacterIntro"><img src={require('./images/Oom_Saki.png')} alt="Oom Saki" onClick="./OomSakiIntro"  target='_blank'/></a>  
            
            </div>
         
          </div>

          <div className="character-story-box">
              <div className="story-outline">
                <p id="intro-story-outline">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              </div>

              <div className="button-controls">
                  <h3>Select an option to proceed</h3>
                  <div id="btns">
                      <button id="btn1">Button 1</button>
                      <button id="btn">Button 2</button>
                      <button id="btn">Button 3</button>
                  </div>

              </div>


          </div>
          </div>
          <div className="footer-container">
            <Footer /></div>
          
        </div>
       
    );
}

export default CharacterIntro;