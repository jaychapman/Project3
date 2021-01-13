import React, { Component } from 'react';
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

            // can turn the providers into cards - improve styling and add star rating
            return <div key={index}>
                    <h3>{provider.companyName}</h3>
                    <h5>{provider.phone} out of 5 stars</h5>
                    <h5>{provider.email} out of 5 stars</h5>
                    
                    <hr/>
                </div>
        });
    };


    render(){
        return(
            <>
            <h1>Here are your results</h1>
            <div className="container">
                {this.displayProviders(this.state.providers)}
            </div>
            </>
        )
    }
}

export default Results;