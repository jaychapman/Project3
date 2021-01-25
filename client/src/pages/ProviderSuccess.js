import React, { Component } from 'react';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';

class ProviderSuccess extends Component {
    render() {
        return (
            <>
            <Nav />
            <div>
                <h2>update successful</h2>
                <Link to="/admin">Return to Admin Page</Link>
            </div>
            </>
        )
    }
}

export default ProviderSuccess;
