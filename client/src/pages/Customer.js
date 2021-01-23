import React, { Component } from 'react';
import CustomerForm from '../components/CustomerForm';
import Nav from '../components/Nav';




class Customer extends Component {

   

    render() {

        
        return(
            <>
                <Nav />
                <div className="container">
                <CustomerForm />
                </div>
            </>
        )
    }
}

export default Customer;