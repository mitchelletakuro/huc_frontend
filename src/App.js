import React from'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import OomCharacterIntro from './components/OomCharacterIntro'
import PhunmlaCharacterIntro from './components/PhunmlaCharacterIntro'



function App(){
    return(
        <>
        <Router>
            <Switch>
                <Route path='/' exact component ={Home}/>
                <Route path='/OomCharacterIntro' component ={OomCharacterIntro}/>
                <Route path='/PhunmlaCharacterIntro' component ={PhunmlaCharacterIntro}/>
            </Switch>
        </Router>
        </>
    );
}
export default App;