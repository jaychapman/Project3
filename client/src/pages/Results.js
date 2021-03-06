import React, { Component } from 'react';
import Nav from '../components/Nav';
import axios from 'axios';

class Results extends Component {

    state = {
        providers: []
    };

    componentDidMount = () => {
        this.getProviders();
    }

    getProviders = () => {
        axios.get('/api/providers')
        .then((response) => {
            const providers = response.data;
            this.setState({providers});
            console.log(providers);
            console.log(providers.length);
        })
        .catch(() => {
            console.log('error');
        })
    }

    displayProviders = (providers) => {

        if(!providers.length) return null;

        return providers.map((provider, index) => {

            // TODO - turn the providers into cards - improve styling and add star rating
            return <div key={index}>
                    <h5>{provider.companyName}</h5>
                    <h6>{provider.phone}</h6>
                    <h6>{provider.email}</h6>
                    
                    <hr/>
                </div>
        });
    };


    render(){
        return(
            <>
            <Nav />
            <div className="container">
                <h4>Here are your results</h4>
                <p>These companies have been screened and provide home care services in your area</p>
                <div className="provResults">
                    {this.displayProviders(this.state.providers)}
                </div>
            </div>
            </>
        )
    }
}

export default Results;