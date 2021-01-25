import React, {Component} from 'react';
import Nav from '../components/Nav';


class Contact extends Component {
    render(){
        return(
            <>
                <Nav />
                <div className="container">
                <h4>Contact Us</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis commodi illum, a, veniam nemo nam asperiores, eum quisquam culpa amet facilis tenetur ratione architecto natus vitae. Veniam cumque tempore accusamus veritatis voluptatum itaque ullam. Praesentium, voluptates ipsum voluptate nemo exercitationem ducimus voluptatem earum? Porro fuga adipisci perferendis obcaecati saepe.</p>
                
                
                <br/>
                <div className="contactContainer">
                        <form>
                            <div className="row">
                                <div className="six columns">
                                <label for="exampleEmailInput">Your email</label>
                                <input className="u-full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput" />
                                </div>
                                <div className="six columns">
                                <label for="exampleRecipientInput">Reason for contacting</label>
                                <select className="u-full-width" id="exampleRecipientInput">
                                    <option value="Option 1">Questions</option>
                                    <option value="Option 2">Comments</option>
                                    <option value="Option 3">Other</option>
                                </select>
                                </div>
                            </div>
                            <label for="exampleMessage">Message</label>
                            <textarea className="u-full-width" placeholder="Hello …" id="exampleMessage"></textarea>
         
                            <input className="button" type="submit" value="Submit" />
                        </form>    
                    </div>      
                </div>
            </>
        )
    }
}

export default Contact;