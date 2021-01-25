import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class About extends Component {
    render() {
        return(
            <>
            <h5>Find Trusted Home Care Providers</h5>
            <p>We provide you peace of mind when selecting home health care providers. All providers listed on our website have passed a background check, had business license and insurance verified and have reviewed COVID-19 precautions set forth by tringthe CDC. Lorem ipsum dolor sit amet, consectetur adipiscing elit ommodo sed egestas egestas fringilla phasellus faucibus. Duis convallis convallis tellus id interdum velit laoreet id. Volutpat commodo sed egestas egestas fringilla</p>

            <p><Link to="/customer"><button>Get Started!</button></Link></p>

            </>

        )
    }
}

export default About;