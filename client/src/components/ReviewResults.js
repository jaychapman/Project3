import React, { Component } from 'react';
import axios from 'axios';

class ReviewResults extends Component {

    state = {
        reviews: []
    };

    componentDidMount = () => {
        this.getReviews();
    }

    getReviews = () => {
        axios.get('/api/reviews')
        .then((response) => {
            const reviews = response.data;
            this.setState({reviews});
            console.log(reviews);
            console.log(reviews.length);
        })
        .catch(() => {
            console.log('error');
        })
    }

    displayReviews = (reviews) => {

        if(!reviews.length) return null;

        return reviews.map((review, index) => {

            // can turn the reviews into cards - improve styling and add star rating
            return <div key={index}>
                    <h5>{review.name}</h5>
                    <h6>{review.rating} out of 5 stars</h6>
                    <p>{review.review}</p>
                    <hr/>
                </div>
        });
    };


    render(){
        return(
            <>
            <div className="container">
                {this.displayReviews(this.state.reviews)}
            </div>
            </>
        )
    }
}

export default ReviewResults;