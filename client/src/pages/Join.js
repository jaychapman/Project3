import React, { Component } from 'react';
import ProviderForm from '../components/ProviderForm';
import Nav from '../components/Nav';


class Join extends Component {
    render(){
        return(
            <>
           <Nav />
            <div className="container">
            <ProviderForm />
            </div>
            </>
            
        )
    }
}

export default Join;