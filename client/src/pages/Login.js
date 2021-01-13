import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    render(){
        return(
            <div id="loginPage" className="container">
                
                <h1>Login Page</h1>
                <Link to="/provider" >
                    <h3>sign up</h3>
                </Link>
                <hr/>
                <p>or</p>
                <hr/>
                <Link to="/provider" >
                    <h3>login</h3>
                </Link>
            </div>

            
        )
    }
}

export default Login;