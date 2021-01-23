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

        

        return providers.map((provider, _id) => {


  
            // TODO - turn the providers into cards - improve styling and add star rating
            return <tr key={provider._id}>
                    <th>{provider.companyName}</th>
                    <th>{provider.firstName}  {provider.lastName}</th>
                    <th>{provider.phone}</th>
                    <th>{provider.backgroundCheck}</th>
                    <th>X</th>
                </tr>
        });
    
    };


    render(){
        return(
            <>
            <table className="u-full-width">
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Contact</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody className="adminResults">
                    {this.displayProviders(this.state.providers)}
                </tbody>
            </table>
            </>
        )
    }
}

export default Results;