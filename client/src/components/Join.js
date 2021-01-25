import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Join extends Component {
    render() {
        return(
            <>
            <h5>Become a Trusted Home Care Provider</h5>
            <p>We provide you peace of mind when selecting home health care providers. All providers listed on our website have passed a background check, had business license and insurance verified and have reviewed pre-screened home health providers that 
           Lorem ipsum dolor sit amet, consectetur adipiscing elit ommodo sed egestas egestas fringilla phasellus faucibus. Duis convallis convallis tellus id </p>

            <p><Link to="/join"><button>Join out Network!</button></Link></p>

            </>
        )
    }
}

export default Join;