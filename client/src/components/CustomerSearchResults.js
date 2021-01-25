import React, { Component } from 'react';
import Nav from '../components/Nav';
import axios from 'axios';




class CustomerSearchResults extends Component {

    

    state = {
        providers: [],
        customers: [],
        zipCodes: [],
        customerName: '',
        customerZip: ''
    };

    componentDidMount = () => {
        this.getProviders();
        // this.getCustomers();
        
    }

    //start function here
    
        getProviders = () => {
            axios.get('/api/providers')
            .then((response) => {
                const providers = response.data;
                this.setState({providers});
                
                
                
                console.log(providers);
                console.log(providers.length);
                console.log(providers[0]);

                const zipCodes = providers.map((provider) => {
                    return provider.zipCodes
                })

                this.setState ({zipCodes});
                

                //TESTING

                
                    
                        axios.get('/api/customers')
                        .then((response) => {
                            const customers = response.data;
                            this.setState({customers});

                            const customerName = customers[0].name;
                            this.setState({customerName})
                            const customerZip = customers[0].zip;
                            this.setState({customerZip});
                        
                            console.log(customerZip);
                            console.log(zipCodes);

                            // for (const provider of providers) {
                            //     if (provider.zipCodes === customerZip) {
                            //       return provider
                            //     }
                            //   }

                            
                            if (zipCodes.indexOf(customerZip) > -1) {
                                console.log('this is working')
                            } else {
                                console.log('Oooops')
                            }


                            
                        })
                        .catch(() => {
                            console.log('error');
                        })
                    

                //END TESTING
                
            })
            .catch(() => {
                console.log('error');
            })
        }

        // getCustomers = () => {
        //     axios.get('/api/customers')
        //     .then((response) => {
        //         const customers = response.data;
        //         this.setState({customers});

        //         const customerName = customers[0].name;
        //         this.setState({customerName})
        //         const customerZip = customers[0].zip;
        //         this.setState({customerZip});
               
        //         console.log(customerZip);
                
        //     })
        //     .catch(() => {
        //         console.log('error');
        //     })
        // }



       
    // end function here    

    displayProviders = (providers) => {

    

        if(!providers.length) return <h2>Sorry, none of our providers service your area</h2>;

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
                <h4>Good news {this.state.customerName}!</h4>
                <p>These companies have been screened and provide home care services for {this.state.customerZip}</p>
                <div className="provResults">
                    {this.displayProviders(this.state.providers)}
                </div>
            </div>
            </>
        )
    }
}

export default CustomerSearchResults;