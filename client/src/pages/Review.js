import React, { Component } from 'react';
import ReviewForm from '../components/ReviewForm';
import Nav from '../components/Nav';

class Review extends Component {
    render(){
        return(
            <>
            <Nav />
            <div className="container">
            <h1>Review Page</h1>
            <ReviewForm />
            </div>
            </>
        )
    }
}

export default Review;