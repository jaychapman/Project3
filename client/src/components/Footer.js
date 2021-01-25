import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="container">
                <p><Link to="/admin">Admin Login</Link></p>
            </div>
        )
    }
}


export default Footer;