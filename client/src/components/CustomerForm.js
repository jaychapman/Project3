import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


class CustomerForm extends Component{


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
                let zip = this.state.zip;
                console.log(zip);
                this.resetCustomerInputs();
                this.props.history.push('/customerresults');
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
            console.log(this.props);
           
            return(

              <div className="providerForm">
              <div id="providerHeading" className="u-full-width test">
                <h5>Find Home Health Providers</h5>
                <p>Fill out the form below to get a list of pre-screened home health providers that service your area</p>
              </div>
                
            <form onSubmit={this.submit} className="customerForm">

    
              <div className="test" id="nameDiv">
                <label htmlFor="name">Name</label>
                <input
                  className="u-full-width"
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
                  className="u-full-width"
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
                  className="u-full-width"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                  placeholder="format: 123-456-7890"
                  id="phone"
                  type="tel"
                  pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                />
              </div>

              <div className="test" id="zipDiv">
                <label htmlFor="zip">Zip Code</label>
                <input
                  className="u-full-width"
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
                  className="u-full-width"
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
                <label htmlFor="when">How soon?</label>
                <select
                  className="u-full-width"
                  name="howSoon"
                  value={this.state.howSoon}
                  onChange={this.handleChange}
                  id="when">
                    <option value="Not Sure">Not Sure</option>
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
            </div>
            )
        }
    
}

export default withRouter(CustomerForm);