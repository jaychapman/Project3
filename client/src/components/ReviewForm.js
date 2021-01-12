import React, { Component } from 'react';
import axios from 'axios';


class ReviewForm extends Component{


        state = {
            name: "",
            rating: "",
            review: ""
        };

        handleChange = (event) => {
            const target = event.target;
            const name = target.name;
            const value = target.value;

            this.setState({
                [name]: value
            });

        };

        submit = (event) => {
            event.preventDefault();

            const payload = {
                name: this.state.name,
                rating: this.state.rating,
                review: this.state.review
            };

            axios({
                url: '/api/reviews',
                method: 'POST',
                data: payload
            })
            .then(() => {
                console.log('Data sent successfully');
                this.resetReviewInputs();
            })
            .catch(() => {
                console.log('error');
            });

        };

        resetReviewInputs = () => {
            this.setState({
                name: "",
                rating: "",
                review: ""
            });
        }


        render(){

            console.log('state', this.state);
            return(
                
            <form onSubmit={this.submit} className="customerForm">

              <div className="test">
                 <h2>Leave a Review</h2>
              </div>
    
              <div className="test" id="nameDiv">
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="First Name"
                  id="name"
                  type="text" 
                />
              </div>


              <div className="test" id="whoDiv">
                  <label htmlFor="rating">Rate your review</label>
                <select
                  name="rating"
                  value={this.state.rating}
                  onChange={this.handleChange}
                  id="rating">
                    <option value="1">1/5</option>
                    <option value="2">2/5</option>
                    <option value="3">3/5</option>
                    <option value="4">4/5</option>
                    <option value="5">5/5</option>
                </select>
              </div>

              <div className="test" id="whenDiv">
                <label htmlFor="review">Tell us how we're doing</label>
                <textarea
                  name="review"
                  rows="7"
                  cols="50"
                  value={this.state.review}
                  onChange={this.handleChange}
                  id="review">
                </textarea>
              </div>

              <div className="test" id="submitDiv">
                  <button className="submitBtn" type="submit">Submit</button>
              </div>

            </form>
            
            )
        }
    
}

export default ReviewForm;