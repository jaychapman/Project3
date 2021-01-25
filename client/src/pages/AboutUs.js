import React, { Component } from 'react';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';


class AboutUs extends Component {
    render(){
        return(
            <>
           <Nav />
           <div className="container">
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis commodi illum, a, veniam nemo nam asperiores, eum quisquam culpa amet facilis tenetur ratione architecto natus vitae. Veniam cumque tempore accusamus veritatis voluptatum itaque ullam. Praesentium, voluptates ipsum voluptate nemo exercitationem ducimus voluptatem earum? Porro fuga adipisci perferendis obcaecati saepe.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae distinctio eum. Fuga animi sapiente quis placeat assumenda magnam natus dolore consequatur aliquid eligendi distinctio aut quo eius officia, ipsam similique sequi voluptatem cumque molestiae tempora eaque sint hic dolorem. Accusamus tempora reiciendis eos voluptates voluptas consectetur ex facere, at minus saepe ipsa dolorem autem laborum asperiores laudantium illo aliquid eum mollitia voluptatum accusantium nisi! Esse voluptates doloremque odit doloribus quo consequatur mollitia?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus placeat ut, dolorum iste quae quidem veniam, aliquam numquam neque vitae incidunt iusto! Sequi dolorum facere nulla odio eveniet commodi recusandae ipsam maiores, fuga adipisci, reprehenderit similique non totam minima natus.</p>
            </div>
            <br/>
            <p><Link to="/customer"><button>Find Providers Now</button></Link></p>
            </>
        )
        
    }
}

export default AboutUs;