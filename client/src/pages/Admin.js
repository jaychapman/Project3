import React, { Component } from 'react';
import Nav from '../components/Nav';
import AdminResults from '../components/AdminResults';

class Admin extends Component {
    render(){
        return(
            <> 
            <Nav />
            <div className="container">
               <h4>Administrator Page</h4>
               <br/>
               <AdminResults />
            </div>
            </>
        )
    }
}

export default Admin;