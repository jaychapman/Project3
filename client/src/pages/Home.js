import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import About from '../components/About';
import Join from "../components/Join";
import logo from './images/logo2.png';


class Home extends Component {
    render() {
        return(
            <div className="home">
                
                    <div>
                    <div id="logoContainer"><img id="logo" src={logo} alt="logo2"/></div>
                    </div>
               
            
            <div id="homeContainer" className="row">
                <div id="about" className="six columns">
                    <i className="handHeartIcon"><FontAwesomeIcon icon="hand-holding-heart" /></i>
                     <About />
                </div>
                <div className="six columns">
                    <i className="chartLineIcon"><FontAwesomeIcon icon="chart-line" /></i>
                     <Join />
                </div>
            </div>
          
            

            
            </div>
        )
    }
}

export default Home;