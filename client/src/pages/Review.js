import React, { Component } from 'react';
import ReviewForm from '../components/ReviewForm';
import ReviewResults from '../components/ReviewResults';

class Review extends Component {
    render(){
        return(
            <>
            <h1>Review Page</h1>
            <ReviewForm />
            <ReviewResults />
            </>
        )
    }
}

export default Review;