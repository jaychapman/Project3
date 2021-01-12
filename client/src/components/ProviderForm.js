import React, { Component } from 'react';
import axios from 'axios';


class ProviderForm extends Component{
  

        state = {
            companyName: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            zip: "",
            radius: "",
            insured: "",
            backgroundCheck: ""
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
                companyName: this.state.companyName,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                phone: this.state.phone,
                zip: this.state.zip,
                radius: this.state.radius,
                insured: this.state.insured,
                backgroundCheck: this.state.backgroundCheck
            };

            axios({
                url: '/api/providers',
                method: 'POST',
                data: payload
            })
            .then(() => {
                console.log('Data sent successfully');
                this.resetProviderInputs();
            })
            .catch(() => {
                console.log('error');
            });

        };

        resetProviderInputs = () => {
            this.setState({
                companyName: "",
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                zip: "",
                radius: "",
                insured: "",
                backgroundCheck: ""
            });
        }


        render(){

            console.log('state', this.state);
            return(
                
            <form onSubmit={this.submit} className="providerForm">

              <div className="test">
                 <h2>Fill Out This Form to Become a Provider</h2>
              </div>
    
              <div className="test" id="nameDiv">
                <label htmlFor="companyName">Company Name</label>
                <input
                  name="companyName"
                  value={this.state.companyName}
                  onChange={this.handleChange}
                  placeholder="Company Name"
                  id="companyName"
                  type="text" 
                />
              </div>

              <div className="test" id="nameDiv">
                <label htmlFor="firstName">First Name</label>
                <input
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  placeholder="First Name"
                  id="firstName"
                  type="text" 
                />
              </div>

              <div className="test" id="nameDiv">
                <label htmlFor="lastName">Last Name</label>
                <input
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  placeholder="Last Name"
                  id="lastName"
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
                  <label htmlFor="radius">Select the distance from your zip code that you provide services</label>
                <select
                  name="radius"
                  value={this.state.radius}
                  onChange={this.handleChange}
                  id="radius">
                    <option value="10">10 Miles</option>
                    <option value="20">20 Miles</option>
                    <option value="30">30 Miles</option>
                    <option value="40">40 Miles</option>
                    <option value="50">50 Miles</option>
                </select>
              </div>

              <div className="test" id="zipDiv">
                <label htmlFor="insured">Are you insured?</label>
                <input typeof="checkbox"
                  name="insured"
                  value={this.state.insured}
                  onChange={this.handleChange}
                  id="insured"
                />
              </div>

              <div className="test" id="zipDiv">
                <label htmlFor="backgroundCheck">Will you agree to background check?</label>
                <input typeof="checkbox"
                  name="backgroundCheck"
                  value={this.state.backgroundCheck}
                  onChange={this.handleChange}
                  id="backgroundCheck"
                />
              </div>

              <div className="test" id="submitDiv">
                  <button className="submitBtn" type="submit">Submit</button>
              </div>

            </form>
            
            )
        }
    
}

export default ProviderForm;