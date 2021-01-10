import React, { Component } from 'react';
import axios from 'axios';


class CustomerForm extends Component{
    // constructor(){
    //     super();


    // }    


        state = {
            name: "",
            email: "",
            phone: "",
            zip: "",
            whoNeeds: "",
            howSoon: ""
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
                email: this.state.email,
                phone: this.state.phone,
                zip: this.state.zip,
                whoNeeds: this.state.whoNeeds,
                howSoon: this.state.howSoon
            };

            axios({
                url: '/api/customers',
                method: 'POST',
                data: payload
            })
            .then(() => {
                console.log('Data sent successfully');
                this.resetCustomerInputs();
            })
            .catch(() => {
                console.log('error');
            });

        };

        resetCustomerInputs = () => {
            this.setState({
                name: "",
                email: "",
                phone: "",
                zip: "",
                whoNeeds: "",
                howSoon: ""
            });
        }


        render(){

            console.log('state', this.state);
            return(
                
            <form onSubmit={this.submit} className="customerForm">

              <div className="test">
                 <h2>Just a few questions...</h2>
              </div>
    
              <div className="test" id="nameDiv">
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="Name"
                  id="name"
                  type="text" 
                />
              </div>

              <div className="test" id="emailDiv">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Email"
                  id="email"
                  type="text"
                />
              </div>

              <div className="test" id="phoneDiv">
                <label htmlFor="phone">Phone</label>
                <input
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                  placeholder="Phone"
                  id="phone"
                  type="text"
                />
              </div>

              <div className="test" id="zipDiv">
                <label htmlFor="zip">Zip Code</label>
                <input
                  name="zip"
                  value={this.state.zip}
                  onChange={this.handleChange}
                  placeholder="Zip Code"
                  id="zip"
                  type="text"
                />
              </div>

              <div className="test" id="whoDiv">
                  <label htmlFor="who">Who needs home care?</label>
                <select
                  name="whoNeeds"
                  value={this.state.whoNeeds}
                  onChange={this.handleChange}
                  id="who">
                    <option value="Parent">Parent</option>
                    <option value="Spouse">Spouse/Partner</option>
                    <option value="Myself">Myself</option>
                    <option value="Friend">Friend</option>
                    <option value="Other">Other</option>
                </select>
              </div>

              <div className="test" id="whenDiv">
                <label htmlFor="when">How soon do you need home care?</label>
                <select
                  name="howSoon"
                  value={this.state.howSoon}
                  onChange={this.handleChange}
                  id="when">
                    <option value="Now">Now</option>
                    <option value="2weeks">2 Weeks</option>
                    <option value="1-3months">1-3 Months</option>
                    <option value="3-6 months">3-6 Months</option>
                    <option value="browsing">Just Browsing</option>
                </select>
              </div>

              <div className="test" id="submitDiv">
                  <button className="submitBtn" type="submit">Submit</button>
              </div>

            </form>
            
            )
        }
    
}

export default CustomerForm;