import React, { Component } from 'react';
import Nav from '../components/Nav';

class Provider extends Component {
    render() {


        console.log(this.props.match);
        return (
           
            <div>
                 <Nav />
                <h1>hello</h1>
                
            </div>
        )
    }
}

export default Provider;