import React, { Component } from 'react';
import Nav from '../components/Nav';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';

class UpdateProvider extends Component {
    
        state = {
            provider: [],
            providerZip: '',
            zipCodes: [],
            radius: '',
            backgroundCheck: ''
        };
    
        componentDidMount = () => {
            this.getProvider();
           
        }
    
        getProvider = () => {
            const provId = this.props.match.params.providerId;
            axios.get(`/api/providers/${provId}`)
            .then((response) => {
                const provider = response.data;
                const providerZip = provider.zip;
                const radius = provider.radius;
                this.setState({provider});
                console.log(provider);
                console.log(provider.firstName);
                this.setState({providerZip});
                console.log(providerZip);
                this.setState({radius});
                console.log(radius);
            })
            .catch(() => {
                console.log('error');
            })
        }

        getDistance = () => {

            
            this.setState({backgroundCheck: 'active'});

            const API_KEY = process.env.REACT_APP_API_KEY;
    
            const providerZip = this.state.provider.zip;
            const distance = this.state.provider.radius;
            // const providerZip = '06053';
    
            axios.get(`https://api.zip-codes.com/ZipCodesAPI.svc/1.0/FindZipCodesInRadius?zipcode=${providerZip}&minimumradius=0&maximumradius=${distance}&country=ALL&key=${API_KEY}`)
            .then((response) => {
                
                // All Data Returned saved into locations
                const locations = response.data.DataList;
                console.log(locations);
    
                // List of zip codes extracted from data
                const zipCodes = locations.map((location) => {
                    return location.Code
                })
    
                // Logs entire list of zip codes
                console.log(zipCodes);
    
                this.setState({zipCodes});
                console.log(`provider zip codes: ${zipCodes}`);

                
                console.log(this.props);
                console.log(this.props.match.params.providerId);


            // This nested axios request used update zip code radius and backgroundCheck status for provider in database    
            axios.put(`/api/providers/${this.props.match.params.providerId}`,{
                backgroundCheck: 'active',
                zipCodes: zipCodes
            })
            .then((response) => {
                console.log('success');
                this.props.history.push('/providersuccess');
            })
            .catch(() => {
                console.log('failure')
            })

                   
            })
            .catch(() => {
                console.log("That didn't work");
            })

        }

        render() {

        return (         
            <>
            <Nav />
            <div className="container">
                <div id="providerUpdateCard">
                    <h4>{this.state.provider.companyName}</h4>
                    <h5>{this.state.provider.firstName} {this.state.provider.lastName}</h5>
                    <h5>Status: {this.state.provider.backgroundCheck}</h5>
                    <button onClick={this.getDistance}>Update Provider Status</button>
                    <div><Link to="/admin">Cancel</Link></div>
                    
                </div>
            </div>
            </>
        )
    }
}

export default withRouter(UpdateProvider);

