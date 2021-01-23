import React, {Component} from 'react';
import Nav from '../components/Nav';

class ProverThankYou extends Component {
    render() {
        return(
            <>
            <Nav />
            <div className="container">
                <div id="ProvThankyou">
                    <h4>Your Request has been Submitted</h4>
                    <p>Thanks for your interest in our program. Your request has been sent and we will follow up with you to verify your information. Once all information is collected you will be added to our list of verified providers and your company will appear in the results list for customers matching your location parameters.</p>
                </div>
            </div>
            </>
        )
    }
}

export default ProverThankYou;