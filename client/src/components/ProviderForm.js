import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


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
                backgroundCheck: "pending",
                zipCodes: ['00000']
            };

            axios({
                url: '/api/providers',
                method: 'POST',
                data: payload
            })
            .then(() => {
                console.log('Data sent successfully');
                this.resetProviderInputs();
                this.props.history.push('/success');
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
              <>
              <div className="providerForm">
              <div id="providerHeading" className="u-full-width test">
                <h5>Become a Provider</h5>
                <p>We require our providers to submit to background check, provide proof of insurance and demonstrate adherence to COVID-19 precautions for home care workers. If you would like to be added to our database of providers please fill out the form</p>
              </div>

                
          <form onSubmit={this.submit}>
            
              <div className="test" id="nameDiv">
                <label htmlFor="companyName">Company Name</label>
                <input
                  className="u-full-width"
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
                  className="u-full-width"
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
                  className="u-full-width"
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
                  <label htmlFor="radius">Select the distance from your zip code that you provide services</label>
                <select
                  name="radius"
                  value={this.state.radius.selectValue}
                  onChange={this.handleChange}
                  id="radius">
                    <option value="10">10 Miles</option>
                    <option value="20">20 Miles</option>
                    <option value="30">30 Miles</option>
                    <option value="40">40 Miles</option>
                    <option value="50">50 Miles</option>
                </select>
              </div>


              <div className="test" id="submitDiv">
                  <button className="submitBtn" type="submit">Submit</button>
              </div>

          </form>
          </div>
            </>
            )
        }
    
}

export default withRouter(ProviderForm);