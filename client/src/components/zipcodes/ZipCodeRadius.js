import React, { Component } from 'react';
import axios from 'axios';

class zipCodeRadius extends Component {

    

    state = {
        zipList: [],
        customerZip: '',
        providerZip: '',
        distance: ''
    };

    

    componentDidMount = () => {
        this.getDistance();
    }

    getDistance = () => {

        const API_KEY = process.env.REACT_APP_API_KEY;

        const customerZip = '06074';
        const distance = '20';
        // const providerZip = '06053';

        axios.get(`https://api.zip-codes.com/ZipCodesAPI.svc/1.0/FindZipCodesInRadius?zipcode=${customerZip}&minimumradius=0&maximumradius=${distance}&country=ALL&key=${API_KEY}`)
        .then((response) => {
            
            // All Data Returned saved into locations
            const locations = response.data.DataList;
            console.log(locations);

            // List of zip codes extracted from data
            const zipList = locations.map((location) => {
                return location.Code
            })

            // Logs entire list of zip codes
            console.log(zipList);

            // Returns selected zip code
            console.log(zipList[104])

            
            // Logic for finding provider zip codes that match customer zip

            // fake array of provider zips
            const providers = [
                {
                    name: 'Company 1',
                    zip: '06105'
                },
                {
                    name: 'Company 1',
                    zip: '06070'
                },
                {
                    name: 'Company 1',
                    zip: '90210'
                }
            ]

            const providerZips = providers.map((provider) => {
                return provider.zip
            })
            
            console.log(providerZips);

        
             // spread operator to combine arrays
            const allZips = [...zipList, ...providerZips]

            console.log(allZips);

        

            //Return matching values
            // !!! matchingZips returns all zips within desired radius !!!

            const matchingZips = allZips.filter((item, index) => allZips.indexOf(item) !== index);

            console.log(matchingZips);

            const providerMatch = [...matchingZips, ...providers]

            console.log(providerMatch);
            
            // const matchingProviders = providerMatch.filter((item, index) => providerMatch.indexOf(item) !== index);

            // console.log(matchingProviders);
            
            
       
            
            
    

            this.setState({customerZip});
            console.log(`Customer zip code: ${customerZip}`);
            console.log(this.state.customerZip);

   

        })
        .catch(() => {
            console.log("That didn't work");
        })
    }




    render(){
        return(
            <>
            <h1>ZipCode</h1>
            <div>
           
                {this.matchingZips}
            </div>
            </>
        )
    }
}

export default zipCodeRadius;