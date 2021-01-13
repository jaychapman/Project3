import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component{
    render(){
        return(
            <>
            <main>
                <div className="container">
                    <div className="mainContent">
                        <div>
                        <p id="cta">We help you find exeptional home health care for your loved ones</p>
                        <Link to="/customer">
                        <button id="ctaBtn">Find Care Providers in Your Area</button>
                        </Link>
                        </div>               
                    </div>
                </div>
            </main>

<section class="contentContainer">
<div id="aboutUs">
  <h2>About Us</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis provident beatae fugit itaque quos. Facere vel sit ut delectus soluta voluptatem voluptatibus, id voluptatum sapiente neque mollitia odio fugiat impedit totam deserunt repudiandae illum modi error necessitatibus eligendi distinctio. Nostrum!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsum commodi perspiciatis totam. Impedit quos facilis repellat sequi libero aut eum nam voluptatibus aliquam consequuntur iure quaerat, voluptatum enim pariatur aperiam, ducimus non cumque architecto alias quasi, iusto nostrum sed? Dicta debitis quos inventore accusantium, quia mollitia ducimus autem molestias reiciendis quasi hic veritatis sit ipsam expedita vitae quae minus distinctio sunt. Odio, veniam modi fugiat blanditiis doloribus placeat ratione fugit vitae non tenetur. Nam veritatis quisquam ipsum. Animi, tenetur fugiat odio quas fuga commodi temporibus, eligendi odit doloremque ducimus consequatur. Delectus id non aperiam optio odio. Temporibus hic enim mollitia tempora, magni sit quae reprehenderit laudantium odit dolorem, facilis pariatur debitis quo natus perferendis, tempore soluta! Similique, doloremque ut.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ratione eveniet ducimus, eaque totam voluptatibus iusto consequuntur laboriosam. Consequatur reiciendis dolorem, iste numquam dolor libero?</p>
</div>
<div id="reviews">
  <h2>Reviews</h2>
  <h3>Jimmy</h3>
  <p>Nice Job!</p>
</div>
<div id="aboutUs">
  <h2>Contact Us</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis provident beatae fugit itaque quos. Facere vel sit ut delectus soluta voluptatem voluptatibus, id voluptatum sapiente neque mollitia odio fugiat impedit totam deserunt repudiandae illum modi error necessitatibus eligendi distinctio. Nostrum!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsum commodi perspiciatis totam. Impedit quos facilis repellat sequi libero aut eum nam voluptatibus aliquam consequuntur iure quaerat, voluptatum enim pariatur aperiam, ducimus non cumque architecto alias quasi, iusto nostrum sed? Dicta debitis quos inventore accusantium, quia mollitia ducimus autem molestias reiciendis quasi hic veritatis sit ipsam expedita vitae quae minus distinctio sunt. Odio, veniam modi fugiat blanditiis doloribus placeat ratione fugit vitae non tenetur. Nam veritatis quisquam ipsum. Animi, tenetur fugiat odio quas fuga commodi temporibus, eligendi odit doloremque ducimus consequatur. Delectus id non aperiam optio odio. Temporibus hic enim mollitia tempora, magni sit quae reprehenderit laudantium odit dolorem, facilis pariatur debitis quo natus perferendis, tempore soluta! Similique, doloremque ut.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ratione eveniet ducimus, eaque totam voluptatibus iusto consequuntur laboriosam. Consequatur reiciendis dolorem, iste numquam dolor libero?</p>
</div>


</section>
</>
        )
    }

}

export default Landing;