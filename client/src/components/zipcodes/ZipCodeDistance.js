import React, { Component } from 'react';
import axios from 'axios';

class ZipCodeDistance extends Component {

    

    state = {
        distance: '',
        zipOne: '',
        zipTwo: ''
    };

    

    componentDidMount = () => {
        this.getDistance();
    }

    getDistance = () => {

        const API_KEY = process.env.REACT_APP_API_KEY;
        

        const zipOne = '90210';
        const zipTwo = '06281';

        axios.get(`https://api.zip-codes.com/ZipCodesAPI.svc/1.0/CalculateDistance/ByZip?fromzipcode=${zipOne}&tozipcode=${zipTwo}&key=${API_KEY}`)
        .then((response) => {
            const distance = response.data.DistanceInMiles;
            this.setState({distance});
            this.setState({zipOne});
            this.setState({zipTwo});

            console.log(response.data);
            console.log(distance);
            console.log(zipOne);
            console.log(zipTwo);
   

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
                <p>{this.state.zipOne} is {this.state.distance} miles from {this.state.zipTwo} </p>
                
            </div>
            </>
        )
    }
}

export default ZipCodeDistance;