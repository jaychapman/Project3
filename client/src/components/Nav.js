import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    render(){
        return(
            <div className="navContainer">    
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
            </div>
        )
    }
}

export default Nav;