import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component{
    render(){
        return(
            <main>
                <div className="container">
                    <div className="mainContent">
                        <div>
                        <p id="cta">We help you find exeptional home health care for your loved ones</p>
                        <Link to="/customer">
                        <button id="ctaBtn">Find Care Providers in Your Area</button>
                        </Link>
                        </div>               
                    </div>
                </div>
            </main>
        )
    }

}

export default Landing;