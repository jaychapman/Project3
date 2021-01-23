import React, {Component} from 'react';
import Nav from '../components/Nav';
import ReviewResults from '../components/ReviewResults';

class Reviews extends Component {
    render(){
        return(
            <>
           <Nav />
            <div className="container">
                <h4>here are the reviews</h4>
                <div className="reviewsContainer">
                
                    <ReviewResults />
                </div>
            </div>
            </>
        )
    }
}

export default Reviews;