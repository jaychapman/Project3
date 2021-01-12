import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CovidInfo extends Component {
  
    render(){
        return(
            <div id="covidWarning">
            <div className="header">
                <Link to="/covid">
                    <i className="warning icon"></i>  <> Important information regarding COVID-19</> 
                </Link>
            </div>
        </div>
        )
    }
}

export default CovidInfo;