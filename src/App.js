import React from'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import CharacterIntro from './CharacterIntro'



function App(){
    return(
        <>
        <Router>
            <Switch>
                <Route path='/' exact component ={Home}/>
                <Route path='/CharacterIntro' component ={CharacterIntro}/>
                
            </Switch>
        </Router>
        </>
    );
}
export default App;