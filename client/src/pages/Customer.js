import React, { Component } from 'react';
import CustomerForm from '../components/CustomerForm';



class Customer extends Component {

   

    render() {

        
        return(
            <>
            <h1>Customer Page</h1>
                <CustomerForm />
            </>
        )
    }
}

export default Customer;