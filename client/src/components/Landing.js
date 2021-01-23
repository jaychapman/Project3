import React, { Component } from 'react';
import Home from '../pages/Home';
import { Link } from 'react-router-dom';


// import logo from './images/logo.png';




class Landing extends Component {
    render() {
        return (
            <>
                <div className="landing">
                    <div className="container">
                        <div id="menuContainer" className="container">
                            <div id="menu" className="row">
                                <Link to='/'>
                                <div id="home" className="three columns">
                                    HOME
                                </div>
                                </Link>
                                <Link to='/about'>
                                <div  id="about" className="three columns">
                                    ABOUT US
                                </div>
                                </Link>
                                <Link to='/contact'>
                                <div id="contact" className="three columns">
                                    CONTACT
                                </div>
                                </Link>
                                <Link to='/join'>
                                <div id="providers" className="three columns">
                                    PROVIDERS
                                </div>
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div id="tagline"><h3>We help you find the best homecare workers to help care for your loved ones</h3></div>
                        </div>
                        <div>
                            <button id="ctaBtn">Learn More...</button>
                        </div>
                    </div>               
                </div>
                                <div className="container">
                                <Home />
                                
                            
                            </div>
            </>
        )
    }
}

export default Landing;